import { prisma } from '@/lib/prisma';

interface SearchPageProps {
  searchParams: { q: string };
}

async function searchContent(query: string) {
  const results = await prisma.roadmap.findMany({
    where: {
      OR: [
        { title: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
        { tags: { hasSome: [query] } },
        {
          topics: {
            some: {
              OR: [
                { title: { contains: query, mode: 'insensitive' } },
                { description: { contains: query, mode: 'insensitive' } },
              ],
            },
          },
        },
      ],
    },
    include: {
      topics: true,
      _count: {
        select: {
          progress: true,
        },
      },
    },
  });

  return results;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || '';
  const results = await searchContent(query);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        Search Results for "{query}"
      </h1>

      {results.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">
            No results found. Try different keywords or browse our roadmaps.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((roadmap) => (
            <div
              key={roadmap.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{roadmap.title}</h2>
                <p className="text-gray-600 mb-4">{roadmap.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    {roadmap.topics.length} topics
                  </span>
                  <span className="text-gray-500">
                    {roadmap._count.progress} learners
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
