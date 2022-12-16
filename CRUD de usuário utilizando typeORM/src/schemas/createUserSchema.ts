import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest, IUserResponse, IUserUpdate } from "../interfaces/users";

export const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  isAdm: yup.boolean().required(),
  isActive: yup.string(),
});

export const userUpdateSchema: SchemaOf<IUserUpdate> = yup.object().shape({
  id: yup.string(),
  name: yup.string(),
  email: yup.string().email(),
  password: yup.string(),
  isAdm: yup.boolean(),
  isActive: yup.boolean(),
});

export const userResponseSchema: SchemaOf<IUserResponse> = yup.object().shape({
  id: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  isAdm: yup.boolean().notRequired(),
  isActive: yup.boolean().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
});
