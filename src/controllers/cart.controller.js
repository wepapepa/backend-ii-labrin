import Controllers from "./class.controller.js";
import CartService from '../services/cart.services.js';
import { createResponse } from "../utils.js";

const cartService = new CartService();

export default class CartController extends Controllers{
    constructor() {
        super(cartService)
    }

    addProdToCart = async (req, res, next) => {

        try {
            const { cart } = req.user;
            const { idProd } = req.params;
            const newProdToUserCart = await this.service.addProdToCart(cart, idProd);

            if (!newProdToUserCart) createResponse(req, res, 404, { msg: "Error al añadir producto al carrito :( "});
            else createResponse(res, 200, newProdToUserCart);
        } catch (error) {
            next(error);
        }
    };

    removeProdToCart = async (req, res, next) => {
        try {
            const { idCart } = req.params;
            const { idProd } = req.params;
            const delProdToUserCart = await this.service.removeProdToCart(idCart, idProd);
            if (!delProdToUserCart) createResponse(res, 404, { msg: "Error al borrar producto del carrito :( "});
            else createResponse(res, 200, { msg: `Producto ${idProd} borrado del carrito :D`});
        } catch (error) {
            next(error);
        }
    };

    updateProdQuantityToCart = async (req, res, next) => {
        try {
            const { idCart } = req.params;
            const { idProd } = req.params;
            const { quantity } = req.body;
            const updateProdQuantity = await this.service.updateProdQuantityToCart(idCart, idProd, quantity);

            if (!updateProdQuantity) createResponse(res, 404, { msg: "Error al actualizar la cantidad del carrito :( "});
            else createResponse(res, 200, updateProdQuantity);
        } catch (error) {
            next(error);
        }
    };

    clearCart = async (req, res, next) => {

        try {
            const { idCart } = req.params;
            const clearCart = await this.service.clearCart(idCart);
            
            if (!clearCart) createResponse(res, 404, { msg: "Error al borrar el carrito :( "});
            else createResponse(res, 200, clearCart);
        } catch (error) {   
            next(error);
        }
    };
}