import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Seats from "./Seats"
import Showtimes from "./Showtimes"
import Success from "./Success"


const App = () => {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sessoes/:idFilme' element={<Showtimes />} />
            <Route path='/assentos/:idSessao' element={<Seats />} />
            <Route path='/success' element={<Success />} />
        </Routes>
    </Router>
  )
}

export default App