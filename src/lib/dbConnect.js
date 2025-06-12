const {MONGODB_USER, MONGODB_PASSWORD} = process.env
const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@cluster0.xdjfp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

import { MongoClient, Db, ServerApiVersion } from "mongodb";

let cachedClient= null;

async function dbConnect() {
  if (!cachedClient) {
    cachedClient = new MongoClient(
      uri,
      {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      }
    );
    await cachedClient.connect();
    console.log('✅ Connected to MongoDB');
    // console.log("Connected to MongoDB");
  }
  return cachedClient.db(process.env.DB_NAME);
}

export default dbConnect;