import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // For now, we'll just redirect /dashboard to /products
  // Later we can add proper authentication checks here
  if (request.nextUrl.pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/products", request.url));
  }
}

export const config = {
  matcher: ["/dashboard"],
};