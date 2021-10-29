import { connection } from "./connection";

export default async function update(collectionName: string, params: object, element: object) {
    const db = await connection();
    await db.collection(collectionName).updateMany(params, element);
    return null;
}