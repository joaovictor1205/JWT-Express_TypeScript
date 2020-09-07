import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface IPayload {
    _id: string;
    iat: number;
    exp: number;
}

export const TokenValidate = (req: Request, res: Response, next: NextFunction) => {

    const token = req.header('auth-token');
    if(!token){
        return res.status(400).json({ msg: 'Access Denied!'});
    }

    const payload = jwt.verify(token, process.env.token || 'token') as IPayload;
    req.userId = payload._id;

    next();
}
