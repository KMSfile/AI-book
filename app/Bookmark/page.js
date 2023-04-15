
export default function Bookmark() {
    let DB = ['인간과 로봇', '사랑의 진실', '역행자']
  
    return (
      <div>
        <h1 className="title-sub">북마크</h1>
        <List title={DB[0]} />
        <List title={DB[1]} />
        <List title={DB[2]} />
      </div>
    )
}
  
function List(props) {
    return(
        <div className="bookmark">
            <p>이미지</p>
            <p>{ props.title }</p>
            <p>생성일</p>
        </div>
    )
}