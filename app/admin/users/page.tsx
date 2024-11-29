'use client';

import UserTable from '@/app/components/admin/UserTable';

interface User {
  id: string;
  name: string | null;
  email: string | null;
  progress: number;
  quizResults: number;
  createdAt: Date;
}

export default function UsersPage() {
  // For now, we'll use mock data
  const users: User[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      progress: 75,
      quizResults: 85,
      createdAt: new Date('2024-01-01'),
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      progress: 90,
      quizResults: 95,
      createdAt: new Date('2024-01-02'),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-medium">Users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}
