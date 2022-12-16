import { database } from "../../database";
import { AppError } from "../../errors/error";

export const listProductsByIdService = async (idParams) => {
  const product = await database.query(
    `
      select name from products where id = $1;
    `,
    [idParams]
  );

  if (product.rows.length === 0) {
    throw new AppError("There are no products with this id", 404);
  }

  return product.rows[0];
};
