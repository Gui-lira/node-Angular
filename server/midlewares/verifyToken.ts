import verifyToken from "../services/verifyToken";

export default function verifyTokenUser(req: any, res: any, next: any) {
    const { authentication } = req.headers;
    const isValid = verifyToken(authentication);
    if (!isValid) return res.status(401).json({ message: 'invalid token' });
    next();
}