import { MongoClient } from "mongodb";

const URI = "mongodb://localhost:27017/GoodTalkDB";
const client = new MongoClient(URI);

async function connect() {
  await client.connect();
  console.log("Connected to MongoDB");
  return client.db("GoodTalkDB");
}

export default connect;
