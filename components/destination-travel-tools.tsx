import Link from "next/link";

type Props = {
  lang: "no" | "en";
  destination: string;
};

const discoverCarsUrl = "https://www.discovercars.com/?a_aid=flyferie";
const amigoEsimUrl = "https://amigoesim.pxf.io/c/7715332/2900873/34019?irck=xyz12";

export function DestinationTravelTools({ lang, destination }: Props) {
  const norwegian = lang === "no";

  return (
    <section className="bg-[#edf4ef] px-5 py-12 sm:py-16 lg:px-8" aria-labelledby="travel-tools-heading">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-[#1e776e]">
          {norwegian ? "Planlegg videre" : "Continue planning"}
        </p>
        <h2 id="travel-tools-heading" className="display mt-3 max-w-3xl text-[38px] font-bold leading-tight sm:text-5xl">
          {norwegian ? `Nyttige reiseverktøy for ${destination}` : `Useful travel tools for ${destination}`}
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-[#48645f]">
          {norwegian
            ? "Sammenlign alltid dekning, totalpris og vilkår hos leverandøren før du bestiller. Annonselenkene påvirker ikke prisen du betaler."
            : "Always compare coverage, total prices and terms with the provider before booking. Affiliate links do not change the price you pay."}
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#b94f3d]">
              {norwegian ? "Annonselenke · Leiebil" : "Affiliate link · Car rental"}
            </p>
            <h3 className="display mt-3 text-3xl font-bold">{norwegian ? "Sammenlign leiebiler" : "Compare rental cars"}</h3>
            <p className="mt-3 leading-7 text-[#48645f]">
              {norwegian
                ? "Se tilbud fra flere utleieselskaper, og kontroller depositum, forsikring, drivstoffregler og sluttpris."
                : "Compare several rental companies and check the deposit, insurance, fuel policy and final price."}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={discoverCarsUrl} target="_blank" rel="sponsored noopener noreferrer" className="rounded-full bg-[#17332f] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1e6258]">
                {norwegian ? "Søk hos DiscoverCars" : "Search DiscoverCars"} →
              </a>
              <Link href={`/${lang}/guides/car-rental`} className="rounded-full border border-[#17332f]/20 px-5 py-3 text-sm font-bold">
                {norwegian ? "Les leiebilguiden" : "Read the car rental guide"}
              </Link>
            </div>
          </article>

          <article className="rounded-[26px] border border-[#17332f]/10 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#b94f3d]">
              {norwegian ? "Annonselenke · Mobildata" : "Affiliate link · Mobile data"}
            </p>
            <h3 className="display mt-3 text-3xl font-bold">{norwegian ? "Finn en eSIM-pakke" : "Find an eSIM plan"}</h3>
            <p className="mt-3 leading-7 text-[#48645f]">
              {norwegian
                ? "Kontroller at landet er dekket, og sammenlign datamengde, varighet og aktiveringsregler før avreise."
                : "Check destination coverage and compare data allowance, validity and activation rules before travelling."}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={amigoEsimUrl} target="_blank" rel="sponsored noopener noreferrer" className="rounded-full bg-[#17332f] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1e6258]">
                {norwegian ? "Se pakker hos Amigo" : "View plans at Amigo"} →
              </a>
              <Link href={`/${lang}/guides/esim`} className="rounded-full border border-[#17332f]/20 px-5 py-3 text-sm font-bold">
                {norwegian ? "Les eSIM-guiden" : "Read the eSIM guide"}
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
