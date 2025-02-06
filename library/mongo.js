import { MongoClient, ServerApiVersion } from "mongodb";

const dbConnect = (collectionName) => {
    const uri = process.env.MONGO_CURRENTURI;
      // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    return client.db(process.env.DB_NAME).collection(collectionName)
};

export default dbConnect;