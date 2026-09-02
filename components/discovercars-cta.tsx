import Link from "next/link";

type DiscoverCarsCtaProps = {
  lang: "no" | "en";
  variant?: "full" | "compact";
  showGuideLink?: boolean;
};

const discoverCarsUrl = "https://www.discovercars.com/?a_aid=flyferie";

export function DiscoverCarsCta({ lang, variant = "full", showGuideLink = false }: DiscoverCarsCtaProps) {
  const norwegian = lang === "no";

  if (variant === "compact") {
    return (
      <aside className="rounded-[24px] border border-[#17332f]/10 bg-[#edf4ef] p-6 shadow-sm sm:p-8" aria-label={norwegian ? "Annonselenke for leiebil" : "Affiliate car rental link"}>
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#1e776e]">
          {norwegian ? "Annonselenke · Flyferie kan motta provisjon" : "Affiliate link · Flyferie may earn a commission"}
        </p>
        <h2 className="display mt-3 text-3xl font-bold leading-tight">
          {norwegian ? "Sammenlign bilen – og vilkårene" : "Compare the car—and the terms"}
        </h2>
        <p className="mt-3 max-w-3xl leading-7 text-[#48645f]">
          {norwegian
            ? "DiscoverCars samler tilbud fra flere utleieselskaper. Se på totalpris, depositum, forsikring og drivstoffregler før du velger."
            : "DiscoverCars compares offers from multiple rental companies. Check the total price, deposit, insurance and fuel policy before choosing."}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={discoverCarsUrl} target="_blank" rel="sponsored noopener noreferrer" className="inline-flex rounded-full bg-[#17332f] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1e6258]">
            {norwegian ? "Sammenlign leiebiler" : "Compare rental cars"} →
          </a>
          {showGuideLink ? (
            <Link href={`/${lang}/guides/car-rental`} className="inline-flex rounded-full border border-[#17332f]/25 bg-white px-5 py-3 text-sm font-bold">
              {norwegian ? "Les leiebilguiden" : "Read the rental car guide"} →
            </Link>
          ) : null}
        </div>
      </aside>
    );
  }

  return (
    <section className="px-5 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[30px] bg-[#f4d7a1] p-6 sm:p-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10 lg:p-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#b94f3d]">
            {norwegian ? "Annonselenke · Flyferie kan motta provisjon" : "Affiliate link · Flyferie may earn a commission"}
          </p>
          <h2 className="display mt-3 text-[38px] font-bold leading-tight sm:text-5xl">
            {norwegian ? "Sammenlign før du bestemmer deg" : "Compare before you decide"}
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#365b55]">
            {norwegian
              ? "DiscoverCars samler tilbud fra flere utleieselskaper. Kontroller alltid leverandør, totalpris og vilkår i det konkrete tilbudet før bestilling."
              : "DiscoverCars compares offers from multiple rental companies. Always check the supplier, total price and terms of the specific offer before booking."}
          </p>
        </div>
        <a href={discoverCarsUrl} target="_blank" rel="sponsored noopener noreferrer" className="mt-6 inline-flex w-fit rounded-full bg-[#17332f] px-6 py-3.5 font-bold text-white transition hover:bg-[#1e6258] lg:mt-0">
          {norwegian ? "Sammenlign leiebiler" : "Compare rental cars"} →
        </a>
      </div>
    </section>
  );
}
