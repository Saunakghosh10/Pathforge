import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();

    const roadmap = await prisma.roadmap.create({
      data: {
        title: data.title,
        description: data.description,
        difficulty: data.difficulty || 'BEGINNER',
        timeCommitment: data.timeCommitment || 'MEDIUM',
        estimatedHours: data.estimatedHours || 40,
        topics: {
          create: data.topics,
        },
      },
    });

    return NextResponse.json(roadmap);
  } catch (error) {
    console.error('Error creating roadmap:', error);
    return NextResponse.json({ error: 'Failed to create roadmap' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const roadmaps = await prisma.roadmap.findMany({
      include: {
        topics: true,
      },
    });

    return NextResponse.json(roadmaps);
  } catch (error) {
    console.error('Error fetching roadmaps:', error);
    return NextResponse.json({ error: 'Failed to fetch roadmaps' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const { id, ...updateData } = data;

    const roadmap = await prisma.roadmap.update({
      where: { id },
      data: {
        ...updateData,
        topics: updateData.topics ? {
          deleteMany: {},
          create: updateData.topics,
        } : undefined,
      },
    });

    return NextResponse.json(roadmap);
  } catch (error) {
    console.error('Error updating roadmap:', error);
    return NextResponse.json({ error: 'Failed to update roadmap' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Roadmap ID is required' }, { status: 400 });
    }

    await prisma.roadmap.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting roadmap:', error);
    return NextResponse.json({ error: 'Failed to delete roadmap' }, { status: 500 });
  }
}
