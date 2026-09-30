"use client";

export default function AnalyzeButton({
  onClick,
  loading,
}) {
  return (
    <div className="mt-6 flex justify-center">

      <button
        onClick={onClick}
        disabled={loading}
        className="flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Analyzing...
          </>
        ) : (
          <>
            ⚡
            Analyze Complexity
          </>
        )}
      </button>

    </div>
  );
}