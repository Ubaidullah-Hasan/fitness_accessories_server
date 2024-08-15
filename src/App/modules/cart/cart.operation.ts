import { Request, Response } from 'express';
import { ProductModel } from '../products/products.model';
import { CartItemModel } from './cart.model';

// Add product to cart
export const addToCart = async (req: Request, res: Response) => {
    const { productId, quantity } = req.body;

    try {
        const product = await ProductModel.findById({_id: productId});
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
            // Check if adding the new quantity would exceed the stock
            const newQuantity = existingCartItem.quantity + quantity;
            if (newQuantity > product.stock) {
                return res.status(400).json({ message: 'Cannot add more than available stock' });
            }

            // Update the quantity of the existing cart item
            existingCartItem.quantity = newQuantity;
            existingCartItem.stock = existingCartItem.stock - quantity;
            const result = await existingCartItem.save();
            
            if(result){
                product.stock = product.stock - quantity;
                await product.save();
            }

        } else {
            // Create a new cart item
            const newCartItem = new CartItemModel({
                productId,
                name: product.name,
                price: product.price,
                quantity,
                stock: product.stock - quantity,
            });
            const result = await newCartItem.save();
            if (result) {
                product.stock = product.stock - quantity;
                await product.save();
            }
        }

        res.status(200).json({ 
            message: 'Product added to cart successfully',
            // data: 
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};


export const cartOperation = {
    addToCart
}