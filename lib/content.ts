export type Lang = "no" | "en";

export const destinations = [
  { slug: "berlin", name: "Berlin", countryNo: "Tyskland", countryEn: "Germany", tagNo: "Best totalpakke", tagEn: "Best all-rounder", color: "#df705b" },
  { slug: "tbilisi", name: "Tbilisi", countryNo: "Georgia", countryEn: "Georgia", tagNo: "Mest overraskende", tagEn: "Most surprising", color: "#b37c47" },
  { slug: "krakow", name: "Krakow", countryNo: "Polen", countryEn: "Poland", tagNo: "Mye for pengene", tagEn: "Great value", color: "#637c69" },
  { slug: "madrid", name: "Madrid", countryNo: "Spania", countryEn: "Spain", tagNo: "Mat, fotball og uteliv", tagEn: "Food, football and nightlife", color: "#bd5c4b" },
  { slug: "malaga", name: "Malaga", countryNo: "Spania", countryEn: "Spain", tagNo: "Sol og sosial ferie", tagEn: "Sun and social days", color: "#368b88" },
  { slug: "manchester", name: "Manchester", countryNo: "England", countryEn: "England", tagNo: "Fotball og pubkultur", tagEn: "Football and pub culture", color: "#566a79" },
  { slug: "katowice", name: "Katowice", countryNo: "Polen", countryEn: "Poland", tagNo: "Undervurdert", tagEn: "Underrated", color: "#776b61" },
  { slug: "amsterdam", name: "Amsterdam", countryNo: "Nederland", countryEn: "Netherlands", tagNo: "Livlig weekend", tagEn: "Lively weekend", color: "#bd7251" },
  { slug: "nice", name: "Nice", countryNo: "Frankrike", countryEn: "France", tagNo: "Riviera og byliv", tagEn: "Riviera and city life", color: "#3c8997" },
  { slug: "milan", name: "Milan", countryNo: "Italia", countryEn: "Italy", tagNo: "Mat, mote og fotball", tagEn: "Food, fashion and football", color: "#697b58" },
  { slug: "helsinki", name: "Helsinki", countryNo: "Finland", countryEn: "Finland", tagNo: "Nordisk weekend", tagEn: "Nordic weekend", color: "#477f8c" },
  { slug: "copenhagen", name: "Copenhagen", countryNo: "Danmark", countryEn: "Denmark", tagNo: "Mat og barliv", tagEn: "Food and bars", color: "#b8645a" },
  { slug: "skopje", name: "Skopje", countryNo: "Nord-Makedonia", countryEn: "North Macedonia", tagNo: "Rimelig og særegent", tagEn: "Affordable and distinctive", color: "#9b7950" },
  { slug: "palma-de-mallorca", name: "Palma de Mallorca", countryNo: "Spania", countryEn: "Spain", tagNo: "Strand og storby", tagEn: "Beach and city", color: "#2c8b84" },
  { slug: "gothenburg", name: "Gothenburg", countryNo: "Sverige", countryEn: "Sweden", tagNo: "Kortreist og sosialt", tagEn: "Close and sociable", color: "#507b75" },
  { slug: "oslo", name: "Oslo", countryNo: "Norge", countryEn: "Norway", tagNo: "Fjordby på hjemmebane", tagEn: "A capital by the fjord", color: "#2e7180" },
  { slug: "monaco", name: "Monaco", countryNo: "Monaco", countryEn: "Monaco", tagNo: "Luksus ved Rivieraen", tagEn: "Riviera glamour", color: "#2f8290" },
  { slug: "cannes", name: "Cannes", countryNo: "Frankrike", countryEn: "France", tagNo: "Strand og filmglamour", tagEn: "Beach and film glamour", color: "#d07a55" },
  { slug: "barcelona", name: "Barcelona", countryNo: "Spania", countryEn: "Spain", tagNo: "Arkitektur og bystrand", tagEn: "Architecture and city beach", color: "#c45f4d" },
  { slug: "rome", name: "Rome", countryNo: "Italia", countryEn: "Italy", tagNo: "Historie rundt hvert hjørne", tagEn: "History around every corner", color: "#a85f4c" },
  { slug: "gran-canaria", name: "Gran Canaria", countryNo: "Spania", countryEn: "Spain", tagNo: "Sol hele vinteren", tagEn: "Winter sunshine", color: "#268b87" },
  { slug: "gdansk", name: "Gdansk", countryNo: "Polen", countryEn: "Poland", tagNo: "Fargerik havneby", tagEn: "Colourful harbour city", color: "#527d87" },
  { slug: "frankfurt", name: "Frankfurt", countryNo: "Tyskland", countryEn: "Germany", tagNo: "Skyskrapere og gamleby", tagEn: "Skyline and Old Town", color: "#596c7c" },
  { slug: "hamburg", name: "Hamburg", countryNo: "Tyskland", countryEn: "Germany", tagNo: "Havn, fotball og uteliv", tagEn: "Harbour, football and nightlife", color: "#3f6f7a" },
  { slug: "bangkok", name: "Bangkok", countryNo: "Thailand", countryEn: "Thailand", tagNo: "Storbyenergi og street food", tagEn: "Big-city energy and street food", color: "#9d584b" },
  { slug: "ao-nang", name: "Ao Nang", countryNo: "Thailand", countryEn: "Thailand", tagNo: "Strender og øyhopping", tagEn: "Beaches and island hopping", color: "#2f8a7c" },
  { slug: "phuket", name: "Phuket", countryNo: "Thailand", countryEn: "Thailand", tagNo: "Strand, byliv og utflukter", tagEn: "Beaches, town life and excursions", color: "#287f79" },
];

