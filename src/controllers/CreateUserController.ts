import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { username, email, password } = request.body;
        
        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            username,
            email,
            password
        });

        return response.json(user);
    }
};

export { CreateUserController };