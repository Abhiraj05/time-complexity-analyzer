const languages = [
  {
    name: "Python",
    value: "python",
  },
  {
    name: "JavaScript",
    value: "javascript",
  },
  {
    name: "Java",
    value: "java",
  },
  {
    name: "C++",
    value: "cpp",
  },
  {
    name: "C",
    value: "c",
  },
  {
    name: "C#",
    value: "csharp",
  },
];

export default function LanguageSelector() {
  return (
    <div className="mb-4 flex justify-center">
      <div className="flex flex-wrap gap-2">
        {languages.map((item) => (
          <button
            key={item.value}
            className="rounded-xl border px-4 py-2 text-sm transition border-indigo-500 bg-indigo-500/10 text-indigo-400"
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
