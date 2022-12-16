import { database } from "../../database";
import { AppError } from "../../errors/error";

export const createCategorieService = async (body) => {
  const categories = await database.query(`select * from categories;`);

  const nameExists = categories.rows.find((el) => el.name === body.name);

  if (nameExists) {
    throw new AppError("A category with that name already exists", 400);
  }

  const category = await database.query(
    `
        insert into categories(name) values ($1) returning *;
    `,
    [body.name]
  );

  return category.rows[0];
};
