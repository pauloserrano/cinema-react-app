import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/test' element={<div>Teste</div>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App