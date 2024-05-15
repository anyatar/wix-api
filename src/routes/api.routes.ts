import { Router } from "express";
import apiController from "../controllers/api.controller";
import { welcome } from "../controllers/home.controller";

const router = Router();
const controller = new apiController();

router.get("/", welcome);

router.post("/appointments", controller.setup);
router.get("/appointments", controller.getAppointments);

export default router;
