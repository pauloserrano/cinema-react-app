import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Session from "./Session"


const App = () => {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sessoes/:idFilme' element={<Session />} />
            <Route path='/assentos/:idSessao' element={<div>Tela 3</div>} />
        </Routes>
    </Router>
  )
}

export default App