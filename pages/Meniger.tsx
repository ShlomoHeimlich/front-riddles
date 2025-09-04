import { useNavigate } from "react-router-dom";
export default function Manager() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/create")}>יצירת חידה</button>
      <button onClick={() => navigate("/update")}>עדכון חידה</button>
      <button onClick={() => navigate("/delete")}>מחיקת חידה</button>
      <button onClick={() => navigate("/read")}>קריאת החידות הקיימות</button>
    </div>
  );
}


