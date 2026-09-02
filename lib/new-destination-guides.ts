import type { DestinationGuide } from "@/lib/content";

type Pair = [no: string, en: string];
type Guide = DestinationGuide & { transportUrl: string; transportName: string };

function guide(config: {
  seo: Pair;
  intro: Pair;
  bestFor: Pair[];
  stay: Pair;
  areas: Pair;
  transport: Pair;
  airport: Pair;
  weekend: [Pair, Pair, Pair][];
  districts: [string, Pair][];
  tips: [Pair, Pair][];
  transportUrl: string;
  transportName: string;
}): Guide {
  return {
    seoNo: config.seo[0], seoEn: config.seo[1],
    introNo: config.intro[0], introEn: config.intro[1],
    bestFor: config.bestFor.map(([no, en]) => ({ no, en })),
    facts: [
      { labelNo: "Anbefalt lengde", labelEn: "Recommended stay", valueNo: config.stay[0], valueEn: config.stay[1] },
      { labelNo: "Beste områder", labelEn: "Best areas", valueNo: config.areas[0], valueEn: config.areas[1] },
      { labelNo: "Transport", labelEn: "Transport", valueNo: config.transport[0], valueEn: config.transport[1] },
      { labelNo: "Flyplass", labelEn: "Airport", valueNo: config.airport[0], valueEn: config.airport[1] }
    ],
    weekend: config.weekend.map(([time, title, text]) => ({ timeNo: time[0], timeEn: time[1], titleNo: title[0], titleEn: title[1], textNo: text[0], textEn: text[1] })),
    districts: config.districts.map(([name, text]) => ({ name, textNo: text[0], textEn: text[1] })),
    tips: config.tips.map(([title, text]) => ({ titleNo: title[0], titleEn: title[1], textNo: text[0], textEn: text[1] })),
    transportUrl: config.transportUrl,
    transportName: config.transportName
  };
}

