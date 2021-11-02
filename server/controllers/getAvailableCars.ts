import index from '../services';

export default async function getAvailableCars(_req: any, res: any) {
    const cars = await index.get('Cars', { status: 'available' });
    return res.status(200).json({ cars });
}