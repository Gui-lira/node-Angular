export default function verifyColorAndModel(req: any, res: any, next: any) {
    const { model, color } = req.body;
    if (!model || !color) return res.status(401).json({ message: 'model and color are mandatory'});
    next();
}