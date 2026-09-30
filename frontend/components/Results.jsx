import ComplexityCard from "./ComplexityCard";
import LineAnalysis from "./LineAnalysis";
import Notes from "./Notes";

export default function Results({ result }) {
  return (
    <section className="mt-16">

      <div className="mb-8">
        <p className="text-sm font-medium text-indigo-400">
          ANALYSIS COMPLETE
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Complexity Results
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">

        <ComplexityCard
          title="Time Complexity"
          value={result.time_complexity}
          description="execution time"
        />

        <ComplexityCard
          title="Space Complexity"
          value={result.space_complexity}
          description="Auxiliary space used"
        />

      </div>

      <div className="mt-6">
        <LineAnalysis points={result.points} />
      </div>

      <div className="mt-6">
        <Notes notes={result.notes} />
      </div>

    </section>
  );
}