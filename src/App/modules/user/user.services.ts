import { UserModel } from "./user.model";

const getAllCustomarsReviewFromDB = async () => {
    const result = await UserModel.find();
    return result;
}

export const userServices = {
    getAllCustomarsReviewFromDB
}