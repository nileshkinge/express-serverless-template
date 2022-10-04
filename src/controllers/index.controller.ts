import type { NextFunction, Request, Response } from 'express'
import type {  RequestHandler } from 'express';

export class IndexController {
  public index = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.status(200).json({ hello: 'world' })
    } catch (error) {
      next(error)
    }
  }

  public static homeData: RequestHandler = async (req, res, next) => {
    try {
      const homeData = await 

      res.json({ status:  })
    } catch (error) {
      next(error);
    }
  }
