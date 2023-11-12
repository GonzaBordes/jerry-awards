import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import Quizz from "./views/Quizz"
import Board from "./views/Board"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Quizz />} />
          <Route path="/board" element={<Board />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
