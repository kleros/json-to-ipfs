if (!process.env.IPFS_GATEWAY) {
  console.error(
    'Please set the environment variable IPFS_GATEWAY to a valid IPFS endpoint.'
  )
  throw new Error('IPFS Gateway not set.')
}

const fetch = require('node-fetch')
const Archon = require('@kleros/archon')
const TextEncoder = require('text-encoder-lite').TextEncoderLite
const file = require('./input.json')

/**
 * Send file to an IPFS node.
 * @param {string} fileName - The name that will be used to store the file. This is useful to preserve extension type.
 * @param {ArrayBuffer} data - The raw data from the file to upload.
 * @returns {object} IPFS response. Includes the hash and path of the stored item.
 */
const ipfsPublish = async (fileName, data) => {
  const buffer = Buffer.from(data)

  return new Promise((resolve, reject) => {
    fetch(`${process.env.IPFS_GATEWAY}/add`, {
      method: 'POST',
      body: JSON.stringify({
        fileName,
        buffer
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(success => resolve(success.data))
      .catch(err => reject(err))
  })
}

;(async () => {
  const fileData = new TextEncoder('utf-8').encode(JSON.stringify(file))
  /* eslint-disable-next-line unicorn/number-literal-case */
  const fileMultihash = Archon.utils.multihashFile(file, 0x1b)

  console.info('Uploading to ipfs...')
  const ipfsObject = await ipfsPublish(fileMultihash, fileData)
  const ipfsPath = `/ipfs/${ipfsObject[1].hash + ipfsObject[0].path}`

  console.info(`File available at ${ipfsPath}`)
})()
