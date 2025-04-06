"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FileUploaderProps {
  file: File | null
  setFile: (file: File | null) => void
}

export function FileUploader({ file, setFile }: FileUploaderProps) {
  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const acceptedFileTypes = [
    "application/pdf",
    "text/markdown",
    "text/plain",
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
  ]

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0]
      validateAndSetFile(droppedFile)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0])
    }
  }

  const validateAndSetFile = (file: File) => {
    if (acceptedFileTypes.includes(file.type)) {
      setFile(file)
    } else {
      alert("File type not supported. Please upload a PDF, Markdown, text file, or image.")
    }
  }

  const onButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const removeFile = () => {
    setFile(null)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  return (
    <div className="w-full">
      {!file ? (
        <div
          className={`flex flex-col items-center justify-center w-full border-2 border-dashed rounded-lg p-6 transition-colors ${
            dragActive ? "border-primary bg-primary/5" : "border-gray-300 dark:border-gray-700"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="h-10 w-10 text-gray-400 mb-2" />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">PDF, Markdown, Text, or Image files</p>
          <input
            ref={inputRef}
            onChange={handleChange}
            type="file"
            className="hidden"
            accept={acceptedFileTypes.join(",")}
          />
          <Button type="button" variant="outline" size="sm" onClick={onButtonClick} className="mt-4">
            Select File
          </Button>
        </div>
      ) : (
        <div className="flex items-center justify-between p-3 border rounded-lg">
          <div className="flex items-center overflow-hidden">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary/10 rounded-md">
              <Upload className="h-5 w-5 text-primary" />
            </div>
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium truncate">{file.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{(file.size / 1024).toFixed(2)} KB</p>
            </div>
          </div>
          <Button type="button" variant="ghost" size="icon" onClick={removeFile} className="flex-shrink-0">
            <X className="h-4 w-4" />
            <span className="sr-only">Remove file</span>
          </Button>
        </div>
      )}
    </div>
  )
}

