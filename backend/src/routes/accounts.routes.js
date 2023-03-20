import { Router } from "express";
import { getAccounts } from "../controllers/accounts.controller.js";

const router = Router();

router.get("/accounts", getAccounts);

export default router;
