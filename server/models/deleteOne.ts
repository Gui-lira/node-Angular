import { ObjectId } from "bson";
import { connection } from "./connection";

export default async function deleteOne(collectionName: string, id: string) {
    const obj = {
        id: new ObjectId(id)
    };
    const db = connection();
    await (await db).collection(collectionName).deleteOne(obj);
    return null;
}