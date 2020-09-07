import { Request, Response } from "express";
import User, { IUser } from '../models/User';

export const signup = async (req: Request, res: Response) => {

    const user: IUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    const savedUser = await user.save();
    console.log(savedUser);

    res.send('signup');
};

export const signin = (req: Request, res: Response) => {
    res.send('signin');
};

export const profile = (req: Request, res: Response) => {
    res.send('profile');
};
