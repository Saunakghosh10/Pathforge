interface PopularContent {
  id: string;
  title: string;
  roadmap: {
    title: string;
  };
  _count: {
    progress: number;
  };
}

interface PopularContentCardProps {
  content: PopularContent[];
}

export default function PopularContentCard({ content }: PopularContentCardProps) {
  return (
    <div className="flow-root">
      <ul className="-my-5 divide-y divide-gray-200">
        {content.map((topic) => (
          <li key={topic.id} className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {topic.title}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {topic.roadmap.title}
                </p>
              </div>
              <div className="inline-flex items-center text-sm font-semibold text-indigo-600">
                {topic._count.progress} learners
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
