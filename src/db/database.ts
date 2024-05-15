import Ticket from "../interfaces/ticket.model";
const tickets:Ticket[] = require('./data.json');
import fs from 'fs';

export default tickets

// Mock data (replace with your actual data source)
//const tickets:Ticket[] = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

const readFileAsync = (path: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

/*
(async () => {
    try {
        const data = await readFileAsync('./data.json');
        providersData = JSON.parse(data) as Ticket[];
    } catch (err) {
        console.error('Error reading file:', err);
    }
})();*/