import { Router } from "express";
import { resolverProblema } from "../controllers/geminiController.js";

export const geminiRoutes = Router()

geminiRoutes.post("/", resolverProblema)