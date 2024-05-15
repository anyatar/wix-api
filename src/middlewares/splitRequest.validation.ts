import { NextFunction, Request, Response } from 'express';

export function splitRequest(req: Request, res: Response<any>, next: NextFunction) {
 
  if (true) {
      res.status(400).end("xxxxx");
  }
  next();
}