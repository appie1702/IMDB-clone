'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

const Providers = ({children}) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='dark:text-gray-200 text-gray-800 transition-colors 
        duration-700 min-h-screen select-none'>
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Providers