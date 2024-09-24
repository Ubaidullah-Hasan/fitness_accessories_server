import { Request, Response } from 'express';
import { ProductModel } from '../products/products.model';
import { CartItemModel } from './cart.model';

// Add product to cart
export const addToCart = async (req: Request, res: Response) => {
    const { productId, quantity } = req.body;

    try {
        const product = await ProductModel.findById({ _id: productId });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Check if the requested quantity exceeds available stock
        if (quantity > product.stock) {
            return res.status(400).json({ message: 'Quantity exceeds available stock' });
        }

        // Find if the product is already in the cart
        const existingCartItem = await CartItemModel.findOne({ productId });

        let result;
        if (existingCartItem) {
            const newQuantity = existingCartItem.quantity + quantity;
            if (newQuantity > product.stock) {
                return res.status(400).json({ message: 'Cannot add more than available stock' });
            }

            existingCartItem.quantity = newQuantity;
            await existingCartItem.save();

        } else {
            // Create a new cart item
            const newCartItem = new CartItemModel({
                productId,
                name: product.name,
                price: product.price,
                quantity,
                stock: product.stock,
                image: product.image,
                brand: product.brand,
            });
            await newCartItem.save();
        }

        res.status(200).json({
            message: 'Product added to cart successfully',
            data: result
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

const getAllCart = async (req: Request, res: Response) => {
    try {

        const carts = await CartItemModel.find()
            .populate({
                path: 'productId',
                match: { stock: { $gt: 0 } }
            });
            
        const filteredCarts = carts.filter(cartItem => cartItem.productId);
        const totalItemCount = filteredCarts.reduce((total, cartItem) => total + cartItem.quantity, 0);

        res.status(200).json({
            carts: filteredCarts,
            totalCartsItem: totalItemCount
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}


const changeCartQuantity = async (req: Request, res: Response) => {
    try {
        const { id, quantity } = req.body;
        const existingCart = await CartItemModel.findById(id);
        // console.log({ previous: existingCart }, '\n\n');
        if (!existingCart) {
            res.status(404).json({ message: 'Cart item not found!' });
        }

        const product = await ProductModel.findById(existingCart?.productId);
        // console.log(product?.stock, existingCart?.quantity + quantity);

        if (product && (product?.stock < existingCart?.quantity + quantity)){
            return res.status(404).json({ message: `Sorry, only ${product?.stock} units are available in stock.` });
        }

        if (existingCart && product && product?.stock >= quantity) {
            existingCart.quantity += quantity;
        }
        const result = await existingCart?.save();
        return res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

const removeCart = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await CartItemModel.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}




export const cartOperation = {
    addToCart,
    getAllCart,
    changeCartQuantity,
    removeCart
}