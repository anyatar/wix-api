import { Request, Response } from "express";
import ticketService from "../services/ticket.service";

export default class apiController {

  getTicketByTimeOrSearch(req: Request, res: Response) {

    try {
      let { from, to, searchTerm } = req.query;
  
      if (!from && !to && !searchTerm ) {
        return res.status(400).json({ error: 'Bad request' });
      }
  
      let tickets: string[] = [];
      
      if (searchTerm) {
        tickets = ticketService.getTicketsBySearchTerm(searchTerm.toString());
      } else if ((from ?? false) || (to ?? false)) {
        tickets = ticketService.getTicketsByTime((from ? +from : 0), (to ? +to : 0));
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
      console.log(req.params);
      const title = req.params.title;

      console.log('here2');

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
