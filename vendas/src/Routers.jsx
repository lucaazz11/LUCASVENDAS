import {Routes, Route} from "react-router-dom"
import Home from "./assets/pages/Home"
import About from "./assets/pages/About"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<div>404-Página não encontrada</div>} />
            <Route path="/signup" element={< Signup/>} />
            <Route path="/signin" element={< Signin/>} />
        </Routes>
    )
}