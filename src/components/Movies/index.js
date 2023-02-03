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
    return (
      <div key={item.id}>
        <a className="movieTitle" href={item.url}>
          {item.title} ({item.year})
        </a>
        <img className="movieImage" src={item.large_cover_image} alt={item.title}></img>
      </div>
    )
  })

  return <div>{render}</div>
}
