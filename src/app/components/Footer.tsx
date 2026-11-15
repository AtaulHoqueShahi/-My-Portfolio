
import { site } from "@/app/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <span>
          © 2026 {site.brand}. All rights reserved.
        </span>
        <span>Explore. Create. Build. 🚀</span>
      </div>
    </footer>
  );
}
