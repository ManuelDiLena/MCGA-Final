import {Router} from "express"
const router = Router();

import * as ArticuloCtrl from './articulo.controller'

router.post("/articulo", ArticuloCtrl.createArticulo);
router.delete("/articulo/:id", ArticuloCtrl.deleteArticulo);
router.put("/articulo/:id", ArticuloCtrl.updateArticulo);
router.get("/articulo/:id", ArticuloCtrl.getArticulo);
router.get("/articulo", ArticuloCtrl.getsArticulo);


export default router;