import { Request, Response } from "express";
import { UsersListService } from "../services/UsersListService";

class UsersListController {
    async handle(request: Request, response: Response) {
        const usersListService = new UsersListService();

        const users = await usersListService.execute();

        return response.json(users);
    }
};

export { UsersListController };