'use client';

import { useState } from 'react';
import SkillAssessment from '@/app/components/learning/SkillAssessment';
import PathRecommendation from '@/app/components/learning/PathRecommendation';

export default function AssessmentPage() {
  const [assessmentCompleted, setAssessmentCompleted] = useState(false);
  const [assessmentResults, setAssessmentResults] = useState<Record<string, string>>({});

  const handleAssessmentComplete = (results: Record<string, string>) => {
    setAssessmentResults(results);
    setAssessmentCompleted(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {!assessmentCompleted ? (
        <SkillAssessment onComplete={handleAssessmentComplete} />
      ) : (
        <PathRecommendation assessmentResults={assessmentResults} />
      )}
    </div>
  );
}
