"use client";

import Editor from "@monaco-editor/react";

export default function CodeEditor({ code, setCode, language, setLanguage }) {
  const detectLanguage = (code) => {
    if (!code.trim()) {
      return "plaintext";
    }

    // Python
    if (
      /\bdef\s+\w+\s*\(/.test(code) ||
      /\bimport\s+\w+/.test(code) ||
      /\bfrom\s+\w+\s+import\b/.test(code) ||
      /\bprint\s*\(/.test(code) ||
      /:\s*\n\s+(if|for|while|return|print)\b/.test(code)
    ) {
      return "python";
    }

    // C++
    if (
      /#include\s*<[^>]+>/.test(code) ||
      /\bstd::/.test(code) ||
      /\bcout\s*<</.test(code) ||
      /\bcin\s*>>/.test(code)
    ) {
      return "cpp";
    }

    // Java
    if (
      /\bpublic\s+static\s+void\s+main\b/.test(code) ||
      /\bSystem\.out\.println\s*\(/.test(code) ||
      /\bpublic\s+class\s+\w+/.test(code)
    ) {
      return "java";
    }

    // JavaScript
    if (
      /\bconsole\.log\s*\(/.test(code) ||
      /\b(const|let|var)\s+\w+\s*=/.test(code) ||
      /\bfunction\s+\w+\s*\(/.test(code) ||
      /=>/.test(code)
    ) {
      return "javascript";
    }

    // TypeScript
    if (
      /\binterface\s+\w+/.test(code) ||
      /\btype\s+\w+\s*=/.test(code) ||
      /:\s*(string|number|boolean)\b/.test(code)
    ) {
      return "typescript";
    }

    // C
    if (
      /#include\s*<stdio\.h>/.test(code) ||
      /\bprintf\s*\(/.test(code) ||
      /\bscanf\s*\(/.test(code)
    ) {
      return "c";
    }

    // C#
    if (
      /\busing\s+System\b/.test(code) ||
      /\bConsole\.WriteLine\s*\(/.test(code) ||
      /\bnamespace\s+\w+/.test(code)
    ) {
      return "csharp";
    }

    // Go
    if (
      /\bpackage\s+main\b/.test(code) ||
      /\bfunc\s+\w+\s*\(/.test(code) ||
      /\bfmt\.Print/.test(code)
    ) {
      return "go";
    }

    // Rust
    if (
      /\bfn\s+main\s*\(/.test(code) ||
      /\blet\s+mut\s+\w+/.test(code) ||
      /\bprintln!\s*\(/.test(code)
    ) {
      return "rust";
    }

    return "plaintext";
  };

  const handleChange = (value) => {
    const newCode = value || "";

    setCode(newCode);

    if (setLanguage) {
      setLanguage(detectLanguage(newCode));
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <span className="capitalize text-xs font-medium text-slate-400">
          {language || "Detecting..."}
        </span>
      </div>

      <Editor
        height="420px"
        value={code}
        language={language || "plaintext"}
        onChange={handleChange}
        theme="vs-dark"
        options={{
          minimap: {
            enabled: false,
          },
          fontSize: 14,
          lineNumbers: "on",
          wordWrap: "on",
          scrollBeyondLastLine: false,
          padding: {
            top: 16,
          },
        }}
      />
    </div>
  );
}
