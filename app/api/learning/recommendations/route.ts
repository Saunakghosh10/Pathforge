import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

type Difficulty = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
type TimeCommitment = 'LOW' | 'MEDIUM' | 'HIGH';

interface Roadmap {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  timeCommitment: TimeCommitment;
  estimatedHours: number;
}

export async function POST(request: Request) {
  try {
    const { assessment } = await request.json();
    const roadmaps = await prisma.roadmap.findMany() as Roadmap[];

    const scoredRoadmaps = roadmaps.map(roadmap => {
      let score = 0;

      // Experience level matching
      const experienceLevels = {
        'Beginner': ['BEGINNER'] as Difficulty[],
        'Intermediate': ['INTERMEDIATE'] as Difficulty[],
        'Advanced': ['ADVANCED'] as Difficulty[]
      } as const;

      const userLevel = assessment['1'] as keyof typeof experienceLevels;
      if (experienceLevels[userLevel]?.includes(roadmap.difficulty)) {
        score += 40;
      }

      // Time commitment matching
      if (assessment['2'] === 'Yes' && roadmap.timeCommitment === 'HIGH') {
        score += 30;
      }

      // Learning style matching
      if (assessment['3'] === 'Practical' && roadmap.estimatedHours >= 60) {
        score += 20;
      }

      return {
        ...roadmap,
        score
      };
    });

    // Sort by score and return top recommendations
    const recommendations = scoredRoadmaps
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    return NextResponse.json(recommendations);
  } catch (error) {
    console.error('Error generating recommendations:', error);
    return NextResponse.json(
      { error: 'Failed to generate recommendations' },
      { status: 500 }
    );
  }
}
