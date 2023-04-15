import { connectDB } from "@/util/database.js";
import { MongoClient } from "mongodb"

export default async function Bookmark() {
  const db = (await connectDB).db("aibook")
  let result = await db.collection('list').find().toArray()
  console.log(result)
  
    return (
      <div>
        <h1 className="title-sub">북마크</h1>

      </div>
    )
}
  
function List(props) {
    return(
        <div className="bookmark">
            <p>이미지</p>
            <p>제목</p>
            <p>생성일</p>
        </div>
    )
}