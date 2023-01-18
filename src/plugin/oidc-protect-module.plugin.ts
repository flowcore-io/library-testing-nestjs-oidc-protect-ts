import {INestApplicationBuilderPlugin, NestApplicationBuilder,} from "@jbiskur/nestjs-test-utilities";
import {ContextType, ExecutionContext, Injectable, Module, OnModuleInit} from "@nestjs/common";
import {DiscoveryService, ModulesContainer} from "@nestjs/core";
import {OidcProtectService} from "@flowcore/nestjs-oidc-protect/dist/library/oidc-protect/oidc-protect.service";

let gqlExecutionContext: any = null;

export class OidcProtectModulePlugin implements INestApplicationBuilderPlugin {
  private authenticatedPayload: any = {
    "sub": "deaab2a8-8377-4e05-9ffc-a175b494406d",
    "name": "Rice Wuckert",
    "given_name": "Rice",
    "family_name": "Wuckert",
    "preferred_username": "Gabriel92",
  };

  usingAuthenticatedPayload(payload: any): this {
    this.authenticatedPayload = payload;
    return this;
  }

  run(appBuilder: NestApplicationBuilder): void {
    const payload = this.authenticatedPayload;

    @Injectable()
    class GuardOverrideService implements OnModuleInit {
      constructor(private readonly container: ModulesContainer) {
      }

      onModuleInit(): any {
        const discoveryService = new DiscoveryService(this.container);

        const providers = discoveryService.getProviders();

        const guards = providers.filter((provider) =>
          ["AuthGuard", "RoleGuard", "ResourceGuard"].includes(
            provider?.instance?.constructor?.name,
          ),
        );

        guards.forEach((guard) => {
          guard.instance.canActivate = async (context: ExecutionContext) => {
            if (guard.instance.constructor.name === "AuthGuard") {
              const request = await this.getRequest(context);
              request.authenticatedUser = payload;
            }

            return true;
          };
        });
      }

      public async getRequest(context: ExecutionContext) {
        if (context.getType<ContextType | "graphql">() === "graphql") {
          try {
            if (!gqlExecutionContext) {
              gqlExecutionContext = (await import("@nestjs/graphql"))
                .GqlExecutionContext;
            }
            return gqlExecutionContext.create(context).getContext().req;
          } catch (err) {
            throw new Error(
              "context is GraphQL but @nestjs/graphql package is installed",
            );
          }
        }
        return context.switchToHttp().getRequest();
      }
    }

    @Module({
      imports: [],
      providers: [GuardOverrideService],
    })
    class GuardOverrideModule {
    }

    @Injectable()
    class OidcProtectModuleSpec extends OidcProtectService {
      override async onApplicationBootstrap() {
        return;
      }
    }

    appBuilder.withTestModule((builder) =>
      builder.withModule(
        GuardOverrideModule,
      ),
    );

    appBuilder.withOverrideProvider(OidcProtectService, (overrideWith) => overrideWith.useClass(OidcProtectModuleSpec))
  }
}
