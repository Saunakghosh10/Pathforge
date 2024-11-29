import { prisma } from '@/lib/prisma';
import SettingsForm from '../../components/admin/SettingsForm';

async function getSettings() {
  const settings = await prisma.settings.findFirst();
  return settings || {
    siteName: 'PathForge',
    siteDescription: 'Interactive learning platform for developers',
    maintenanceMode: false,
    allowRegistration: true,
    emailNotifications: true,
    analyticsEnabled: true
  };
}

export const dynamic = 'force-dynamic';

export default async function SettingsPage() {
  const settings = await getSettings();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      
      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          <SettingsForm initialSettings={settings} />
        </div>
      </div>
    </div>
  );
}
