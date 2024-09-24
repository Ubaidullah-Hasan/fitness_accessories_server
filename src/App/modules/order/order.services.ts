import { Request, Response } from "express";
import { ProductModel } from "../products/products.model";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";
import { CartItemModel } from "../cart/cart.model";

type TProductId = { id: string; quantaty: number; }

const createOrderIntoDB = async (order: TOrder) => {
    try {
        const { productId, name, email, phone, address, totalPrice } = order;
        const productIds = productId?.map((item) => item.id);

        const products = await ProductModel?.find({ _id: { $in: productIds } });

        if (!products || products.length === 0) {
            return ({ error: 'Products not found' });
        }


        // Check if each product has enough stock
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const requestedQuantity = productId?.find((item) => item.id === product.id);


            if (requestedQuantity) {

                if (product.stock < requestedQuantity.quantaty) {
                    return ({ error: `Product ${product.name} is out of stock. Available stock: ${product.stock}, Requested: ${requestedQuantity}` })
                }
            }

        }

        // If all products have enough stock, proceed to create the order
        const newOrder = await OrderModel.create({
            productId,
            name,
            email,
            phone,
            address,
            totalPrice,
        });

        // Decrease stock for each product
        if (newOrder) {
            for (let i = 0; i < products.length; i++) {
                const product = products[i];
                const requestedQuantity = productId?.find((item) => item.id === product.id);
                if (requestedQuantity) {
                    product.stock -= requestedQuantity?.quantaty as number;
                    // Save updated product
                    await product.save();
                }
            }
        }

        // clear carts
        await CartItemModel?.deleteMany({ productId: { $in: productIds } });

        return ({ success: newOrder });

    } catch (error) {
        console.log(error);
    }
}

export const orderServices = {
    createOrderIntoDB,
}