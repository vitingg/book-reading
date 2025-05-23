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

    // show one book route
    export const getOneBook = async (req: Request, res:Response, next:NextFunction) => {
    try {
        const books = await prisma.book.findUnique(
            {
                where: {
                    id: Number(req.params.id)
                }
            }
        )
        res.status(200).json(books)
    } catch (error) {
        console.log(error)
    }
    }

    // update book route
    export const updateBook = async (req: Request, res:Response, next:NextFunction) => {
        const { id } = req.params
        const { title, author, description} = req.body


        try {
            const update = await prisma.book.update({
                where: { id: Number(id) },
                data: {
                    title,
                    author,
                    description,
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
        const { id } = req.params

        try {
            const deleted = await prisma.book.delete({
                where: { id: Number(id) }
            })
            
            res.status(200).json({ message: "deleted successfully"})
        } catch (error) {
            next(error)
            alert("sorry, cant delete this book rn")
        }
    }

    // image book cape
    export const uploadImage: RequestHandler = (req: Request, res:Response) => {
        if (!req.file) {
        res.status(400).json({ message: "No file uploaded" });
        return;
        }
    
        const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
        res.status(200).json({ imageUrl: fileUrl });
    }