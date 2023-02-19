import { Router } from "express";
import { addUser } from "../controllers/addUser.js";

const router = Router();


router.get('/usertest', addUser)


export default router;