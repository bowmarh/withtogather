import Link from 'next/link'

export default function DemoRecap() {
  return (
    <div className="min-h-screen bg-[#FFFBF2]">
      <div className="bg-white border-b border-stone-100 px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-sm text-stone-400 hover:text-stone-600">← Back to Togather</Link>
        <span className="text-xs bg-amber-50 border border-amber-200 text-amber-600 px-3 py-1 rounded-full">✨ Demo trip</span>
      </div>
      <div className="relative bg-gradient-to-br from-orange-400 via-red-400 to-pink-500 overflow-hidden">
        <div className="px-6 py-16 text-white max-w-3xl mx-auto">
          <div className="text-xs font-medium tracking-widest opacity-80 uppercase mb-2">🇪🇸 Granada, Spain</div>
          <h1 className="text-5xl sm:text-6xl mb-3" style={{fontFamily:'Georgia,serif'}}>Spain Squad 2026</h1>
          <p className="text-white/75 text-lg mb-6">Sarah · James · Emma · Tom</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 backdrop-blur rounded-full px-4 py-1.5">📅 14–21 June 2026</span>
            <span className="bg-white/20 backdrop-blur rounded-full px-4 py-1.5">7 days · 4 people</span>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-10 space-y-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[['💰','€2,049','Total spent'],['👤','€512','Per person'],['📝','31','Expenses'],['✨','12','Moments']].map(([e,v,l])=>(
            <div key={l} className="bg-white rounded-2xl p-5 border border-stone-100 text-center shadow-sm">
              <div className="text-2xl mb-1">{e}</div>
              <div className="text-2xl text-stone-900 mb-0.5" style={{fontFamily:'Georgia,serif'}}>{v}</div>
              <div className="text-xs text-stone-400">{l}</div>
            </div>
          ))}
        </div>
        <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6">
          <h2 className="text-xl text-stone-900 mb-4" style={{fontFamily:'Georgia,serif'}}>💸 Settlement</h2>
          <div className="space-y-2">
            {[['Emma','Sarah','€183'],['Tom','James','€129']].map(([f,t,a])=>(
              <div key={f} className="flex items-center gap-3 text-sm">
                <span className="font-semibold text-stone-700">{f}</span>
                <span className="text-stone-400">owes</span>
                <span className="font-semibold text-stone-700">{t}</span>
                <span className="ml-auto font-bold text-amber-700">{a}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-amber-200 text-xs text-amber-700 text-center">✅ Settled on 22 June 2026</div>
        </div>
        <div>
          <h2 className="text-2xl text-stone-900 mb-4" style={{fontFamily:'Georgia,serif'}}>📝 All expenses</h2>
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
            {[['🏨','Hotel Casa Bonita','James','Day 1','€1,240'],['🍽️','Dinner at La Mar','Sarah','Day 2','€187'],['🚗','Car rental','Emma','Day 1','€340'],['🎡','Alhambra tickets','Tom','Day 3','€68'],['🍷','Wine tasting','Sarah','Day 4','€120'],['🛒','Supermarket','James','Day 2','€94']].map(([em,n,p,d,a],i,arr)=>(
              <div key={n} className={`flex items-center gap-4 px-5 py-4 ${i<arr.length-1?'border-b border-stone-50':''}`}>
                <span className="text-2xl w-8 text-center">{em}</span>
                <div className="flex-1"><div className="text-sm font-medium text-stone-800">{n}</div><div className="text-xs text-stone-400">{p} · {d}</div></div>
                <div className="text-sm font-semibold text-green-700">{a}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-amber-400 rounded-3xl p-8 text-center text-white">
          <div className="text-3xl mb-3">✈️</div>
          <h2 className="
git add -A && git commit -m "✈️ Add auth and demo recap pages" && git push
cat app/page.tsx | head -5
cat > app/page.tsx << 'EOF'
export default function Home() {
  return (
    <main style={{fontFamily:'Georgia,serif', textAlign:'center', padding:'4rem', background:'#FFFBF2', minHeight:'100vh'}}>
      <div style={{fontSize:'3rem', marginBottom:'1rem'}}>✈️</div>
      <h1 style={{fontSize:'2.5rem', color:'#1C1917', marginBottom:'1rem'}}>Togather</h1>
      <p style={{color:'#78716C', fontSize:'1.1rem', marginBottom:'2rem'}}>Your trips, remembered together.</p>
      <a href="/auth" style={{background:'#F97316', color:'white', padding:'0.75rem 2rem', borderRadius:'9999px', textDecoration:'none', fontFamily:'system-ui'}}>Start a trip →</a>
    </main>
  )
}
