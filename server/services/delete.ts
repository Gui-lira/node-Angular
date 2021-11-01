import deleteOne from "../models/deleteOne";

export default async function deleteElement(collectionName: string, id: string) {
    let validation = true
    await deleteOne(collectionName, id).catch(() => validation = false);
    return validation;
}