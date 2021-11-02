import verifyToken from "../services/verifyToken";

export default function verifyTokenUser(req: any, res: any, next: any) {
    const { authorization } = req.headers;
    const isValid = verifyToken(authorization);
    if (!isValid) return res.status(401).json({ message: 'invalid token' });
    next();
}