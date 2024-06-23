import { Router } from "express";
import apiMainController from "../controllers/api.main.controller.js";

const apiRoute = Router();

apiRoute.get("/", apiMainController);

export default apiRoute;
