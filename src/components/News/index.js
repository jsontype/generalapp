import { useState, useEffect } from "react"
import "./style.css"

export default function News() {
  const [news, setNews] = useState([])

  useEffect(() => {
    // api 호출
    fetch("https://api.hnpwa.com/v0/news.json")
      .then((res) => res.json())
      .then((json) => setNews(json))
  }, [])

  const render = news.map((item) => {
    const rank = item.points >= 90 ? "good" : item.points >= 70 ? "soso" : "bad"

    return (
      <div key={item.id} className="newsItem">
        <a className="newsTitle" href={item.url}>
          {item.title}
        </a>
        <span className={rank}>
          포인트 : {item.points || "(평점없음)"}
        </span>
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
