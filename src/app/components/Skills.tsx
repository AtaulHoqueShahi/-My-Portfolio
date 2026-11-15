import SectionHeading from "./SectionHeading";

const groups = [
  { title: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { title: "Backend & Data", skills: ["Node.js", "REST API", "MongoDB"] },
  { title: "Tools & Workflow", skills: ["Git", "GitHub", "VS Code", "Vercel", "Responsive Design", "Problem Solving"] },
];

export default function Skills() {
  return (
    <section className="wrap" id="skills">
      <SectionHeading
        eyebrow="What I work with"
        title="Skills &"
        accent="Technologies"
        description="Technologies and tools I use or am currently learning across my web development projects."
      />
      <div className="skills-grid">
        {groups.map((group) => (
          <div className="panel skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="tags">
              {group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
