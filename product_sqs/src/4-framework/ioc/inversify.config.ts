import { container } from "@shared/ioc/container";
import { operatorModule } from "./operatorModule";
import { repositoryModule } from "./repositoryModule";
import { useCaseModule } from "./useCaseModule";

container.load(repositoryModule);
container.load(useCaseModule);
container.load(operatorModule);
