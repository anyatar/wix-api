import { Router } from "express";
import apiController from "../controllers/api.controller";
import { welcome } from "../controllers/home.controller";

const router = Router();
const controller = new apiController();

router.get("/", welcome);

router.get("/tickets", controller.getTickets);
router.get("/ticket:title", controller.getTicketByTitle);
router.post("/tickets", controller.getTicketByTimeOrSearch);

export default router;
