import { useEffect, useState } from "react";

interface Question {
  id: number;
  riddle: string;
  correctAnswer: string;
}

export default function Guest() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch("http://localhost:4545/AllQuestions");
        const data: Question[] = await res.json();
        setQuestions(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchQuestions();
  }, []);

  const checkAnswer = () => {
    const currentQuestion = questions[currentIndex];
    if (!currentQuestion) return;

    if (userAnswer.trim() === currentQuestion.correctAnswer) {
      alert("נכון!");
      setUserAnswer("");
      setCurrentIndex((prev) => prev + 1);
    } else {
      alert("נסה שוב");
    }
  };

  if (loading) return <div>טוען...</div>;
  if (currentIndex >= questions.length) return <div>סיימת את כל השאלות!</div>;

  const currentQuestion = questions[currentIndex];

  return (
    <div>
      <div>{currentQuestion.riddle}</div>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="הכנס את התשובה שלך כאן"
      />
      <button onClick={checkAnswer}>שלח</button>
      <div>
        שאלה {currentIndex + 1} מתוך {questions.length}
      </div>
    </div>
  );
}
