import index from '../services';

export default async function isAdmin(req: any, res: any, next: any) {
    const { authorization } = req.headers;
    const token: any = index.verifyToken(authorization);
    const admin = await index.get('Admins', {}, token.payload);
    if (!admin) return res.status(401).json({ message: 'not an admin' });
    next();
}