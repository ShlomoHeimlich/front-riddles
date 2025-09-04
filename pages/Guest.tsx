import { useEffect, useState } from "react";
import "../style/Guest.css";

interface Question {
  id: number;
  riddle: string;
  correctAnswer: string;
}

export default function Guest() {
  const [startTime] = useState(new Date());
  const [endTime, setEndTime] = useState<Date | null>(null);
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
      setUserAnswer("");
      setCurrentIndex((prev) => prev + 1);
    } else {
      alert("נסה שוב");
    }
  };

  useEffect(() => {
    if (currentIndex >= questions.length && questions.length > 0 && !endTime) {
      setEndTime(new Date());
    }
  }, [currentIndex, questions.length, endTime]);

  if (loading) return <div>טוען...</div>;
  if (currentIndex >= questions.length) {
    const durationSeconds = endTime
      ? Math.floor((endTime.getTime() - startTime.getTime()) / 1000)
      : 0;

    return (
      <div>
        <div>סיימת את כל השאלות!</div>
        <div>משך זמן: {durationSeconds} שניות</div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div id="Guest">
      <div className="Question">השאלה</div>
      <div className="Question">{currentQuestion.riddle}</div>
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
