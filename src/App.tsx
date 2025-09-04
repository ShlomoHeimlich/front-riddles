import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appgame from '../pages/App.game.tsx'
import Register from "../pages/Register.tsx"
import "./App.css";
import Guest from "../pages/Guest.tsx";
import Login from "../pages/Login.tsx"
import Meniger from "../pages/Meniger.tsx"
// import Update from "../pages/Menu/Update.tsx"
// import Create from "../pages/Menu/Create.tsx"
// import Delete from "../pages/Menu/Delete.tsx"
import Read from "../pages/Menu/Read.tsx"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Appgame/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Guest" element={<Guest />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Meniger" element={<Meniger />} />
        {/* <Route path="/Meniger" element={<Create />} />
        <Route path="/Meniger" element={<Update />} />
        <Route path="/Meniger" element={<Delete />} /> */}
        <Route path="/read" element={<Read/>} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;






