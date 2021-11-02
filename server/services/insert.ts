import insertMany from "../models/insertMany";
import insertOne from "../models/insertOne";

export default async function(collectionName: string, element: object, elements: Array<object> = []) {
    if (elements.length === 0) {
        const result  = await (await insertOne(collectionName, element));
        return result;
    };
    const result = await insertMany(collectionName, elements);
    return result
}