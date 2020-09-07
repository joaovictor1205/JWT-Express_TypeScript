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

export const signin = async (req: Request, res: Response) => {
    const user = await User.findOne({email: req.body.email});
    if(!user){
        return res.status(400).json({ msg: `E-mail is wrong: ${req.body.email}` });
    }

    const correctPassword = await user.validatePassword(req.body.password);
    if(!correctPassword){
        return res.status(400).json({ msg: 'Invalid password!'});
    }

    const token:string = jwt.sign( {_id: user._id} , process.env.token || 'tokentest', {
        expiresIn: 60*60*24,
    });

    res.header('auth-token', token).json(user);
};

export const profile = async (req: Request, res: Response) => {
    const user = await User.findById(req.userId, {password:0});
    if(!user){
        return res.status(404).json({ msg: 'User not found!'});
    }

    res.json(user);
};
