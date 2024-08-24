import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(request: NextRequestWithAuth) {
        console.log(request.nextUrl.pathname);
        console.log(request.nextauth.token);

        if (request.nextUrl.pathname.startsWith("/admindashboard") && request.nextauth.token?.role !== "admin") {
            return NextResponse.rewrite(new URL("/denied", request.url));
        }

        if(request.nextUrl.pathname.startsWith("/sales") && request.nextauth.token?.role !== "admin" && request.nextauth.token?.role !== "SalesEmployee") {
            return NextResponse.rewrite(new URL("/denied", request.url));
        }
        if(request.nextUrl.pathname.startsWith("/QualityAssuarance") && request.nextauth.token?.role !== "admin" && request.nextauth.token?.role !== "QAEmployee"){
            return NextResponse.rewrite(new URL("/denied", request.url));
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
);

export const config = { matcher: ["/admindashboard","/sales", "/QualityAssuarance","/dashboard"] };
