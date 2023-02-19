import { Router } from "express";
import { addOrder, getRecoverOrder, orderDelete, orderUpdate } from "../controllers/addOrder.js";
import { verifyToken, verifyTokenEtAUthorisation } from "./verifyToken.js";

const router = Router();


router.post('/',verifyToken, addOrder)
router.put('/:id', verifyTokenEtAUthorisation, orderUpdate )
router.delete('/:id', verifyTokenEtAUthorisation, orderDelete )
router.get('/find/:id', verifyTokenEtAUthorisation, getRecoverOrder )
router.get('/', verifyTokenEtAUthorisation, getAllRecoverOrde )

export default router;