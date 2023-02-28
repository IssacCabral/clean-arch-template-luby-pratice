import "../ioc/inversify.config";
import { Router } from "express";
import { CreateRoleController } from "./controllers/createRoleController";
import { CreateUserController } from "./controllers/createUserController";

const router = Router();

// role endpoints
router.post("/roles", new CreateRoleController().handle);
router.post("/users", new CreateUserController().handle);

export default router;
