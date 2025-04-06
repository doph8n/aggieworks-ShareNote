"use client"
import type React from "react"
import { useState } from "react"
import { Search, X } from "lucide-react"

export default function SearchBar() {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const handleClear = () => {
    setQuery("")
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", query)
    // Implement your search functionality here
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-4 h-4 text-gray-500" />
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full pl-10 pr-10 py-2 border-2 rounded-md text-sm transition-all duration-200 ${
            isFocused ? "border-blue-500 ring-2 ring-blue-100" : "border-gray-200 hover:border-gray-300"
          }`}
          placeholder="Search notes..."
        />
        {query && (
          <button type="button" onClick={handleClear} className="absolute inset-y-0 right-0 flex items-center pr-3">
            <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
            <span className="sr-only">Clear search</span>
          </button>
        )}
      </div>
    </form>
  )
}


