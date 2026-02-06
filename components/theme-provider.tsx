'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', String(newMode))
    document.documentElement.classList.toggle('dark', newMode)
  }

  return (
    <>
      {children}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </>
  )
}
