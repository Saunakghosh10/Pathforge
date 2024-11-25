'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '@/app/context/ProgressContext';

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
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const { addQuizResult } = useProgress();

  const handleAnswerSelect = (optionIndex: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(optionIndex);
    
    if (optionIndex === questions[currentQuestion].correctAnswer) {
      setScore(prev => prev + 1);
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      // Quiz completed
      const result = {
        quizId,
        roadmapId,
        topicId,
        score,
        totalQuestions: questions.length,
        timestamp: new Date().toISOString()
      };
      addQuizResult(result);
      setCompleted(true);
      onComplete?.();
    } else {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  if (completed) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-6 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
        <p className="text-lg mb-4">
          Your score: {score} out of {questions.length} ({Math.round((score / questions.length) * 100)}%)
        </p>
        <div className="mt-4">
          {score / questions.length >= 0.8 ? (
            <p className="text-green-600">Great job! You've mastered this topic!</p>
          ) : score / questions.length >= 0.6 ? (
            <p className="text-yellow-600">Good effort! Consider reviewing some concepts.</p>
          ) : (
            <p className="text-red-600">You might want to spend more time studying this topic.</p>
          )}
        </div>
      </motion.div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Question {currentQuestion + 1} of {questions.length}
        </p>
        <motion.div
          className="w-full bg-gray-200 h-2 rounded-full mt-2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
        >
          <motion.div
            className="bg-blue-600 h-2 rounded-full"
            initial={{ width: '0%' }}
            animate={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`
            }}
          />
        </motion.div>
      </div>

      <div className="mb-6">
        <p className="text-lg font-medium mb-4">{question.text}</p>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full p-3 text-left rounded-lg border transition-colors ${
                selectedAnswer === null
                  ? 'hover:bg-gray-50'
                  : selectedAnswer === index
                  ? index === question.correctAnswer
                    ? 'bg-green-100 border-green-500'
                    : 'bg-red-100 border-red-500'
                  : index === question.correctAnswer
                  ? 'bg-green-100 border-green-500'
                  : 'bg-gray-50 border-gray-200'
              }`}
              disabled={selectedAnswer !== null}
            >
              {option}
            </motion.button>
          ))}
        </div>
      </div>

      {showExplanation && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-gray-50 rounded-lg"
        >
          <h3 className="font-bold mb-2">Explanation:</h3>
          <p>{question.explanation}</p>
        </motion.div>
      )}

      {selectedAnswer !== null && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleNextQuestion}
          className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </motion.button>
      )}
    </motion.div>
  );
}
