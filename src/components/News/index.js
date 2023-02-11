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

  console.log(news)

  const render = news.map((item) => {
    return (
      <div key={item.id}>
        <a className="newsTitle" href={item.url}>
            {item.title}
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
