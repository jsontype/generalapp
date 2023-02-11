import { useState, useEffect } from "react"
import "./style.css"

export default function News() {
  const [news, setNews] = useState([])

  useEffect(() => {
    // api 호출
    fetch("https://api.hnpwa.com/v0/news.json?sort_by=points")
      .then((res) => res.json())
      .then((json) => setNews(json))
  }, [])

  const render = news.map((item) => {
    const rank = item.points >= 90 ? "good" : item.points >= 70 ? "soso" : "bad"

    return (
      <div key={item.id}>
        <a className="newsTitle" href={item.url}>
            {item.title}
            <div className={rank}>
            평점 : {item.points || "(평점없음)"} / 100
            </div>
          </a>
      </div>
    )
  })

  return(
    <div>
      <h2 className="title">뉴스 </h2>
      {render}
    </div>
  )
}
