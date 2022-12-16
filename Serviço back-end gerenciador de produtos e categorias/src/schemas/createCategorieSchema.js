import * as yup from "yup";

const createCategorieSchema = yup.object().shape({
  name: yup.string().required(),
});

export { createCategorieSchema };
