export default function verifyPassword(req: any, res: any, next: any) {
    const { password } = req.body;
    if (!password || password.length < 6) return res.status(401).json({ message: 'invalid password' });
    next();
}