'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    // Changed min-h to screen and w-full for full-page coverage
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white p-6 text-center animate-in fade-in duration-500">
      
      {/* Animated Icon Wrapper */}
      <div className="relative mb-6">
        <div className="absolute inset-0 animate-ping rounded-full bg-red-100 opacity-75"></div>
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-600">
          <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>
      </div>

      <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
        Something went wrong
      </h1>
      
      <p className="mb-10 max-w-lg text-lg text-slate-500">
        We encountered an unexpected error. Don't worry, your data is safe. 
        Please try refreshing the section or contact support if the issue persists.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          onClick={() => reset()}
          className="min-w-[140px] rounded-full bg-slate-900 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95"
        >
          Try Again
        </button>
        
        <button
          onClick={() => window.location.reload()}
          className="min-w-[140px] rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-bold text-slate-700 transition-all hover:bg-slate-50 active:scale-95"
        >
          Refresh Page
        </button>
      </div>

      {/* Error Code/Digest Footer */}
      <div className="mt-16 border-t border-slate-100 pt-8">
        <p className="text-xs uppercase tracking-widest text-slate-400">
          Error ID: <span className="font-mono font-medium text-slate-600">{error.digest || 'N/A'}</span>
        </p>
      </div>
    </div>
  )
}
