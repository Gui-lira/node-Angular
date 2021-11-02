import index from '../services';

export default async function loginAdmin(req: any, res: any) {
    const { email, password } = req.body;
    const user = await index.get('Admins', { email, password });
    const obj = user || {};
    const token = index.signToken(obj['_id']);
    return res.status(200).json({ token });
}