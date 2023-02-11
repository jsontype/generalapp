import "./App.css"
import { useState } from "react"
import Movies from "./components/Movies"
import News from "./components/News"
import Counter from "./components/Counter"
import Todos from "./components/Todos"

export default function App() {
  // JS
  const [isCounter, setCounter] = useState(false)
  const [isMovies, setIsMovies] = useState(false)
  const [isNews, setIsNews] = useState(false)
  const [isTodos, setIsTodos] = useState(false)

  // XML
  return (
    <div className="App">
      <button
        className="navbarItem"
        onClick={() => {
          setCounter(!isCounter)
          setIsNews(false)
          setIsMovies(false)
          setIsTodos(false)
        }}
      >
        카운터
      </button>      
      <button
        className="navbarItem"
        onClick={() => {
          setIsMovies(!isMovies)
          setIsNews(false)
          setCounter(false)
          setIsTodos(false)
        }}
      >
        무비
      </button>
      <button
        className="navbarItem"
        onClick={() => {
          setIsNews(!isNews)
          setIsMovies(false)
          setCounter(false)
          setIsTodos(false)
        }}
      >
        뉴스
      </button>
      <button
        className="navbarItem"
        onClick={() => {
          setIsTodos(!isTodos)
          setIsNews(false)
          setIsMovies(false)
          setCounter(false)
        }}
      >
        투두
      </button>      
      {isCounter && <Counter />}
      {isMovies && <Movies />}
      {isNews && <News />}
      {isTodos && <Todos />}
    </div>
  )
}
