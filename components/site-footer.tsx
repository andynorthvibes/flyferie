"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] === "en" ? "en" : "no";
  const norwegian = lang === "no";
  const links = [
    { href: `/${lang}/about`, label: norwegian ? "Om Flyferie" : "About Flyferie" },
    { href: `/${lang}/contact`, label: norwegian ? "Kontakt" : "Contact" },
    { href: `/${lang}/editorial-policy`, label: norwegian ? "Redaksjonell policy" : "Editorial policy" },
    { href: `/${lang}/privacy`, label: norwegian ? "Personvern" : "Privacy" },
  ];

  return (
    <footer className="bg-[#102f2b] px-5 py-10 text-white/65">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
        <Link href={`/${lang}`} aria-label={norwegian ? "Gå til forsiden" : "Go to the homepage"}>
          <Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} className="h-auto w-[210px] sm:w-[240px]" />
        </Link>
        <div className="flex flex-col gap-3 text-sm sm:items-end">
          <nav aria-label={norwegian ? "Lenker i bunnteksten" : "Footer links"}>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link className="font-bold text-white/85 transition hover:text-[#f4c16d]" href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <p>© 2026 Flyferie.no · {norwegian ? "Reiseinspirasjon for nye opplevelser" : "Travel inspiration for new experiences"}</p>
        </div>
      </div>
    </footer>
  );
}
