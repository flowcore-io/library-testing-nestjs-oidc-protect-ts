import {NestApplicationBuilder} from "@jbiskur/nestjs-test-utilities";
import {INestApplication, Module} from "@nestjs/common";
import {ConfigFactory, ConfigModule} from "@flowcore/microservice";
import {OidcProtectConfigurationSchema, OidcProtectModuleBuilder} from "@flowcore/nestjs-oidc-protect";
import path from "path";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {GraphQLModule} from "@nestjs/graphql";
import {TestResolver} from "./fixtures/test.resolver";
import {AuthGuardBuilder} from "@flowcore/nestjs-oidc-protect/dist/library/builder/auth-guard.builder";
import {DocumentNode, print} from "graphql";
import supertest from "supertest";
import gql from "graphql-tag";
import each from "jest-each";
import {LoggerModulePlugin} from "@flowcore/testing-microservice";
import {OidcProtectModulePlugin} from "../src";

const config = ConfigModule.forRoot(
  new ConfigFactory().withSchema(OidcProtectConfigurationSchema),
);

@Module({
  imports: [
    config,
    new OidcProtectModuleBuilder().withConfig(config).build(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.join(__dirname, "test.schema.gql"),
    })
  ],
  providers: [
    TestResolver,
    ...new AuthGuardBuilder()
      .build(),
  ],
})
class TestModule {
}

async function queryGraphQLEndpoint(
  app: INestApplication,
  query: DocumentNode,
  token?: string,
) {
  const sut = supertest(app.getHttpServer()).post("/graphql");

  if (token) {
    sut.set("Authorization", `Bearer ${token}`);
  }

  return sut.send({
    query: print(query),
  });
}


describe("Oidc Protect Module", () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await new NestApplicationBuilder()
      .withTestModule((testModule) => testModule.withModule(TestModule))
      .with(LoggerModulePlugin)
      .with(OidcProtectModulePlugin)
      .build();
  });

    each([
        {
          name: "guarded",
            query: gql`
                query {
                    test
                }
            `,
          expected: {test: "test"},
        },
        {
          name: "public",
            query: gql`
                query {
                    public
                }
            `,
          expected: {public: "public"},
        },
        {
          name: "realmRole",
            query: gql`
                query {
                    realmRole
                }
            `,
          expected: {realmRole: "realmRole"},
        },
        {
          name: "resourceRole",
            query: gql`
                query {
                    resourceRole
                }
            `,
          expected: {resourceRole: "resourceRole"},
        },
    ]).it("should work to call $name endpoint without token", async ({query, expected}) => {
      const response = await queryGraphQLEndpoint(
        app,
        query,
      );

      expect(
        response.body.data
      ).toEqual(expected);
    });

  afterEach(async () => {
    await app.close();
  });
});