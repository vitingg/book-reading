import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, password, role } = req.body;

  const hashadedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        name,
        password: hashadedPassword,
        role,
      },
    });
    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      role: user.role,
    };

    res.status(201).json(userWithoutPassword);
  } catch (error) {
    next(error);
    alert("sorry, cant create the user rn");
  }
};

export const login = async (req: Request, res: Response) => {
  const { name, password } = req.body;
  const user = await prisma.user.findUnique({ where: { name } });

  if (!user) {
    res.status(404).json({ error: "Usuário não encontrado" });
    return;
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    res.status(401).json({ error: "Senha incorreta" });
    return;
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET as string
  );
  res.status(200).json({ token, user: { id: user.id, name: user.name, role: user.role } });
};

export const getAllUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await prisma.user.findMany();

    res.status(201).json(users);
  } catch (error) {
    next(error);
    alert("sorry, cant show the users rn");
  }
};

export const getUserByName = async (req: Request, res: Response) => {
  const { name } = req.query;

  if (!name || typeof name !== "string") {
    res.status(400).json({ error: "Name is required" });
    return;
  }

  try {
    const user = await prisma.user.findFirst({
      where: {
        name,
      },
    });
    res.status(200).json(user);
    return;
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    return;
  }
};
