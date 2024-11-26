import { MongoClient } from "mongodb";

const URI = "mongodb://localhost:27017/GoodTalk";
const client = new MongoClient(URI);

async function connect() {
  await client.connect();
  console.log("Connected to MongoDB");
  return client.db("GoodTalk");
}

export default connect;
