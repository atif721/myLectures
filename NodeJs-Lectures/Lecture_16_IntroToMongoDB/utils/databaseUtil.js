import mongo from "mongodb";
const MongoClient = mongo.MongoClient;

const MONGO_URL = "mongodb+srv://root:pass321@learningnodemongo.6f1howb.mongodb.net/?appName=LearningNodeMongo";

let _db;

export const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then((client) => {
      _db = client.db("airbnb");
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const getDb = () => {
  if (!_db) {
    throw new Error("Database not connected");
  }
  return _db;
};

/* from claude
import mongo from "mongodb";
const { MongoClient, ServerApiVersion } = mongo;

const DB_PASSWORD = "pass321";
const MONGO_URL = `mongodb+srv://root:${DB_PASSWORD}@learningnodemongo.6f1howb.mongodb.net/?appName=LearningNodeMongo`;

const client = new MongoClient(MONGO_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const mongoConnect = (callback) => {
  client
    .connect()
    .then(() => {
      console.log("✅ Connected to MongoDB!");
      callback(client);
    })
    .catch((err) => {
      console.error("❌ Connection Error:", err.message);
    });
};

export const mongoDisconnect = () => {
  client
    .close()
    .then(() => console.log("MongoDB disconnected"))
    .catch((err) => console.error("Error:", err.message));
};

*/
