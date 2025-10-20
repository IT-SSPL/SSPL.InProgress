import { useEffect, useState } from "react";

import Newsletter from "@/components/newsletter";
import NavBar from "@/components/navbar";
import "./index.css";

export function App() {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);

  const title = process.env.BUN_PUBLIC_HERO_TITLE || "Wracamy wkrótce";
  const subtitle =
    process.env.BUN_PUBLIC_HERO_SUBTITLE ||
    "Zespół IT Samorządu Studenckiego prowadzi prace techniczne. Dziękujemy za cierpliwość! Zostaw swój adres e-mail, a poinformujemy Cię, gdy strona znów będzie aktywna.";

  return (
    <div className="relative container mx-auto flex h-screen flex-1 flex-col px-4 pt-6 md:px-6 lg:py-6">
      <NavBar />

      <main
        className="grid w-full flex-1 items-center gap-10 lg:grid-cols-3 xl:grid-cols-2"
        role="main"
      >
        <section
          aria-labelledby="maintenance-title"
          className="rounded-2xl bg-white p-4 md:rounded-3xl md:p-6 lg:col-span-2 lg:rounded-4xl xl:col-span-1 xl:p-0"
        >
          <p className="text-primary inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
            <span
              className="bg-primary size-2 animate-pulse rounded-full"
              aria-hidden="true"
            />
            prace serwisowe
          </p>
          <h1
            id="maintenance-title"
            className="mt-2 text-2xl leading-tight font-bold sm:text-3xl md:text-4xl"
          >
            {title}
          </h1>
          <p className="mt-3 max-w-xl text-sm whitespace-pre-wrap text-neutral-600 md:text-base">
            {subtitle}
          </p>

          <Newsletter />

          <p className="mb-1 text-sm">
            Masz pilną sprawę? Napisz na{" "}
            <a
              href="mailto:samorzad@samorzad.p.lodz.pl"
              className="text-primary underline"
            >
              samorzad@samorzad.p.lodz.pl
            </a>
          </p>

          <p className="text-muted-foreground mb-1 text-xs">
            Podanie adresu e-mail jest dobrowolne. Dane wykorzystamy wyłącznie
            do poinformowania Cię o ponownym uruchomieniu strony.
            Administratorem danych jest Samorząd Studencki Politechniki
            Łódzkiej.
          </p>
        </section>
      </main>

      <footer className="border-surface w-full pt-6 pb-2 lg:max-w-1/2 lg:border-t">
        <p className="text-muted-foreground text-center text-xs lg:text-start">
          © <span className="font-medium">{year}</span> Samorząd Studencki
          Politechniki Łódzkiej
        </p>
      </footer>
    </div>
  );
}

export default App;
