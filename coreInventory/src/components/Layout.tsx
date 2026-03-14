import React from 'react'
import { ThemeProvider } from '@/components/theme-provider'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-inter font-sans antialiased">
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </div>
  )
}