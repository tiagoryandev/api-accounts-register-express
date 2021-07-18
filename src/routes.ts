import { Router } from "express";
import { UsersListController } from "./controllers/UsersListController";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { UpdatePasswordController } from "./controllers/UpdatePasswordController";

const router = Router();
const usersListController = new UsersListController();
const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();
const updatePasswordController = new UpdatePasswordController();

router.get("/", usersListController.handle);
router.post("/create", createUserController.handle);
router.delete("/delete/:id", deleteUserController.handle);
router.put("/update/password", updatePasswordController.handle);

export { router };