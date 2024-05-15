import { Request as ExpressRequest, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface RequestWithDecodedToken extends ExpressRequest {
    userId: string;
  }

interface DecodedToken {
    userId: string; 
 }  

const jwtAuthMiddleware = (req: RequestWithDecodedToken, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Missing token. Access denied' });
    }

    try {
        const decoded: DecodedToken = jwt.verify(token, 'your_secret_key') as DecodedToken;
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

export default jwtAuthMiddleware;