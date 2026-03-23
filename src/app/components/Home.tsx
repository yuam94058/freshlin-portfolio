export function Home() {
  return (
    <div className="min-h-[calc(100vh-60px)] flex flex-col bg-background">
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full text-center space-y-16">
          {/* Quote */}
          <p className="text-xs italic text-muted-foreground tracking-widest">
            " PLEASURE IN THE JOB PUTS PERFECTION IN THE WORK. "
          </p>

          {/* Icon + Title */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl text-foreground mb-4 tracking-tight whitespace-nowrap font-semibold">
                林欣萱 Fresh Lin
              </h1>
              <p className="text-base text-muted-foreground tracking-wide">Digital Marketing / Data-Driven</p>
            </div>
          </div>

{/* Contact Info */}
<div className="pt-8">
  <div className="inline-block mb-8 px-6 py-2 bg-white rounded-full border border-gray-200">
    <span className="text-xs text-muted-foreground tracking-widest uppercase">Contact</span>
  </div>

  <div className="space-y-4 text-sm">
    {/* Location */}
    <div className="flex items-center justify-center gap-3 text-foreground">
      <svg className="w-4 h-4 text-muted-foreground flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span>新北市, 新店區</span>
    </div>

    {/* Phone */}
    <div className="flex items-center justify-center gap-3 text-foreground">
      <svg className="w-4 h-4 text-muted-foreground flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <span>0970-530023</span>
    </div>

    {/* Email */}
    <div className="flex items-center justify-center gap-3 text-foreground">
      <svg className="w-4 h-4 text-muted-foreground flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <a
        href="mailto:yuam94058@gmail.com"
        className="hover:underline"
      >
        yuam94058@gmail.com
      </a>
    </div>

    {/* LinkedIn */}
    <div className="flex items-center justify-center gap-3 text-foreground">
      <svg className="w-4 h-4 text-muted-foreground flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
      <a
        href="https://www.linkedin.com/in/freshlin"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        www.linkedin.com/in/freshlin
      </a>
    </div>
  </div>
</div>

      {/* Footer */}
      <footer className="py-6 px-6 text-center text-xs text-muted-foreground border-t border-gray-200 italic">
        © 2026 Fresh Lin
      </footer>
    </div>
  );
}
