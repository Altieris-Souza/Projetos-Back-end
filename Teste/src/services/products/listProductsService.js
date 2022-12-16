import { database } from "../../database";

export const listProductsService = async () => {
  const product = await database
    .query(`select * from products;`)
    .then((res) => res.rows);

  return product;
};
