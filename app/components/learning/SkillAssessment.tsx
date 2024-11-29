'use client';

import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

interface Question {
  id: string;
  text: string;
  options: string[];
}

const skillQuestions: Question[] = [
  {
    id: '1',
    text: 'What is your experience level with programming?',
    options: ['Beginner', 'Intermediate', 'Advanced']
  },
  {
    id: '2',
    text: 'Which areas interest you the most?',
    options: ['Web Development', 'Mobile Development', 'Data Science', 'DevOps']
  },
  {
    id: '3',
    text: 'How much time can you dedicate to learning per week?',
    options: ['2-4 hours', '4-8 hours', '8+ hours']
  }
];

export default function SkillAssessment({ onComplete }: { onComplete: (answers: Record<string, string>) => void }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [skillQuestions[currentQuestion].id]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion === skillQuestions.length - 1) {
      onComplete(answers);
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Skill Assessment</h2>
          <span className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {skillQuestions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / skillQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">
            {skillQuestions[currentQuestion].text}
          </h3>

          <RadioGroup value={answers[skillQuestions[currentQuestion].id]} onChange={handleAnswer}>
            <div className="space-y-3">
              {skillQuestions[currentQuestion].options.map((option) => (
                <RadioGroup.Option
                  key={option}
                  value={option}
                  className={({ active, checked }) =>
                    `${active ? 'ring-2 ring-indigo-600 ring-offset-2' : ''}
                    ${checked ? 'bg-indigo-600 text-white' : 'bg-white'}
                    relative flex cursor-pointer rounded-lg px-5 py-4 border focus:outline-none`
                  }
                >
                  {({ checked }) => (
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {option}
                          </RadioGroup.Label>
                        </div>
                      </div>
                    </div>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>

        <button
          onClick={handleNext}
          disabled={!answers[skillQuestions[currentQuestion].id]}
          className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentQuestion === skillQuestions.length - 1 ? 'Complete' : 'Next'}
        </button>
      </div>
    </div>
  );
}
