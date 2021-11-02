import { connection } from "./connection";

export default async function update(collectionName: string, params: object, element: object) {
    const db = await connection();
    return db.collection(collectionName).findOneAndUpdate(params, { $set: element });    
}