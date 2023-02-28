import "../ioc/inversify.config";
import { Router } from "express";
import { CreateRoleController } from "./controllers/createRoleController";

const router = Router();

// role endpoints
router.post("/roles", new CreateRoleController().handle);

export default router;
