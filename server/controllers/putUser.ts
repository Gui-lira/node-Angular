import index from '../services';

export default async function putUser(req: any, res: any) {
    const { email, name, password, cpf } = req.body;
    const id = await index.insert('Users', { email, name, password, cpf });
    const token = index.signToken(id.toString());    
    return res.status(200).json({ token });
}