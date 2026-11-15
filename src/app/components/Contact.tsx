
import {
  Mail,
  Phone,
  MessageCircle,
  CodeXml,
  Link as LinkIcon,
} from "lucide-react";

import SectionHeading from "./SectionHeading";
import { site } from "@/app/data/site";

const contacts = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: site.phoneDisplay,
    href: `tel:${site.phoneRaw}`,
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: site.whatsapp,
    icon: MessageCircle,
  },
  {
    label: "GitHub",
    value: "AtaulHoqueShahi",
    href: site.github,
    icon: CodeXml,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: site.linkedin,
    icon: LinkIcon,
  },
];

export default function Contact() {
  return (
    <section className="wrap" id="contact">
      <SectionHeading
        eyebrow="Have a project in mind?"
        title="Let's"
        accent="Connect"
        description="Feel free to reach out for collaboration, project discussions or meaningful connections."
      />

      <div className="contact-grid">
        {contacts.map(({ label, value, href, icon: Icon }) => (
          <a
            className="contact-link"
            href={href}
            key={label}
            target={
              ["GitHub", "LinkedIn", "WhatsApp"].includes(label)
                ? "_blank"
                : undefined
            }
            rel="noreferrer"
          >
            <span className="contact-icon">
              <Icon size={19} />
            </span>

            <span>
              <b>{label}</b>
              <small>{value}</small>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
