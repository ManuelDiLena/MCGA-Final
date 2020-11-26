import {Router} from "express"
const router = Router();

import * as UsersCtrl from './users.controller'

router.post("/Users", UsersCtrl.createUser);
router.delete("/Users/:id", UsersCtrl.deleteUser);
router.put("/Users/:id", UsersCtrl.updateUser);
router.get("/Users/:id", UsersCtrl.getUser);
router.get("/Users", UsersCtrl.getsUser);


export default router;