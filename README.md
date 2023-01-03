![Build](https://github.com/flowcore-io/library-testing-nestjs-oidc-protect-ts/actions/workflows/publish.yml/badge.svg)

# Testing Nestjs-oidc-protect

A NestJS OidcProtect plugin for
the [@jbiskur/nestjs-test-utilities](https://www.npmjs.com/package/@jbiskur/nestjs-test-utilities) testing library. To
facilitate mocking
successfull
calls to protected routes during testing.

## Installation

install with npm:

```bash
npm install @flowcore/testing-nestjs-oidc-protect @flowcore/nestjs-oidc-protect
```

or yarn:

```bash
yarn add @flowcore/testing-nestjs-oidc-protect @flowcore/nestjs-oidc-protect
```

## Usage

To use the library with the `@jbiskur/nestjs-test-utilities` testing library, you need to invoke it using `with`:

```typescript
import {OidcProtectModulePlugin} from '@flowcore/testing-nestjs-oidc-protect';

app = await new NestApplicationBuilder()
  .withTestModule((testModule) => testModule.withModule(TestModule))
  // ... other plugins
  .with(OidcProtectModulePlugin)
  // ... other plugins
  .build();
```

##

Development

  ```bash
yarn install
```

or with npm:

```bash
npm install
```