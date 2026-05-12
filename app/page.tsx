'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFBF2]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFBF2]/90 backdrop-blur-sm border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✈️</span>
            <span className="text-xl font-medium text-stone-800" style={{fontFamily:'Georgia,serif'}}>Togather</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth" className="text-sm text-stone-600 hover:text-stone-900">Sign in</Link>
            <Link href="/auth?signup=true" className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors">Start a trip</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
          <span>✨</span><span>Now in early access</span>
        </div>
        <h1 className="text-5xl sm:text-7xl text-stone-900 leading-tight mb-6 max-w-4xl mx-auto" style={{fontFamily:'Georgia,serif'}}>
          Your trips,<br/><span className="text-orange-500">remembered</span><br/>together.
        </h1>
        <p className="text-xl text-stone-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Track shared expenses, capture photos and moments, settle up fairly —
          then get a beautiful shareable story of your trip.
          <br/><span className="text-stone-400 text-base">No app download needed.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/auth?signup=true" className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-full text-base transition-all hover:shadow-lg">Start your first trip →</Link>
          <Link href="/recap/demo" className="bg-white border border-stone-200 hover:border-stone-300 text-stone-700 font-medium px-8 py-4 rounded-full text-base transition-colors">See a sample trip</Link>
        </div>
      </section>

      <section className="border-y border-stone-100 bg-white py-10 px-6">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[['0','App downloads required'],['1','Link to share with your group'],['∞','Memories captured']].map(([v,l])=>(
            <div key={l}><div className="text-4xl text-orange-500 mb-1" style={{fontFamily:'Georgia,serif'}}>{v}</div><div className="text-sm text-stone-500">{l}</div></div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl text-stone-900 text-center mb-4" style={{fontFamily:'Georgia,serif'}}>Built for the way people actually travel</h2>
          <p className="text-stone-500 text-center mb-16 max-w-xl mx-auto">Not just who owes who. The whole trip — every meal, every moment, every memory.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {icon:'💸',title:'Split without the stress',desc:'Add expenses as you go. Multi-currency, automatic conversion, and smart settlement.'},
              {icon:'📸',title:'Capture every moment',desc:'Attach photos to expenses. Build a visual timeline of your trip day by day.'},
              {icon:'✨',title:'Share your story',desc:'Every trip becomes a beautiful shareable page — photos, stats, highlights, memories.'},
            ].map(f=>(
              <div key={f.title} className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm hover:shadow-md transition-all">
                <div className="text-4xl mb-5">{f.icon}</div>
                <h3 className="text-xl text-stone-900 mb-3" style={{fontFamily:'Georgia,serif'}}>{f.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-br from-orange-500 to-amber-500">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl text-white mb-4" style={{fontFamily:'Georgia,serif'}}>Got a trip coming up?</h2>
          <p className="text-orange-100 mb-8">Join early access — free for your first three trips.</p>
          <Link href="/auth?signup=true" className="inline-flex bg-white text-orange-500 font-semibold px-8 py-4 rounded-full hover:bg-orange-50 transition-colors">
            Start planning for free →
          </Link>
        </div>
      </section>

      <footer className="bg-stone-900 text-stone-400 py-12 px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-xl">✈️</span>
          <span className="text-stone-300" style={{fontFamily:'Georgia,serif'}}>Togather</span>
        </div>
        <div className="text-sm">withtogather.com · Built for people who travel together</div>
      </footer>
    </div>
  )
}
