export default function Notes({ notes }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-lg font-semibold">
        Notes & Assumptions
      </h2>

      <div className="mt-5 space-y-3">

        {notes.map((note, index) => (
          <div
            key={index}
            className="flex gap-3 text-sm leading-6 text-slate-400"
          >
            <span className="text-indigo-400">
              •
            </span>

            <span>
              {note}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}