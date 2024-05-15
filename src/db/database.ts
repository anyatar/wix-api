import Doctor from "../interfaces/doctor.model";
const providers:Doctor[] = require('./providers.json');
import fs from 'fs';

// Mock data (replace with your actual data source)
//const providers:Doctor[] = JSON.parse(fs.readFileSync('providers.json', 'utf-8'));


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
        const data = await readFileAsync('./providers.json');
        providersData = JSON.parse(data) as Doctor[];
    } catch (err) {
        console.error('Error reading file:', err);
    }
})();*/

// Create cache of providers by name
export const providersByNameCache: { [key: string]: Doctor } = providers.reduce((acc: any, provider: Doctor) => {
    acc[provider.name] = provider;
    return acc;
}, {});

// Create cache of providers by specialty
export const providersBySpecialtyCache = providers.reduce((acc:any, provider: Doctor) => {
    
    //const specialtyKey = provider.specialties.toLowerCase();
    for (const specialtyKey of provider.specialties) {

        const specialtyKeyLow = specialtyKey.toLowerCase();
        if (!acc[specialtyKeyLow]) {
            acc[specialtyKeyLow] = [];
        }
        acc[specialtyKeyLow].push(provider);
    }

    return acc;

}, {});

/*
const readProvidersData = (filePath: string): Promise<any[]> => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                try {
                    const parsedData = JSON.parse(data);
                    resolve(parsedData);
                } catch (parseError) {
                    reject(parseError);
                }
            }
        });
    });
};
*/

