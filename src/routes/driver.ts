import { Router } from "express";
import { deleteDriver, getDriver, getDrivers, postDriver, putDriver } from "../controllers/driver";


const router = Router();

router.get('/',getDrivers)
router.get('/:id', getDriver)
router.delete('/:id', deleteDriver)
router.post('/', postDriver)
router.put('/:id', putDriver)

export default router;