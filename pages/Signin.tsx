import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  return (
    <div>
      <input type="password" placeholder="הכנס את סיסמתך למשחק" />
    </div>
  );
}
