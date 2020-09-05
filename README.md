# `OffeneGesetze.de` [![Build Status](https://travis-ci.com/okfde/offenegesetze.de.svg?branch=master)](https://travis-ci.com/okfde/offenegesetze.de) [![GitHub license](https://img.shields.io/github/license/okfde/offenegesetze.de.svg)](https://github.com/okfde/offenegesetze.de/blob/master/LICENSE)

The Federal Law Gazettes are the central documents of German democracy. To pass a law, it has to be published in the Law Gazette. At [OffeneGesetze.de](https://offenegesetze.de/) they are now freely accessible for the first time. On the portal we provide the documents free of charge and for free re-use. [More information in our blog post.](https://okfn.de/blog/2018/12/opening-laws-in-germany/)

In this repository you can find the frontend based on [Next.js](https://github.com/zeit/next.js/) and [Bulma](https://github.com/jgthms/bulma). The backend is [in a different repository](https://github.com/okfde/api.offenegesetze.de).

## Development

```bash
git clone https://github.com/okfde/offenegesetze.de
cd offenegesetze.de
npm install
npm start
```

Please make sure to format your code with [Prettier](https://prettier.io/). Either integrate it into your text editor or run `npm run pretty` before comitting.

Don't update any dependencies.

## Contributing

If you have a **question**, found a **bug** or want to propose a new **feature**, have a look at the [issues page](https://github.com/okfde/offenegesetze.de/issues).

**Pull requests** are especially welcomed when they fix bugs or improve the code quality.

## Authors

- [Johannes Filter](https://github.com/jfilter)
- [Stefan Wehrmeyer](https://github.com/stefanw)

## License

MIT
