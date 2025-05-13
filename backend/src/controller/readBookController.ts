import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export const markBookAsRead = async (req: Request, res:Response, next:NextFunction) => {
    const { userId, bookId } = req.body

    try {
        const existingBook = await prisma.readBook.findFirst({
            where: {
                userId,
                bookId,
            },
        })

        if(existingBook){
            res.status(400).json({message: "already exists user who`s marked as read this book"})
            return
        }

        const readBook = await prisma.readBook.create({
            data: {
                userId,
                bookId,
            }
        })
        res.status(201).json(readBook)
    } catch (error) {
        next(error)
        alert("sorry, cant show the book are you reading")
    }
}

export const getAllReadBooks = async (req: Request, res:Response, next:NextFunction) => {
    try {
        const reads = await prisma.readBook.findMany({
            include: {
                user: true,
                book: true,
            },
        })
        res.status(200).json(reads)
    } catch (error) {
        next(error)
        alert("sorry, cant show you read book rn")
    }
}

export const getReadsByUserId = async (req: Request, res:Response, next:NextFunction) => {
    const userId = parseInt(req.params.userId)
    const {title, author} = req.query


    try {
        const reads = await prisma.readBook.findMany({
            where: {
                userId,
                book: {
                    title: title ? {contains: String(title), mode:"insensitive"} : undefined,
                    author: author ? {contains: String(author), mode:"insensitive"} : undefined,
                },
            },
            include: {
                user: true,
                book: true,
            },
        })

        res.status(200).json(reads)

    } catch (error) {
        next(error)
        alert("sorry, cant get that specific book")
    }
}

export const getReadingRanking = async (req: Request, res:Response, next:NextFunction) => {

    try {
        const ranking = await prisma.user.findMany({
            where: {
                role: "EMPLOYEE",
            },
            include: {
                readBooks: true,
            },  
        })

        const ranked = ranking.map(user => ({
            userId: user.id,
            name: user.name,
            booksRead: user.readBooks.length,
        })).sort((a, b) => b.booksRead - a.booksRead)

        res.status(200).json(ranked)

    } catch (error) {
        next(error)
        alert("sorry, cant get the ranking rn")
    }
}
