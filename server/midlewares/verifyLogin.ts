import get from "../services/get";

export default async function verifyLogin(req: any, res: any, next: any) {
    const { email, password } = req.body;
    const user = await get('Users', {email, password });
    if (!user) return res.status(401).json({ message: 'user not found'});
    next();
}