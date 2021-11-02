import find from "../models/find";
import findById from "../models/findByid";

export default async function get(collectionName: string, params: object, id: string = '') {
    if (id.length === 0) {
        const elements = await find(collectionName, params);
        return elements;
    };
    const element = await findById(collectionName, id);
    return element;
}