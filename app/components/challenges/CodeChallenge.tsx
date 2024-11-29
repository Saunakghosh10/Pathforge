'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';
import { Challenge } from '@/types/challenge';
import { useProgress } from '@/app/context/ProgressContext';
import Editor from '@monaco-editor/react';

interface CodeChallengeProps {
  challenge: Challenge;
  roadmapId: string;
  topicId: string;
}

export default function CodeChallenge({ challenge, roadmapId, topicId }: CodeChallengeProps) {
  const [code, setCode] = useState(challenge.starterCode);
  const [output, setOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHints, setShowHints] = useState(false);
  const { updateTopicProgress } = useProgress();

  const runCode = async () => {
    setIsRunning(true);
    setOutput('');
    setIsCorrect(null);

    try {
      // Create a function from the code string
      const userFunction = new Function('return ' + code)();
      
      // Run test cases
      let allTestsPassed = true;
      let testOutput = '';

      for (const testCase of challenge.testCases) {
        const input = JSON.parse(testCase.input);
        const expected = JSON.parse(testCase.expectedOutput);
        const result = userFunction(input);

        if (JSON.stringify(result) === JSON.stringify(expected)) {
          testOutput += ` Test passed: Input ${testCase.input} → Expected ${testCase.expectedOutput}\n`;
        } else {
          testOutput += ` Test failed: Input ${testCase.input}\n   Expected: ${testCase.expectedOutput}\n   Got: ${result}\n`;
          allTestsPassed = false;
        }
      }

      setOutput(testOutput);
      setIsCorrect(allTestsPassed);

      if (allTestsPassed) {
        updateTopicProgress(roadmapId, topicId, true);
      }
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : 'An unknown error occurred'}`);
      setIsCorrect(false);
    }

    setIsRunning(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
          <p className="text-gray-600">{challenge.description}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          challenge.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
          challenge.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {challenge.difficulty}
        </span>
      </div>

      <div className="h-64 border rounded-lg overflow-hidden">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value || '')}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            automaticLayout: true,
          }}
        />
      </div>

      <div className="flex space-x-4">
        <button
          onClick={runCode}
          disabled={isRunning}
          className={`px-4 py-2 rounded-md text-white font-medium ${
            isRunning
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {isRunning ? 'Running...' : 'Run Code'}
        </button>

        <button
          onClick={() => setShowHints(!showHints)}
          className="px-4 py-2 rounded-md text-blue-600 font-medium border border-blue-600 hover:bg-blue-50"
        >
          {showHints ? 'Hide Hints' : 'Show Hints'}
        </button>
      </div>

      {showHints && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-blue-50 p-4 rounded-md"
        >
          <h4 className="font-medium mb-2">Hints:</h4>
          <ul className="list-disc list-inside space-y-1">
            {challenge.hints.map((hint, index) => (
              <li key={index} className="text-gray-700">{hint}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {output && (
        <div className={`p-4 rounded-md ${
          isCorrect === true ? 'bg-green-50' :
          isCorrect === false ? 'bg-red-50' :
          'bg-gray-50'
        }`}>
          <div className="flex items-center mb-2">
            {isCorrect === true && (
              <FiCheck className="w-5 h-5 text-green-500 mr-2" />
            )}
            {isCorrect === false && (
              <FiX className="w-5 h-5 text-red-500 mr-2" />
            )}
            <h4 className="font-medium">Test Results:</h4>
          </div>
          <pre className="whitespace-pre-wrap font-mono text-sm">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}
