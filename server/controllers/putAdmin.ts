import index from '../services';

export default async function putAdmin(req: any, res: any) {
    const { email, password, name } = req.body;
    const id = await index.insert('Admins', { email, name, password });
    const token = index.signToken(id.toString());
    return res.status(401).json({ token });
}