'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function AuthPage() {
  const [mode, setMode] = useState<'signin'|'signup'>('signup')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  return (
    <div className="min-h-screen bg-[#FFFBF2] flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="text-3xl">✈️</span>
            <span className="text-2xl text-stone-800" style={{fontFamily:'Georgia,serif'}}>Togather</span>
          </Link>
          <h1 className="mt-4 text-2xl text-stone-900" style={{fontFamily:'Georgia,serif'}}>
            {mode==='signup' ? 'Start your journey' : 'Welcome back'}
          </h1>
        </div>
        <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-8">
          <div className="space-y-4">
            {mode==='signup' && (
              <div>
                <label className="block text-xs font-medium text-stone-500 mb-1.5">Your name</label>
                <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="e.g. Sarah"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm outline-none focus:border-orange-300 transition-colors" />
              </div>
            )}
            <div>
              <label className="block text-xs font-medium text-stone-500 mb-1.5">Email</label>
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm outline-none focus:border-orange-300 transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-500 mb-1.5">Password</label>
              <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="At least 8 characters"
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm outline-none focus:border-orange-300 transition-colors" />
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3.5 rounded-full transition-colors text-sm">
              {mode==='signup' ? 'Create account →' : 'Sign in →'}
            </button>
          </div>
          <div className="mt-6 text-center text-sm text-stone-500">
            {mode==='signup' ? (<>Already have an account?{' '}<button onClick={()=>setMode('signin')} className="text-orange-500 font-medium">Sign in</button></>) 
            : (<>No account?{' '}<button onClick={()=>setMode('signup')} className="text-orange-500 font-medium">Sign up free</button></>)}
          </div>
        </div>
      </div>
    </div>
  )
}
