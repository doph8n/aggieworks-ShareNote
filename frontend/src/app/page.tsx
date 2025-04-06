import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Share2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import NoteSubmission from "@/components/notes/note-submission"
import ScrollToTop from "@/components/scroll/scrolltotop"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <ScrollToTop />

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Share Your Knowledge, Amplify Your Learning
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ShareNotes makes it easy to create, organize, and share your course notes with classmates and study
                  groups.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <NoteSubmission />
                <Link href="/notes">
                  <Button variant="outline" className="gap-1">
                    Browse Notes <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-square">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="ShareNotes illustration"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Why Choose ShareNotes?</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform is designed to make note-sharing seamless and collaborative.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg bg-white shadow-sm">
              <div className="p-3 rounded-full bg-gray-100">
                <BookOpen className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold">Organized Notes</h3>
              <p className="text-gray-500 text-center">
                Easily organize notes by course, topic, or date for quick access.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg bg-white shadow-sm">
              <div className="p-3 rounded-full bg-gray-100">
                <Share2 className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold">Simple Sharing</h3>
              <p className="text-gray-500 text-center">Share your notes with classmates with just a few clicks.</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg bg-white shadow-sm">
              <div className="p-3 rounded-full bg-gray-100">
                <Users className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold">Collaborative Learning</h3>
              <p className="text-gray-500 text-center">
                Learn together by accessing and building on each other's knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">How It Works</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get started with ShareNotes in three simple steps.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="relative flex flex-col items-center space-y-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-900 font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold">Create Notes</h3>
              <p className="text-gray-500 text-center">
                Upload your notes with course details and optional attachments.
              </p>
            </div>
            <div className="relative flex flex-col items-center space-y-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-900 font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold">Organize</h3>
              <p className="text-gray-500 text-center">
                Categorize your notes by course, topic, or any other criteria.
              </p>
            </div>
            <div className="relative flex flex-col items-center space-y-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-900 font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold">Share & Collaborate</h3>
              <p className="text-gray-500 text-center">Share with classmates and collaborate on study materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Ready to Start Sharing?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                 Submit notes now with ShareNotes.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <NoteSubmission />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
