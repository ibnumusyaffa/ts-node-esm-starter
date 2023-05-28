import { Request, Response, NextFunction } from "express";

interface User {
  email: string;
  name: string;
}

interface CreateRequest extends Request {
  body: User;
}

export async function create(
  req: CreateRequest,
  res: Response,
  next: NextFunction
) {
  try {
    return res.send({
      message: "create",
    });
  } catch (error) {
    return next(error);
  }
}

export async function list(req: Request, res: Response, next: NextFunction) {
  try {
    return res.send({
      message: "asasas",
    });
  } catch (error) {
    return next(error);
  }
}
