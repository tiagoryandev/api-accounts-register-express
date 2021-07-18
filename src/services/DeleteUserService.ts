import { userModel } from "../schemas/Users";

class DeleteUserService {
    async execute(id: String) {
        const userAlreadyExists = await userModel.findOne({
            _id: id
        });

        if (!userAlreadyExists) {
            throw new Error("User is Not Found!");
        };

        await userModel.deleteOne({
            _id: id
        });

        return {
            message: "Delete Success!"
        };
    }
};

export { DeleteUserService };