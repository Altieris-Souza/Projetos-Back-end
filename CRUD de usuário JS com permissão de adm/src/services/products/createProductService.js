import { database } from "../../database";

export const createProductService = async (body) => {
  const product = await database.query(
    `insert into products(name, price, category_id) values($1, $2, $3) returning *;`,
    [body.name, body.price, body.category_id]
  );

  return product.rows[0];
};
