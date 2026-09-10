export type DestinationAnswerContent = {
  bestTimeNo: string;
  bestTimeEn: string;
  caveatNo: string;
  caveatEn: string;
  verdictNo: string;
  verdictEn: string;
  mapUrl: string;
  routeStops: {
    timeNo: string;
    timeEn: string;
    place: string;
    noteNo: string;
    noteEn: string;
  }[];
};

export const destinationAnswerContent: Record<string, DestinationAnswerContent> = {
  berlin: {
    bestTimeNo: "April–juni og september–desember",
    bestTimeEn: "April–June and September–December",
    caveatNo: "Byen er stor, så samle opplevelsene område for område i stedet for å krysse byen hele dagen.",
    caveatEn: "Berlin is large, so group activities by neighbourhood instead of crossing the city all day.",
    verdictNo: "Berlin er det tryggeste totalvalget for en vennegjeng som vil kombinere historie, mat og uteliv på samme tur.",
    verdictEn: "Berlin is the safest all-round choice for friends who want history, food and nightlife in one trip.",
    mapUrl: "https://www.google.com/maps/dir/?api=1&origin=Brandenburg+Gate+Berlin&destination=East+Side+Gallery+Berlin&waypoints=Reichstag+Building+Berlin%7CMuseum+Island+Berlin%7CAlexanderplatz+Berlin",
    routeStops: [
      { timeNo: "09.00", timeEn: "9:00 am", place: "Brandenburger Tor", noteNo: "Start før de største gruppene kommer.", noteEn: "Start before the largest tour groups arrive." },
      { timeNo: "10.00", timeEn: "10:00 am", place: "Riksdagen og Tiergarten", noteNo: "Reserver eventuell kuppelvisitt på forhånd.", noteEn: "Reserve a dome visit in advance if you want to go inside." },
      { timeNo: "12.30", timeEn: "12:30 pm", place: "Museumsinsel", noteNo: "Velg ett museum, ikke prøv å rekke alle.", noteEn: "Choose one museum rather than rushing through several." },
      { timeNo: "16.00", timeEn: "4:00 pm", place: "Alexanderplatz", noteNo: "Et naturlig stopp før dere fortsetter østover.", noteEn: "A natural stop before continuing east." },
      { timeNo: "18.00", timeEn: "6:00 pm", place: "East Side Gallery", noteNo: "Avslutt sightseeingen og finn middag i Friedrichshain.", noteEn: "Finish sightseeing and find dinner in Friedrichshain." },
    ],
  },
  krakow: {
    bestTimeNo: "April–juni, september–oktober og desember",
    bestTimeEn: "April–June, September–October and December",
    caveatNo: "Populære museer og historiske utflukter bør bestilles før helgen starter.",
    caveatEn: "Popular museums and major historical excursions should be booked before the weekend begins.",
    verdictNo: "Krakow passer spesielt godt når dere vil ha korte avstander, sterk historie, gode måltider og mye igjen for budsjettet.",
    verdictEn: "Krakow is ideal when you want short distances, powerful history, good food and strong value.",
    mapUrl: "https://www.google.com/maps/dir/?api=1&origin=Rynek+Glowny+Krakow&destination=Plac+Bohaterow+Getta+Krakow&waypoints=Wawel+Royal+Castle%7CKazimierz+Krakow",
    routeStops: [
      { timeNo: "09.00", timeEn: "9:00 am", place: "Rynek Główny", noteNo: "Se markedsplassen mens byen fortsatt våkner.", noteEn: "See the Main Square while the city is still waking up." },
      { timeNo: "10.30", timeEn: "10:30 am", place: "Wawel", noteNo: "Sett av tid til høyden, borggården og elveutsikten.", noteEn: "Allow time for the hill, courtyard and river views." },
      { timeNo: "13.30", timeEn: "1:30 pm", place: "Kazimierz", noteNo: "Spis lunsj og utforsk området til fots.", noteEn: "Have lunch and explore the district on foot." },
      { timeNo: "16.30", timeEn: "4:30 pm", place: "Podgórze", noteNo: "Kryss elven for den historiske delen av ruten.", noteEn: "Cross the river for the historical part of the route." },
      { timeNo: "19.30", timeEn: "7:30 pm", place: "Kazimierz", noteNo: "Avslutt med en restaurant Flyferie selv har besøkt.", noteEn: "Finish at a restaurant personally visited by Flyferie." },
    ],
  },
  amsterdam: {
    bestTimeNo: "April–mai og september–oktober",
    bestTimeEn: "April–May and September–October",
    caveatNo: "Overnatting blir raskt dyr, og de mest populære museene krever ofte tidsbestilt billett.",
    caveatEn: "Accommodation becomes expensive quickly, and the most popular museums often require timed tickets.",
    verdictNo: "Amsterdam er et sterkt valg for en livlig helg med kanaler, museer og nabolag som er enkle å utforske til fots.",
    verdictEn: "Amsterdam is a strong choice for a lively weekend of canals, museums and walkable neighbourhoods.",
    mapUrl: "https://www.google.com/maps/dir/?api=1&origin=Amsterdam+Centraal&destination=De+Pijp+Amsterdam&waypoints=Jordaan+Amsterdam%7CMuseumplein+Amsterdam%7CVondelpark+Amsterdam",
    routeStops: [
      { timeNo: "09.00", timeEn: "9:00 am", place: "Jordaan", noteNo: "Start langs kanalene før gatene blir travle.", noteEn: "Begin by the canals before the streets get busy." },
      { timeNo: "11.00", timeEn: "11:00 am", place: "De 9 Straatjes", noteNo: "Småbutikker, kafé og korte avstander.", noteEn: "Independent shops, coffee and short walking distances." },
      { timeNo: "13.30", timeEn: "1:30 pm", place: "Museumplein", noteNo: "Velg museet dere har bestilt på forhånd.", noteEn: "Visit the museum you reserved in advance." },
      { timeNo: "17.00", timeEn: "5:00 pm", place: "Vondelpark", noteNo: "Legg inn en roligere pause etter museet.", noteEn: "Add a slower break after the museum." },
      { timeNo: "19.30", timeEn: "7:30 pm", place: "De Pijp", noteNo: "Avslutt dagen med middag og barer.", noteEn: "Finish the day with dinner and bars." },
    ],
  },
  malaga: {
    bestTimeNo: "Mars–juni og september–november",
    bestTimeEn: "March–June and September–November",
    caveatNo: "Midt på sommeren kan varmen gjøre lange gåturer og Alcazaba krevende midt på dagen.",
    caveatEn: "In midsummer, the heat can make long walks and the Alcazaba demanding around midday.",
    verdictNo: "Málaga passer når dere vil kombinere ekte storbyhelg med sol, tapas, kunst og tid ved sjøen.",
    verdictEn: "Málaga suits travellers who want a genuine city break with sunshine, tapas, art and time by the sea.",
    mapUrl: "https://www.google.com/maps/dir/?api=1&origin=Mercado+Central+de+Atarazanas+Malaga&destination=La+Malagueta+Malaga&waypoints=Malaga+Cathedral%7CAlcazaba+Malaga%7CMuelle+Uno+Malaga",
    routeStops: [
      { timeNo: "09.00", timeEn: "9:00 am", place: "Atarazanas-markedet", noteNo: "Start med markedet når det er åpent og på sitt livligste.", noteEn: "Begin at the market when it is open and at its liveliest." },
      { timeNo: "10.30", timeEn: "10:30 am", place: "Katedralen og gamlebyen", noteNo: "Gå via Calle Larios og de små torgene.", noteEn: "Walk via Calle Larios and the smaller squares." },
      { timeNo: "12.00", timeEn: "12:00 pm", place: "Alcazaba", noteNo: "Ta høyden før den varmeste delen av dagen.", noteEn: "Climb before the hottest part of the day." },
      { timeNo: "15.30", timeEn: "3:30 pm", place: "Muelle Uno", noteNo: "Spis sent og fortsett langs havnen.", noteEn: "Have a late lunch and continue along the harbour." },
      { timeNo: "17.30", timeEn: "5:30 pm", place: "La Malagueta", noteNo: "Avslutt med strand eller en rolig spasertur ved sjøen.", noteEn: "Finish at the beach or with a relaxed seafront walk." },
    ],
  },
  manchester: {
    bestTimeNo: "April–juni og september–desember",
    bestTimeEn: "April–June and September–December",
    caveatNo: "Kampdager påvirker hotellpris, transport og tilgjengelighet – planlegg fotballhelgen tidlig.",
    caveatEn: "Match days affect hotel prices, transport and availability, so plan football weekends early.",
    verdictNo: "Manchester er best for en sosial helg med fotball, musikk, puber og kompakte bydeler.",
    verdictEn: "Manchester is best for a social weekend of football, music, pubs and compact neighbourhoods.",
    mapUrl: "https://www.google.com/maps/dir/?api=1&origin=Manchester+Piccadilly&destination=Castlefield+Manchester&waypoints=Northern+Quarter+Manchester%7CAncoats+Manchester%7CJohn+Rylands+Library",
    routeStops: [
      { timeNo: "09.30", timeEn: "9:30 am", place: "Northern Quarter", noteNo: "Start med frokost og de fargerike gatene.", noteEn: "Start with breakfast and the colourful streets." },
      { timeNo: "11.30", timeEn: "11:30 am", place: "Ancoats", noteNo: "Fortsett til bakerier, kanaler og moderne byliv.", noteEn: "Continue to bakeries, canals and modern city life." },
      { timeNo: "14.00", timeEn: "2:00 pm", place: "John Rylands Library", noteNo: "Legg inn et gratis, sentralt kulturstopp.", noteEn: "Add a free and central cultural stop." },
      { timeNo: "16.00", timeEn: "4:00 pm", place: "Castlefield", noteNo: "Gå langs kanalene og industrihistorien.", noteEn: "Walk by the canals and industrial heritage." },
      { timeNo: "19.00", timeEn: "7:00 pm", place: "Deansgate", noteNo: "Avslutt med middag, pub eller konsert.", noteEn: "Finish with dinner, a pub or live music." },
    ],
  },
};
