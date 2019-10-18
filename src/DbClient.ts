import { MongoClient, Db } from "mongodb";
/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:<password>@cluster0-ov4iq.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/

class DbClient {
    // This will be updated to be project_data database
    public db!: Db; // database

    async connect() {
        // Connection uri
        const uri = "mongodb+srv://admin:admin@cluster0-ov4iq.mongodb.net/test?retryWrites=true&w=majority";

        try {
            let client = await MongoClient.connect(uri, { useNewUrlParser: true });
            this.db = client.db("sample_training");
            console.log("Connected to sample_training database");
            return this.db;
        } catch (error) {
            console.log("Unable to connect to database");
        }
    }
}

export = new DbClient();