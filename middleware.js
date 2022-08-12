import { NextResponse } from 'next/server'

export function middleware(request) {
  console.log('Hi from middleware! url:', request.url)
  return NextResponse.next()
}

export const config = { matcher: '/about' }
