import { prisma } from './prisma';

interface LocalProgress {
  roadmapId: string;
  topicId: string;
  status: string;
  completedAt?: string;
}

interface LocalQuizResult {
  quizId: string;
  score: number;
  totalQuestions: number;
  answers: any;
  completedAt: string;
}

interface LocalChallengeResult {
  challengeId: string;
  status: string;
  solution: string;
  executionTime?: number;
  memory?: number;
  completedAt: string;
}

interface LocalStorageData {
  progress?: { [key: string]: LocalProgress };
  quizResults?: { [key: string]: LocalQuizResult };
  challengeResults?: { [key: string]: LocalChallengeResult };
  preferences?: any;
}

export async function migrateUserData(userId: string, localData: LocalStorageData) {
  try {
    // Start a transaction to ensure data consistency
    await prisma.$transaction(async (tx) => {
      // Migrate progress data
      if (localData.progress) {
        for (const [key, progress] of Object.entries(localData.progress)) {
          await tx.progress.upsert({
            where: {
              userId_roadmapId_topicId: {
                userId,
                roadmapId: progress.roadmapId,
                topicId: progress.topicId,
              },
            },
            update: {
              status: progress.status,
              completedAt: progress.completedAt ? new Date(progress.completedAt) : null,
            },
            create: {
              userId,
              roadmapId: progress.roadmapId,
              topicId: progress.topicId,
              status: progress.status,
              completedAt: progress.completedAt ? new Date(progress.completedAt) : null,
            },
          });
        }
      }

      // Migrate quiz results
      if (localData.quizResults) {
        for (const [key, result] of Object.entries(localData.quizResults)) {
          await tx.quizResult.create({
            data: {
              userId,
              quizId: result.quizId,
              score: result.score,
              totalQuestions: result.totalQuestions,
              answers: result.answers,
              completedAt: new Date(result.completedAt),
            },
          });
        }
      }

      // Migrate challenge results
      if (localData.challengeResults) {
        for (const [key, result] of Object.entries(localData.challengeResults)) {
          await tx.challengeResult.create({
            data: {
              userId,
              challengeId: result.challengeId,
              status: result.status,
              solution: result.solution,
              executionTime: result.executionTime,
              memory: result.memory,
              completedAt: new Date(result.completedAt),
            },
          });
        }
      }

      // Update user preferences if they exist
      if (localData.preferences) {
        await tx.profile.upsert({
          where: { userId },
          update: { preferences: localData.preferences },
          create: {
            userId,
            preferences: localData.preferences,
          },
        });
      }
    });

    return { success: true };
  } catch (error) {
    console.error('Error migrating user data:', error);
    return { success: false, error };
  }
}
