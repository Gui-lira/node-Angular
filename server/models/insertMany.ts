import { connection } from "./connection";

export default async function insertMany(collectionName: string, elements: Array<object>) {
    const db = await connection();
    return (await db.collection(collectionName).insertMany(elements)).insertedIds;
}