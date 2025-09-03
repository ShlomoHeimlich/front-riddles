import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    if (!name.trim() || !password.trim()) {
      setMessage("אנא מלא שם וסיסמה");
      return;
    }

    try {
      const res = await fetch("http://localhost:4545/player/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
      });

      const text = await res.text();

      if (text === "You are not registered") {
        setMessage("משתמש לא רשום");
      } else {
        setMessage("התחברת בהצלחה: " + text);
        navigate("/Guest");
      }
    } catch (err) {
      console.error(err);
      setMessage("שגיאה בשרת");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "300px",
      }}
    >
      <input
        type="text"
        placeholder="שם משתמש"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="סיסמה"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>התחבר</button>
      {message && <div>{message}</div>}
    </div>
  );
}
