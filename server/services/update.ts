import update from "../models/update";
import { ObjectId } from "bson";

export default async function updateElements(collectionName: string, params: object, elements: object, id: string = '') {
    let validation = true;
    if (id.length === 0) {
        await update(collectionName, params, elements).catch(() => validation = false);
        return validation;
    }
    const newId = { id: new ObjectId(id) };
    await update(collectionName, newId, elements);
    return validation;
}