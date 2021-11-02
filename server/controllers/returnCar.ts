import index from '../services';

export default async function returnCar(req: any, res: any) {
    const { id } = req.params;
    await index.updateElements('Cars', {}, { alocator: '', status: 'available' }, id);
    return res.status(200).end();
}