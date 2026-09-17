/** Editorial desk research, not firsthand reviews. Source links are primary sources.
 * The date applies ONLY to these additions, not to every fact in the older guides.
 * Do not add prices, opening hours or claims of personal visits without verification.
 */
export type LocalizedText = { no: string; en: string };
export type Discovery = {
  name: string;
  kind: LocalizedText;
  description: LocalizedText;
  source: { name: string; url: string };
};
export type DestinationDiscovery = {
  checked: string;
  intro: LocalizedText;
  see: Discovery;
  eat: Discovery;
  slow: LocalizedText;
};
const text = (no: string, en: string): LocalizedText => ({ no, en });
const tip = (name: string, kindNo: string, kindEn: string, no: string, en: string, source: string, url: string): Discovery =>
  ({ name, kind: text(kindNo, kindEn), description: text(no, en), source: { name: source, url } });
const guide = (introNo: string, introEn: string, see: Discovery, eat: Discovery, slowNo: string, slowEn: string): DestinationDiscovery =>
  ({ checked: "2026-09-17", intro: text(introNo, introEn), see, eat, slow: text(slowNo, slowEn) });

export const destinationDiscoveries: Record<string, DestinationDiscovery> = {
  berlin: guide(
    "Gi Berlin litt spillerom: velg én stor opplevelse, og la resten av dagen få plass til bakgårder, mat og en ekstra kaffepause.",
    "Leave a little room for Berlin: choose one big experience, then let courtyards, food and an extra coffee fill the gaps.",
    tip("Museumsinsel", "Kunst og historie", "Art and history", "Velg for eksempel Neues Museum eller Alte Nationalgalerie fremfor å rekke alt. Sjekk hvilke museer og utstillinger som er åpne; Pergamonmuseet er under ombygging.", "Choose Neues Museum or Alte Nationalgalerie rather than attempting everything. Check individual museum and exhibition access; the Pergamon Museum is undergoing renovation.", "visitBerlin", "https://www.visitberlin.de/en/museum-island-in-berlin"),
    tip("Markthalle Neun", "Mathall · Kreuzberg", "Food hall · Kreuzberg", "En historisk markedshall med ulike mataktører. Et fint alternativ når reisefølget har lyst på forskjellige ting; se dagens utvalg og arrangementer før dere drar.", "A historic market hall with several food businesses. A useful option when everyone wants something different; check the day's vendors and events before going.", "visitBerlin", "https://www.visitberlin.de/en/markthalle-neun"),
    "Vårt turforslag: legg bort sjekklisten etter museumsbesøket og rusle langs Spree. La en ledig benk eller en kafé bestemme neste stopp.",
    "Our suggestion: put the checklist away after the museum and stroll beside the Spree. Let an empty bench or a café decide the next stop."),
  tbilisi: guide(
    "Tbilisi passer best med gode sko og god tid. Bland gamlebyen med et måltid på den andre siden av elven, heller enn å fylle dagen med transport.",
    "Tbilisi rewards comfortable shoes and an unhurried day. Mix the old town with a meal across the river instead of filling your schedule with transfers.",
    tip("Abanotubani", "Badebydelen", "The bath district", "Området rundt svovelbadene er en fin inngang til gamle Tbilisi. Vil du bade, avtal behandling, romtype og pris direkte med et badehus på forhånd.", "The sulphur-bath district is a good introduction to old Tbilisi. For a bath, confirm the treatment, room type and price directly with a bathhouse beforehand.", "Georgia Travel", "https://georgia.travel/cities-towns/tbilisi"),
    tip("Fabrika", "Bakgård med mat og barer", "Courtyard food and bars", "Den tidligere fabrikken samler kreative virksomheter og flere serveringssteder rundt en bakgård. Velg dette som et uformelt matstopp, ikke som én bestemt restaurant.", "This former factory brings creative businesses and several places to eat and drink together around a courtyard. Think of it as an informal food stop, not one single restaurant.", "Fabrika", "https://fabrikatbilisi.com/"),
    "Vårt turforslag: sett av en egen rusletur til Sololaki. Se opp på balkongene, men respekter at mange innganger og bakgårder tilhører boliger.",
    "Our suggestion: give Sololaki its own leisurely walk. Look up at the balconies, but remember that many doorways and courtyards belong to people's homes."),
  krakow: guide(
    "En god Krakow-dag trenger ikke mange avtaler: et besøk på Wawel, en rusletur og en lang middag er mer enn nok.",
    "A good Krakow day needs surprisingly few plans: a visit to Wawel, a walk and a long dinner can be plenty.",
    tip("Wawel", "Slott og utstillinger", "Castle and exhibitions", "Velg utstilling etter interesse før du bestiller. Wawel har flere besøksalternativer; én billett er ikke nødvendigvis adgang til alt på området.", "Choose an exhibition that interests you before booking. Wawel offers several visiting options; one ticket does not necessarily cover everything on the hill.", "Wawel Royal Castle", "https://wawel.krakow.pl/en"),
    tip("Morskie Oko", "Polsk restaurant", "Polish restaurant", "Et alternativ for en middag med polske retter. Sjekk meny og reservasjon direkte; lenger ned finner du også Flyferies egne bilder og personlige Krakow-tips.", "An option for a dinner of Polish dishes. Check the menu and reservations directly; further down you will also find Flyferie's own photos and personal Krakow recommendations.", "Morskie Oko", "https://www.morskieoko.krakow.pl/"),
    "Vårt turforslag: bruk Planty som en grønn omvei mellom stoppene i gamlebyen. Det gjør en travel sightseeingdag litt mykere.",
    "Our suggestion: take a green detour through Planty between old-town stops. It adds a gentler rhythm to a busy sightseeing day."),
  madrid: guide(
    "Madrid er både de store kunstsamlingene og livet mellom dem. Planlegg én museumsøkt, og gi lunsjen lov til å vare.",
    "Madrid is about the great art collections and the life between them. Plan one museum session and let lunch take its time.",
    tip("Prado og Retiro", "Kunst og park", "Art and a park", "Kombiner en avgrenset runde i Prado med en pause i Retiro. Museet er kjent for blant annet Velázquez og Goya; velg noen høydepunkter fremfor hele samlingen.", "Pair a focused visit to the Prado with a break in Retiro. The museum includes works by Velázquez and Goya; pick a few highlights rather than the entire collection.", "Madrid Destino", "https://www.esmadrid.com/en/madrid-top-10"),
    tip("Casa Lucio", "Restaurant · Cava Baja", "Restaurant · Cava Baja", "Et tradisjonelt restaurantstopp i Cava Baja. Se menyen og reserver direkte hvis du vil bygge kvelden rundt en sittende middag fremfor å vandre mellom småbarer.", "A traditional restaurant stop on Cava Baja. Check the menu and book directly if you prefer an evening built around a sit-down dinner rather than bar-hopping.", "Casa Lucio", "https://casalucio.es/"),
    "Vårt turforslag: ta Plaza Mayor før eller etter rushet, og la sidegatene styre resten av turen. Unngå å bestille aktiviteter tett på en lang middag.",
    "Our suggestion: see Plaza Mayor outside the busiest part of the day, then follow the side streets. Avoid scheduling an activity immediately after a leisurely dinner."),
  malaga: guide(
    "Málaga blir ekstra fin når kultur og sjøluft får dele dagen. Legg den mest aktive delen tidlig, og spar litt energi til kvelden.",
    "Málaga works beautifully when culture and sea air share the day. Put the most active part first and save some energy for the evening.",
    tip("Alcazaba og Gibralfaro", "Festningsanlegg og utsikt", "Fortifications and views", "To historiske anlegg som kan gi dagen både arkitektur og utsikt. Les kommunens besøksinformasjon og planlegg for bakker, pauser og sol – ikke bare avstanden på kartet.", "Two historic sites that bring architecture and views into the same day. Read the city's visiting information and allow for hills, shade breaks and sun, not just map distance.", "Málaga kommune", "https://alcazabaygibralfaro.malaga.eu/en/"),
    tip("Antigua Casa de Guardia", "Vintaverna · småretter", "Wine tavern · small plates", "En historisk taverna på Alameda Principal med Málaga-viner fra fat og blant annet sjømat og syltede småretter. Tenk et kort stopp, ikke nødvendigvis en full restaurantmiddag.", "A historic tavern on Alameda Principal serving Málaga wines from barrels alongside seafood and pickled bites. Think of a short stop rather than necessarily a full restaurant dinner.", "Antigua Casa de Guardia", "https://antiguacasadeguardia.com/"),
    "Vårt turforslag: avslutt med en rolig tur ved havnen. La den siste timen være uten bestillinger, så får utsikten og reisefølget litt plass.",
    "Our suggestion: finish with an easy harbour walk. Leave the last hour unbooked so there is room for the view and your travelling companions."),
  manchester: guide(
    "Manchester har mer å by på enn kampdag. Bland et museum med kanalene og en middag som er verdt å sette seg ned for.",
    "Manchester has plenty beyond match day. Mix a museum with the canals and a dinner worth sitting down for.",
    tip("Science and Industry Museum", "Museum", "Museum", "Et naturlig valg for deg som er nysgjerrig på byens industrihistorie. Sjekk dagens utstillinger og eventuell bestilling via turistkontorets museumsoversikt.", "A natural choice if you are curious about the city's industrial history. Check current exhibitions and any booking requirements through the tourist board's museum listings.", "Visit Manchester", "https://www.visitmanchester.com/"),
    tip("Dishoom Manchester", "Indisk restaurant · Bridge Street", "Indian restaurant · Bridge Street", "Bombay-inspirert mat i et tidligere frimurerbygg. Menyen dekker flere deler av dagen, så dette kan passe både som frokoststopp og en planlagt middag.", "Bombay-inspired food in a former Freemasons' Hall. The menu spans several parts of the day, making it an option for breakfast as well as a planned dinner.", "Dishoom Manchester", "https://www.dishoom.com/manchester/"),
    "Vårt turforslag: legg inn en tur i Castlefield når været tillater det. Kanalene gir en annen rytme enn handlegatene og stadionområdet.",
    "Our suggestion: add a Castlefield walk when the weather allows. The canals offer a different rhythm from the shopping streets and stadium area."),
  katowice: guide(
    "Gi Katowice en sjanse til å overraske. En konsert, et måltid og tid til å se arkitekturen er en fin start.",
    "Give Katowice a chance to surprise you. A concert, a meal and time to notice the architecture make a good start.",
    tip("NOSPR", "Konserthus", "Concert hall", "Se om programmet til det polske radiosymfoniorkesteret passer reisedatoene dine. En konsert gir en konkret grunn til å sette av en kveld i kultursonen.", "See whether the Polish National Radio Symphony Orchestra's programme fits your dates. A concert gives you a reason to spend an evening in the Culture Zone.", "NOSPR", "https://nospr.org.pl/en"),
    tip("Tatiana", "Restaurant", "Restaurant", "Et alternativ for en rolig restaurantmiddag, med blant annet pierogi på menyen. Les den aktuelle menyen og avklar bord før en eventuell konsert.", "An option for a leisurely restaurant dinner, with dishes including pierogi on the menu. Read the current menu and arrange your table before any concert plans.", "Restauracja Tatiana", "https://www.restauracjatatiana.pl/"),
    "Vårt turforslag: hold Nikiszowiec som en egen liten utflukt, i stedet for å presse bydelen inn mellom to avtaler i sentrum.",
    "Our suggestion: treat Nikiszowiec as its own small outing rather than squeezing the neighbourhood between two city-centre appointments."),
  amsterdam: guide(
    "Den hyggeligste Amsterdam-turen har også tid mellom høydepunktene. Velg ett museum og én bydel, og la kanalene binde dagen sammen.",
    "The nicest Amsterdam trip leaves space between the highlights. Choose one museum and one neighbourhood, and let the canals connect the day.",
    tip("Rijksmuseum", "Kunstmuseum", "Art museum", "Et godt utgangspunkt for en kunstøkt ved Museumplein. Sjekk besøksinformasjon og tidsluker før du legger resten av dagen rundt museumsbesøket.", "A good starting point for an art session near Museumplein. Check visiting information and time slots before arranging the rest of the day around your museum visit.", "I amsterdam", "https://www.iamsterdam.com/en/see-and-do/top-20-things-to-do-in-amsterdam"),
    tip("Foodhallen", "Mathall · Amsterdam-West", "Food hall · Amsterdam-West", "Flere matboder samlet i De Hallen, praktisk når dere ikke har lyst på det samme. Bruk Amsterdam-avdelingens side, siden Foodhallen også finnes i andre byer.", "Several food stands together in De Hallen, useful when you are in the mood for different things. Use the Amsterdam location's page; Foodhallen also operates in other cities.", "Foodhallen Amsterdam", "https://foodhallen.nl/amsterdam"),
    "Vårt turforslag: ta en omvei gjennom Jordaan uten en lang liste med stopp. Stå utenfor sykkelfeltene når du stanser for å fotografere.",
    "Our suggestion: wander through Jordaan without a long checklist. Step clear of cycle lanes whenever you stop for a photo."),
  nice: guide(
    "Nice trenger ikke et tett program. La gamlebyen, en lokal smårett og sjøluften få være dagens tre viktigste planer.",
    "Nice does not need a crowded itinerary. Let the old town, a local bite and the sea air be your three main plans.",
    tip("Gamlebyen og Promenade des Anglais", "Byvandring og sjøfront", "Old town and seafront", "Kombiner de tettere gatene i gamlebyen med den åpne strandpromenaden. Turistkontorets Nice-guide gir flere forslag hvis du vil legge til museum eller en parkpause.", "Pair the old town's narrower streets with the open seafront promenade. The tourist board's Nice guide offers more ideas if you want a museum or a park break.", "Nice Côte d’Azur Tourisme", "https://www.explorenicecotedazur.com/en/explore/towns-villages/coastal-area/nice/"),
    tip("Chez Pipo", "Socca · ved havneområdet", "Socca · near the port", "Et konkret sted å prøve socca, den lokale kikertpannekaken. Her passer et enkelt matstopp godt inn mellom en tur i gamlebyen og havneområdet.", "A specific place to try socca, the local chickpea pancake. A simple food stop can fit neatly between an old-town walk and time around the port.", "Chez Pipo", "https://www.chezpipo.fr/fr/"),
    "Vårt turforslag: spar en del av sjøfronten til ettermiddagen og finn en plass å sitte. Det er lov å la neste severdighet vente.",
    "Our suggestion: save part of the seafront for the afternoon and find somewhere to sit. The next sight can wait."),
  milan: guide(
    "Milano blir varmere når du ser forbi handlelisten. Bland den store arkitekturen med en enkel matpause og et kvarter uten mål.",
    "Milan feels warmer when you look beyond the shopping list. Mix grand architecture with a simple food stop and a little aimless wandering.",
    tip("Duomo di Milano", "Katedral og takterrasser", "Cathedral and rooftops", "Katedralen og takterrassene gir ulike opplevelser. Sammenlign de offisielle billettypene og adkomstalternativene, og velg det som passer reisefølget.", "The cathedral and its rooftops offer different experiences. Compare official ticket types and access options, then choose what suits your travelling party.", "Duomo di Milano", "https://www.duomomilano.it/en/"),
    tip("Luini", "Bakeri · panzerotti", "Bakery · panzerotti", "Panzerotti fra bakeriet i Via Santa Radegonda er et enkelt alternativ til en lang lunsj. Dette er et bakeristopp, ikke et tips om en sittende restaurantmiddag.", "Panzerotti from the bakery on Via Santa Radegonda are an easy alternative to a long lunch. This is a bakery stop, not a sit-down restaurant dinner recommendation.", "Luini", "https://www.luini.it/panzerotti.html"),
    "Vårt turforslag: bruk en rolig del av dagen på Brera, og velg én kafépause underveis i stedet for å krysse byen for hvert stopp.",
    "Our suggestion: spend an unhurried part of the day in Brera, choosing a café along the way rather than crossing the city for every stop."),
  helsinki: guide(
    "La Helsinki få være en by ved havet, ikke bare en liste med bygninger. En øytur og en lang pause ved vannet gir turen en egen ro.",
    "Let Helsinki be a city by the sea, not just a list of buildings. An island outing and a long waterfront break give the trip its own calm rhythm.",
    tip("Suomenlinna", "Sjøfestning", "Sea fortress", "Sett av god tid til festningsøyene og sjekk transport og besøksinformasjon før avreise. Velg en kortere runde hvis vær, underlag eller reisefølget tilsier det.", "Allow plenty of time for the fortress islands and check transport and visitor information before setting off. Choose a shorter route if the weather, terrain or your group calls for it.", "Suomenlinna", "https://suomenlinna.fi/en/"),
    tip("Löyly", "Restaurant og badstue", "Restaurant and sauna", "Et matstopp ved sjøen som også kan kombineres med badstue. Restaurantbord og badstuebesøk planlegges hver for seg; se vilkår og ledighet direkte hos stedet.", "A waterfront meal that can also be paired with a sauna. Plan restaurant and sauna reservations separately, checking availability and conditions directly with the venue.", "Löyly Helsinki", "https://www.loylyhelsinki.fi/en"),
    "Vårt turforslag: ikke fyll kvelden etter en øytur. En liten tur langs vannet og noe varmt å drikke kan være et bedre siste punkt.",
    "Our suggestion: leave the evening after an island trip mostly free. A short waterfront walk and something warm to drink can make a better final stop."),
  copenhagen: guide(
    "København er lett å like i et rolig tempo. Velg ett stort innslag, spis ordentlig lunsj og la resten være gater og vann.",
    "Copenhagen is easy to enjoy at a gentle pace. Choose one big activity, make time for lunch and leave the rest to streets and water.",
    tip("Tivoli", "Hage og fornøyelsespark", "Gardens and amusement park", "Tivoli kan være en egen del av dagen, ikke bare et raskt stopp. Sjekk sesongkalenderen og forskjellen mellom inngang og tilgang til attraksjoner før du kjøper.", "Tivoli can fill a part of the day rather than just a quick stop. Check the seasonal calendar and the difference between admission and rides before buying.", "Tivoli", "https://www.tivoli.dk/en"),
    tip("Aamanns", "Smørrebrød · flere avdelinger", "Smørrebrød · several locations", "Et konkret alternativ når du vil gjøre dansk smørrebrød til en ordentlig lunsj. Velg avdeling først: Aamanns 1921, Replik og Østerbro er ulike steder.", "A specific option for making Danish open sandwiches into a proper lunch. Choose your branch first: Aamanns 1921, Replik and Østerbro are separate venues.", "Aamanns", "https://aamanns.dk/"),
    "Vårt turforslag: ta kanalene i Christianshavn til fots og sett av tid til en pause. Ikke la hele helgen bli en konkurranse om å rekke flest bydeler.",
    "Our suggestion: explore Christianshavn's canals on foot and leave time for a break. The weekend need not become a race to cover the most neighbourhoods."),
  skopje: guide(
    "Skopje og Matka gir to forskjellige dager: byliv og basargater først, grønnere omgivelser når du har tid til en utflukt.",
    "Skopje and Matka offer two different days: city life and bazaar streets first, greener surroundings when you have time for an outing.",
    tip("Matka", "Utflukt utenfor byen", "Outing outside the city", "Området ved Matka-sjøen er et alternativ til en dag i sentrum. Planlegg både utreise og hjemreise; båter, aktiviteter og forhold må avklares lokalt.", "The area around Lake Matka offers an alternative to a city-centre day. Plan both your outward and return journey; confirm boats, activities and conditions locally.", "Canyon Matka · lokal operatør", "https://canyonmatka.mk/"),
    tip("Canyon Matka Restaurant", "Restaurant · ved Matka", "Restaurant · at Matka", "Restauranten ved sjøen kan passe som del av samme utflukt. Den ligger ikke i Skopje sentrum, så avklar bord og transport før du legger middagen hit.", "The lakeside restaurant can work as part of the same outing. It is not in central Skopje, so arrange your table and transport before planning dinner here.", "Canyon Matka", "https://canyonmatka.mk/"),
    "Vårt turforslag: la en egen formiddag være til gamlebasaren i Skopje. Velg sidegater og en kaffepause fremfor å kombinere alt med Matka samme dag.",
    "Our suggestion: give Skopje's Old Bazaar a morning of its own. Choose side streets and a coffee break rather than fitting everything around Matka on the same day."),
  "palma-de-mallorca": guide(
    "Palma er en bytur også uten strandplaner. Start med katedralen, finn lunsj og la gamlebyen få resten av oppmerksomheten.",
    "Palma makes a city break even without beach plans. Start with the cathedral, find lunch and give the old town the rest of your attention.",
    tip("La Seu", "Katedral", "Cathedral", "Katedralen ved sjøfronten er et tydelig holdepunkt for dagen. Sjekk besøksalternativene; takterrassene kan ha egne sesonger, billetter og adgangsvilkår.", "The cathedral beside the seafront is a natural anchor for the day. Check visiting options; rooftop terraces may have separate seasons, tickets and access conditions.", "Catedral de Mallorca", "https://catedraldemallorca.org/en/"),
    tip("Mercat de l’Olivar", "Matmarked", "Food market", "Et matmarked med både råvarer og serveringssteder. Ta en runde før du velger lunsj, og sjekk tidene til den enkelte aktøren – ikke bare markedets åpningstid.", "A food market with produce stalls and places to eat. Look around before choosing lunch, and check individual vendors' hours rather than only the market's opening times.", "Mercat de l’Olivar", "https://www.mercatolivar.com/en/"),
    "Vårt turforslag: legg en liten runde i gamlebyen mellom katedralen og neste avtale. Skyggefulle gater og en pause er også en del av opplevelsen.",
    "Our suggestion: fit a small old-town wander between the cathedral and your next appointment. Shaded streets and a break are part of the experience too."),
  gothenburg: guide(
    "Gøteborg kan være både leken og avslappet. Velg mellom en stor parkdag og mer tid til mat, vann og rusling.",
    "Gothenburg can be playful and relaxed in equal measure. Choose between a big park day and more time for food, water and wandering.",
    tip("Liseberg", "Fornøyelsespark", "Amusement park", "Et naturlig hovedinnslag hvis reisefølget liker attraksjoner. Sjekk kalender og billettpakker først; parken er sesongstyrt og bør ikke være en uavklart siste-liten-plan.", "A natural main event if your group enjoys rides. Check the calendar and ticket packages first; the park is seasonal and should not be an unconfirmed last-minute plan.", "Liseberg", "https://www.liseberg.se/en/"),
    tip("Feskekörka", "Sjømat og serveringssteder", "Seafood and dining", "Den karakteristiske fiskehallen rommer flere matopplevelser. Velg spisested og meny på forhånd dersom dere ønsker en sittende sjømatlunsj.", "The distinctive fish hall houses several food experiences. Choose a venue and menu in advance if you want a sit-down seafood lunch.", "Feskekörka", "https://www.feskekorka.se/"),
    "Vårt turforslag: la Haga være en rusletur med fikapause, ikke et punkt du bare krysser av. Det passer fint på en dag uten parkbilletter.",
    "Our suggestion: make Haga a walk with a fika break, not just a place to tick off. It fits nicely into a day without park tickets."),
  oslo: guide(
    "Oslo er fin når du veksler mellom inne og ute. Velg kunst eller museum, og la vannet eller elven bli neste stopp.",
    "Oslo works well when you alternate indoors and out. Choose art or a museum, then make the waterfront or river your next stop.",
    tip("Nasjonalmuseet", "Kunst, arkitektur og design", "Art, architecture and design", "Velg en del av samlingen eller en aktuell utstilling fremfor å forsøke alt. Museumsbesøket kan bli dagens hovedinnslag, med en pause ved sjøen etterpå.", "Choose part of the collection or a current exhibition rather than trying to see everything. Make the museum the day's main event, with a waterfront break afterwards.", "Nasjonalmuseet", "https://www.nasjonalmuseet.no/en/"),
    tip("Mathallen Oslo", "Mathall · Vulkan", "Food hall · Vulkan", "Flere butikker og spisesteder samlet på Vulkan. Et fleksibelt matstopp for reisefølger med forskjellige ønsker; se den enkelte aktørens meny og åpningstid.", "Several shops and places to eat together at Vulkan. A flexible food stop for groups with different tastes; check individual menus and opening hours.", "Mathallen Oslo", "https://mathallenoslo.no/"),
    "Vårt turforslag: kombiner Vulkan med en rusletur langs Akerselva. Det gir en annen side av Oslo enn bare havnepromenaden.",
    "Our suggestion: pair Vulkan with a walk beside the Akerselva. It shows another side of Oslo beyond the harbour promenade."),
  monaco: guide(
    "Monaco blir mer interessant når du gir plass til gamlebyen og hverdagslivet, ikke bare biler og kasino.",
    "Monaco becomes more interesting when you leave room for the old town and everyday life, not just cars and casinos.",
    tip("Musée océanographique", "Havmuseum og akvarier", "Ocean museum and aquariums", "Et konkret innendørs hovedstopp med akvarier og utstillinger om havet. Se det aktuelle programmet og planlegg besøket sammen med en tur i Monaco-Ville.", "A substantial indoor stop with aquariums and exhibitions about the ocean. Check the current programme and pair your visit with time in Monaco-Ville.", "Musée océanographique de Monaco", "https://musee.oceano.org/en/"),
    tip("Marché de la Condamine", "Marked · midlertidig plassering", "Market · temporary arrangement", "Markedshallen er under rehabilitering. Kommunen opplyser at aktørene er flyttet til Place d’Armes; sjekk oppdatert plassering før du planlegger matstoppet.", "The market hall is being renovated. The municipality says traders have moved to Place d'Armes; check the latest arrangements before planning your food stop.", "Mairie de Monaco", "https://www.mairie.mc/le-marche-de-la-condamine"),
    "Vårt turforslag: legg inn pauser mellom høydeforskjellene. En kort tur med utsikt kan være bedre enn å presse inn alle delene av Monaco til fots.",
    "Our suggestion: build breaks around the changes in elevation. A short scenic walk can be better than trying to cover every part of Monaco on foot."),
  cannes: guide(
    "Cannes har en hyggelig hverdag bak festivalfasaden. Start med marked og gamleby før du tar den store promenaden.",
    "Cannes has an enjoyable everyday side behind the festival image. Start with the market and old town before taking on the grand promenade.",
    tip("Le Suquet", "Gamleby og utsikt", "Old town and views", "Gå opp gjennom gamlebyen mot Place de la Castre for utsikt. Turistkontoret foreslår også Croisette og Lérins-øyene; velg heller én ekstra opplevelse enn alle.", "Walk through the old town towards Place de la Castre for views. The tourist board also suggests the Croisette and Lérins islands; choose one extra experience rather than all of them.", "Cannes France", "https://www.cannes-france.com/que-faire/en-3-heures/"),
    tip("Marché Forville", "Matmarked", "Food market", "Et sted å lete etter lokale smaker ved foten av Le Suquet. Se etter et lite matstopp, og sjekk markedsdagen før du bygger lunsjplanen rundt besøket.", "A place to look for local flavours below Le Suquet. Think of a small food stop, and check the market day before building your lunch plans around a visit.", "Cannes France", "https://www.cannes-france.com/que-faire/en-3-heures/"),
    "Vårt turforslag: spar Croisette til en rolig rusletur. Du trenger verken strandklubb eller shoppingplan for å ha glede av sjøfronten.",
    "Our suggestion: save the Croisette for an easy stroll. You need neither a beach-club booking nor a shopping plan to enjoy the seafront."),
  barcelona: guide(
    "Barcelona blir bedre med litt færre køer og litt mer tid i gatene. Bestill den store opplevelsen og la resten av dagen puste.",
    "Barcelona improves with fewer queues and more time in its streets. Book the big experience and let the rest of the day breathe.",
    tip("Sagrada Família", "Arkitektur og kirkerom", "Architecture and church interior", "Planlegg rundt en offisiell tidsbestilling. Sammenlign billettene før kjøp; tårnadgang er et eget valg og passer ikke nødvendigvis alle besøkende.", "Plan around an official timed booking. Compare tickets before buying; tower access is a separate choice and will not necessarily suit every visitor.", "Sagrada Família", "https://sagradafamilia.org/en/"),
    tip("Els 4 Gats", "Restaurant · Carrer de Montsió", "Restaurant · Carrer de Montsió", "Et restaurantalternativ i Carrer de Montsió med egen meny og bordbestilling på nettsiden. Sett av tid til et måltid, heller enn å behandle stedet som et fotostopp.", "A restaurant option on Carrer de Montsió with its own menu and reservations online. Allow time for a meal rather than treating it simply as a photo stop.", "Els 4 Gats", "https://4gats.com/"),
    "Vårt turforslag: gi en egen del av dagen til El Born. Hold litt avstand mellom bestillingene, så blir en kaffepause en mulighet og ikke en forsinkelse.",
    "Our suggestion: give El Born its own part of the day. Leave space between bookings so a coffee break feels like an opportunity, not a delay."),
  rome: guide(
    "Roma er ikke en by du blir ferdig med på én helg. Velg et område om gangen og gi både severdighetene og lunsjen ordentlig tid.",
    "Rome is not a city you finish in a weekend. Choose one area at a time and give both the sights and lunch proper attention.",
    tip("Pantheon", "Historisk monument og kirke", "Historic monument and church", "Sett av tid til kuppelen og lyset fra åpningen i taket, ikke bare plassen utenfor. Pantheon er også en kirke; sjekk besøksinformasjon og respekter gudstjenester og besøksregler.", "Allow time for the dome and the light through its oculus, not just the square outside. The Pantheon is also a church; check visitor information and respect services and visiting rules.", "Basilica di Santa Maria ad Martyres", "https://www.pantheonroma.com/en/home-eng/"),
    tip("Roscioli", "Bakeri, kafé og restaurant", "Bakery, café and restaurant", "Roscioli har flere forskjellige steder, blant annet bakeri i Via dei Chiavari og salumeria med kjøkken i Via dei Giubbonari. Velg riktig sted for en rask bit eller middag.", "Roscioli has several distinct venues, including a bakery on Via dei Chiavari and a salumeria with a kitchen on Via dei Giubbonari. Choose the right one for a quick bite or dinner.", "Roscioli", "https://www.roscioli.com/"),
    "Vårt turforslag: la en kveld være til en rolig rusletur og middag i samme område. Å slippe en ny transportetappe er også en liten ferieopplevelse.",
    "Our suggestion: dedicate one evening to a gentle walk and dinner in the same area. Avoiding another journey across town is a small holiday pleasure too."),
  "gran-canaria": guide(
    "Gran Canaria trenger ikke bare bety strandhotellet. En dag i Las Palmas gir gamleby, matmarked og sjøfront i en annen rytme.",
    "Gran Canaria need not be only about the beach hotel. A day in Las Palmas brings an old town, a food market and a different seaside rhythm.",
    tip("Vegueta", "Gamlebyen i Las Palmas", "Las Palmas old town", "Ta utgangspunkt i området rundt Santa Ana-katedralen. Casa de Colón og gatene i Vegueta gir en bydag med historie; legg inn egen tid til transport fra sørkysten.", "Start around Santa Ana Cathedral. Casa de Colón and Vegueta's streets make a history-focused city day; allow separate travel time if you are staying on the south coast.", "Spain.info · offisiell turistportal", "https://www.spain.info/en/destination/las-palmas-gran-canaria/"),
    tip("Mercado del Puerto", "Matmarked · Las Palmas", "Food market · Las Palmas", "Et marked ved Las Canteras-området med tradisjonelle handelsboder og matservering. Passer som et eget matstopp i Las Palmas, ikke som et sted ved sørkystens ferieområder.", "A market near the Las Canteras area combining traditional stalls with places to eat. A food stop in Las Palmas, not beside the south coast's resort areas.", "Mercado del Puerto", "https://mercadodelpuerto.net/"),
    "Vårt turforslag: kombiner markedet med en rolig del av Las Canteras-promenaden. Hold gamleby og strand som to deler av dagen, med tid mellom.",
    "Our suggestion: pair the market with an unhurried stretch of the Las Canteras promenade. Treat the old town and beach as two parts of the day, with time between them."),
  gdansk: guide(
    "Gdańsk rommer både vakre fasader og historie som fortjener tid. Bland en ordentlig museumsøkt med en enkel middag og en rusletur.",
    "Gdańsk combines beautiful façades with history that deserves time. Mix a proper museum visit with an easy dinner and a walk.",
    tip("Europejskie Centrum Solidarności", "Historie og museum", "History and museum", "Solidaritetssenteret setter verftsområdet og Solidarność-bevegelsen i sammenheng. Gi utstillingen god tid, og sjekk billetter og besøksinformasjon hos senteret.", "The European Solidarity Centre gives context to the shipyard area and the Solidarność movement. Allow time for the exhibition and check tickets and visitor information directly.", "European Solidarity Centre", "https://ecs.gda.pl/en/"),
    tip("Pierogarnia Mandu", "Pierogi · flere avdelinger", "Pierogi · several locations", "Et konkret sted å se etter pierogi. Kjeden har flere avdelinger i regionen; velg en i Gdańsk og sjekk gjeldende meny og besøksinformasjon.", "A specific option for pierogi. There are several locations in the region; choose a Gdańsk branch and check its current menu and visiting information.", "Pierogarnia Mandu", "https://pierogarnia-mandu.pl/"),
    "Vårt turforslag: la Mariacka og gatene rundt få en rolig runde uten hastverk. Spar også en liten del av kvelden til vannet.",
    "Our suggestion: give Mariacka and the surrounding streets an unhurried wander. Save a small part of the evening for the waterfront too."),
  frankfurt: guide(
    "Frankfurt blir mer enn en mellomlanding når du gir museene og nabolagene litt tid. La elven være den røde tråden i dagen.",
    "Frankfurt becomes more than a stopover when you give its museums and neighbourhoods some time. Let the river connect the day.",
    tip("Städel Museum", "Kunstmuseum", "Art museum", "Velg en utstilling eller del av samlingen og legg besøket til en dag langs Museumsufer. Sjekk program og billetter direkte hos museet.", "Choose an exhibition or part of the collection and fit it into a day along the Museumsufer. Check the programme and tickets directly with the museum.", "Städel Museum", "https://www.staedelmuseum.de/en"),
    tip("Apfelwein Wagner", "Tradisjonelt spisested", "Traditional dining", "Et alternativ for mat og Frankfurts apfelwein-tradisjon. Se den aktuelle menyen og avklar bord hvis dere er flere; det er også fint å velge alkoholfritt.", "An option for food and Frankfurt's apple-wine tradition. Check the current menu and arrange a table for a group; choosing a non-alcoholic drink is fine too.", "Apfelwein Wagner", "https://www.apfelwein-wagner.com/"),
    "Vårt turforslag: legg inn en rusletur langs Main mellom museum og middag. Det gir plass til både byens silhuett og en pause fra trafikken.",
    "Our suggestion: walk beside the Main between the museum and dinner. It leaves room for the skyline and a break from the traffic."),
  hamburg: guide(
    "Hamburg passer for deg som liker å se en by mens du går. Kombiner én bestilt opplevelse med kanaler, havneluft og et lite matstopp.",
    "Hamburg suits travellers who enjoy discovering a city on foot. Combine one booked experience with canals, harbour air and a small food stop.",
    tip("Miniatur Wunderland", "Modellverden · Speicherstadt", "Miniature worlds · Speicherstadt", "En detaljrik innendørsopplevelse som gjerne kan være dagens hovedstopp. Se etter ledige tidsluker før reisen, særlig hvis dette er viktig for reisefølget.", "A detailed indoor experience that can easily become the day's main stop. Check available time slots before travelling, especially if it is a priority for your group.", "Miniatur Wunderland", "https://www.miniatur-wunderland.com/"),
    tip("Oberhafen-Kantine", "Lite spisested", "Small restaurant", "Det skjeve lille huset byr på regionalt inspirert mat. Se dagens meny og åpningstider før du legger inn et måltid som del av turen i havneområdet.", "The small, crooked building serves regionally inspired food. Check the current menu and opening hours before making a meal part of your harbour-area outing.", "Oberhafen-Kantine", "https://oberhafenkantine-hamburg.de/"),
    "Vårt turforslag: rusle gjennom Speicherstadt uten å bestille noe i hver time. Broene og vannet er også en opplevelse i seg selv.",
    "Our suggestion: wander through Speicherstadt without booking every hour. The bridges and water are an experience in their own right."),
  bangkok: guide(
    "Bangkok trenger pauser, ikke bare planer. Samle stopp i samme område og veksle mellom severdigheter, mat og skygge.",
    "Bangkok needs breaks as much as plans. Group stops in the same area and alternate sights, food and shade.",
    tip("Wat Pho", "Tempel", "Temple", "Planlegg et rolig tempelbesøk og les besøksreglene på forhånd. Kle deg respektfullt, og gi området mer tid enn bare et raskt bilde.", "Plan an unhurried temple visit and read the visitor rules beforehand. Dress respectfully and give the grounds more time than a quick photograph.", "Wat Pho", "https://www.watpho.com/en"),
    tip("Supanniga Eating Room", "Thai restaurant · flere avdelinger", "Thai restaurant · several locations", "Et alternativ for et planlagt thailandsk måltid. Velg avdeling før du bestiller; Tha Tien kan passe til en dag i området ved elven og templene.", "An option for a planned Thai meal. Choose your branch before booking; Tha Tien can fit into a day around the river and temples.", "Supanniga Eating Room", "https://www.supannigaeatingroom.com/"),
    "Vårt turforslag: legg en lang pause midt på dagen og flytt ruslingen til en kjøligere del av ettermiddagen. En kort dag i ett område slår ofte mange transportetapper.",
    "Our suggestion: build in a long midday break and move your walking to a cooler part of the afternoon. A shorter day in one area often beats multiple transfers."),
  "ao-nang": guide(
    "Ao Nang fungerer fint som base, men hver dag trenger ikke en båttur. Bland en utflukt med strandtid og en kveld uten hastverk.",
    "Ao Nang works well as a base, but not every day needs a boat trip. Mix an outing with beach time and an unhurried evening.",
    tip("Railay og Phra Nang", "Båtutflukt", "Boat outing", "Kysten ved Railay er en naturlig utflukt fra Ao Nang. Avklar båt, retur og værforhold lokalt; ikke legg siste mulige retur tett opp mot en annen bestilling.", "The Railay coast is a natural outing from Ao Nang. Confirm boats, return arrangements and weather locally; avoid putting the last possible return close to another booking.", "Tourism Authority of Thailand", "https://www.tourismthailand.org/Destinations/Provinces/Krabi/344"),
    tip("The Hilltop Ao Nang", "Restaurant med utsikt", "Restaurant with a view", "Et alternativ når middagen gjerne må ha utsikt over bukten. Restauranten ligger i høyden; avklar bord og transport, og ikke planlegg ut fra at alt er en kort strandtur unna.", "An option when you would like bay views with dinner. The restaurant sits uphill; confirm your table and transport rather than assuming it is a short beachside walk away.", "The Hilltop Ao Nang", "https://www.thehilltopaonang.com/"),
    "Vårt turforslag: hold en formiddag ledig ved stranden. Velg skygge og korte turer i varmen fremfor å gjøre alle feriedager til utfluktsdager.",
    "Our suggestion: keep a morning free by the beach. Choose shade and short walks in the heat rather than making every holiday day an excursion."),
  phuket: guide(
    "Gi Phuket mer enn strandbildet. En tur i gamlebyen og et ordentlig måltid gir kontrast til dagene ved sjøen.",
    "Give Phuket more than its beach image. A visit to the old town and a proper meal offer a change from days beside the sea.",
    tip("Phuket Old Town", "Byliv og arkitektur", "Town life and architecture", "Velg gamlebyen for gateliv og den kinesisk-påvirkede kulturhistorien. Hold strandbesøk og byturen som tydelige deler av planen; avstandene på øya krever transporttid.", "Choose the old town for street life and its Chinese-influenced cultural history. Treat beach time and the town visit as distinct plans; island distances require travel time.", "Tourism Authority of Thailand", "https://www.tourismthailand.org/Destinations/Provinces/Phuket/350"),
    tip("Blue Elephant Phuket", "Thai restaurant · Phuket Town", "Thai restaurant · Phuket Town", "Restauranten ligger i et historisk herskapshus i Phuket Town og fremhever sørthailandsk mat. Et alternativ for en planlagt middag; se meny og reservasjon direkte.", "Set in a historic mansion in Phuket Town, the restaurant highlights southern Thai cooking. An option for a planned dinner; check the menu and reservations directly.", "Blue Elephant Phuket", "https://blueelephant.com/restaurant/phuket-restaurant/"),
    "Vårt turforslag: gi én strand en hel rolig halvdag fremfor å samle flere. Følg lokale badevarsler og flagg, også når vannet ser innbydende ut.",
    "Our suggestion: give one beach a whole relaxed half-day rather than collecting several. Follow local swimming warnings and flags even when the water looks inviting."),
  "hua-hin": guide(
    "Hua Hin passer godt for en ferie med litt mindre logistikk. Strandpause på dagen og en markedsrunde på kvelden kan være nok.",
    "Hua Hin suits a holiday with a little less logistics. A beach break by day and a market outing in the evening can be enough.",
    tip("Cicada Market", "Kunst, håndverk og musikk", "Art, crafts and music", "Et kveldsmarked med kreative innslag i Khao Takiab-området. Det er ikke et marked du bør regne med hver kveld; sjekk åpningsdager og program for besøket ditt.", "An evening market with creative activities in the Khao Takiab area. Do not assume it runs every night; check opening days and the programme for your visit.", "Cicada Market", "https://www.cicadamarket.com/"),
    tip("Matområdet på Cicada", "Markedsmat", "Market food", "Gjør matbodene til en del av samme besøk, fremfor å legge inn ekstra transport for middag. Se utvalget før du velger; dette er et marked, ikke én restaurant.", "Make the food stalls part of the same visit instead of adding another journey for dinner. Look around before choosing; this is a market, not a single restaurant.", "Cicada Market", "https://www.cicadamarket.com/"),
    "Vårt turforslag: la neste morgen være uten tidlig avtale. En liten strandtur og en lang frokost gir en god kontrast til markedskvelden.",
    "Our suggestion: leave the next morning without an early appointment. A short beach walk and a long breakfast make a pleasant contrast to the market evening."),
  "koh-samui": guide(
    "Samui er fin når du velger en base du faktisk vil være i. La strand, mat og små utflukter dele på tiden.",
    "Samui is at its best when you choose a base you actually want to spend time in. Share your days between the beach, meals and small outings.",
    tip("Bophut", "Gamle handelshus og strandliv", "Old shophouses and beach life", "Bophut har eldre kinesiske handelshus og et annet preg enn de større strandstripene. Sett av tid til området uten å gjøre det til enda et raskt bilstopp.", "Bophut has older Chinese shophouses and a different feel from the larger beach strips. Allow time for the area rather than making it another quick car stop.", "Tourism Authority of Thailand", "https://www.tourismthailand.org/Destinations/Provinces/Ko-Samui/360"),
    tip("Thin Tai", "Thai restaurant · Anantara Bophut", "Thai restaurant · Anantara Bophut", "Et alternativ for en mer planlagt middag på Anantara Bophut, med moderne thailandsk mat. Avklar reservasjon og adgang direkte, særlig hvis dere ikke bor på hotellet.", "An option for a more planned dinner at Anantara Bophut, serving modern Thai food. Confirm reservations and access directly, particularly if you are not staying at the hotel.", "Anantara Bophut", "https://www.anantara.com/en/bophut-koh-samui/restaurants"),
    "Vårt turforslag: hold en strandettermiddag helt åpen. Legg båtturer til dager med egnede forhold og avklar opplegget lokalt før du bestiller.",
    "Our suggestion: keep one beach afternoon completely free. Save boat trips for suitable conditions and confirm arrangements locally before booking."),
  "phi-phi": guide(
    "På Phi Phi betyr plasseringen mye for feriefølelsen. Planlegg mat og transport rundt der du bor, og gi sjøen litt slingringsmonn.",
    "On Phi Phi, location makes a real difference to the holiday. Plan meals and transport around where you stay, leaving some flexibility for sea conditions.",
    tip("Phi Phi-øyene", "Øyopplevelser", "Island experiences", "Bruk den offisielle Krabi-guiden som utgangspunkt, og avklar konkrete båtruter lokalt. Nasjonalparkområder kan ha skiftende adgangsregler; ikke anta at alle bukter alltid er åpne.", "Use the official Krabi guide as a starting point and confirm specific boat routes locally. National park areas can have changing access rules; do not assume every bay is always open.", "Tourism Authority of Thailand", "https://www.tourismthailand.org/Destinations/Provinces/Krabi/344"),
    tip("Mala Kitchen · OUTRIGGER", "Hotellrestaurant · Laem Tong", "Resort restaurant · Laem Tong", "Et alternativ ved Laem Tong med thai- og internasjonale retter. Dette er ikke et sentralt Tonsai-stopp: bekreft åpning, adgang for ikke-boende og eventuell båttransport direkte med resorten.", "An option at Laem Tong serving Thai and international dishes. This is not a central Tonsai stop: confirm opening, access for non-residents and any boat transport directly with the resort.", "OUTRIGGER Phi Phi Island Resort", "https://www.outrigger.com/thailand/outrigger-phi-phi-island-resort/food--drinks"),
    "Vårt turforslag: la den siste dagen være nær overnattingsstedet og avreisebåten. Litt ekstra margin er mer behagelig enn en siste utflukt med knapp retur.",
    "Our suggestion: keep the last day close to your accommodation and departure boat. A little spare time feels better than one final outing with a tight return."),
};
