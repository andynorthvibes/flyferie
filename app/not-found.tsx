import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-[#173f39] text-white">
      <header className="border-b border-white/10 bg-[#102f2b] px-5 py-5">
        <div className="mx-auto max-w-6xl">
          <Link href="/no" aria-label="Flyferie.no – forsiden">
            <Image src="/flyferie-logo-v9.png" alt="Flyferie.no" width={480} height={200} priority className="h-auto w-[185px] sm:w-[225px]" />
          </Link>
        </div>
      </header>

      <section className="relative flex flex-1 items-center overflow-hidden px-5 py-16 lg:px-8">
        <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-[#f4b860]/25 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-[#2d9587]/30 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="display text-[110px] font-bold leading-none text-[#ffd078] sm:text-[160px]">404</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#ffd078] sm:text-sm">Siden finnes ikke · Page not found</p>
            <h1 className="display mt-4 text-[44px] font-bold leading-tight sm:text-6xl">Denne reisen tok en annen retning</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">Lenken kan være gammel eller adressen kan være skrevet feil. Velg hvor du vil fortsette.</p>
            <p className="mt-3 max-w-2xl leading-7 text-white/55">The link may be outdated or the address may be incorrect. Choose where you would like to continue.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/no" className="rounded-full bg-[#f4b860] px-6 py-3.5 font-bold text-[#17332f] transition hover:bg-[#ffd08b]">Norsk forside</Link>
              <Link href="/no/destinations" className="rounded-full border border-white/35 bg-white/10 px-6 py-3.5 font-bold transition hover:bg-white/20">Reisemål</Link>
              <Link href="/no/guides" className="rounded-full border border-white/35 bg-white/10 px-6 py-3.5 font-bold transition hover:bg-white/20">Guider</Link>
            </div>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-white/70">
              <Link href="/en" className="transition hover:text-white">English home →</Link>
              <Link href="/en/destinations" className="transition hover:text-white">Destinations →</Link>
              <Link href="/en/guides" className="transition hover:text-white">Guides →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
