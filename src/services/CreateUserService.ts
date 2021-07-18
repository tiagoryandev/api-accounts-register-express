import { userModel } from "../schemas/Users";
import { hash } from "bcryptjs";

interface IUser {
    username: String;
    email: String;
    password: String;
};

class CreateUserService {
    async execute({ username, email, password }: IUser) {
        const userAlreadyExists = await userModel.findOne({
            email
        });

        if (userAlreadyExists) {
            throw new Error("User Already Exists!");
        };

        const passwordHash = await hash(password, 8);

        const user = new userModel({
            username,
            email,
            password: passwordHash
        });

        await user.save();

        return user;
    }
};

export { CreateUserService };