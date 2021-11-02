import index from'../services';

export default async function verifyLoginAdmin(req: any, res: any, next: any) {
    const { email, password } = req.body;
    const admin = await index.get('Admins', { email, password });
    if (!admin) return res.status(401).json({ message: 'invalid entries'});
    next();
} 