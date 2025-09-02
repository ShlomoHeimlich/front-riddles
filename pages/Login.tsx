import { Outlet, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <input type="text" required placeholder="אנא הכנס את שימך המלא" />
      <button type="button" onClick={() => navigate("/Admin")}>
        המשך
      </button>
      <Outlet />
    </div>
  );
}
