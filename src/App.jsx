import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./components/Register"
import Login from "./components/Login"

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
