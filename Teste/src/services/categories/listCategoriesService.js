import { database } from "../../database";

export const listService = async () => {
  const categories = await database
    .query(`select * from Categories;`)
    .then((res) => res.rows);

  return categories;
};
