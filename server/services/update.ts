import update from "../models/update";
import { ObjectId } from "bson";

export default async function updateElements(collectionName: string, params: object, elements: object, id: string = '') {
    let validation: any = true;
    if (id.length === 0) {
        validation =  await update(collectionName, params, elements).catch(() => false);
        return validation;
    }
    const newId = { _id: new ObjectId(id) };
    validation =  await update(collectionName, newId, elements);    
    return validation
}