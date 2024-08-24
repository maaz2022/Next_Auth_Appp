import Link from "next/link"

export default function Navbar() {
    return (
        <header className="flex justify-between bg-gray-600 p-4 text-white text-2xl">
            <div>
                <Link href='/'>Auth Testing</Link>
            </div>
            <nav className="">
            <ul className="flex gap-6">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/api/auth/signin">Sign In</Link></li>
                <li><Link href="/api/auth/signout">Sign Out</Link></li>
                <li><Link href="/QualityAssuarance">QA</Link></li>
                <li><Link href="/sales">Sales</Link></li>
                <li><Link href="/student">student</Link></li>
                <li><Link href="/admindashboard">Admin Dashboard</Link></li>
            </ul>
        </nav>
        </header>
    )
}

