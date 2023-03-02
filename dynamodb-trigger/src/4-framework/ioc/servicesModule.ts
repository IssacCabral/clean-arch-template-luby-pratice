import {
  IHasherService,
  IHasherServiceToken,
} from "@business/services/hasher/iHasher";
import {
  IUniqueIdentifierService,
  IUniqueIdentifierServiceToken,
} from "@business/services/uniqueIdentifier/iUniqueIdentifier";
import { HasherService } from "@framework/services/hahser/hasherService";
import { UniqueIdentifierService } from "@framework/services/uniqueIdentifier/uniqueIdentifierService";
import { ContainerModule, interfaces } from "inversify";

export const servicesModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<IHasherService>(IHasherServiceToken).to(HasherService);
  bind<IUniqueIdentifierService>(IUniqueIdentifierServiceToken).to(
    UniqueIdentifierService
  );
});
