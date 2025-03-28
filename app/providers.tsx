'use client'
import { ThemeProvider } from "@/components/Theme-Provider";
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from '@/components/ui/toaster';

function Providers({children}:{children: React.ReactNode}) {

  const [queryclient] = useState(()=>{
    return new QueryClient({
      defaultOptions:{
        queries:{
          staleTime: 60 * 1000 * 5,
        }
      },
    });
  });
  return (
    <>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Toaster />
      <QueryClientProvider client={queryclient}> 
        {children} 
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
       
    </ThemeProvider>
    
    </>
  )
}

export default Providers