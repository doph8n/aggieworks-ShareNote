import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Clock } from "lucide-react"

export default function MyNotesPage() {
  const notes = [
    {
      id: "1",
      name: "Introduction to Computer Science",
      crn: "CS101",
      author: "Doe",
      updatedAt: "2025-04-06",
      attachment:
      link:
    },
  ]

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Notes</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <Link href={`/mynotes/${note.id}`} key={note.id} className="block group">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="group-hover:text-blue-600 transition-colors">{note.name}</CardTitle>
                        <CardDescription>
                          {note.crn} • {note.author}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="h-24 bg-gray-50 rounded-md flex items-center justify-center">
                      <FileText className="h-8 w-8 text-gray-400" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{new Date(note.updatedAt).toLocaleDateString()}</span>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="recent" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes
              .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
              .map((note) => (
                <Link href={`/mynotes/${note.id}`} key={note.id} className="block group">
                  <Card className="h-full transition-all hover:shadow-md">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <CardTitle className="group-hover:text-blue-600 transition-colors">{note.name}</CardTitle>
                          <CardDescription>
                            {note.crn} • {note.author}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <div className="h-24 bg-gray-50 rounded-md flex items-center justify-center">
                        <FileText className="h-8 w-8 text-gray-400" />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{new Date(note.updatedAt).toLocaleDateString()}</span>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="starred" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes
              .map((note) => (
                <Link href={`/mynotes/${note.id}`} key={note.id} className="block group">
                  <Card className="h-full transition-all hover:shadow-md">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <CardTitle className="group-hover:text-blue-600 transition-colors">{note.name}</CardTitle>
                          <CardDescription>
                            {note.crn} • {note.author}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <div className="h-24 bg-gray-50 rounded-md flex items-center justify-center">
                        <FileText className="h-8 w-8 text-gray-400" />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{new Date(note.updatedAt).toLocaleDateString()}</span>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="shared" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes
              .map((note) => (
                <Link href={`/mynotes/${note.id}`} key={note.id} className="block group">
                  <Card className="h-full transition-all hover:shadow-md">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <CardTitle className="group-hover:text-blue-600 transition-colors">{note.name}</CardTitle>
                          <CardDescription>
                            {note.crn} • {note.author}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <div className="h-24 bg-gray-50 rounded-md flex items-center justify-center">
                        <FileText className="h-8 w-8 text-gray-400" />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{new Date(note.updatedAt).toLocaleDateString()}</span>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

