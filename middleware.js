// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   const { pathname } = request.nextUrl;

//   // Check if the user is authenticated and their role
//   const user = JSON.parse(localStorage.getItem('user')); // Assuming you store user info in localStorage

//   // Define public routes
//   const publicRoutes = ['/login', '/register'];

//   // Define admin routes
//   const adminRoutes = ['/admin'];

//   // If the user is not authenticated and tries to access a private route, redirect to login
//   if (!user && !publicRoutes.includes(pathname)) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   // If the user is authenticated but tries to access a public route, redirect to home
//   if (user && publicRoutes.includes(pathname)) {
//     return NextResponse.redirect(new URL('/', request.url));
//   }

//   // If the user is not an admin and tries to access an admin route, redirect to home
//   if (user && user.role !== 'admin' && adminRoutes.includes(pathname)) {
//     return NextResponse.redirect(new URL('/', request.url));
//   }

//   return NextResponse.next();
// }

// // Define the routes that the middleware should run on
// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };