import { database } from "../../database";

export const listProductsByCategoryIdService = async (idParams) => {
  const products = await database.query(
    `
    select id, category_id as category, name, price from products where category_id = $1
    `,
    [idParams]
  );

  return products.rows;
};
