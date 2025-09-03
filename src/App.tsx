import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Name from "../pages/Name.tsx";
// import Admin from "../pages/Admin.tsx";
import Appgame from '../pages/App.game.tsx'
import Register from "../pages/register.tsx"
// import Signin from "../pages/Signin.tsx";
import "./App.css";
// import Newplayer from "../pages/Newplayer.tsx";
import Guest from "../pages/Guest.tsx";
// import Administrator from "../pages/Administrator.tsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Appgame/>} />
        <Route path="/Register" element={<Register/>} />
        {/* <Route path="/Admin" element={<Admin />} /> */}
        {/* <Route path="/Signin" element={<Signin />} /> */}
        {/* <Route path="/Newplayer" element={<Newplayer />} /> */}
        <Route path="/Guest" element={<Guest />} />
        {/* <Route path="/Administrator" element={<Administrator />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
