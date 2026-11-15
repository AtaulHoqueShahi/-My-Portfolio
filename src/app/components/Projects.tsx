
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  CodeXml,
  ExternalLink,
} from "lucide-react";

import SectionHeading from "./SectionHeading";
import { projects } from "@/app/data/projects";

export default function Projects() {
  return (
    <section className="wrap" id="projects">
      <SectionHeading
        eyebrow="Selected work"
        title="Featured"
        accent="Projects"
        description="A selection of projects that reflect my development interests and practical experience."
      />

      <div className="project-grid">
        {projects.map((project) => (
          <article
            className="panel project-card"
            key={project.slug}
          >
            <Image
              src={project.image}
              alt={`${project.name} project preview`}
              width={720}
              height={420}
              className="project-image"
            />

            <div className="project-body">
              <div className="status">
                {project.status}
              </div>

              <h3>{project.name}</h3>

              <p>{project.summary}</p>

              <div className="tags">
                {project.stack.slice(0, 3).map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                {/* View Details */}
                <Link
                  className="btn btn-primary"
                  href={`/projects/${project.slug}`}
                >
                  View Details
                  <ArrowUpRight size={15} />
                </Link>

                {/* GitHub */}
                {project.github && (
                  <a
                    className="btn btn-outline"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} GitHub repository`}
                  >
                    <CodeXml size={18} />
                    GitHub
                  </a>
                )}

                {/* Live Demo */}
                {project.live && (
                  <a
                    className="btn btn-outline"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} live demo`}
                  >
                    <ExternalLink size={17} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
