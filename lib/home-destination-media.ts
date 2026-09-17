import { destinationMedia } from "./destination-media";

type HomePhoto = {
  src: string;
  altNo: string;
  altEn: string;
  position?: string;
};

// Existing Hotellpris assets reused at the owner's request. Original files and
// source blob hashes are recorded in public/home-destinations/provenance.json.
// These are presentation images; destination-guide photo credits stay separate.
export const homeDestinationPhotos: Record<string, HomePhoto> = {
  krakow: { src: "/home-destinations/krakow.jpg", altNo: "Rådhustårnet og markedsplassen i Krakow sett ovenfra", altEn: "The Town Hall Tower and Krakow's Main Square seen from above", position: "15% 50%" },
  berlin: { src: "/home-destinations/berlin.jpg", altNo: "Brandenburger Tor i varmt kveldslys", altEn: "Brandenburg Gate in warm evening light" },
  rome: { src: "/home-destinations/rome.jpg", altNo: "Colosseums buer og fasade i Roma", altEn: "The arches and façade of the Colosseum in Rome", position: "50% 45%" },
  barcelona: { src: "/home-destinations/barcelona.jpg", altNo: "Sagrada Família bak trærne og dammen i Barcelona", altEn: "Sagrada Família behind the trees and pond in Barcelona", position: "50% 40%" },
  nice: { src: "/home-destinations/nice.jpg", altNo: "Den blå bukten og Promenade des Anglais i Nice", altEn: "The blue bay and Promenade des Anglais in Nice", position: "45% 50%" },
  amsterdam: { src: "/home-destinations/amsterdam.jpg", altNo: "Kanalhus med gavler langs vannet i Amsterdam", altEn: "Gabled canal houses beside the water in Amsterdam", position: "50% 60%" },
  milan: { src: "/home-destinations/milan.jpg", altNo: "Duomo og plassen foran katedralen i Milano", altEn: "The Duomo and cathedral square in Milan", position: "50% 60%" },
  copenhagen: { src: "/home-destinations/copenhagen.jpg", altNo: "Fargerike hus og seilbåter langs Nyhavn i København", altEn: "Colourful houses and sailing boats along Nyhavn in Copenhagen", position: "50% 65%" },
  oslo: { src: "/home-destinations/oslo.jpg", altNo: "Operahuset i Oslo ved fjorden", altEn: "Oslo Opera House beside the fjord" },
  bangkok: { src: "/home-destinations/bangkok.jpg", altNo: "Bangkok med elven og byens høyhus", altEn: "Bangkok's river and skyline" },
};

export function getHomeDestinationPhoto(slug: string): HomePhoto {
  return homeDestinationPhotos[slug]
    ?? (slug === "manchester" ? destinationMedia.manchester.weekend[1] : destinationMedia[slug].hero);
}
