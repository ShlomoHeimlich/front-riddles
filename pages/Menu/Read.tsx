import { useEffect, useState } from "react";

interface Question {
  id: number;
  riddle: string;
  correctAnswer: string;
}

export default function Read() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch("http://localhost:4545/AllQuestions");
        const data: Question[] = await res.json();
        setQuestions(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchQuestions();
  }, []);

  return (
    <div>
      <h1>כל החידות:</h1>
      <ul>
        {questions.map((q) => (
          <li key={q.id}>{q.riddle}</li>
        ))}
      </ul>
    </div>
  );
}
