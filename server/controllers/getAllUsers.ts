import index from '../services';

export default async function getAllUsers(_req: any, res: any) {
    const users = await index.get('Users', {});
    return res.status(200).json({ users });
}