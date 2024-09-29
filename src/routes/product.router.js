import { Router } from "express";
import ProductController from "../controllers/product.controllers.js";
import { checkAdmin } from "../middlewares/checkAdmin.js";
import { passportCall } from "../passpprt/passportCall.js";

const controller = new ProductController()

const router = Router();

router.get('/', [passportCall('current')], controller.getAll);
router.get('/:id', [passportCall('current')], controller.getById);

Router.post('/', [passportCall('current'), checkAdmin], controller.create);
Router.put('/:id', [passportCall('current'), checkAdmin], controller.update);
Router.delete('/:id', [passportCall('current'), checkAdmin], controller.delete);

export default router;