import { Router } from "express";
import { addProduct, productAllGet, productDelete, productGet, productPut } from "../controllers/addProduct.js";
import {verifyTokenEtAUthorisation} from "./verifyToken.js";

const router = Router();


router.post('/', verifyTokenEtAUthorisation, addProduct )
router.put('/:id', verifyTokenEtAUthorisation, productPut )
router.delete('/:id', verifyTokenEtAUthorisation, productDelete )
router.get('/find/:id', productGet )
router.get('/', productAllGet )


export default router;