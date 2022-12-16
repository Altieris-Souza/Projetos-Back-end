import { Router } from "express";
import { createSessionController } from "../../controllers/session/createSessionController";

const sessionRoutes = Router();

sessionRoutes.post("", createSessionController);

export default sessionRoutes;
