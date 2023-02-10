import { useState, useEffect } from "react"
import "./style.css"
import MovieDetail from "./MovieDetail"

export default function Movies () {
  // 영화 아이템
  const [movies, setMovies] = useState([])
  // 영화 아이템 중 "타이틀을 클릭해 상세정보가 호출된 영화 아이템"의 id
  const [detailId, setDetailId] = useState(0)
 
  useEffect(() => {
    // api 호출
    // fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then((res) => res.json())
      .then((json) => setMovies(json.data.movies))
  }, [])

  // 주의 : render 안에 onClick 프롭 넣을 때는 함수형업데이트 해야함 (예, onClick={() => setIsOpen()})
  const render = movies.map((item) => {
    return (
<<<<<<< HEAD
      <div key={item.id}>
        <div className="movieItem">
          <a className="movieTitle" href={item.url}>
            {item.title} {item.rating <= 7 ? '' : '🔥'} ({item.year})
            <div className="genre">장르 : {item.genres.join(", ")}</div>
            <div className={rank}>
              평점 : {item.rating || "(평점없음)"} / 10 
=======
      <>
        <div key={item.id}>
          <div className="movieItem">
            <div className="movieTitle" onClick={() => { item.id !== detailId ? setDetailId(item.id) : setDetailId(0)}}>
              {item.title} ({item.year})
>>>>>>> master
            </div>
            <img
              className="movieImage"
              src={item.large_cover_image}
              alt={item.title}
            ></img>
          </div>
        </div>
        { detailId === item.id && <MovieDetail item={item} /> }
      </>
    )
  })

  return (
    <div>
      <h1 className="title">무비 앱</h1>
      {render}
    </div>
  )
}
