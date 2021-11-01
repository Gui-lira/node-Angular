import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

const SECRET = process.env.SECRET || 'segredo';

export default function signToken (payload:string) {
    const token = jwt.sign({ payload }, SECRET);
    return token;
}