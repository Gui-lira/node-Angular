export default function verifyCpf(req: any, res: any, next: any) {
    const { cpf } = req.body;
    const possibleSum = [33, 44, 55, 66];
    const sum = cpf.split('').reduce((iterattor: number, number: string) => iterattor + Number(number), 0 );
    if ( cpf.length !== 11 || !possibleSum.includes(sum)) return res.status(401).json({ message: 'invalid cpf'});
    next();
}