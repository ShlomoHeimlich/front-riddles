import { useRef } from "react";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const inputRefname = useRef<HTMLInputElement>(null);
  const inputRefpassourd = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const check = () => {
    if (inputRefname.current?.value && inputRefpassourd.current?.value) {
      navigate("/");
    } else if (!inputRefname.current?.value) {
      alert("לא הכנסת שם");
    } else {
      alert("לא הכנסת סיסמא");
    }
  };
  return (
    <div id="register">
      <input type="text" placeholder="הקלד את שימך המלא" ref={inputRefname} />
      <input type="text" placeholder="בחר את סיסמתך " ref={inputRefpassourd} />
      <button onClick={check}>אישור</button>
    </div>
  );
}


