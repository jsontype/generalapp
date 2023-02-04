import { useState, useEffect } from "react"
import "./style.css"

export default function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    // api 호출
    // fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then((res) => res.json())
      .then((json) => setMovies(json.data.movies))
  }, [])

  const render = movies.map((item) => {
    const rank = item.rating >= 9 ? 'good' : item.rating >= 7 ? 'soso' : 'bad'

    return (
      <div key={item.id}>
        <a className="movieTitle" href={item.url}>
          {item.title} ({item.year})
          <div className={rank}>평점 : {item.rating || "(평점없음)"} / 10</div>
        </a>
      </div>
    )
  })

  return <div>{render}</div>
}
