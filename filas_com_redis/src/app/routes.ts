import { Router } from "express";
import { SumController } from "./controller/sumContorller";

const router = Router();

router.post("/sum", new SumController().handle);

export default router;
