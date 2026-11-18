
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <>
      {/* Academic Education */}
      <section className="wrap" id="education">
        <SectionHeading
          eyebrow="Academic background"
          title="Education"
        />

        <div className="panel education-row">
          <div className="edu-icon">🎓</div>

          <div>
            <h3
              className="text-lg font-semibold"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Feni Computer Institute
            </h3>

            <p className="my-1 text-slate-300">
              Diploma in Engineering · Telecommunication Technology
            </p>

            <p className="m-0 text-sm text-slate-400">
              Feni, Bangladesh · 4th Semester · Currently Studying
            </p>
          </div>
        </div>
      </section>

      {/* Technical Education */}
      <section className="wrap" id="technical-education">
        <SectionHeading
          eyebrow="Professional learning"
          title="Technical Education"
        />

        <div className="panel education-row">
          <div className="edu-icon">💻</div>

          <div>
            <h3
              className="text-lg font-semibold"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Programming Hero
            </h3>

            <p className="my-1 text-slate-300">
              Complete Web Development Course · Batch 14
            </p>

            <p className="m-0 text-sm text-slate-400">
              2026 – Present · Currently Learning
            </p>

            <p className="mt-2 text-sm text-slate-300">
              Focus: Web Development · React · Next.js
            </p>
          </div>
        </div>
      </section>

      
    </>
  );
}
