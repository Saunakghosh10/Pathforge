import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // Get response
  const response = NextResponse.next()
 
  // Remove Vercel-related headers
  response.headers.delete('x-vercel')
  response.headers.delete('x-vercel-id')
  response.headers.delete('x-vercel-cache')
  response.headers.delete('x-vercel-trace')
  
  return response
}
