import React, { useState, useEffect } from 'react';
import './QuizSection.css'; // Ensure you have this CSS file for styling
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'; // Import Chart.js

const questions = [
  { question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Rome'], answer: 'Paris' },
  { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: '4' },
  { question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], answer: 'Mars' },
  { question: 'What is the largest ocean on Earth?', options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], answer: 'Pacific' },
  { question: 'Who wrote "To Kill a Mockingbird"?', options: ['Harper Lee', 'Mark Twain', 'J.K. Rowling', 'Ernest Hemingway'], answer: 'Harper Lee' },
  { question: 'What is the boiling point of water?', options: ['90°C', '100°C', '110°C', '120°C'], answer: '100°C' },
  { question: 'What is the hardest natural substance on Earth?', options: ['Gold', 'Iron', 'Diamond', 'Platinum'], answer: 'Diamond' },
  { question: 'What is the capital of Japan?', options: ['Seoul', 'Beijing', 'Tokyo', 'Hanoi'], answer: 'Tokyo' },
  { question: 'What is the chemical symbol for gold?', options: ['Au', 'Ag', 'Pb', 'Fe'], answer: 'Au' },
  { question: 'What is the longest river in the world?', options: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'], answer: 'Nile' },
];

const QuizSection = () => {
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleChange = (questionIndex, option) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionIndex]: option,
    }));
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setIsSubmitted(true);
  };

  const handleBack = () => {
    setIsSubmitted(false);
    setShowResults(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const chartData = {
    labels: ['Correct', 'Incorrect'],
    datasets: [{
      data: [score, questions.length - score],
      backgroundColor: ['#36A2EB', '#FF6384'],
      hoverOffset: 4
    }]
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-heading">Quiz Section</h1>
      <div className="timer">Time Left: {formatTime(timeLeft)}</div>
      {!isSubmitted ? (
        <div className="questions-container">
          {questions.map((q, index) => (
            <div key={index} className="question">
              <h2 className="question-text">{q.question}</h2>
              {q.options.map((option, i) => (
                <button
                  key={i}
                  className={`option-button ${answers[index] === option ? 'selected' : ''}`}
                  onClick={() => handleChange(index, option)}
                  style={{ backgroundColor: getRandomColor() }}
                >
                  {option}
                </button>
              ))}
            </div>
          ))}
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      ) : (
        <div className="result">
          <h2>Your Score: {score}/{questions.length}</h2>
          <div className="chart-container">
            <Pie data={chartData} />
          </div>
          <button className="back-button" onClick={handleBack}>
            Back to Questions
          </button>
        </div>
      )}
    </div>
  );
};

// Helper function to generate random colors for options
const getRandomColor = () => {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FFBF00'];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default QuizSection;
