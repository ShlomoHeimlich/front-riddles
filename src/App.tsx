import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appgame from '../pages/App.game.tsx'
import Register from "../pages/Register.tsx"
import "./App.css";
import Guest from "../pages/Guest.tsx";
import Login from "../pages/Login.tsx"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Appgame/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Guest" element={<Guest />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
