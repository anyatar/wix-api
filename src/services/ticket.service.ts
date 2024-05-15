import Ticket from "../interfaces/ticket.model";
import tickets from "../db/database";

class ticketService {

  getTickets() {
    return tickets.map(ticket => ticket.title);
  }

  getTicketsBySearchTerm(search: string, itemsPerPage=50): string[] {
    return tickets.filter(ticket => ticket.title.toLowerCase().includes(search.toLowerCase()) || 
                          ticket.content.toLowerCase().includes(search.toLowerCase()) || 
                          ticket.userEmail.toLowerCase().includes(search.toLowerCase())).
                          slice(0, itemsPerPage).
                          map(ticket => ticket.title);
  }
  //throw Error(`ticket not found`);
  getTicketsByTime(from: number, to: number, itemsPerPage=50): string[] {
    return tickets.filter(ticket => {
      if (from && to) {
        return ticket.creationTime >= from && ticket.creationTime <= to;
      } else if (from) {
        return ticket.creationTime >= from;
      } else if (to) {
        return ticket.creationTime <= to;
      }
    }).slice(0, itemsPerPage).map(ticket => ticket.title);
  }

  getTicketByTitle(title: string): string[] {
    return tickets.filter(ticket => ticket.title.toLowerCase().includes(title.toLowerCase())).map(ticket => ticket.title);
  }
}

export default new ticketService();
