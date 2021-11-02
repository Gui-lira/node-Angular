import index from '../services';

export default async function deleteCar(req: any, res: any) {
    const { id } = req.params;
    const isDeleted = await index.deleteElement('Cars', id);
    if (isDeleted) return res.status(200).end();
}