export const copy = {
  no: { nav: ["Reisemål", "Weekendtur", "Skjulte perler", "Blåtur", "Julemarked"], eyebrow: "Finn noe nytt", title: "Din neste flyferie starter her.", intro: "Leter du etter en overraskende weekend, en blåtur med gjengen eller en ny favoritt i Europa? Vi har samlet reisemålene som er verdt turen.", explore: "Utforsk reisemål", inspiration: "Få inspirasjon", weekendTitle: "Weekendtur med gjengen", weekendText: "Byer med god stemning, fine opplevelser og nok å snakke om på flyet hjem.", all: "Se alle reisemål", hidden: "Europas skjulte perler", hiddenText: "Reis litt utenfor den vanlige listen. Her finner du steder med særpreg, atmosfære og historier som fortjener flere besøkende.", blue: "Planlegger du blåtur?", blueText: "Finn byen som passer budsjettet, dagene og gjengen – mens destinasjonen forblir hemmelig.", christmas: "Europas beste julemarkeder", christmasText: "Fra klassisk julestemning i Wien til middelaldertorget i Krakow.", read: "Les guiden" },
  en: { nav: ["Destinations", "Group weekends", "Hidden gems", "Mystery trips", "Christmas markets"], eyebrow: "Discover somewhere new", title: "Your next flight holiday starts here.", intro: "Looking for a surprising weekend, a mystery trip with friends or a new European favourite? We collect the places that are worth the journey.", explore: "Explore destinations", inspiration: "Get inspired", weekendTitle: "A weekend away with friends", weekendText: "Cities with great atmosphere, memorable experiences and plenty to discuss on the flight home.", all: "See all destinations", hidden: "Europe's hidden gems", hiddenText: "Step beyond the usual list and discover places with character, atmosphere and stories worth travelling for.", blue: "Planning a mystery trip?", blueText: "Find the city that fits your budget, dates and group – while the destination stays secret.", christmas: "Europe's best Christmas markets", christmasText: "From classic festive charm in Vienna to Krakow's medieval market square.", read: "Read the guide" },
};


export type DestinationGuide = {
  seoNo: string;
  seoEn: string;
  introNo: string;
  introEn: string;
  bestFor: { no: string; en: string }[];
  facts: { labelNo: string; labelEn: string; valueNo: string; valueEn: string }[];
  weekend: { timeNo: string; timeEn: string; titleNo: string; titleEn: string; textNo: string; textEn: string }[];
  districts: { name: string; textNo: string; textEn: string }[];
  tips: { titleNo: string; titleEn: string; textNo: string; textEn: string }[];
};

