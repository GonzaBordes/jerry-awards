import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import Quizz from "./views/Quizz"
import Board from "./views/Board"
import QuizzView from './views/QuizView'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Quizz />} />
          <Route path="/board" element={<Board />}/>
          <Route path="/quizz-view" element={<QuizzView />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
