import { useNavigate } from "react-router-dom";

import "../style/Appgame.css"
export default function Appgame(){
     const navigate = useNavigate();
    return(
    <div id="menuappgame">
        <h1>ברוכים הבאים למשחק החידות</h1>
        <button onClick={()=>{navigate("/Guest")}}>שחק כאורח</button>
        <button onClick={()=>{navigate("/login")}}>כניסה למשתמש רשום</button>
        <button onClick={()=>{navigate("/register")}}>להרשמה למערכת</button>
        <button onClick={()=>{navigate("/meniger")}}>מנהל</button>
    </div>
    )
}

