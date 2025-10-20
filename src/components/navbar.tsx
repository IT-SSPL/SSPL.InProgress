import { Facebook, Instagram, Linkedin } from "lucide-react";

import logo from "@/assets/logo.webp";

const SOCIAL_ITEMS = [
  {
    component: Facebook,
    link: "https://www.facebook.com/samorzadstudenckipl",
  },
  {
    component: Instagram,
    link: "https://www.instagram.com/samorzadstudencki_pl/",
  },
  {
    component: Linkedin,
    link: "https://www.linkedin.com/company/ssplodz",
  },
];

function NavBar() {
  return (
    <header>
      <nav className="flex w-full items-center justify-between">
        <a href="https://samorzad.p.lodz.pl" rel="noopener noreferrer">
          <img
            src={logo}
            alt="SSPŁ Logo"
            className="w-full max-w-28 md:max-w-36 lg:max-w-40"
          />
        </a>

        <ul className="text-foreground inline-flex gap-2 lg:gap-3">
          {SOCIAL_ITEMS.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="grid place-content-center rounded-full border border-neutral-200 bg-white p-2 transition-colors duration-300 hover:bg-neutral-200"
              >
                <item.component
                  className="size-4 md:size-5 lg:size-6"
                  strokeWidth={1.5}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
