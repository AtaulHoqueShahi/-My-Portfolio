
import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowUpRight,
  CodeXml,
  Link as LinkIcon,
} from "lucide-react";
import { site } from "@/app/data/site";

export default function Hero() {
  return (
    <section className="wrap hero" id="home">
      <div>
        <div className="eyebrow">Explore. Create. Build.</div>
        <h1 className="display-title">
          Hi, I&apos;m <span className="gradient-text">{site.name}</span>
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-200">
          Web Developer
        </h2>
        <p className="hero-copy mt-4">
          I build modern, responsive and user-friendly web experiences. I enjoy turning
          creative ideas into practical digital solutions through thoughtful design and
          clean code.
        </p>

        <div className="hero-actions">
          <Link className="btn btn-primary" href="#projects">
            Explore My Work <ArrowUpRight size={17} />
          </Link>
          <Link className="btn btn-outline" href="#contact">
            Contact Me
          </Link>
          <a className="btn btn-outline" href="/resume.pdf" download>
            Resume <ArrowDownToLine size={16} />
          </a>
        </div>

        <div className="socials">
          <a href={site.github} target="_blank" rel="noreferrer">
            <CodeXml size={17} className="inline mr-1" />
            GitHub ↗
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            <LinkIcon size={17} className="inline mr-1" />
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="photo-frame" aria-label="Profile photo placeholder">
        <div className="photo-inner">
          <div className="avatar">AH</div>
          <strong
            className="text-xl font-semibold"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {site.name}
          </strong>
          <span className="photo-note">
            Add your professional photo here
          </span>
        </div>
      </div>
    </section>
  );
}
