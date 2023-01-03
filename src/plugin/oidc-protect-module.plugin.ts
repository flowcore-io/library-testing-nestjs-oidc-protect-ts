import {INestApplicationBuilderPlugin, NestApplicationBuilder,} from "@jbiskur/nestjs-test-utilities";
import {Injectable, Module, OnModuleInit} from "@nestjs/common";
import {DiscoveryService, ModulesContainer} from "@nestjs/core";
import {OidcProtectService} from "@flowcore/nestjs-oidc-protect/dist/library/oidc-protect/oidc-protect.service";

export class OidcProtectModulePlugin implements INestApplicationBuilderPlugin {
  run(appBuilder: NestApplicationBuilder): void {
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
          guard.instance.canActivate = () => true;
        });
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
