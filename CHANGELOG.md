# Changelog

## [2.0.0](https://github.com/flowcore-io/library-testing-nestjs-oidc-protect-ts/compare/v1.2.0...v2.0.0) (2023-05-26)


### ⚠ BREAKING CHANGES

* updated core dependencies, this requires an update for services using this package

### Features

* updated nestjs-oidc-project package and nestjs core ([03ee2c7](https://github.com/flowcore-io/library-testing-nestjs-oidc-protect-ts/commit/03ee2c7b89c6cd3c036df523effd206cde27e199))


### Bug Fixes

* moved the payload check further up the run method execution stack ([3b04767](https://github.com/flowcore-io/library-testing-nestjs-oidc-protect-ts/commit/3b0476767d1709e09a00971ad1696f8e9809b12a))
* when forced unauthenticated is true, authenticatedUser is set to undefined ([9aa594d](https://github.com/flowcore-io/library-testing-nestjs-oidc-protect-ts/commit/9aa594d388e3ac08a41205c23b98dea6ec2167ff))

## [1.2.0](https://github.com/flowcore-io/library-testing-nestjs-oidc-protect-ts/compare/v1.1.0...v1.2.0) (2023-05-26)


### Features

* added ability to force unauthenticated user when testing ([d10bec8](https://github.com/flowcore-io/library-testing-nestjs-oidc-protect-ts/commit/d10bec8c91fccbc1e1319922cb14e068037f0ce1))

## [1.1.0](https://github.com/flowcore-io/library-testing-nestjs-oidc-protect-ts/compare/v1.0.0...v1.1.0) (2023-01-18)


### Features

* added authenticated user decorator support ([e2c1e4e](https://github.com/flowcore-io/library-testing-nestjs-oidc-protect-ts/commit/e2c1e4e8670d5afc3a9fd9c60f7bdb6fef253f3f))

## 1.0.0 (2023-01-03)


### Features

* initial version with overrides for guards and removing check for wellKnown endpoint ([9e93e12](https://github.com/flowcore-io/library-testing-nestjs-oidc-protect-ts/commit/9e93e12d5643e84622d435cabce58b15d0909f5f))
* initial version with overrides for guards and removing check for wellKnown endpoint ([4b899a0](https://github.com/flowcore-io/library-testing-nestjs-oidc-protect-ts/commit/4b899a05bdb41827812c4fc470f8532a84b4a3e3))
* initial version with overrides for guards and removing check for wellKnown endpoint ([efa93f1](https://github.com/flowcore-io/library-testing-nestjs-oidc-protect-ts/commit/efa93f1316effdc1e69d9806462eb7851f150ec4))

## [2.3.0](https://github.com/flowcore-io/library-flowcore-microservice-ts/compare/v2.2.0...v2.3.0) (2022-12-21)


### Features

* added observability module with tracer ([25839ae](https://github.com/flowcore-io/library-flowcore-microservice-ts/commit/25839ae5ce41fcae4a8f35d548bec513784489c4))


### Bug Fixes

* added missing observability export ([1f280d4](https://github.com/flowcore-io/library-flowcore-microservice-ts/commit/1f280d48cc2ad47616b3ee53003e7ed50c60af39))
* fixed missing metrics export ([d71124b](https://github.com/flowcore-io/library-flowcore-microservice-ts/commit/d71124b4f95583669a3790150f89f41175bb385e))

## [2.2.0](https://github.com/flowcore-io/library-flowcore-microservice-ts/compare/v2.1.0...v2.2.0) (2022-12-21)


### Features

* added metrics module ([386d129](https://github.com/flowcore-io/library-flowcore-microservice-ts/commit/386d129dcf5bbe1428e359df5313bc983ea268a4))

## [2.1.0](https://github.com/flowcore-io/library-flowcore-microservice-ts/compare/v2.0.2...v2.1.0) (2022-12-21)


### Features

* removed health controller added export of HealthService ([bf46df6](https://github.com/flowcore-io/library-flowcore-microservice-ts/commit/bf46df6e36a2f8b70cc666663999450474bcf2d9))

## [2.0.2](https://github.com/flowcore-io/library-flowcore-microservice-ts/compare/v2.0.1...v2.0.2) (2022-12-20)


### Bug Fixes

* fixed build script typo ([fbb57e3](https://github.com/flowcore-io/library-flowcore-microservice-ts/commit/fbb57e3db946f0c77ee209971cbd0da9c21a77d0))

## [2.0.1](https://github.com/flowcore-io/library-flowcore-microservice-ts/compare/v2.0.0...v2.0.1) (2022-12-20)


### Bug Fixes

* added missing nestjs cli dev dependency ([84cd538](https://github.com/flowcore-io/library-flowcore-microservice-ts/commit/84cd538df5d5a022db820c2b95944de5315448e4))

## [2.0.0](https://github.com/flowcore-io/library-flowcore-microservice-ts/compare/v1.0.3...v2.0.0) (2022-12-20)


### ⚠ BREAKING CHANGES

* switched back to single entry point due to NestJS and Vite/Esbuild incompatibilities.

### Features

* added Health check module ([0015bd6](https://github.com/flowcore-io/library-flowcore-microservice-ts/commit/0015bd6fbc355c7bde6be970a170010a9abf628b))
* changed from vite and esbuild back to webpack ([aa5fb12](https://github.com/flowcore-io/library-flowcore-microservice-ts/commit/aa5fb129f9674bdbc922952e85697c4a6e1679d9))

## [1.0.3](https://github.com/flowcore-io/library-flowcore-microservice-ts/compare/v1.0.2...v1.0.3) (2022-12-19)


### Bug Fixes

* added registry to setup node ([c544b3d](https://github.com/flowcore-io/library-flowcore-microservice-ts/commit/c544b3dde7d958576320eb51211492a8ad267413))

## [1.0.2](https://github.com/flowcore-io/library-flowcore-microservice-ts/compare/v1.0.1...v1.0.2) (2022-12-19)


### Bug Fixes

* added registry to setup node ([57de47b](https://github.com/flowcore-io/library-flowcore-microservice-ts/commit/57de47bd8144378f89f8251fca63f68b380a8f94))

## [1.0.1](https://github.com/flowcore-io/library-flowcore-microservice-ts/compare/v1.0.0...v1.0.1) (2022-12-19)


### Bug Fixes

* changed to npm publish ([f436dbb](https://github.com/flowcore-io/library-flowcore-microservice-ts/commit/f436dbb0dff2292435873a1e2625425b55e0de96))

## 1.0.0 (2022-12-19)


### Features

* initial version with config and logger ([6693f78](https://github.com/flowcore-io/library-flowcore-microservice-ts/commit/6693f78431287f0e9371d399c933454a66e46af0))


### Bug Fixes

* added checkout to release please step for name extraction ([1be66d3](https://github.com/flowcore-io/library-flowcore-microservice-ts/commit/1be66d35cfd7b827a93c890bc6c0334d892578f7))
* moved workflows to the correct place ([de73abc](https://github.com/flowcore-io/library-flowcore-microservice-ts/commit/de73abccbd490dac32d170c2e8e16db341f0f3e7))
