// import { useNavigate } from "react-router-dom";
// import { useRef } from "react";
// export default function Newplayer() {
//   const inputRef = useRef<HTMLInputElement>(null);
//   const navigate = useNavigate();
//   const check = () => {
//     if (!inputRef.current?.value) {
//       alert("אנא מלא את השם");
//     } else {
//       navigate("/Admin");
//     }
//   };

//   return (
//     <form>
//       <input
//         type="text"
//         required
//         placeholder="אנא הכנס את שימך "
//         ref={inputRef}
//       />
//       <button onClick={check}>Guest</button>
//     </form>
//   );
// }
