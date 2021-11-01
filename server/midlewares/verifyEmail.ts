export default function verifyEmail(req: any, res:any, next: any) {
    const { email } = req.body;
    if (!email.endsWith('.com') || !email.includes('@') ||email.split('@')[1].length <= 4) {
        return res.status(401).json({ message: 'invalid email'});
    };
    next();
}