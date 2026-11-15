
import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CodeXml, Globe } from "lucide-react";
import { projects } from "@/app/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project ? `${project.name} | AH SHAHI` : "Project | AH SHAHI" };
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main>
      <section className="wrap detail-hero">
        <Link href="/#projects" className="back-link">
          <ArrowLeft size={17} /> Back to projects
        </Link>

        <div className="detail-layout">
          <div className="detail-content">
            <div className="eyebrow">{project.status}</div>
            <h1>{project.name}</h1>
            <p className="text-lg">{project.description}</p>

            <Image
              src={project.image}
              alt={`${project.name} project preview`}
              width={960}
              height={560}
              className="detail-image mt-7"
            />

            <h2>Technology Stack</h2>
            <div className="tags">
              {project.stack.map((item) => (
                <span className="tag" key={item}>{item}</span>
              ))}
            </div>

            <h2>Challenges</h2>
            <ul>
              {project.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>Potential Improvements & Future Plans</h2>
            <ul>
              {project.improvements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="panel detail-side">
            <h3>Project Links</h3>
            <p className="experience-note">
              Explore the live project or view its source code.
            </p>

            <a className="btn btn-primary" href={project.live} target="_blank" rel="noreferrer">
              <Globe size={17} /> Live Project <ArrowUpRight size={15} />
            </a>

            <a className="btn btn-outline" href={project.github} target="_blank" rel="noreferrer">
              <CodeXml size={17} /> GitHub Repository <ArrowUpRight size={15} />
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
