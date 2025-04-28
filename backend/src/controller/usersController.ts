import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const createUser = async (req: Request, res:Response, next:NextFunction) => {
    const { name, role } = req.body

    try {
        const user = await prisma.user.create({
            data: {
                name,
                role
            }
        })

        res.status(201).json(user)
    } catch (error) {
        next(error)
        alert("sorry, cant create the user rn")
    }
}

export const getAllUser = async (req: Request, res:Response, next:NextFunction) => {
    try {
        const users = await prisma.user.findMany()

        res.status(201).json(users)
    } catch (error) {
        next(error)
        alert("sorry, cant show the users rn")
    }
}

export const getUserByName = async (req:Request, res: Response) => {
    const { name } = req.query

    if (!name || typeof name !== "string"){
        res.status(400).json({error: "Name is required"})
        return
    }

    try {
        const user = await prisma.user.findFirst({
            where: {
                name
            },
        })
        res.status(200).json(user)
        return 
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
        return 
    }
}

