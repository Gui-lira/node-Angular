import index from '../services';

export default async function getCarByAlocator(req: any, res: any) {
    const { authetication } = req.headers;
    const id = index.verifyToken(authetication);
    const car = await index.get('Cars', { alocator: id.toString() });
    return res.status(200).json({ car })
}