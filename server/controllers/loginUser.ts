import index from '../services';

export default async function loginUser(req: any, res:any) {
    const { email, password } = req.body;
    const user = await index.get('Users', { email, password });
    const obj = user || {}
    const id = obj['_id'] || '';
    const token = index.signToken(id);
    return res.status(200).json({ token });
}