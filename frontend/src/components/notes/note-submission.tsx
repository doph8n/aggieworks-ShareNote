"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileUploader } from "./file-uploader"
import { TagInput } from "./taginput"

export default function NoteSubmission() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    crn: "",
    author: "",
    description: "",
  })
  const [tags, setTags] = useState<string[]>([])
  const [file, setFile] = useState<File | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const submitData = new FormData()
    submitData.append("name", formData.name)
    submitData.append("crn", formData.crn)
    submitData.append("author", formData.author)

    if (formData.description) {
      submitData.append("description", formData.description)
    }

    if (tags.length > 0) {
      submitData.append("tags", JSON.stringify(tags))
    }

    if (file) {
      submitData.append("file", file)
    }

    try {
      const response = await fetch('http://' {
        method: 'POST',
        body: submitData,
      })
    if (!response.ok) {
        throw Error('Failed to submit note')
      }
    

    setFormData({ name: "", crn: "", author: "", description: "" })
    setTags([])
    setFile(null)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="px-6">Submit Note</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Submit a Note</DialogTitle>
            <DialogDescription>
              Fill in the details to submit your note. Required fields are marked with an asterisk (*).
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name*
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="crn" className="text-right">
                Course ID*
              </Label>
              <Input
                id="crn"
                name="crn"
                value={formData.crn}
                onChange={handleInputChange}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="author" className="text-right">
                Author*
              </Label>
              <Input
                id="author"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="Optional description of your note"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tags" className="text-right">
                Tags
              </Label>
              <div className="col-span-3">
                <TagInput 
                  tags={tags} 
                  setTags={setTags} 
                  placeholder="Add subject tags (e.g., midterm, chapter1)..." 
                />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Attachment</Label>
              <div className="col-span-3">
                <FileUploader file={file} setFile={setFile} />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}


