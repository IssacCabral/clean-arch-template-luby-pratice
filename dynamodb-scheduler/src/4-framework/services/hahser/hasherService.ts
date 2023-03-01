import { IHasherService } from "@business/services/hasher/iHasher";
import { injectable } from "inversify";
import bcrypt from "bcrypt";

@injectable()
export class HasherService implements IHasherService {
  async create(s: string): Promise<string> {
    const salt = 12;

    return await bcrypt.hash(s, salt);
  }
  compare(s: string, h: string): Promise<boolean> {
    return bcrypt.compare(s, h);
  }
}
