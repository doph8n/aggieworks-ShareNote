"use client"

import { useState, KeyboardEvent, useCallback } from "react"
import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

interface TagInputProps {
  tags: string[]
  setTags: (tags: string[]) => void
  placeholder?: string
}

export function TagInput({ tags, setTags, placeholder = "Add tag..." }: TagInputProps) {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const addTag = (tag: string) => {
    const trimmedTag = tag.trim()
    if (trimmedTag && !tags.includes(trimmedTag)) {
      setTags([...tags, trimmedTag])
      setInputValue("")
    }
  }

  // Memoize the removeTag function to ensure it's stable
  const removeTag = useCallback((indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove))
  }, [tags, setTags])

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      addTag(inputValue)
    }
  }

  const handleBlur = () => {
    if (inputValue) {
      addTag(inputValue)
    }
  }

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-wrap gap-2 min-h-9 p-1 border rounded-md">
        {tags.map((tag, index) => (
          <Badge key={`${tag}-${index}`} variant="secondary" className="flex items-center gap-1 px-3">
            {tag}
            <button
              type="button"
              onClick={() => removeTag(index)}
              className="ml-1 rounded-full outline-none focus:ring-2 focus:ring-offset-1"
              aria-label={`Remove ${tag}`}
            >
              <X className="h-3 w-3 cursor-pointer hover:text-destructive" />
            </button>
          </Badge>
        ))}
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          className="flex-grow border-0 p-0 pl-1 focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder={tags.length === 0 ? placeholder : ""}
        />
      </div>
      <p className="text-xs text-muted-foreground">
        Press Enter or comma to add a tag
      </p>
    </div>
  )
}
