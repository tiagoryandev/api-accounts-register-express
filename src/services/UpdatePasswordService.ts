import { userModel } from "../schemas/Users";
import { hash, compare } from "bcryptjs";

interface IInfos {
    email: String;
    oldPassword: String;
    newPassword: String;
};

class UpdatePasswordService {
    async execute({ email, oldPassword, newPassword}: IInfos) {
        const user = await userModel.findOne({
            email
        });

        if (!user) {
            throw new Error("User is Not Found");
        };
        const verifyPassword = await compare(oldPassword, user.password);

        if (!verifyPassword) {
            throw new Error("Password Incorrect!");
        };

        const passwordHash = await hash(newPassword, 8);

        const newUser = await userModel.findOneAndUpdate({
            email
        }, {
            password: passwordHash
        });

        await newUser.save();

        return {
            message: "Update Success!"
        };
    }
};

export { UpdatePasswordService };