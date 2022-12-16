import { AppError } from "../../errors/error";

export const checkIfTheIdExistsMiddleware = async (request, response, next) => {
  if (!parseInt(request.params.id)) {
    throw new AppError("The id field must receive a number", 404);
  }

  return next();
};
