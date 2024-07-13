// userReview.model.ts
import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>({
    image: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    productId: [{
        type: String,
        required: true
    }],
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export const UserModel = model<TUser>('User', userSchema);

