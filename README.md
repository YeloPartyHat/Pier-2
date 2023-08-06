# Ocean Pier
__A NextJS Raspberry Pi Home Server__

![Sample image of Pier's homepage](./docs/sample.png)

A home media center made for use with Raspberry Pi 4 Model B (though should work on other devices)
Connect to your Pier server by going to it's IP address in the browser of your choice. For example in Google Chrome's address bar enter the server's ip address (example: `192.168.8.77/`) or simply go to the device's name which should be by default `raspberrypi/`.

__Advantages over Pier Legacy__
- Requires only 2 dependencies
- Much easier to install
- More efficient runtime
- More responsive interface

## Dependencies:
- NodeJS V16.10+
- NPM V8+

# Developers
All information below is only necessary for those wanting to contribute to, or edit the project.

## Requirements
- NVM ([Windows](https://github.com/coreybutler/nvm-windows) | [Everything Else](https://github.com/nvm-sh/nvm))

## Required VSCode Extensions
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

## Naming Conventions
All time units are stored in milliseconds (ms) unless otherwise specified.

## API

The API is handled by [Next](./docs/packages/README.md#Next) but is built out using a [services](./docs/api/README.md#services-directory) architecture.

Please read the [API readme](./docs/api/README.md) before interacting with or building out the API or any services.

## Packages
All packages added should have their reason stated on the [packages readme](./docs/packages/README.md). This project should have minimal dependencies and modifications to the `package.json`.

Read more here: [packages readme!](./docs/packages/README.md)

# Licenses
- [Ion-Icons](./public/ion-icons/LICENSE) (MIT License)