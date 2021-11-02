import { connection } from "./connection";

export default async function find(collectionName: string, params: object) {
    const db = await connection();
    return db.collection(collectionName).find(params).toArray();
}