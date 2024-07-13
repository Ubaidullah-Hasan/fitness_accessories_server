import mongoose from "mongoose";
import { app } from "./app";
import config from "./App/config";



async function main() {
    try {
        await mongoose.connect(config.database_url as string);

        app.listen(config.port, () => {
            console.log(`\n***** \nMongoDB Connected! And port's http://localhost:${config.port} \n*****\n`);
        });

    } catch (error) {
        console.log(error);
    }
}

main();