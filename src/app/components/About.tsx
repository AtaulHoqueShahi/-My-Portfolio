import SectionHeading from "./SectionHeading";

const focus = [
  "✦ Clean interfaces",
  "✦ Useful solutions",
  "✦ Responsive design",
  "✦ Problem solving",
  "✦ Creativity",
  "✦ Continuous learning",
];

export default function About() {
  return (
    <section className="wrap" id="about">
      <SectionHeading
        eyebrow="Get to know me"
        title="About"
        accent="Me"
        description="A little about my journey, interests and the way I approach building for the web."
      />
      <div className="about-grid">
        <div className="panel">
          <p>
            I&apos;m Ataul Hoque Shahi, a Web Developer focused on frontend development.
            My programming journey began in 2026 with curiosity about how websites work,
            and that curiosity grew into an interest in creating useful, accessible and
            engaging digital experiences.
          </p>
          <p>
            I enjoy building responsive interfaces, exploring modern web technologies,
            solving problems and bringing ideas to life through code. I&apos;m continuously
            improving my skills and learning how to write clearer, more maintainable code.
          </p>
          <p>
            Beyond programming, I enjoy exploring technology, learning new ideas and
            connecting with people who are passionate about creating things. I value
            creativity, consistency and a practical, curious approach to learning.
          </p>
        </div>
        <div className="panel">
          <h3 className="text-lg font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            What I care about
          </h3>
          <div className="focus-grid">
            {focus.map((item) => <div className="focus-item" key={item}>{item}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
