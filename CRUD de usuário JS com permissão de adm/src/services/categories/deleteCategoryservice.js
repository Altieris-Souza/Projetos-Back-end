import { database } from "../../database";
import { AppError } from "../../errors/error";

export const deleteCategoryService = async (idParams) => {
  const category = await database.query(
    `
        select * from categories where id = $1;
    `,
    [idParams]
  );

  if (category.rows.length === 0) {
    throw new AppError("There are no categories with this id", 404);
  }

  const categoryDelete = await database.query(
    `
    delete from categories where id = $1; 
`,
    [idParams]
  );

  return [204];
};
