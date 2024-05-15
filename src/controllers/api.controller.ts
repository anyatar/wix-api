import { Request, Response } from "express";
import ticketService from "../services/ticket.service";

export default class apiController {

  getTicketByTimeOrSearch(req: Request, res: Response) {

    try {
      const { from, to, searchTerm } = req.query;
  
      if (!from && !to && !searchTerm ) {
        return res.status(400).json({ error: 'Bad request' });
      }
  
      let tickets: string[] = [];
      
      if (searchTerm) {
        tickets = ticketService.getTicketsBySearchTerm(searchTerm.toString());
      } else if (from && to) {
        tickets = ticketService.getTicketsByTime(+from, +to);
      }

      return res.status(200).json(tickets);

    } catch (error) {
      console.error('Error:', error);
      res.status(400).json({ error: 'Bad request' });
    }
  }

  getTickets(req: Request, res: Response) {
    try {
      const tickets: string[] = ticketService.getTickets();
      res.status(200).json(tickets);
    } catch (error) {
      console.error('Error:', error);
      res.status(400).json({ error: 'Internal server error' });
    }
  }
  
  getTicketByTitle(req: Request, res: Response) {
    try {
      const title = req.params.title;

      if (!title) {
        return res.status(400).json({ error: 'Bad request' });
      }
      const tickets: string[] = ticketService.getTicketByTitle(title);
      res.status(200).json(tickets);
    } catch (error) {
      console.error('Error:', error);
      res.status(400).json({ error: 'Internal server error' });
    }
  }
}
