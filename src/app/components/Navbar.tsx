 "use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <div className="wrap nav-inner">
        <Link className="brand" href="/#home" onClick={() => setOpen(false)}>
          AH <span>SHAHI</span>
        </Link>

        <button
          className="menu-btn"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`nav-links ${open ? "show" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>

        <Link className="btn btn-outline nav-cta" href="/#contact">
          Let&apos;s Talk <ArrowUpRight size={16} />
        </Link>
      </div>
    </header>
  );
}
