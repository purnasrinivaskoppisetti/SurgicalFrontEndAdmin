import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token");

  const protectedRoutes = [
    "/dashboard",
    "/products",
    "/orders",
    "/customers",
    "/inventory",
    "/categories",
    "/reviews",
    "/coupons",
    "/settings",
  ];

  const pathname = request.nextUrl.pathname;

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // If user is not logged in and tries to access protected routes
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If user is already logged in and tries to open login page
  if (token && pathname === "/") {
    return NextResponse.redirect(
      new URL("/dashboard", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/products/:path*",
    "/orders/:path*",
    "/customers/:path*",
    "/inventory/:path*",
    "/categories/:path*",
    "/reviews/:path*",
    "/coupons/:path*",
    "/settings/:path*",
    "/",
  ],
};