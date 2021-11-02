import index from '../services';

export default async function getAllCars (_req: any, res: any) {
    const cars = await index.get('Cars', {});
    return res.status(200).json({ cars });
};