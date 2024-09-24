import mongoose, { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";
import { orderStatus, paymentStatus } from "./order.constant";

const productIdSchema = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product"
    },
    quantaty: {
        type: Number,
        required: true,
    }
})

const orderSchema = new Schema<TOrder>({
    productId: [productIdSchema],
    name: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true, 
    },
    address: {
        type: String,
        required: true, 
    },
    phone: {
        type: String,
        required: true, 
    },
    paymentStatus: {
        type: String,
        enum: Object.values(paymentStatus), 
        default: paymentStatus.unpaid 
    },
    totalPrice: {
        type: Number,
        required: true, 
    },
    status: {
        type: String,
        enum: Object.values(orderStatus), 
        default: orderStatus.pending
    },
});

export const OrderModel = model<TOrder>("Order", orderSchema)