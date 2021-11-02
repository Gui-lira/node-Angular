import index from '../services';

export default async function rentCar(req: any, res: any) {
    const { id } = req.params;
    const { authentication } = req.headers;
    const payload = index.verifyToken(authentication);
    const isDone = await index.updateElements('Cars', {}, { status: 'unavailable', alocator: payload.toString() });
    if (!isDone) return res.status(401).json('something went wrong');
    return res.status(200).end();
}