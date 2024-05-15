import { Request, Response } from "express";

export function welcome(req: Request, res: Response): Response {
  console.log("Welcome to VIM API application");
  return res.json({ message: "Welcome to VIM API application!" });
}