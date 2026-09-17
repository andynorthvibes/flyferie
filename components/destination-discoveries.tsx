import { destinationDiscoveries } from "@/lib/destination-discoveries";
import { TrackedExternalLink } from "@/components/tracked-external-link";
import "./destination-discoveries.css";

export function DestinationDiscoveries({ slug, lang, name }: { slug: string; lang: "no" | "en"; name: string }) {
  const content = destinationDiscoveries[slug];
  if (!content) return null;
  const no = lang === "no";
  const date = new Intl.DateTimeFormat(no ? "nb-NO" : "en-GB", { dateStyle: "long", timeZone: "UTC" }).format(new Date(content.checked));

  return (
    <section id="local-discoveries" className="destination-discoveries" aria-labelledby="discoveries-heading">
      <div className="discoveries-inner">
        <div className="discoveries-heading">
          <p className="discoveries-eyebrow">{no ? "Litt mer av stedet" : "A little more of the place"}</p>
          <h2 id="discoveries-heading" className="display">{no ? `Finn din rytme i ${name}` : `Find your rhythm in ${name}`}</h2>
          <p className="discoveries-intro">{content.intro[lang]}</p>
        </div>

        <div className="discoveries-grid">
          {(["see", "eat"] as const).map((category, index) => {
            const item = content[category];
            return (
              <article key={category} id={category === "see" ? "things-to-see" : "places-to-eat"} className="discovery-card">
                <div className="discovery-topline">
                  <span className="discovery-number" aria-hidden="true">0{index + 1}</span>
                  <p>{category === "see" ? (no ? "En opplevelse å sette av tid til" : "An experience worth making time for") : (no ? "Et sted å ta en matpause" : "Somewhere to stop for food")}</p>
                </div>
                <p className="discovery-kind">{item.kind[lang]}</p>
                <h3>{item.name}</h3>
                <p className="discovery-description">{item.description[lang]}</p>
                <TrackedExternalLink
                  href={item.source.url}
                  eventName="destination_source_click"
                  eventData={{ destination: slug, language: lang, category, source: item.source.name }}
                  className="discovery-source"
                >
                  {no ? "Besøksinfo" : "Visitor information"}: {item.source.name} <span aria-hidden="true">↗</span>
                </TrackedExternalLink>
              </article>
            );
          })}
        </div>

        <aside className="discovery-slow" aria-labelledby="slow-moment-heading">
          <div>
            <p className="discoveries-eyebrow">{no ? "Også en del av ferien" : "Part of the holiday too"}</p>
            <h3 id="slow-moment-heading" className="display">{no ? "Litt mindre hastverk." : "A little less hurry."}</h3>
          </div>
          <p>{content.slow[lang]}</p>
        </aside>

        <details className="discovery-editorial-note">
          <summary>{no ? "Om tipsene og kildene" : "About these tips and sources"}</summary>
          <p>
            {no
              ? "Denne seksjonen er redaksjonelt utvalgte forslag basert på offisielle turistguider og stedenes egne nettsider, ikke personlige anmeldelser. Kildelenkene her er ikke affiliate-lenker. Egne besøk er merket separat."
              : "This section contains editorial suggestions based on official tourism guides and venues' own websites, not firsthand reviews. These source links are not affiliate links. Personal visits are labelled separately."}
          </p>
          <p>
            {no ? "Kildene for denne seksjonen ble sjekket " : "Sources for this section were checked on "}
            <time dateTime={content.checked}>{date}</time>.
            {no
              ? " Menyer, åpningstider, adgang og transport kan endres. Kontroller direkte før besøket; datoen gjelder ikke en full gjennomgang av den øvrige guiden."
              : " Menus, opening hours, access and transport can change. Check directly before visiting; this date does not represent a full review of the rest of the guide."}
          </p>
        </details>
      </div>
    </section>
  );
}
