import index from '../services';

export default async function rentCar(req: any, res: any) {
    const { id } = req.params;
    const { authorization } = req.headers;
    const payload = index.verifyToken(authorization).valueOf();
    const obj: any = payload 
    const isDone = await index.updateElements('Cars', {}, { status: 'unavailable', alocator: obj['payload'] }, id);
    if (!isDone) return res.status(401).json('something went wrong');
    return res.status(200).end();
}