import index from '../services';

export default async function updateUser(req: any, res: any) {
    const { id } = req.params;
    const { email, password } = req.body;    
    const isDone = await index.updateElements('Users', {}, { email, password }, id);
    if (!isDone) return res.status(401).json({ message: 'something went wrong' });
    return res.status(200).end();
}