import { database } from "../../database";
import { AppError } from "../../errors/error";

export const listCategoriesByIdService = async (idParams) => {
  const category = await database.query(
    `select name from Categories where id = $1;`,
    [idParams]
  );

  if (category.rows.length === 0) {
    throw new AppError("There is no category with this id", 404);
  }

  return category.rows[0];
};