export const destinationGuides: Record<string, DestinationGuide> = {
  berlin: {
    seoNo: "Berlin-guide: den perfekte weekendturen",
    seoEn: "Berlin guide: the perfect weekend trip",
    introNo: "Berlin er en av Europas beste totalpakker for en langhelg. Her får dere historie, mat, fotball, barer, klubber og nabolag med helt forskjellig personlighet – uten at helgen trenger å bli unødvendig dyr.",
    introEn: "Berlin is one of Europe’s best all-round destinations for a long weekend. It combines history, food, football, bars, clubs and neighbourhoods with completely different personalities – without making the trip unnecessarily expensive.",
    bestFor: [
      { no: "Vennegjenger", en: "Groups of friends" },
      { no: "Historie og kultur", en: "History and culture" },
      { no: "Mat og uteliv", en: "Food and nightlife" },
      { no: "Førstegangsbesøk", en: "First-time visitors" }
    ],
    facts: [
      { labelNo: "Anbefalt lengde", labelEn: "Recommended stay", valueNo: "2–3 netter", valueEn: "2–3 nights" },
      { labelNo: "Beste områder", labelEn: "Best areas", valueNo: "Mitte, Kreuzberg og Friedrichshain", valueEn: "Mitte, Kreuzberg and Friedrichshain" },
      { labelNo: "Transport", labelEn: "Transport", valueNo: "U-Bahn, S-Bahn, trikk og buss", valueEn: "U-Bahn, S-Bahn, tram and bus" },
      { labelNo: "Flyplass", labelEn: "Airport", valueNo: "Berlin Brandenburg – sone C", valueEn: "Berlin Brandenburg – zone C" }
    ],
    weekend: [
      {
        timeNo: "Fredag kveld",
        timeEn: "Friday evening",
        titleNo: "Finn rytmen i Kreuzberg",
        titleEn: "Find Berlin’s rhythm in Kreuzberg",
        textNo: "Sjekk inn og start rolig rundt Oranienstraße eller langs Landwehrkanalen. Her er det enkelt å kombinere middag, barer og den første smaken av Berlins alternative side.",
        textEn: "Check in and begin around Oranienstraße or the Landwehr Canal. It is an easy area for combining dinner, bars and a first taste of Berlin’s alternative side."
      },
      {
        timeNo: "Lørdag",
        timeEn: "Saturday",
        titleNo: "Historie, severdigheter og storbyliv",
        titleEn: "History, landmarks and city life",
        textNo: "Begynn i Mitte med Brandenburger Tor, Riksdagsbygningen og minnestedet for Berlinmuren. Fortsett mot Museumsinsel eller Alexanderplatz, før kvelden tas i Friedrichshain.",
        textEn: "Begin in Mitte with Brandenburg Gate, the Reichstag and the Berlin Wall Memorial. Continue towards Museum Island or Alexanderplatz, then spend the evening in Friedrichshain."
      },
      {
        timeNo: "Søndag",
        timeEn: "Sunday",
        titleNo: "Nabolag og en roligere avslutning",
        titleEn: "Neighbourhoods and a slower finish",
        textNo: "Bruk formiddagen på kaféer, småbutikker og gatene i Prenzlauer Berg, eller velg City West og Kurfürstendamm. Legg inn god tid til transporten tilbake til BER.",
        textEn: "Spend the morning exploring cafés, independent shops and Prenzlauer Berg, or choose City West and Kurfürstendamm. Allow plenty of time for the journey back to BER."
      }
    ],
    districts: [
      {
        name: "Mitte",
        textNo: "Best for førstegangsbesøket, de store severdighetene og kort vei mellom historiske høydepunkter.",
        textEn: "Best for first-time visitors, major landmarks and short distances between historic highlights."
      },
      {
        name: "Kreuzberg",
        textNo: "Passer for mat, barer, alternativ kultur og en mer lokal storbyfølelse.",
        textEn: "A strong choice for food, bars, alternative culture and a more local city atmosphere."
      },
      {
        name: "Friedrichshain",
        textNo: "Et godt utgangspunkt for uteliv, konserter, East Side Gallery og området rundt RAW-Gelände.",
        textEn: "A good base for nightlife, concerts, the East Side Gallery and the RAW-Gelände area."
      },
      {
        name: "Prenzlauer Berg",
        textNo: "Roligere gater, kaféer og en avslappet søndagsstemning.",
        textEn: "Quieter streets, cafés and a relaxed Sunday atmosphere."
      }
    ],
    tips: [
      {
        titleNo: "Velg riktig billettsone",
        titleEn: "Choose the correct ticket zone",
        textNo: "Sentrum dekkes normalt av AB. BER-flyplassen ligger i sone C, så reisen til og fra flyplassen krever ABC-billett.",
        textEn: "Central Berlin is normally covered by AB. BER Airport is in zone C, so airport journeys require an ABC ticket."
      },
      {
        titleNo: "Reiser dere som gruppe?",
        titleEn: "Travelling as a group?",
        textNo: "BVG tilbyr egne dagsbilletter for små grupper. Sammenlign disse med enkeltbilletter før dere kjøper.",
        textEn: "BVG offers day tickets for small groups. Compare these with individual tickets before buying."
      },
      {
        titleNo: "Ikke planlegg hvert minutt",
        titleEn: "Do not schedule every minute",
        textNo: "Berlin er stor, og de beste opplevelsene dukker ofte opp mellom stoppene. Velg ett hovedområde per del av dagen.",
        textEn: "Berlin is large, and some of the best experiences appear between planned stops. Focus on one main area for each part of the day."
      }
    ]
  }
};
