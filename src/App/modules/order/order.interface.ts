import mongoose from "mongoose"

export type TOrder = {
    productId: TProductId[],
    paymentStatus: string,
    totalPrice: number,
    name: string,
    email: string,
    phone: string,
    address: string,
    status: string,
}

type TProductId = {
    id: mongoose.Types.ObjectId,
    quantaty: number,
}