# Node BackgroundRickroll

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/bg-rickroll.svg)](https://badge.fury.io/js/bg-rickroll)

Just app that I made for fun. It plays the rickroll song in the background of your computer by default.

## Usage

1. Install package`npm install -g bg-rickroll`
2. Run application
   - Visible mode `npx bg-rickroll`
   - Background mode(WIP) `npm run start:background`
3. Enjoy

## Stop application

if you run the application in background mode, you can stop it by pm2 package or simply by running `npm run stop`

## Parameters

You can also pass command line arguments to the package:

```
npx bg-rickroll --url=https://www.youtube.com/watch?v=dQw4w9WgXcQ --min=60 --max=120
```

| Parameter | Description                      | Default                                                                            |
| --------- | -------------------------------- | ---------------------------------------------------------------------------------- |
| --url     | URL to open                      | https://www.youtube.com/watch?v=dQw4w9WgXcQ Never Gonna Give You Up by Rick Astley |
| --min     | Minimum interval time in seconds | 60                                                                                 |
| --max     | Maximum interval time in seconds | 120                                                                                |

## License

MIT License
