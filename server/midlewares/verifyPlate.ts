export default function verifyPlate (req: any, res: any, next: any) {
    const { plate } = req.body;
    const licenseLength = 9;
    if (plate.length !== licenseLength) return res.status(401).json({message: 'invalid plate'});
    next(); 
}