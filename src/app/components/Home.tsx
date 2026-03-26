import React from "react";

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

          {/* Title */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl text-foreground mb-4 tracking-tight whitespace-nowrap font-semibold">
                林欣萱 Fresh Lin
              </h1>
              <p className="text-base text-muted-foreground tracking-wide">
                Digital Marketing / Data-Driven
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="pt-8">
            <div className="inline-block mb-8 px-6 py-2 bg-white rounded-full border border-gray-200">
              <span className="text-xs text-muted-foreground tracking-widest uppercase">
                Contact
              </span>
            </div>

            <div className="space-y-4 text-sm">

              {/* Location */}
              <div className="flex items-center justify-center gap-3 text-foreground">
                <span>📍</span>
                <span>新北市, 新店區</span>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-center gap-3 text-foreground">
                <span>📞</span>
                <span>0970-530023</span>
              </div>

              {/* Email */}
              <div className="flex items-center justify-center gap-3 text-foreground">
                <span>✉️</span>
                <a href="mailto:yuam94058@gmail.com" className="hover:underline">
                  yuam94058@gmail.com
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center justify-center gap-3 text-foreground">
                <span>🔗</span>
                <a
                  href="https://www.linkedin.com/in/freshlin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/freshlin
                </a>
              </div>

            </div>
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
