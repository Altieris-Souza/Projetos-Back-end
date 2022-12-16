import { database } from "../../database";
import { AppError } from "../../errors/error";

export const editCategoryservice = async (idParams, body) => {
  const category = await database.query(
    `
        select * from categories where id = $1;
    `,
    [idParams]
  );

  if (category.rows.length === 0) {
    throw new AppError("There are no categories with this id", 404);
  }

  const categoryEdit = await database.query(
    `
      update categories set name = $1 where id = $2 returning *;
    `,
    [body.name, idParams]
  );

  return categoryEdit.rows[0];
};
