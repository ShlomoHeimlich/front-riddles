import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login.tsx";
import Admin from "../pages/Admin.tsx";
import "./App.css";
import Nav from "../pages/Nav.tsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} >
                <Route path="/Admin" element={<Admin />} />
        </Route>
      

      </Routes>
    </BrowserRouter>
  );
}

export default App;
