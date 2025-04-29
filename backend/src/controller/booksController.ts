    import { Request, Response, NextFunction } from "express";
    import { PrismaClient } from "@prisma/client"
    import { RequestHandler } from "express";

    const prisma = new PrismaClient()

    // creating book route
    export const createBook = async (req: Request, res:Response, next:NextFunction) => {

        const {title, author, description, coverImageUrl} = req.body
        
        try {
            const book = await prisma.book.create({
                data: {
                    title,
                    author,
                    description,
                    releaseDate: new Date(),
                    coverImageUrl
                }
            })
            
            res.status(201).json(book)
        } catch (error) {
            next(error)
            alert("sorry, cant create a book rn!")
        }

    }

    // show book route 
    export const getAllBooks = async (req: Request, res:Response, next:NextFunction) => {

        try {
            const books = await prisma.book.findMany()

            res.status(200).json(books)
        } catch (error) {
            next(error)
            alert("sorry, cant got the book rn")
        }
    } 

    // update book route
    export const updateBook = async (req: Request, res:Response, next:NextFunction) => {
        const { title } = req.body
        const { author, description, releaseDate} = req.body


        try {
            const update = await prisma.book.updateMany({
                where: {title},
                data: {
                    author,
                    description,
                    releaseDate: new Date(req.body.releaseDate)
                }
            })
            res.status(200).json({ message: "book updated successfully" });
        } catch (error) {
            next(error)
            alert("sorry, cant update your book rn")
        }
    }

    // delete book route
    export const deleteBook = async (req: Request, res:Response, next:NextFunction) => {
        const { title } = req.params

        try {
            const deleted = await prisma.book.deleteMany({
                where: {title}
            })
            
            res.status(200).json({ message: "deleted successfully"})
        } catch (error) {
            next(error)
            alert("sorry, cant delete this book rn")
        }
    }

    export const uploadImage: RequestHandler = (req: Request, res:Response) => {
        if (!req.file) {
        res.status(400).json({ message: "No file uploaded" });
        return;
        }
    
        const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
        res.status(200).json({ imageUrl: fileUrl });
    }