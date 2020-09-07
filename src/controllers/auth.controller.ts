import { Request, Response } from "express";
import User, { IUser } from '../models/User';
import jwt from 'jsonwebtoken';

export const signup = async (req: Request, res: Response) => {

    // saving new user on database
    const user: IUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    user.password = await user.encryptPassword(user.password);

    const savedUser = await user.save();

    // returning jwt to user
    const token: string = jwt.sign( {_id: savedUser._id} , process.env.token || 'tokentest');

    res.header('auth-token', token).json(savedUser);
};

export const signin = (req: Request, res: Response) => {
    res.send('signin');
};

export const profile = (req: Request, res: Response) => {
    res.send('profile');
};
