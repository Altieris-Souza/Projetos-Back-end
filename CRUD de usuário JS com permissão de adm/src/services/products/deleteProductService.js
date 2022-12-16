import { database } from "../../database";
import { AppError } from "../../errors/error";

export const deleteProductService = async (idParams) => {
  const product = await database.query(
    `
        select * from products where id = $1;
    `,
    [idParams]
  );

  if (product.rows.length === 0) {
    throw new AppError("There are no products with this id", 404);
  }

  const productDelete = await database.query(
    `
        delete from products where id = $1; 
  `,
    [idParams]
  );

  return [204];
};
