# Contributing

## Developing icon sets

Creating icons for OpenCanopy is actually quite simple. Once you've ensured that you've created your desired images according to [OpenCore's recommended specification](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/Configuration.pdf), you can use OpenCore's bundled [icnspack]()(Under Utilities/icnspack) to convert .png's to supported .icons:

```sh
# Example usage
./icnspack icon-x1.png icon-x2.png
```

Additionally, chris1111 has created a great tool for users to create their own icon sets:

* [OpenCanopy-Generator](https://github.com/chris1111/OpenCanopy-Generator)

## Contributing a media set 

To contribute a media set to OpenCanopy gallery, we recommend taking a peak at how our site is handled [on Github](https://github.com/dortania/OpenCanopy-Gallery). A basic technical break down is as follows:

* Pages are written in Markdown
  * Recommend looking at some [Markdown cheat sheets](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) to get a better idea
* Pages are defined by the [config.js](https://github.com/dortania/OpenCanopy-Gallery/blob/main/.vuepress/config.js) file
  * Basic understanding of JavaScript recommended to understand how pages are handled
* Website is both generated and hosted on Github
  * Therefore all changes and adjustments must be done through Pull Requests
  * Backend is built with [VuePress](https://vuepress.vuejs.org)

Once you have a basic graps of how the repository works, we recommend users fork and clone the guide locally with a [Git Client](https://desktop.github.com) for easy of use.

To build sites locally, you'll need to run the following workflow (with [NPM](https://www.npmjs.com) installed):

```sh
# Install required dependancies
npm install
# Build Locally
npm run build
```

Once you're done making changes, you can create a [pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) on our guide and have our team review the changes.

