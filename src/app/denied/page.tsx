import Link from "next/link";

export default function Denied() {
    return (
        <section className="flex flex-col gap-12 items-center">
            <h1 className="text-5xl">Access Denied</h1>
            <p>You are  logged in, but you do not have permission to access this page.</p>
            <Link href='/' className="text-red-600 underline ">Return to home page</Link>
        </section>
    )
}