import path from "node:path"
import dotenv from "dotenv"

dotenv.config({ path: path.join(process.cwd(), ".env")}) 

export default {
    port: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    database_url: process.env.DATABASE_URL,
}


