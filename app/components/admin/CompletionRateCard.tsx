interface CompletionData {
  id: string;
  title: string;
  _count: {
    topics: number;
    progress: number;
  };
}

interface CompletionRateCardProps {
  data: CompletionData[];
}

export default function CompletionRateCard({ data }: CompletionRateCardProps) {
  return (
    <div className="space-y-4">
      {data.map((roadmap) => {
        const completionRate = (roadmap._count.progress / roadmap._count.topics) * 100;
        
        return (
          <div key={roadmap.id} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">{roadmap.title}</span>
              <span className="text-sm text-gray-500">
                {completionRate.toFixed(1)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${completionRate}%` }}
              />
            </div>
            <p className="text-xs text-gray-500">
              {roadmap._count.progress} completions out of {roadmap._count.topics} topics
            </p>
          </div>
        );
      })}
    </div>
  );
}
