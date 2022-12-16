import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";

export const verifyPermissions = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  let token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({
      message: "Invalid token",
    });
  }

  token = token.split(" ")[1];

  Jwt.verify(token, process.env.SECRET_KEY, (error, decoded: any) => {
    if (error) {
      return response.status(401).json({
        message: error.message,
      });
    }

    request.user = {
      isAdm: decoded.isAdm,
      isActive: decoded.isActive,
      id: decoded.id,
    };

    if (request.user.isAdm === false && request.user.id != request.params.id) {
      return response.status(401).json({
        message: "Don't have admin permission",
      });
    }

    return next();
  });
};
