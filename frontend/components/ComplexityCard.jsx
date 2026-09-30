export default function ComplexityCard({
  title,
  value,
  description,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3 className="mt-3 font-mono text-4xl font-bold text-white">
        {value}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {description}
      </p>

    </div>
  );
}