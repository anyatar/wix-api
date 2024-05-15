import { Request, Response } from "express";
import providerService from "../services/provider.service";

export default class apiController {

  setup(req: Request, res: Response) {

    try {
      const { name, date } = req.body;
  
      if (!name || !date || isNaN(parseInt(date))) {
        return res.status(400).json({ error: 'Bad request' });
      }
  
      providerService.setup(name, +date);
      return res.status(200).json();

    } catch (error) {
      console.error('Error:', error);
      res.status(400).json({ error: 'Bad request' });
    }
  }

  getAppointments(req: Request, res: Response) {
    try {
      const { specialty, date, minScore } = req.query;

      if (!specialty || !date || !minScore || isNaN(parseInt(date.toString()))) {
        return res.status(400).json({ error: 'Bad request' });
      }

      const providerNames: string[] = providerService.getAppointments(specialty.toString(), parseInt(date.toString()), minScore.toString());
      res.status(200).json(providerNames);
    } catch (error) {
      console.error('Error:', error);
      res.status(400).json({ error: 'Internal server error' });
    }
  }
}
