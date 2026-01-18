import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("session_token")?.value;

  const { pathname } = request.nextUrl;
  if (pathname === "/add-items" && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-items", "/login"],
};
