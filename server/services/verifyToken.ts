import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

const SECRET = process.env.SECRET || 'segredo';

export default function verifyToken(token: string) {
    try {
        const payload  = jwt.verify(token, SECRET);
        return payload;
    } catch (e) {
        return false;
    }
}