import { userModel } from "../schemas/Users";

class UsersListService {
    async execute() {
        const users = await userModel.find();
        
        return users;
    }
};

export { UsersListService };