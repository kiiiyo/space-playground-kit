import { NextResponse } from 'next/server';
import { dummyUser } from './__mock__';

export async function GET() {
  try {
    return NextResponse.json({
      users: dummyUser,
      total: dummyUser.length,
    });
  } catch {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
