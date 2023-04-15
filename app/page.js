import { connectDB } from "@/util/database";
import { MongoClient } from "mongodb"

export default async function Home() {

  const db = (await connectDB).db("aibook")
  let result = await db.collection('list').find().toArray()
  console.log(result)

  return (
    <div>
      <h1 className="title">AI도서관</h1>

      <div className="title-sub">
        <h3>당신이 보고싶은 책을 ai에게 맡겨보세요!</h3>
      </div>

    </div>
  )
}
