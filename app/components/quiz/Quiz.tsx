'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '@/app/context/ProgressContext';
import { FiCheck, FiX } from 'react-icons/fi';

interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  quizId: string;
  roadmapId: string;
  topicId: string;
  title: string;
  questions: Question[];
  onComplete?: () => void;
}

export default function Quiz({
  quizId,
  roadmapId,
  topicId,
  title,
  questions,
  onComplete
}: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [completed, setCompleted] = useState(false);

  const { updateTopicProgress } = useProgress();

  const handleAnswerSelect = (optionIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(optionIndex);
    if (optionIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setCompleted(true);
      if (onComplete) {
        onComplete();
      }
      
      // Update progress if score meets threshold (e.g., 70%)
      const percentage = (score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0)) / questions.length * 100;
      if (percentage >= 70) {
        updateTopicProgress(roadmapId, topicId, true);
      }
    }
  };

  const currentQuiz = questions[currentQuestion];

  if (completed) {
    const finalScore = score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0);
    const percentage = (finalScore / questions.length) * 100;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4">Quiz Complete!</h2>
        <div className="text-center">
          <p className="text-4xl font-bold mb-2">
            {finalScore} / {questions.length}
          </p>
          <p className="text-lg text-gray-600 mb-4">
            {percentage}% Correct
          </p>
          {percentage >= 70 ? (
            <div className="text-green-600 flex items-center justify-center gap-2">
              <FiCheck className="w-5 h-5" />
              <span>Topic marked as completed!</span>
            </div>
          ) : (
            <div className="text-red-600 flex items-center justify-center gap-2">
              <FiX className="w-5 h-5" />
              <span>Try again to complete the topic (70% required)</span>
            </div>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          Question {currentQuestion + 1} of {questions.length}
        </h2>
        <span className="text-gray-600">
          Score: {score}/{currentQuestion + (selectedAnswer !== null ? 1 : 0)}
        </span>
      </div>

      <div className="mb-6">
        <p className="text-lg mb-4">{currentQuiz.text}</p>
        <div className="space-y-3">
          {currentQuiz.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={selectedAnswer !== null}
              className={`w-full p-3 text-left rounded-lg transition-colors ${
                selectedAnswer === null
                  ? 'hover:bg-blue-50 border border-gray-200'
                  : selectedAnswer === index
                  ? index === currentQuiz.correctAnswer
                    ? 'bg-green-100 border border-green-500'
                    : 'bg-red-100 border border-red-500'
                  : index === currentQuiz.correctAnswer
                  ? 'bg-green-100 border border-green-500'
                  : 'border border-gray-200'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {showExplanation && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-gray-50 rounded-lg"
        >
          <h3 className="font-semibold mb-2">Explanation:</h3>
          <p>{currentQuiz.explanation}</p>
        </motion.div>
      )}

      {selectedAnswer !== null && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleNextQuestion}
          className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
        </motion.button>
      )}
    </motion.div>
  );
}
