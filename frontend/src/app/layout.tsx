import type React from "react"
import Link from "next/link"
import type { Metadata } from "next"
import NoteSubmission from "@/components/notes/note-submission"
import { Inter } from "next/font/google"
import "./globals.css"
import SearchBar from "@/components/search/searchbar"
import { Settings } from "lucide-react"
import UserAvatar from "@/components/user/user-avatar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ShareNotes",
  description: "Share and collaborate on notes",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full m-0 p-0`}>
        <header className="w-full border-b bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="font-bold text-xl no-underline text-black">
                ShareNotes
              </Link>
            </div>

            <div className="hidden md:block">
              <SearchBar />
            </div>

            <div className="flex items-center gap-4">
              <NoteSubmission />
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto p-4 sm:p-6">{children}</main>
      </body>
    </html>
  )
}

