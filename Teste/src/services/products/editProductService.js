import { database } from "../../database";
import { AppError } from "../../errors/error";

export const editProductService = async (idParams, body) => {
  const product = await database.query(
    `
          select * from products where id = $1;
      `,
    [idParams]
  );

  if (product.rows.length === 0) {
    throw new AppError("There are no products with this id", 404);
  }

  let query = "update products set";
  const keys = Object.keys(body);
  const values = Object.values(body);

  keys.forEach((key, index) => {
    query += ` ${key} = \$${(index += 1)},`;
  });

  query = query.slice(0, -1);

  query += ` where id = \$${(keys.length += 1)} returning *;`;

  const productEdit = await database.query(query, [...values, idParams]);

  return productEdit.rows[0];
};
