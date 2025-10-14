export default function GlobalWondersSite() {
  return (
    <div className='min-h-screen bg-white text-slate-900'>
      <header className='sticky top-0 z-50 backdrop-blur bg-white/80 border-b'>
        <div className='mx-auto max-w-7xl px-4 py-3 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img src='/logo.png' alt='GlobalWonders Logo' className='h-12 w-auto bg-white rounded-md p-1 shadow-sm'/>
          </div>
          <nav className='hidden md:flex items-center gap-6 text-sm'>
            <a href='#home' className='hover:text-[#1B7A72]'>Home</a>
            <a href='#about' className='hover:text-[#1B7A72]'>About</a>
            <a href='#solutions' className='hover:text-[#1B7A72]'>Solutions</a>
            <a href='#insights' className='hover:text-[#1B7A72]'>Insights</a>
            <a href='#contact' className='px-3 py-1.5 rounded-xl bg-[#1B7A72] text-white hover:opacity-90'>Contact</a>
          </nav>
        </div>
      </header>
      <main className='p-8 text-center'>
        <h1 className='text-4xl font-semibold text-[#1B7A72]'>GlobalWonders Website</h1>
        <p className='mt-4 text-slate-600'>This is your Vercel-ready Next.js + Tailwind build.</p>
      </main>
    </div>
  );
}
