"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 text-center sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl animate-pulse" />

        <div className="absolute left-[15%] top-1/2 h-40 w-40 rounded-full bg-purple-600/10 blur-3xl" />

        <div className="absolute right-[15%] top-1/3 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mb-6 flex justify-center">
        <div className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
          AI-Powered Code Analysis
        </div>
      </div>

      <h1 className="floating-heading mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
        Analyze Your Code
        <br />
        <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Time Complexity
        </span>
      </h1>

      <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
        Paste your code and let AI analyze its time complexity, space
        complexity, and explain the algorithm step by step.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <span className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 transition hover:-translate-y-1 hover:border-blue-500/50 hover:text-blue-400">
          O(n)
        </span>

        <span className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 transition hover:-translate-y-1 hover:border-purple-500/50 hover:text-purple-400">
          O(log n)
        </span>

        <span className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 transition hover:-translate-y-1 hover:border-cyan-500/50 hover:text-cyan-400">
          O(n²)
        </span>

        <span className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 transition hover:-translate-y-1 hover:border-green-500/50 hover:text-green-400">
          O(1)
        </span>
      </div>

      <div className="mt-14 text-slate-600">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-[0.3em]">
            Start analyzing
          </span>

          <div className="h-8 w-px animate-pulse bg-linear-to-b from-blue-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}
