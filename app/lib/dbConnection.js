import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;

let cachedClient = null;
let cachedDb = null;

async function DBConnect(collectionName) {
  if (!cachedClient || !cachedDb) {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    cachedClient = await client.connect();
    cachedDb = cachedClient.db(process.env.DB_NAME);

    console.log("📌 New MongoDB connection created");
  }

  return cachedDb.collection(collectionName);
}

export default DBConnect;
