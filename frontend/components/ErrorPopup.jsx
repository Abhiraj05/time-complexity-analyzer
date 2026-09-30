"use client";

export default function ErrorPopup({
  message,
  onClose,
}) {
  if (!message) {
    return null;
  }

  return (
    <div className="fixed right-5 top-5 z-50 w-95">

      <div className="rounded-2xl border border-red-500/20 bg-slate-900 p-5 shadow-2xl">

        <div className="flex items-start gap-4">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
            !
          </div>

          <div className="flex-1">

            <h3 className="font-semibold text-white">
              Analysis Failed
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-400">
              {message}
            </p>

          </div>

          <button
            onClick={onClose}
            className="text-slate-500 hover:text-white"
          >
            ✕
          </button>

        </div>

      </div>

    </div>
  );
}