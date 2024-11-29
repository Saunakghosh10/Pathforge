import { prisma } from '@/lib/prisma';
import ContentList from '../../components/admin/ContentList';
import { PlusIcon } from '@heroicons/react/24/outline';

async function getRoadmaps() {
  return await prisma.roadmap.findMany({
    include: {
      topics: true,
      _count: {
        select: {
          progress: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export const dynamic = 'force-dynamic';

export default async function ContentPage() {
  const roadmaps = await getRoadmaps();

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold">Content Management</h1>
        <div className="mt-4 sm:mt-0 space-x-3">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
            New Roadmap
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white shadow rounded-lg">
          <ContentList roadmaps={roadmaps} />
        </div>
      </div>
    </div>
  );
}
