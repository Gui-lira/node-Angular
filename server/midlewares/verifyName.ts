export default function verifyName(req: any, res: any, next: any) {
    const { name } = req.body;
    if (!name) return res.status(401).json({ message: 'invalid name'});
    next();
}