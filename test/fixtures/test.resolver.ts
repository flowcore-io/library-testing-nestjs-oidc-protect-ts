import {Query, Resolver} from "@nestjs/graphql";
import {Public, RealmRoles} from "@flowcore/nestjs-oidc-protect";
import {ResourceRoles} from "@flowcore/nestjs-oidc-protect/dist/library/decorator/resource-roles.decorator";

@Resolver()
export class TestResolver {
  @Query(() => String, {
    name: "test",
  })
  public test(): string {
    return "test";
  }

  @Public()
  @Query(() => String, {name: "public"})
  public public(): string {
    return "public";
  }

  @RealmRoles(["some-realm-role"])
  @Query(() => String, {name: "realmRole"})
  public realmRole(): string {
    return "realmRole";
  }

  @ResourceRoles(["some-client-role"])
  @Query(() => String, {name: "resourceRole"})
  public resourceRole(): string {
    return "resourceRole";
  }
}
