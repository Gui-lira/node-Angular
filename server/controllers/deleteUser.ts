import index from '../services';

export default async function deleteUser(req: any, res: any) {
    const { authorization } = req.headers
    const payload: any = index.verifyToken(authorization).valueOf();     
    const wentRigth = await index.deleteElement('Users', payload.payload);
    if (wentRigth) return res.status(200).end();
}