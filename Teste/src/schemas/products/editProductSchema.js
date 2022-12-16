import * as yup from "yup";

const editProductSchema = yup.object().shape({
  name: yup.string(),
  price: yup.number(),
  category_id: yup.number(),
});

export { editProductSchema };
