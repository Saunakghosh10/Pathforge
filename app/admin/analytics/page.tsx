import { prisma } from '@/lib/prisma';
import EngagementChart from '../../components/admin/EngagementChart';
import CompletionRateCard from '../../components/admin/CompletionRateCard';
import PopularContentCard from '../../components/admin/PopularContentCard';

async function getAnalytics() {
  const [
    dailyEngagement,
    completionRates,
    popularContent
  ] = await Promise.all([
    // Get daily engagement for the last 30 days
    prisma.progress.groupBy({
      by: ['updatedAt'],
      _count: true,
      where: {
        updatedAt: {
          gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
        }
      },
      orderBy: {
        updatedAt: 'asc'
      }
    }),

    // Get completion rates by roadmap
    prisma.roadmap.findMany({
      select: {
        id: true,
        title: true,
        _count: {
          select: {
            topics: true,
            progress: {
              where: {
                status: 'COMPLETED'
              }
            }
          }
        }
      }
    }),

    // Get most popular content
    prisma.topic.findMany({
      select: {
        id: true,
        title: true,
        roadmap: {
          select: {
            title: true
          }
        },
        _count: {
          select: {
            progress: true
          }
        }
      },
      orderBy: {
        progress: {
          _count: 'desc'
        }
      },
      take: 5
    })
  ]);

  return {
    dailyEngagement,
    completionRates,
    popularContent
  };
}

export const dynamic = 'force-dynamic';

export default async function AnalyticsPage() {
  const analytics = await getAnalytics();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium mb-4">Daily Engagement</h2>
          <EngagementChart data={analytics.dailyEngagement} />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium mb-4">Completion Rates</h2>
          <CompletionRateCard data={analytics.completionRates} />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium mb-4">Popular Content</h2>
        <PopularContentCard content={analytics.popularContent} />
      </div>
    </div>
  );
}
