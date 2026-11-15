type Props = { eyebrow: string; title: string; accent?: string; description?: string };

export default function SectionHeading({ eyebrow, title, accent, description }: Props) {
  return (
    <div className="section-head">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title} {accent && <span className="gradient-text">{accent}</span>}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
