import { Router } from "express";
import { CounterController } from "../controller/CounterController";

const router = Router();

router.post("/counter", new CounterController().handle);

export { router };
