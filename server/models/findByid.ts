import { ObjectID } from "bson";
import { connection } from "./connection";

export default async function findById(collectionName: string, id: string) {
    const obj = {
        id: new ObjectID(id),
    };
    const db = await connection();
    return db.collection(collectionName).findOne(obj);
}