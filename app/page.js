import Link from "next/link"
import Image from "next/image"
import rendombook from '/public/img/rendombook.png'

export default async function Home() {

  return (
    <div className="container">

      <div className="box1">
        <h2>랜덤북</h2>
        <p>주제부터 내용까지 모두 AI에게 맡겨보세요! 재밌는 이야기를 써줄거에요!</p>
        <Image className="backimage" src={ rendombook } width={250}/>
        <button className="pagebutton">만들러가기</button>
      </div>

      <div className="box2"></div>
      <div className="box3"></div>

    </div>
  )
}
