"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LanguageSelector from "@/components/LanguageSelector";
import CodeEditor from "@/components/CodeEditor";
import AnalyzeButton from "@/components/AnalyzeButton";
import Results from "@/components/Results";
import ErrorPopup from "@/components/ErrorPopup";
import Footer from "@/components/Footer";
import axios from "axios";

export default function Home() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("language type");

  const analyzeCode = async () => {
    if (!code.trim()) {
      setError("Please paste some source code before analyzing.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.post("http://127.0.0.1:5000/analyse", {
        code: code,
      });

      const data = response.data.response;

      setResult(data);
    } catch (err) {
      console.error("Analysis error:", err);

      setError(
        err.response?.data?.error || err.message || "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Animated background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/4 top-20 h-72 w-72 animate-pulse rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-96 w-96 animate-pulse rounded-full bg-purple-600/10 blur-3xl [animation-delay:1s]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 animate-pulse rounded-full bg-cyan-600/10 blur-3xl [animation-delay:2s]" />
      </div>

      {/* Navbar */}
      <div className="animate-[fadeDown_0.6s_ease-out]">
        <Navbar />
      </div>

      {/* Hero */}
      <div className="animate-[fadeUp_0.7s_ease-out]">
        <Hero />
      </div>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        {/* Language selector */}
        <div className="animate-[fadeUp_0.7s_ease-out_0.15s_both]">
          <LanguageSelector />
        </div>

        {/* Code editor */}
        <div className="mt-6 animate-[fadeUp_0.7s_ease-out_0.3s_both] transition-transform duration-300 hover:-translate-y-1">
          <CodeEditor
            code={code}
            setCode={setCode}
            language={language}
            setLanguage={setLanguage}
          />
        </div>

        {/* Analyze button */}
        <div className="mt-6 animate-[fadeUp_0.7s_ease-out_0.45s_both]">
          <AnalyzeButton onClick={analyzeCode} loading={loading} />
        </div>

        {/* Results */}
        {result && (
          <div className="animate-[fadeUp_0.7s_ease-out]">
            <Results result={result} />
          </div>
        )}
      </section>

      {/* Footer */}
      <div className="animate-[fadeUp_0.7s_ease-out_0.6s_both]">
        <Footer />
      </div>

      <ErrorPopup message={error} onClose={() => setError("")} />

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
