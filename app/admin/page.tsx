import { prisma } from '@/lib/prisma';
import StatsCard from '../components/admin/StatsCard';
import RecentActivityTable from '../components/admin/RecentActivityTable';
import { 
  UsersIcon, 
  BookOpenIcon,
  AcademicCapIcon,
  TrophyIcon 
} from '@heroicons/react/24/outline';

async function getAdminStats() {
  const [
    userCount,
    completedTopicsCount,
    quizCompletionCount,
    challengeCompletionCount
  ] = await Promise.all([
    prisma.user.count(),
    prisma.progress.count({
      where: { status: 'COMPLETED' }
    }),
    prisma.quizResult.count(),
    prisma.challengeResult.count()
  ]);

  return {
    userCount,
    completedTopicsCount,
    quizCompletionCount,
    challengeCompletionCount
  };
}

async function getRecentActivity() {
  const recentProgress = await prisma.progress.findMany({
    take: 5,
    orderBy: { updatedAt: 'desc' },
    include: {
      user: {
        select: {
          name: true,
          email: true
        }
      }
    }
  });

  return recentProgress;
}

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const stats = await getAdminStats();
  const recentActivity = await getRecentActivity();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Users"
          value={stats.userCount}
          icon={UsersIcon}
          trend="+12%"
        />
        <StatsCard
          title="Completed Topics"
          value={stats.completedTopicsCount}
          icon={BookOpenIcon}
          trend="+25%"
        />
        <StatsCard
          title="Quiz Completions"
          value={stats.quizCompletionCount}
          icon={AcademicCapIcon}
          trend="+18%"
        />
        <StatsCard
          title="Challenge Completions"
          value={stats.challengeCompletionCount}
          icon={TrophyIcon}
          trend="+15%"
        />
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-medium">Recent Activity</h2>
          <RecentActivityTable activities={recentActivity} />
        </div>
      </div>
    </div>
  );
}
