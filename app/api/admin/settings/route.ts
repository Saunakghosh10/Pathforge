import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const settings = await prisma.settings.findFirst();
    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch settings' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    
    const settings = await prisma.settings.upsert({
      where: {
        id: '1', // Single settings record
      },
      update: {
        siteName: data.siteName,
        siteDescription: data.siteDescription,
        maintenanceMode: data.maintenanceMode,
        allowRegistration: data.allowRegistration,
        emailNotifications: data.emailNotifications,
        analyticsEnabled: data.analyticsEnabled,
      },
      create: {
        id: '1',
        siteName: data.siteName,
        siteDescription: data.siteDescription,
        maintenanceMode: data.maintenanceMode,
        allowRegistration: data.allowRegistration,
        emailNotifications: data.emailNotifications,
        analyticsEnabled: data.analyticsEnabled,
      },
    });

    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error updating settings:', error);
    return NextResponse.json(
      { error: 'Failed to update settings' },
      { status: 500 }
    );
  }
}
