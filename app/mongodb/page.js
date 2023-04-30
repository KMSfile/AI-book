import { connectDB } from "@/util/database.js";
import { MongoClient } from "mongodb"

export default async function() {
    const db = (await connectDB).db("aibook")
    let result = await db.collection('list').find().toArray()

    return(
        <div>
            <h4>{ result }</h4>
        </div>
    )
}