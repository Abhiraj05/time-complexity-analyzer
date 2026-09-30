export default function LineAnalysis({ points }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-lg font-semibold">
        Line-by-Line Analysis
      </h2>

      <div className="mt-5 space-y-3">

        {points.map((point, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-800 bg-slate-950 p-4"
          >
            <div className="flex gap-3">

              <span className="font-mono text-sm text-indigo-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="text-sm leading-6 text-slate-300">
                {point}
              </p>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}