import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "../components/UserCard"
import { redirect } from "next/navigation"

export default async function QAPage() {
    const session = await getServerSession(options)

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/qualityassuarance')
    }

    return (
        <section className="flex flex-col gap-6">
            <UserCard user={session?.user} pagetype={"QA"} />
        </section>
    )

}
