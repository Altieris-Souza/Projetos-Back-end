import { Router } from "express";
import { createUserController } from "../../controllers/user/createUserController";
import { deleteUserController } from "../../controllers/user/deleteUserController";
import { editUserController } from "../../controllers/user/editUserController";
import { listUsersController } from "../../controllers/user/listUsersController";
import { verifyBodyCreate } from "../../middleware/user/ensureDataIsValid";
import { verifyTokenOrAdmExists } from "../../middleware/user/verifryTokenExists";
import { verifyPermissions } from "../../middleware/user/verifyPermissions";
import { verifyUserExists } from "../../middleware/user/verifyUserExists";
import { userSchema, userUpdateSchema } from "../../schemas/createUserSchema";

const userRoutes = Router();

userRoutes.post(
  "",
  verifyBodyCreate(userSchema),
  verifyUserExists,
  createUserController
);

userRoutes.get("", verifyTokenOrAdmExists, listUsersController);

userRoutes.delete("/:id", verifyTokenOrAdmExists, deleteUserController);

userRoutes.patch(
  "/:id",
  verifyBodyCreate(userUpdateSchema),
  verifyPermissions,
  editUserController
);

export default userRoutes;
