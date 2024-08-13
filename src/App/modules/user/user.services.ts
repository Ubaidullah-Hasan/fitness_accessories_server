import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const getAllCustomarsReviewFromDB = async (query: Record<string, unknown>) => {

    if (query?.image === "image") {

        const result = await UserModel.find()
            .select("image")
            .limit(10);

        return result;
    }

    const result = await UserModel.find();
    return result;
}

const createUserIntoDB = async (user: TUser) => {
    const result = await UserModel.create(user);
    return result;
}

export const userServices = {
    createUserIntoDB,
    getAllCustomarsReviewFromDB
}