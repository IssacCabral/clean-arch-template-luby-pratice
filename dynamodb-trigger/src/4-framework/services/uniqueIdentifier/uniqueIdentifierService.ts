import { IUniqueIdentifierService } from "@business/services/uniqueIdentifier/iUniqueIdentifier";
import { injectable } from "inversify";
import { v4 } from "uuid";

@injectable()
export class UniqueIdentifierService implements IUniqueIdentifierService {
  create(): string {
    return v4();
  }
}
