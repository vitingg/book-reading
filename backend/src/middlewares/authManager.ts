import { Request, Response, NextFunction } from 'express';

export function authorizeManager(req:Request, res:Response, next:NextFunction){
  const user = (req as any).user

  if(user.role !== "MANAGER"){
    res.status(403).json({message:"you are not authorized"})
    return
  }

  next()
}