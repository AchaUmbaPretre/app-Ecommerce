import { Router } from "express";
import { addDelete, addUser, getAllRecover, getRecover, getStats } from "../controllers/addUser.js";
import {verifyTokenEtAUthorisation}  from "./verifyToken.js";

const router = Router();


router.put('/:id', verifyTokenEtAUthorisation, addUser)
router.delete('/find/:id', verifyTokenEtAUthorisation, addDelete )
router.get('/find/:id', verifyTokenEtAUthorisation, getRecover )
router.get('/', verifyTokenEtAUthorisation, getAllRecover )
router.get('/stats', verifyTokenEtAUthorisation, getStats )

export default router;