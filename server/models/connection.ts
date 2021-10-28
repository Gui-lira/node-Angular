import { MongoClient } from "mongodb";

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
const url = 'mongodb://127.0.0.1:27017';
export async function connection() {
    let db = null;
    if (db) return db;
    const connect = await MongoClient.connect(url);
    db = connect.db('rental');
    return db;
}