import { useNavigate } from "react-router-dom";
import "../style/Admin.css";

export default function Admin() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button>Administrator</button>
        <button>Guest</button>
      </div>
      <button onClick={() => navigate("/Signin")}>Login</button>
      <button>New player</button>
    </div>
  );
}
