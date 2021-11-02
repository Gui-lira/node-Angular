import index from '../services';

export default async function getCarByAlocator(req: any, res: any) {
    const { authentication } = req.headers;
    const id = index.verifyToken(authentication);
    const car = await index.get('Cars', { alocator: id.toString() });
    return res.status(200).json({ car })
}