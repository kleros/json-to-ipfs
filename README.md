<p align="center">
  <b style="font-size: 32px;">JSON to IPFS</b>
</p>

<p align="center">
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="JavaScript Style Guide"></a>
  <a href="https://conventionalcommits.org"><img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Conventional Commits"></a>
  <a href="http://commitizen.github.io/cz-cli/"><img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitizen Friendly"></a>
  <a href="https://app.netlify.com/sites/ecstatic-jackson-749344/deploys"><img src="https://api.netlify.com/api/v1/badges/ff0eb1e7-e70c-4319-9e5c-f8532b053900/deploy-status"></a>
</p>

Tool to quickly upload JSON files to ipfs

## Usage

1.  Clone this repo;
2.  Duplicate `.env.example` and rename it to `.env`. Fill the IPFS_GATEWAY variables.
3.  Paste the JSON file to be uploaded on the root and name it `input.json`.
4.  Run `yarn` to install dependencies and then `yarn start` to upload.

## Other Scripts

- `yarn format` - Lint, fix and prettify all the project.
- `yarn run cz` - Run commitizen.