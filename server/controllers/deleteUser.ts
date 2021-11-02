import index from '../services';

export default async function deleteUser(req: any, res: any) {
    const { id } = req.body;
    const wentRigth = await index.deleteElement('Users', id);
    if (wentRigth) return res.status(200).end();
}