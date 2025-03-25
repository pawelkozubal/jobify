'use client'
import { ThemeProvider } from "@/components/Theme-Provider"

function Providers({children}:{children: React.ReactNode}) {
  return (
    <>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
       {children} 
    </ThemeProvider>
    
    </>
  )
}

export default Providers