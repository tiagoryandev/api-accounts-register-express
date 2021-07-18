import { Request, Response } from "express";
import { UpdatePasswordService } from "../services/UpdatePasswordService";

class UpdatePasswordController {
    async handle(request: Request, response: Response) {
        const { email, oldPassword, newPassword } = request.body;

        const updatePasswordService = new UpdatePasswordService();

        const user = await updatePasswordService.execute({
            email,
            oldPassword,
            newPassword
        });

        return response.json(user);
    }
};

export { UpdatePasswordController };