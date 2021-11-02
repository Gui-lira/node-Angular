import index from '../services';

export default async function putCars(req: any, res: any) {
    const { model, plate, color } = req.body;
    const id = await index.insert('Cars', { model, plate, color, status: 'available', alocator: '' });
    return res.status(200).json({ id: id.toString() });
} 