export const newDestinationGuides: Record<string, Guide> = {
  oslo: guide({
    seo: ["Oslo-guide: fjord, kultur og moderne byliv", "Oslo guide: fjord, culture and modern city life"],
    intro: ["Oslo kombinerer fjordliv, arkitektur, museer og stadig bedre matopplevelser i en kompakt hovedstad. Det er enkelt å gå mellom Bjørvika, sentrum og havnepromenaden, mens marka aldri er langt unna.", "Oslo combines fjord life, architecture, museums and an increasingly strong food scene in a compact capital. Bjørvika, the centre and the waterfront are easy to explore on foot, while the forest is always close."],
    bestFor: [["Kunst og arkitektur", "Art and architecture"], ["Mat og badstue", "Food and sauna"], ["Fjord og natur", "Fjord and nature"], ["Kort storbytur", "Easy city breaks"]],
    stay: ["2–3 netter", "2–3 nights"], areas: ["Bjørvika, Sentrum og Grünerløkka", "Bjørvika, the centre and Grünerløkka"], transport: ["T-bane, trikk, buss, tog og båt", "Metro, tram, bus, train and ferry"], airport: ["Oslo lufthavn Gardermoen", "Oslo Airport Gardermoen"],
    weekend: [
      [["Fredag kveld", "Friday evening"], ["Bjørvika og Operataket", "Bjørvika and the Opera roof"], ["Start ved Oslo S, gå over Operataket og langs den nye havnepromenaden. Finn middag i Bjørvika eller rundt Youngstorget.", "Start at Oslo Central Station, cross the Opera roof and follow the new waterfront. Find dinner in Bjørvika or around Youngstorget."]],
      [["Lørdag", "Saturday"], ["Kunst, fjord og badstue", "Art, fjord and sauna"], ["Velg MUNCH eller Nasjonalmuseet, fortsett langs Aker Brygge og legg inn fjordbad eller badstue dersom været passer.", "Choose MUNCH or the National Museum, continue along Aker Brygge and add a fjord dip or sauna when the weather suits."]],
      [["Søndag", "Sunday"], ["Grünerløkka eller marka", "Grünerløkka or the forest"], ["Ta en rolig kaférunde på Grünerløkka, eller bruk T-banen til et utsiktspunkt i marka før flytoget hjem.", "Enjoy a relaxed café morning in Grünerløkka, or take the metro to a forest viewpoint before travelling to the airport."]]
    ],
    districts: [["Bjørvika", ["Moderne arkitektur, sjøfront og kort vei til Oslo S.", "Modern architecture, waterfront and easy access to Oslo Central Station."]], ["Sentrum", ["Praktisk for museer, shopping og første besøk.", "Practical for museums, shopping and a first visit."]], ["Grünerløkka", ["Kaféer, barer, småbutikker og lokal stemning.", "Cafés, bars, independent shops and local atmosphere."]], ["Frogner", ["Roligere gater, klassisk arkitektur og Vigelandsparken.", "Quieter streets, classic architecture and Vigeland Park."]]],
    tips: [[["Bruk Ruter-appen", "Use the Ruter app"], ["Samme billettsystem dekker det meste av kollektivtrafikken i byen.", "One ticket system covers most public transport in the city."]], [["Bestill badstue tidlig", "Book sauna early"], ["Populære tider ved fjorden blir raskt fulle i helgene.", "Popular waterfront slots fill quickly at weekends."]], [["Ta med gode sko", "Bring good shoes"], ["Byen er kompakt, og mye av Oslo oppleves best til fots.", "The city is compact and much of Oslo is best explored on foot."]]],
    transportUrl: "https://ruter.no/en/", transportName: "Ruter"
  }),
  monaco: guide({
    seo: ["Monaco-guide: havn, utsikt og Riviera-luksus", "Monaco guide: harbour, views and Riviera glamour"],
    intro: ["Monaco er lite i areal, men stort på utsikt, biler, båter og ikoniske adresser. Fyrstedømmet passer perfekt som en innholdsrik dag eller en elegant helg kombinert med Nice og resten av Rivieraen.", "Monaco is small in size but big on views, cars, yachts and iconic addresses. The principality works perfectly as a full day or an elegant weekend combined with Nice and the Riviera."],
    bestFor: [["Riviera", "The Riviera"], ["Havn og utsikt", "Harbour and views"], ["Luksus", "Glamour"], ["Dagstur", "Day trips"]],
    stay: ["1–2 netter", "1–2 nights"], areas: ["Monte-Carlo, Monaco-Ville og La Condamine", "Monte-Carlo, Monaco-Ville and La Condamine"], transport: ["Buss, tog og gange", "Bus, train and walking"], airport: ["Nice Côte d’Azur", "Nice Côte d’Azur"],
    weekend: [
      [["Fredag kveld", "Friday evening"], ["Havnen i kveldslys", "The harbour after dark"], ["Gå langs Port Hercule og se byen lyse opp i åssidene før middag i La Condamine.", "Walk along Port Hercule and watch the city light up on the hills before dinner in La Condamine."]],
      [["Lørdag", "Saturday"], ["Monte-Carlo og kasinoet", "Monte-Carlo and the casino"], ["Se Casino-plassen, gå gjennom hagene og fortsett langs Grand Prix-løypens mest kjente partier.", "See Casino Square, walk through the gardens and continue along famous sections of the Grand Prix circuit."]],
      [["Søndag", "Sunday"], ["Gamlebyen på klippen", "The Old Town on the Rock"], ["Besøk Monaco-Ville, palassområdet og utsiktspunktene før toget tilbake langs kysten.", "Visit Monaco-Ville, the palace area and viewpoints before taking the coastal train back."]]
    ],
    districts: [["Monte-Carlo", ["Kasino, hoteller og klassisk Monaco-glamour.", "Casino, hotels and classic Monaco glamour."]], ["La Condamine", ["Havn, marked og en mer avslappet base.", "Harbour, market and a more relaxed base."]], ["Monaco-Ville", ["Gamleby, palass og dramatisk utsikt.", "Old Town, palace and dramatic views."]], ["Larvotto", ["Strand og moderne sjøfront.", "Beach and modern seafront."]]],
    tips: [[["Bruk heiser og rulletrapper", "Use lifts and escalators"], ["Offentlige forbindelser mellom nivåene sparer mange bratte bakker.", "Public connections between levels save many steep climbs."]], [["Ta toget fra Nice", "Take the train from Nice"], ["Toget er ofte enklere enn bil langs Rivieraen.", "The train is often easier than driving along the Riviera."]], [["Sjekk kleskode", "Check dress codes"], ["Enkelte kasino- og restaurantområder har egne krav.", "Some casino and restaurant areas have specific requirements."]]],
    transportUrl: "https://www.cam.mc/en", transportName: "CAM Monaco"
  }),
  cannes: guide({
    seo: ["Cannes-guide: strand, gamleby og filmglamour", "Cannes guide: beach, Old Town and film glamour"],
    intro: ["Cannes er mer enn den røde løperen. Le Suquet, sandstrender, havnen og korte båtturer gir en avslappet Riviera-helg med akkurat passe mye glamour.", "Cannes is more than its red carpet. Le Suquet, sandy beaches, the harbour and short boat trips create a relaxed Riviera break with just enough glamour."],
    bestFor: [["Strand", "Beach"], ["Riviera", "The Riviera"], ["Mat og sjøliv", "Food and sea life"], ["Par og venner", "Couples and friends"]],
    stay: ["2–3 netter", "2–3 nights"], areas: ["Le Suquet, Centre og Croisette", "Le Suquet, Centre and Croisette"], transport: ["Tog, buss, båt og gange", "Train, bus, boat and walking"], airport: ["Nice Côte d’Azur", "Nice Côte d’Azur"],
    weekend: [
      [["Fredag kveld", "Friday evening"], ["Havnen og Le Suquet", "Harbour and Le Suquet"], ["Start langs Vieux Port og gå opp de historiske gatene i Le Suquet for utsikt og middag.", "Begin at Vieux Port and climb the historic streets of Le Suquet for views and dinner."]],
      [["Lørdag", "Saturday"], ["Croisetten og stranden", "La Croisette and the beach"], ["Gå forbi festivalpalasset, følg strandpromenaden og sett av tid til sandstrand eller en lang lunsj.", "Pass the festival palace, follow the seafront and leave time for the sandy beach or a long lunch."]],
      [["Søndag", "Sunday"], ["Øyhopping utenfor byen", "Island escape"], ["Ta båten til Îles de Lérins for natur, badebukter og en roligere avslutning.", "Take a boat to the Lérins Islands for nature, swimming coves and a quieter finish."]]
    ],
    districts: [["Le Suquet", ["Historiske gater, utsikt og hyggelige kvelder.", "Historic streets, views and pleasant evenings."]], ["Centre", ["Praktisk ved stasjonen, markedet og handlegatene.", "Practical for the station, market and shopping streets."]], ["Croisette", ["Strand, hoteller og klassisk Cannes-følelse.", "Beach, hotels and classic Cannes atmosphere."]], ["Palm Beach", ["Roligere sjøfront øst for sentrum.", "A quieter seafront east of the centre."]]],
    tips: [[["Bruk toget langs kysten", "Use the coastal train"], ["Nice, Antibes og Monaco er enkle å kombinere med Cannes.", "Nice, Antibes and Monaco are easy to combine with Cannes."]], [["Velg offentlig strand", "Choose a public beach"], ["Dere trenger ikke betale for strandklubb for å bade sentralt.", "You do not need a beach club to swim centrally."]], [["Sjekk arrangementsdatoer", "Check event dates"], ["Store messer og festivaler påvirker pris og kapasitet.", "Major festivals and conferences affect prices and availability."]]],
    transportUrl: "https://www.palmbus.fr/", transportName: "Palm Bus"
  }),
  barcelona: guide({
    seo: ["Barcelona-guide: Gaudí, tapas og bystrand", "Barcelona guide: Gaudí, tapas and city beach"],
    intro: ["Barcelona kombinerer storby, arkitektur, fotball og Middelhavet på en måte få andre byer matcher. Planlegg de største attraksjonene, men behold tid til nabolagene og lange måltider.", "Barcelona combines city life, architecture, football and the Mediterranean like few other places. Plan the major attractions, but leave time for neighbourhoods and long meals."],
    bestFor: [["Arkitektur", "Architecture"], ["Mat og uteliv", "Food and nightlife"], ["Fotball", "Football"], ["Strand og by", "Beach and city"]],
    stay: ["3–4 netter", "3–4 nights"], areas: ["Eixample, El Born og Gràcia", "Eixample, El Born and Gràcia"], transport: ["Metro, buss, tog og gange", "Metro, bus, train and walking"], airport: ["Barcelona–El Prat", "Barcelona–El Prat"],
    weekend: [
      [["Fredag kveld", "Friday evening"], ["El Born og tapas", "El Born and tapas"], ["Start mellom smågatene i El Born, del flere retter og gå videre mot den gotiske bydelen.", "Begin in the lanes of El Born, share several dishes and continue towards the Gothic Quarter."]],
      [["Lørdag", "Saturday"], ["Gaudí og Eixample", "Gaudí and Eixample"], ["Besøk Sagrada Família på bestilt tidspunkt, se mer av Eixample og avslutt med utsikt eller middag i Gràcia.", "Visit Sagrada Família at a booked time, explore Eixample and finish with views or dinner in Gràcia."]],
      [["Søndag", "Sunday"], ["Montjuïc og havet", "Montjuïc and the sea"], ["Ta turen opp på Montjuïc, velg museum eller utsiktspunkt og avslutt langs Barceloneta.", "Head up Montjuïc, choose a museum or viewpoint and finish along Barceloneta."]]
    ],
    districts: [["Eixample", ["Sentralt, oversiktlig og nær mye av Gaudí-arkitekturen.", "Central, easy to navigate and close to much of Gaudí's architecture."]], ["El Born", ["Historie, tapasbarer og livlige kvelder.", "History, tapas bars and lively evenings."]], ["Gràcia", ["Lokale torg, restauranter og roligere bygater.", "Local squares, restaurants and quieter streets."]], ["Poble-sec", ["Gode barer og kort vei til Montjuïc.", "Good bars and easy access to Montjuïc."]]],
    tips: [[["Bestill Gaudí-attraksjoner", "Book Gaudí attractions"], ["De beste tidene blir utsolgt, særlig i helger.", "The best time slots sell out, especially at weekends."]], [["Pass på verdisaker", "Watch your valuables"], ["Vær ekstra oppmerksom i tett folkemengde og på kollektivtransport.", "Take extra care in crowds and on public transport."]], [["Ikke spis bare på La Rambla", "Look beyond La Rambla"], ["Nabolagene rundt sentrum gir ofte bedre måltider og stemning.", "Neighbourhoods beyond the central strip often offer better meals and atmosphere."]]],
    transportUrl: "https://www.tmb.cat/en/home", transportName: "TMB Barcelona"
  }),
  rome: guide({
    seo: ["Roma-guide: historie, mat og ikoniske severdigheter", "Rome guide: history, food and iconic sights"],
    intro: ["Roma er et levende historiekart med piazzaer, pasta og severdigheter som faktisk lever opp til forventningene. Velg noen få hovedmål per dag og la gåturene mellom dem bli en del av reisen.", "Rome is a living map of history, piazzas, pasta and landmarks that genuinely live up to expectations. Choose a few priorities each day and let the walks between them become part of the trip."],
    bestFor: [["Historie", "History"], ["Mat", "Food"], ["Førstegangsbesøk", "First-time visitors"], ["Romantisk helg", "Romantic breaks"]],
    stay: ["3–4 netter", "3–4 nights"], areas: ["Centro Storico, Monti og Trastevere", "Centro Storico, Monti and Trastevere"], transport: ["Metro, buss, trikk og gange", "Metro, bus, tram and walking"], airport: ["Fiumicino eller Ciampino", "Fiumicino or Ciampino"],
    weekend: [
      [["Fredag kveld", "Friday evening"], ["Fontener og piazzaer", "Fountains and piazzas"], ["Gå mellom Trevifontenen, Pantheon og Piazza Navona, og finn middag i en roligere sidegate.", "Walk between the Trevi Fountain, Pantheon and Piazza Navona, then find dinner on a quieter side street."]],
      [["Lørdag", "Saturday"], ["Colosseum og Monti", "Colosseum and Monti"], ["Bruk forhåndsbestilt inngang til Colosseum og Forum Romanum. Fortsett til Monti for en roligere ettermiddag og kveld.", "Use pre-booked entry for the Colosseum and Roman Forum. Continue to Monti for a calmer afternoon and evening."]],
      [["Søndag", "Sunday"], ["Vatikanet og Trastevere", "The Vatican and Trastevere"], ["Start tidlig ved Petersplassen eller Vatikanmuseene og avslutt turen med lunsj og gateliv i Trastevere.", "Start early at St Peter's Square or the Vatican Museums and finish with lunch and street life in Trastevere."]]
    ],
    districts: [["Centro Storico", ["Best for klassikerne og et kort førstegangsbesøk.", "Best for the classics and a short first visit."]], ["Monti", ["Sentralt, hyggelig og nær Colosseum.", "Central, pleasant and close to the Colosseum."]], ["Trastevere", ["Brosteinsgater, restauranter og kveldsstemning.", "Cobbled streets, restaurants and evening atmosphere."]], ["Prati", ["Roligere base nær Vatikanet og metroen.", "A quieter base near the Vatican and metro."]]],
    tips: [[["Bestill de store severdighetene", "Book major sights"], ["Kjøp billetter fra offisielle kilder før reisen.", "Buy tickets from official sources before travelling."]], [["Fyll vannflasken", "Refill your bottle"], ["Byens drikkefontener gjør lange gådager enklere.", "The city's drinking fountains make long walking days easier."]], [["Bruk komfortable sko", "Wear comfortable shoes"], ["Brostein og store avstander merkes etter en hel dag.", "Cobbles and long distances add up over a full day."]]],
    transportUrl: "https://www.atac.roma.it/en", transportName: "ATAC Roma"
  }),
  "gran-canaria": guide({
    seo: ["Gran Canaria-guide: sol, strender og varierte utflukter", "Gran Canaria guide: sun, beaches and varied excursions"],
    intro: ["Gran Canaria gir mer enn basseng og strand. Øya kombinerer sanddyner, fjellandsbyer, havnebyer og stabilt ferieklima, med Las Palmas som den mest urbane basen.", "Gran Canaria offers more than pools and beaches. The island combines dunes, mountain villages, harbour towns and reliable holiday weather, with Las Palmas as its most urban base."],
    bestFor: [["Vintersol", "Winter sun"], ["Strand", "Beach"], ["Roadtrip", "Road trips"], ["Venner og familie", "Friends and family"]],
    stay: ["5–7 netter", "5–7 nights"], areas: ["Las Palmas, Maspalomas og Puerto de Mogán", "Las Palmas, Maspalomas and Puerto de Mogán"], transport: ["Buss og leiebil", "Bus and rental car"], airport: ["Gran Canaria lufthavn", "Gran Canaria Airport"],
    weekend: [
      [["Første dag", "First day"], ["Strand og rolig start", "Beach and an easy start"], ["Finn rytmen ved nærmeste strand, gå langs sjøfronten og spar de lengste utfluktene til neste dag.", "Find your rhythm at the nearest beach, walk the seafront and save longer excursions for the next day."]],
      [["Andre dag", "Second day"], ["Sanddyner og sørkyst", "Dunes and the south coast"], ["Se sanddynene ved Maspalomas og kombiner med badepause eller en havneby på sørkysten.", "See the Maspalomas dunes and combine them with a swim or harbour town on the south coast."]],
      [["Tredje dag", "Third day"], ["Fjell eller Las Palmas", "Mountains or Las Palmas"], ["Velg innlandet og utsiktspunktene med bil, eller bruk dagen i Vegueta og ved Las Canteras.", "Choose the mountain interior and viewpoints by car, or spend the day in Vegueta and at Las Canteras."]]
    ],
    districts: [["Las Palmas", ["Byliv, Las Canteras og historiske Vegueta.", "City life, Las Canteras and historic Vegueta."]], ["Maspalomas", ["Sanddyner, strand og stort aktivitetstilbud.", "Dunes, beach and a wide range of activities."]], ["Puerto Rico", ["Solrik base med strand og båtturer.", "A sunny base with beach and boat trips."]], ["Puerto de Mogán", ["Fotogen havn og roligere ferieatmosfære.", "A photogenic harbour and quieter holiday atmosphere."]]],
    tips: [[["Øya har mikroklima", "The island has microclimates"], ["Været kan være svært forskjellig mellom nord, sør og fjellene.", "Weather can differ greatly between north, south and the mountains."]], [["Planlegg fjellturer i dagslys", "Drive mountain roads by daylight"], ["Veiene er svingete og tar ofte lengre tid enn kartet antyder.", "Mountain roads are winding and often take longer than maps suggest."]], [["Bruk solbeskyttelse", "Use sun protection"], ["Solen er sterk også når vinden gjør temperaturen behagelig.", "The sun remains strong even when wind makes temperatures feel mild."]]],
    transportUrl: "https://guaguasglobal.com/en/", transportName: "Global"
  }),
  gdansk: guide({
    seo: ["Gdansk-guide: fargerik gamleby og maritim historie", "Gdansk guide: colourful Old Town and maritime history"],
    intro: ["Gdansk er en vakker og overkommelig havneby med gjenreiste fasader, sterk historie og liv langs Motława-elven. Sammen med Sopot og Gdynia gir byen en variert helg ved Østersjøen.", "Gdansk is a beautiful and accessible harbour city of reconstructed façades, powerful history and life along the Motława River. Together with Sopot and Gdynia, it creates a varied Baltic weekend."],
    bestFor: [["Historie", "History"], ["God verdi", "Great value"], ["Mat og barer", "Food and bars"], ["Kystutflukt", "Coastal trips"]],
    stay: ["2–3 netter", "2–3 nights"], areas: ["Główne Miasto, Wyspa Spichrzów og Wrzeszcz", "Main Town, Granary Island and Wrzeszcz"], transport: ["Trikk, buss, lokaltog og gange", "Tram, bus, local train and walking"], airport: ["Gdansk Lech Wałęsa lufthavn", "Gdansk Lech Wałęsa Airport"],
    weekend: [
      [["Fredag kveld", "Friday evening"], ["Langgaten og elven", "Long Market and the river"], ["Gå gjennom den historiske hovedaksen til Neptunfontenen og fortsett langs Motława for middag.", "Walk along the historic main route to Neptune Fountain and continue beside the Motława for dinner."]],
      [["Lørdag", "Saturday"], ["Havn og moderne historie", "Harbour and modern history"], ["Velg Solidaritetsmuseet eller andre verdenskrig-museet, og bruk ettermiddagen rundt gamlebyen og Granary Island.", "Choose the European Solidarity Centre or Museum of the Second World War, then spend the afternoon around the Main Town and Granary Island."]],
      [["Søndag", "Sunday"], ["Sopot ved sjøen", "Sopot by the sea"], ["Ta lokaltoget til Sopot for strand, brygge og en roligere lunsj før avreise.", "Take the local train to Sopot for the beach, pier and a slower lunch before departure."]]
    ],
    districts: [["Główne Miasto", ["Best for severdigheter, restauranter og første besøk.", "Best for sights, restaurants and a first visit."]], ["Wyspa Spichrzów", ["Moderne hoteller ved den historiske havnen.", "Modern hotels beside the historic harbour."]], ["Wrzeszcz", ["Mer lokal stemning og gode togforbindelser.", "A more local atmosphere and strong rail connections."]], ["Oliwa", ["Roligere område nær park og katedral.", "A quieter area near the park and cathedral."]]],
    tips: [[["Sett av tid til museene", "Allow time for the museums"], ["De største historiske museene fortjener flere timer, ikke bare et raskt stopp.", "The major history museums deserve several hours rather than a quick stop."]], [["Bruk SKM til Trippelbyen", "Use SKM across the Tricity"], ["Lokaltoget gjør Sopot og Gdynia enkle å besøke.", "Local trains make Sopot and Gdynia easy to visit."]], [["Bestill populære museer", "Book popular museums"], ["Kontroller inngangstider og kapasitet før helgen.", "Check entry times and availability before the weekend."]]],
    transportUrl: "https://ztm.gda.pl/?lang=en", transportName: "ZTM Gdansk"
  }),
  frankfurt: guide({
    seo: ["Frankfurt-guide: skyline, gamleby og eplevin", "Frankfurt guide: skyline, Old Town and apple wine"],
    intro: ["Frankfurt overrasker med kontrasten mellom skyskrapere, gjenreist gamleby, elvebredder og tradisjonelle eplevinssteder. Den store flyplassen gjør byen enkel både som weekendmål og som et godt planlagt stopp.", "Frankfurt surprises with its contrast of skyscrapers, reconstructed Old Town, riverbanks and traditional apple-wine taverns. Its major airport makes it easy as both a weekend destination and a well-planned stopover."],
    bestFor: [["Arkitektur", "Architecture"], ["Mat og eplevin", "Food and apple wine"], ["Museer", "Museums"], ["Kort storbytur", "Easy city breaks"]],
    stay: ["2 netter", "2 nights"], areas: ["Innenstadt, Altstadt og Sachsenhausen", "Innenstadt, Altstadt and Sachsenhausen"], transport: ["U-Bahn, S-Bahn, trikk og buss", "U-Bahn, S-Bahn, tram and bus"], airport: ["Frankfurt lufthavn", "Frankfurt Airport"],
    weekend: [
      [["Fredag kveld", "Friday evening"], ["Römerberg og gamlebyen", "Römerberg and the Old Town"], ["Start ved Römerberg, gå gjennom Neue Altstadt og kryss elven for middag i Sachsenhausen.", "Begin at Römerberg, walk through the New Old Town and cross the river for dinner in Sachsenhausen."]],
      [["Lørdag", "Saturday"], ["Skyline og Museumsufer", "Skyline and Museum Embankment"], ["Se byen fra Main Tower, gå langs elven og velg ett av museene på Museumsufer.", "See the city from Main Tower, walk along the river and choose one museum on the Museum Embankment."]],
      [["Søndag", "Sunday"], ["Marked eller grønn avslutning", "Market or a green finish"], ["Besøk Kleinmarkthalle når den er åpen, eller gå gjennom Palmengarten før S-Bahn til flyplassen.", "Visit Kleinmarkthalle when open, or walk through Palmengarten before taking the S-Bahn to the airport."]]
    ],
    districts: [["Altstadt", ["Historisk sentrum og best for et kort besøk.", "Historic centre and best for a short visit."]], ["Innenstadt", ["Shopping, skyline og gode transportforbindelser.", "Shopping, skyline and strong transport links."]], ["Sachsenhausen", ["Eplevin, restauranter og kveldsstemning sør for elven.", "Apple wine, restaurants and evening atmosphere south of the river."]], ["Bahnhofsviertel", ["Sentralt og mangfoldig, men velg gate og hotell med omtanke.", "Central and diverse, but choose your street and hotel carefully."]]],
    tips: [[["Flyplassen har to stasjoner", "The airport has two stations"], ["Velg regionalstasjonen for lokaltog til sentrum.", "Use the regional station for local trains to the centre."]], [["Prøv eplevin med mat", "Try apple wine with food"], ["Den tradisjonelle drikken passer best som del av et lokalt måltid.", "The traditional drink works best as part of a local meal."]], [["Se mer enn finansområdet", "Look beyond the financial district"], ["Gamlebyen og elven gir et helt annet inntrykk av Frankfurt.", "The Old Town and river reveal a very different Frankfurt."]]],
    transportUrl: "https://www.rmv.de/c/en/homepage", transportName: "RMV"
  }),
  hamburg: guide({
    seo: ["Hamburg-guide: havn, musikk og fotball", "Hamburg guide: harbour, music and football"],
    intro: ["Hamburg er en sjøfartsby med stor personlighet. Speicherstadt, Elbphilharmonie, St. Pauli, fotball og sjømat gir en helg som kan være både elegant, røff og svært sosial.", "Hamburg is a maritime city with a big personality. Speicherstadt, the Elbphilharmonie, St Pauli, football and seafood create a weekend that can be elegant, gritty and highly social."],
    bestFor: [["Havn og arkitektur", "Harbour and architecture"], ["Fotball", "Football"], ["Musikk og uteliv", "Music and nightlife"], ["Julemarked", "Christmas markets"]],
    stay: ["2–3 netter", "2–3 nights"], areas: ["Altstadt, St. Pauli og Sternschanze", "Altstadt, St Pauli and Sternschanze"], transport: ["U-Bahn, S-Bahn, buss og ferge", "U-Bahn, S-Bahn, bus and ferry"], airport: ["Hamburg lufthavn", "Hamburg Airport"],
    weekend: [
      [["Fredag kveld", "Friday evening"], ["Schanze eller St. Pauli", "Schanze or St Pauli"], ["Start med middag i Sternschanze og fortsett mot St. Pauli dersom dere vil ha mer liv.", "Begin with dinner in Sternschanze and continue towards St Pauli if you want a livelier night."]],
      [["Lørdag", "Saturday"], ["Havn, Speicherstadt og fotball", "Harbour, Speicherstadt and football"], ["Gå gjennom Speicherstadt til Elbphilharmonie og havnen. Legg inn stadion eller kamp dersom fotball står på planen.", "Walk through Speicherstadt to the Elbphilharmonie and harbour. Add a stadium or match if football is on the plan."]],
      [["Søndag", "Sunday"], ["Fiskemarked og fergetur", "Fish market and ferry ride"], ["Tidlige gjester kan se Fischmarkt. Senere gir kollektivfergen utsikt over havnen uten egen sightseeingbillett.", "Early visitors can see the Fish Market. Later, a public ferry offers harbour views without a separate sightseeing ticket."]]
    ],
    districts: [["Altstadt", ["Sentralt for rådhus, shopping og Speicherstadt.", "Central for the town hall, shopping and Speicherstadt."]], ["St. Pauli", ["Musikk, fotball, barer og intense kvelder.", "Music, football, bars and intense evenings."]], ["Sternschanze", ["Restauranter, kaféer og avslappet nabolagsliv.", "Restaurants, cafés and relaxed neighbourhood life."]], ["HafenCity", ["Moderne arkitektur og kort vei til havnen.", "Modern architecture and easy access to the harbour."]]],
    tips: [[["Bruk kollektivfergen", "Use the public ferry"], ["Havnefergene inngår i HVV-systemet med gyldig billett.", "Harbour ferries are included in the HVV network with a valid ticket."]], [["Sjekk kamp og konserter", "Check matches and concerts"], ["Store arrangementer påvirker hotellprisene betydelig.", "Major events can affect hotel prices significantly."]], [["Ta med klær for skiftende vær", "Pack for changing weather"], ["Vind og regn fra Elben kan komme raskt.", "Wind and rain from the Elbe can arrive quickly."]]],
    transportUrl: "https://www.hvv.de/en", transportName: "HVV"
  }),
  bangkok: guide({
    seo: ["Bangkok-guide: templer, street food og storbyenergi", "Bangkok guide: temples, street food and big-city energy"],
    intro: ["Bangkok er intens, varm og full av kontraster. Templer, takbarer, markeder, kjøpesentre og matopplevelser fyller dagene, mens elven og kollektivsystemene gjør det mulig å dele byen opp i håndterlige områder.", "Bangkok is intense, warm and full of contrasts. Temples, rooftop bars, markets, malls and food experiences fill the days, while the river and public transport help divide the city into manageable areas."],
    bestFor: [["Street food", "Street food"], ["Storbyenergi", "Big-city energy"], ["Templer og kultur", "Temples and culture"], ["Shopping og uteliv", "Shopping and nightlife"]],
    stay: ["3–4 netter", "3–4 nights"], areas: ["Sukhumvit, Riverside og Silom", "Sukhumvit, Riverside and Silom"], transport: ["BTS, MRT, båt og taxi", "BTS, MRT, boat and taxi"], airport: ["Suvarnabhumi eller Don Mueang", "Suvarnabhumi or Don Mueang"],
    weekend: [
      [["Første kveld", "First evening"], ["Elven og bylysene", "River and city lights"], ["Ta båt eller BTS mot elven, finn middag med utsikt og la den første kvelden være enkel.", "Take a boat or BTS towards the river, find dinner with a view and keep the first evening simple."]],
      [["Andre dag", "Second day"], ["Templer og gamle Bangkok", "Temples and old Bangkok"], ["Start tidlig ved Grand Palace-området, se Wat Pho og bruk båt langs Chao Phraya for å unngå deler av trafikken.", "Start early around the Grand Palace, see Wat Pho and use boats along the Chao Phraya to avoid some traffic."]],
      [["Tredje dag", "Third day"], ["Marked, shopping og takbar", "Market, shopping and rooftop views"], ["Velg marked etter ukedag, kombiner med Siam-området og avslutt med utsikt over byen.", "Choose a market according to the day, combine it with the Siam area and finish with a city view."]]
    ],
    districts: [["Sukhumvit", ["Enkel BTS-tilgang, restauranter og kveldsaktiviteter.", "Easy BTS access, restaurants and nightlife."]], ["Riverside", ["Elveutsikt, templer og roligere hotellopplevelse.", "River views, temples and a calmer hotel experience."]], ["Silom", ["Sentralt for mat, parker og kveldsstemning.", "Central for food, parks and evening atmosphere."]], ["Old Town", ["Nær de viktigste templene, men svakere togforbindelser.", "Close to major temples but with fewer rail links."]]],
    tips: [[["Planlegg etter varmen", "Plan around the heat"], ["Start utendørsaktiviteter tidlig og legg inn pauser med aircondition.", "Start outdoor activities early and include air-conditioned breaks."]], [["Bruk BTS og MRT", "Use BTS and MRT"], ["Togsystemene er ofte raskere enn taxi i rushtiden.", "Rail systems are often faster than taxis during rush hour."]], [["Avtal eller bruk taxameter", "Agree fares or use the meter"], ["Bruk etablerte apper eller be om taxameter før turen starter.", "Use established apps or request the meter before the ride begins."]]],
    transportUrl: "https://www.bts.co.th/eng/", transportName: "BTS Skytrain"
  }),
  "ao-nang": guide({
    seo: ["Ao Nang-guide: Krabi, strender og øyhopping", "Ao Nang guide: Krabi, beaches and island hopping"],
    intro: ["Ao Nang er en enkel base for Krabis dramatiske kalksteinsklipper, Railay Beach og øyene i Andamanhavet. Her kombineres avslappede stranddager med båtturer, aktivitet og thailandsk mat.", "Ao Nang is an easy base for Krabi's dramatic limestone cliffs, Railay Beach and the islands of the Andaman Sea. It combines relaxed beach days with boat trips, activities and Thai food."],
    bestFor: [["Strand", "Beach"], ["Øyhopping", "Island hopping"], ["Natur og aktivitet", "Nature and activities"], ["Avslapning", "Relaxation"]],
    stay: ["4–6 netter", "4–6 nights"], areas: ["Ao Nang Beach, Nopparat Thara og Railay", "Ao Nang Beach, Nopparat Thara and Railay"], transport: ["Longtailbåt, songthaew og taxi", "Long-tail boat, songthaew and taxi"], airport: ["Krabi internasjonale lufthavn", "Krabi International Airport"],
    weekend: [
      [["Første dag", "First day"], ["Strand og solnedgang", "Beach and sunset"], ["Finn dere til rette, gå strandpromenaden og velg middag med utsikt mot kalksteinsklippene.", "Settle in, walk the seafront and choose dinner with views of the limestone cliffs."]],
      [["Andre dag", "Second day"], ["Railay og klippene", "Railay and the cliffs"], ["Ta longtailbåt tidlig til Railay, utforsk strendene og reis tilbake før siste båt eller mørket.", "Take an early long-tail boat to Railay, explore the beaches and return before the final boat or darkness."]],
      [["Tredje dag", "Third day"], ["Øyhopping eller aktivitet", "Island hopping or activity"], ["Velg en seriøs båttur med små grupper, eller bruk dagen på kajakk, klatring eller ATV i området.", "Choose a reputable small-group boat trip, or spend the day kayaking, climbing or riding an ATV nearby."]]
    ],
    districts: [["Ao Nang Beach", ["Mest praktisk for båter, restauranter og første besøk.", "Most practical for boats, restaurants and a first visit."]], ["Nopparat Thara", ["Roligere strand og litt mer plass.", "A quieter beach with more space."]], ["Railay", ["Dramatiske strender og klatring, kun tilgjengelig med båt.", "Dramatic beaches and climbing, accessible only by boat."]], ["Krabi Town", ["Marked, lokal stemning og lavere tempo enn strandbyen.", "Markets, local atmosphere and a slower pace than the resort area."]]],
    tips: [[["Sjekk sjø og vær", "Check sea and weather"], ["Båtturer kan endres når vind og bølger gjør forholdene usikre.", "Boat trips can change when wind and waves make conditions unsafe."]], [["Avtal siste båt", "Confirm the last boat"], ["Returtidene fra Railay kan variere med sesong og forhold.", "Return times from Railay can vary by season and conditions."]], [["Beskytt deg mot solen", "Protect yourself from the sun"], ["Sol, saltvann og båtvind gjør det lett å undervurdere eksponeringen.", "Sun, salt water and boat wind make it easy to underestimate exposure."]]],
    transportUrl: "https://www.tourismthailand.org/Destinations/Provinces/Krabi/347", transportName: "Tourism Authority of Thailand"
  }),
  phuket: guide({
    seo: ["Phuket-guide: strender, gamleby og øyhopping", "Phuket guide: beaches, Old Town and island hopping"],
    intro: ["Phuket er Thailands største øy og gir dere langt mer enn én type strandferie. Velg base etter ønsket tempo, sett av tid til Phuket Old Town og bruk øya som utgangspunkt for utsiktspunkter, båtturer og rolige dager ved Andamanhavet.", "Phuket is Thailand's largest island and offers far more than one kind of beach holiday. Choose your base according to the pace you want, make time for Phuket Old Town and use the island as a starting point for viewpoints, boat trips and relaxed days by the Andaman Sea."],
    bestFor: [["Strandferie", "Beach holidays"], ["Øyhopping", "Island hopping"], ["Mat og gamleby", "Food and Old Town"], ["Venner og familie", "Friends and family"]],
    stay: ["5–7 netter", "5–7 nights"], areas: ["Kata, Karon, Kamala og Phuket Old Town", "Kata, Karon, Kamala and Phuket Old Town"], transport: ["Taxi, lokalbuss, båt og leiebil", "Taxi, local bus, boat and rental car"], airport: ["Phuket internasjonale lufthavn", "Phuket International Airport"],
    weekend: [
      [["Første dag", "First day"], ["Strand og en rolig start", "Beach and an easy start"], ["Finn dere til rette ved stranden nærmest hotellet. Bruk den første dagen til å forstå avstandene, spise lokalt og se solnedgangen uten å fylle programmet.", "Settle in at the beach closest to your hotel. Use the first day to understand the distances, eat locally and watch the sunset without overfilling the schedule."]],
      [["Andre dag", "Second day"], ["Phuket Old Town", "Phuket Old Town"], ["Se de fargerike sino-portugisiske husene, kaféene og markedene i gamlebyen. Kombiner besøket med et tempel eller et utsiktspunkt på vei tilbake.", "Explore the colourful Sino-Portuguese buildings, cafés and markets in the Old Town. Combine the visit with a temple or viewpoint on the way back."]],
      [["Tredje dag", "Third day"], ["Utsikt eller øyhopping", "Viewpoints or island hopping"], ["Velg en båttur når vær- og sjøforholdene er gode, eller bruk dagen langs sørkysten med Nai Harn og Promthep Cape. Ikke prøv å rekke begge deler samme dag.", "Choose a boat trip when sea and weather conditions are good, or spend the day along the south coast at Nai Harn and Promthep Cape. Do not try to squeeze both into one day."]]
    ],
    districts: [["Kata", ["En allsidig base med strand, restauranter og et roligere tempo enn Patong.", "A versatile base with a beach, restaurants and a calmer pace than Patong."]], ["Karon", ["Lang strand, god plass og et praktisk valg mellom Kata og Patong.", "A long beach, more space and a practical choice between Kata and Patong."]], ["Kamala", ["Roligere ferieområde som passer godt for par og familier.", "A calmer resort area that works well for couples and families."]], ["Phuket Old Town", ["Best for arkitektur, lokal mat og byliv, men ikke for en klassisk strandbase.", "Best for architecture, local food and town life, but not for a classic beach base."]]],
    tips: [[
      ["Velg område før hotell", "Choose the area before the hotel"],
      ["Phuket er stor, og trafikken kan gjøre korte avstander langsomme. Bestem hvilken strand og stemning dere ønsker før dere bestiller.", "Phuket is large and traffic can make short distances slow. Decide which beach and atmosphere you want before booking."]
    ], [
      ["Sjekk vær og sjø", "Check weather and sea conditions"],
      ["Båtturer og badeforhold varierer med sesong, vind og bølger. Følg lokale sikkerhetsvarsler og flagg på stranden.", "Boat trips and swimming conditions vary with the season, wind and waves. Follow local safety advice and beach flags."]
    ], [
      ["Planlegg flyplasstransporten", "Plan the airport transfer"],
      ["Reisetiden mellom flyplassen og strandområdene varierer mye. Legg inn ekstra tid ved avreise, særlig når trafikken er tett.", "Travel time between the airport and beach areas varies considerably. Allow extra time before departure, especially in heavy traffic."]
    ]],
    transportUrl: "https://www.tourismthailand.org/Destinations/Provinces/Phuket/350", transportName: "Tourism Authority of Thailand"
  }),
  "hua-hin": guide({
    seo: ["Hua Hin-guide: strand, markeder og utflukter", "Hua Hin guide: beach, markets and excursions"],
    intro: ["Hua Hin kombinerer en lang sandstrand med markeder, sjømat og et roligere tempo enn mange av Thailands største feriebyer. Beliggenheten sør for Bangkok gjør byen til en enkel base for stranddager, golf og naturutflukter langs Thailandbukta.", "Hua Hin combines a long sandy beach with markets, seafood and a gentler pace than many of Thailand's larger resorts. Its location south of Bangkok makes it an easy base for beach days, golf and nature excursions along the Gulf of Thailand."],
    bestFor: [["Rolig strandferie", "Relaxed beach holidays"], ["Par og voksne", "Couples and adults"], ["Markeder og sjømat", "Markets and seafood"], ["Golf og utflukter", "Golf and excursions"]],
    stay: ["4–7 netter", "4–7 nights"],
    areas: ["Sentrum, Khao Takiab og Nong Kae", "Central Hua Hin, Khao Takiab and Nong Kae"],
    transport: ["Songthaew, taxi, tog og leiebil", "Songthaew, taxi, train and rental car"],
    airport: ["Bangkok Suvarnabhumi eller Don Mueang", "Bangkok Suvarnabhumi or Don Mueang"],
    weekend: [
      [["Første dag", "First day"], ["Stranden og den historiske stasjonen", "The beach and historic station"], ["Start rolig på Hua Hin Beach, se den særpregede jernbanestasjonen og avslutt med sjømat eller kveldsliv i sentrum.", "Begin gently on Hua Hin Beach, see the distinctive railway station and finish with seafood or an evening in the centre."]],
      [["Andre dag", "Second day"], ["Khao Takiab og Cicada Market", "Khao Takiab and Cicada Market"], ["Dra sørover til Khao Takiab for strand og utsikt. I helgen passer Cicada Market godt for lokal mat, kunst og en rolig kveld.", "Head south to Khao Takiab for beach and views. At weekends, Cicada Market is ideal for local food, art and a relaxed evening."]],
      [["Tredje dag", "Third day"], ["Naturutflukt langs kysten", "A coastal nature excursion"], ["Sett av dagen til Sam Roi Yot-området, en roligere strand eller en kjøretur mellom utsiktspunktene sør for Hua Hin.", "Set aside the day for the Sam Roi Yot area, a quieter beach or a drive between viewpoints south of Hua Hin."]]
    ],
    districts: [["Central Hua Hin", ["Kort vei til stranden, nattmarkedet, restauranter og jernbanestasjonen.", "Close to the beach, night market, restaurants and railway station."]], ["Khao Takiab", ["Roligere strandbase sør for sentrum med utsikt og lokale spisesteder.", "A quieter beach base south of the centre with views and local places to eat."]], ["Nong Kae", ["Praktisk for Cicada Market, strandhoteller og familieaktiviteter.", "Convenient for Cicada Market, beach resorts and family activities."]], ["Cha-am", ["Et enda roligere alternativ nord for Hua Hin med lang strand.", "An even quieter alternative north of Hua Hin with a long beach."]]],
    tips: [[ ["Planlegg transporten fra Bangkok", "Plan transport from Bangkok"], ["Reisen tar flere timer, og kjøretiden varierer med trafikken. Sammenlign tog, buss og privat transport før avreise.", "The journey takes several hours and travel time varies with traffic. Compare train, bus and private transport before departure."]], [["Sjekk markedsdagene", "Check market days"], ["Cicada og Tamarind er først og fremst helgemarkeder, mens nattmarkedet i sentrum vanligvis er et alternativ flere kvelder.", "Cicada and Tamarind are primarily weekend markets, while the central night market is usually an option on more evenings."]], [["Velg base etter tempo", "Choose your base by pace"], ["Sentrum er mest praktisk, mens Khao Takiab og områdene sørover passer bedre for roligere stranddager.", "The centre is most convenient, while Khao Takiab and areas farther south are better for quieter beach days."]]],
    transportUrl: "https://www.tourismthailand.org/Destinations/Provinces/Prachuap-Khiri-Khan/231", transportName: "Tourism Authority of Thailand"
  }),
  "koh-samui": guide({
    seo: ["Koh Samui-guide: strender, templer og øyliv", "Koh Samui guide: beaches, temples and island life"],
    intro: ["Koh Samui kombinerer palmestrender, småbyliv, templer og grønne utflukter i Thailandbukta. Øya har tydelige forskjeller mellom områdene, så den beste reisen starter med å velge en base som passer tempoet og opplevelsene dere ønsker.", "Koh Samui combines palm-fringed beaches, small-town life, temples and green excursions in the Gulf of Thailand. Its areas have distinct personalities, so the best trip begins by choosing a base that matches your preferred pace and experiences."],
    bestFor: [["Strand og øyliv", "Beaches and island life"], ["Par og venner", "Couples and friends"], ["Templer og natur", "Temples and nature"], ["Mat og markeder", "Food and markets"]],
    stay: ["5–7 netter", "5–7 nights"],
    areas: ["Chaweng, Bophut, Lamai og Mae Nam", "Chaweng, Bophut, Lamai and Mae Nam"],
    transport: ["Taxi, songthaew, båt og leiebil", "Taxi, songthaew, boat and rental car"],
    airport: ["Samui internasjonale lufthavn", "Samui International Airport"],
    weekend: [
      [["Første dag", "First day"], ["Strand og Fisherman's Village", "Beach and Fisherman's Village"], ["Finn dere til rette på stranden nær hotellet, og bruk kvelden i Fisherman's Village i Bophut med restauranter, butikker og marked når det arrangeres.", "Settle in at the beach nearest your hotel, then spend the evening in Bophut's Fisherman's Village with its restaurants, shops and market when scheduled."]],
      [["Andre dag", "Second day"], ["Templer, utsikt og fossefall", "Temples, views and waterfalls"], ["Planlegg en rolig runde på øya med Wat Phra Yai, et utsiktspunkt og Na Mueang-fossene. Avstander og trafikk gjør det lurt å begrense antall stopp.", "Plan an easy island circuit including Wat Phra Yai, a viewpoint and Na Mueang Waterfalls. Distances and traffic make it wise to limit the number of stops."]],
      [["Tredje dag", "Third day"], ["Ang Thong eller en rolig stranddag", "Ang Thong or an easy beach day"], ["Velg en båttur til Ang Thong Marine Park når vær og sjøforhold er gode. Hvis forholdene ikke passer, bruk dagen på en roligere strand og en lang lunsj.", "Choose a boat trip to Ang Thong Marine Park when weather and sea conditions are good. If conditions are unsuitable, spend the day at a quieter beach with a long lunch."]]
    ],
    districts: [["Chaweng", ["Mest liv, stort restaurantutvalg og en lang strand.", "The liveliest base, with many restaurants and a long beach."]], ["Bophut", ["Fisherman's Village, hyggelige kvelder og en mer avslappet base.", "Fisherman's Village, pleasant evenings and a more relaxed base."]], ["Lamai", ["God balanse mellom strand, servering og et roligere tempo.", "A good balance of beach, dining and a gentler pace."]], ["Mae Nam", ["Rolig strandliv og færre travle kvelder.", "Quiet beach life and fewer busy evenings."]]],
    tips: [[ ["Velg base før hotell", "Choose the area before the hotel"], ["Øya er større enn den ser ut, og transport tar tid. Velg område etter ønsket strand, kveldsliv og aktivitetsnivå.", "The island is larger than it looks and transport takes time. Choose your area according to beach, nightlife and activity preferences."]], [["Sjekk sjøforholdene", "Check sea conditions"], ["Båtturer kan flyttes eller avlyses ved vind og bølger. Bestill fleksibelt og følg lokale sikkerhetsråd.", "Boat trips can be moved or cancelled because of wind and waves. Book flexibly and follow local safety advice."]], [["Avklar transport og forsikring", "Confirm transport and insurance"], ["Sammenlign priser på forhånd, og kontroller førerkort-, hjelm- og forsikringskrav dersom dere leier kjøretøy.", "Compare prices in advance and check licence, helmet and insurance requirements if you rent a vehicle."]]],
    transportUrl: "https://www.tourismthailand.org/Destinations/Provinces/Surat-Thani/358", transportName: "Tourism Authority of Thailand"
  })
};
