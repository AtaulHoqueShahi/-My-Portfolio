import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section className="wrap" id="education">
      <SectionHeading eyebrow="Academic background" title="Education" />
      <div className="panel education-row">
        <div className="edu-icon">🎓</div>
        <div>
          <h3 className="text-lg font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Feni Computer Institute
          </h3>
          <p className="my-1 text-slate-300">Diploma in Engineering · Telecommunication Technology</p>
          <p className="m-0 text-sm text-slate-400">Feni, Bangladesh · Currently studying</p>
        </div>
      </div>
    </section>
  );
}
