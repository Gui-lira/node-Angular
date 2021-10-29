import { connection } from "./connection";

export default async function insertOne(collectionName: string, element: object) {
    const db = await connection();
    return db.collection(collectionName).insertOne(element);
}