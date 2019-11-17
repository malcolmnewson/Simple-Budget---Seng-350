import {Db, MongoClient} from "mongodb";

class DbClient {
    // project_data database
    public db!: Db;
    public client!: MongoClient;
    /*
    * Does client.close() need to be called at some point in this function or does
    * it have to be closed after?
     */
    public async connect() {
        // Connection uri
        const uri = "mongodb+srv://admin:admin@cluster0-ov4iq.mongodb.net/test?retryWrites=true&w=majority";

        try {
            this.client = await MongoClient.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
            this.db = this.client.db("project_data");
            // console.log("Connected to project_data database");
            return this.db;
        } catch (error) {
            // console.log("Unable to connect to project_data database");
        }
    }

    public async closeConnection() {
        await this.client.close();
    }

}

export = new DbClient();
