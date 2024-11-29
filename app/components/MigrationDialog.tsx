import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function MigrationDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { data: session } = useSession();
  const router = useRouter();

  const handleMigration = async () => {
    if (!session?.user) {
      setError('Please sign in to migrate your data');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Collect all localStorage data
      const localData = {
        progress: JSON.parse(localStorage.getItem('pathforge_progress') || '{}'),
        quizResults: JSON.parse(localStorage.getItem('pathforge_quiz_results') || '{}'),
        challengeResults: JSON.parse(localStorage.getItem('pathforge_challenge_results') || '{}'),
        preferences: JSON.parse(localStorage.getItem('pathforge_preferences') || '{}'),
      };

      const response = await fetch('/api/migration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(localData),
      });

      if (!response.ok) {
        throw new Error('Migration failed');
      }

      // Clear localStorage after successful migration
      localStorage.removeItem('pathforge_progress');
      localStorage.removeItem('pathforge_quiz_results');
      localStorage.removeItem('pathforge_challenge_results');
      localStorage.removeItem('pathforge_preferences');

      setIsOpen(false);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Migration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Migrate Local Progress
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded-lg bg-white p-6">
            <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 mb-4">
              Migrate Local Progress
            </Dialog.Title>

            <p className="text-sm text-gray-500 mb-4">
              This will migrate your locally stored progress to your account. After migration,
              you'll be able to access your progress from any device.
            </p>

            {error && (
              <p className="text-sm text-red-600 mb-4">
                {error}
              </p>
            )}

            <div className="mt-4 flex justify-end space-x-2">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className={`inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                  isLoading
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
                onClick={handleMigration}
                disabled={isLoading}
              >
                {isLoading ? 'Migrating...' : 'Start Migration'}
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
