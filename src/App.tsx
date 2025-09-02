import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login.tsx";
import Admin from "../pages/Admin.tsx";
import Signin from "../pages/signin.tsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
