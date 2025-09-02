import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <input
        type="text"
        placeholder="אנא הכנס את שמך המלא"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          if (name.trim() !== "") navigate("/Admin");
          else alert("אנא מלא את השם");
        }}
      >
        המשך
      </button>
    </div>
  );
}
