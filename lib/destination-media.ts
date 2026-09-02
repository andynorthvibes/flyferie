export type DestinationPhoto = {
  src: string;
  altNo: string;
  altEn: string;
  photographer: string;
  license: string;
  sourceUrl: string;
};

export type DestinationMedia = {
  hero: DestinationPhoto;
  weekend: [DestinationPhoto, DestinationPhoto, DestinationPhoto];
};

export const destinationMedia: Record<string, DestinationMedia> = {
  berlin: {
    hero: { src: "/berlin/brandenburg-gate.jpg", altNo: "Brandenburger Tor ved solnedgang", altEn: "Brandenburg Gate at sunset", photographer: "Morn the Gorn", license: "CC BY-SA 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Brandenburg_Gate_at_Sunset.jpg" },
    weekend: [
      { src: "/berlin/kreuzberg.jpg", altNo: "Oranienstraße i Kreuzberg", altEn: "Oranienstraße in Kreuzberg", photographer: "Georg Slickers", license: "CC BY-SA 2.5", sourceUrl: "https://commons.wikimedia.org/wiki/File:Berlin-kreuzberg_oranienstrasse_20051019_316.jpg" },
      { src: "/berlin/east-side-gallery.jpg", altNo: "East Side Gallery i Berlin", altEn: "East Side Gallery in Berlin", photographer: "Jens Cederskjold", license: "CC BY 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:East_Side_Gallery,_M%C3%BChlenstra%C3%9Fe,_Berlin_-_panoramio_(1).jpg" },
      { src: "/berlin/prenzlauer-berg.jpg", altNo: "Wörther Straße i Prenzlauer Berg", altEn: "Wörther Straße in Prenzlauer Berg", photographer: "Joe Mabel", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Berlin-Prenzlauer_Berg_-_W%C3%B6rther_Stra%C3%9Fe.jpg" }
    ]
  },
  "tbilisi": {
    "hero": {
      "src": "/destinations/tbilisi/hero.jpg",
      "altNo": "Gamle Tbilisi",
      "altEn": "Tbilisi Old Town",
      "photographer": "lumoplank",
      "license": "CC0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Cityscapes_of_Tbilisi_-_TbilisiCityscapes8089.jpg"
    },
    "weekend": [
      {
        "src": "/destinations/tbilisi/weekend-1.jpg",
        "altNo": "Sololaki i Tbilisi",
        "altEn": "Sololaki in Tbilisi",
        "photographer": "Andrew Milligan sumo",
        "license": "CC BY 2.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:44_Lado_Asatiani_Street,_Tbilisi_(50498136131).jpg"
      },
      {
        "src": "/destinations/tbilisi/weekend-2.jpg",
        "altNo": "Narikala-festningen",
        "altEn": "Narikala Fortress",
        "photographer": "Marcin Konsek",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:2016_Tbilisi,_Widoki_z_Twierdzy_Narikala_(14).jpg"
      },
      {
        "src": "/destinations/tbilisi/weekend-3.jpg",
        "altNo": "Dry Bridge-markedet",
        "altEn": "Dry Bridge Market",
        "photographer": "Alexkom000",
        "license": "CC BY 4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:2025-03-30_Dry_Bridge_Market,_Tbilisi_1.jpg"
      }
    ]
  },
  "krakow": {
    "hero": {
      "src": "/destinations/krakow/hero.jpg",
      "altNo": "Markedsplassen i Krakow",
      "altEn": "Krakow Main Square",
      "photographer": "Andrzej Otrębski",
      "license": "CC BY-SA 4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Krakow_Rynek_Glowny_panorama_1.jpg"
    },
    "weekend": [
      {
        "src": "/destinations/krakow/weekend-1.jpg",
        "altNo": "Gamlebyen i Krakow",
        "altEn": "Krakow Old Town",
        "photographer": "Igor123121",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Barbican,_Basztowa_street,_Old_Town,_Krak%C3%B3w,_Poland.jpg"
      },
      {
        "src": "/destinations/krakow/weekend-2.jpg",
        "altNo": "Wawel-slottet",
        "altEn": "Wawel Castle",
        "photographer": "Paul Colin Hennig firstdorsal.eu",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Night_panorama_of_Krak%C3%B3w_with_illuminated_Wawel_Castle_(2025).jpg"
      },
      {
        "src": "/destinations/krakow/weekend-3.jpg",
        "altNo": "Kazimierz i Krakow",
        "altEn": "Kazimierz in Krakow",
        "photographer": "Igor123121",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Podbrzezie_Street,,,_Kazimierz,_Krakow,_Poland.jpg"
      }
    ]
  },
  "madrid": {
    "hero": {
      "src": "/destinations/madrid/hero.jpg",
      "altNo": "Gran Vía i Madrid",
      "altEn": "Gran Vía in Madrid",
      "photographer": "Eric Titcombe",
      "license": "CC BY 2.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Inicio_de_la_Gran_V%C3%ADa_edited.jpg"
    },
    "weekend": [
      {
        "src": "/destinations/madrid/weekend-1.jpg",
        "altNo": "Plaza Mayor",
        "altEn": "Plaza Mayor",
        "photographer": "Sebastian Dubiel",
        "license": "CC BY-SA 3.0 de",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Plaza_Mayor_de_Madrid_06.jpg"
      },
      {
        "src": "/destinations/madrid/weekend-2.jpg",
        "altNo": "Retiroparken",
        "altEn": "Retiro Park",
        "photographer": "Diego Delso",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Palacio_de_Cristal,_Parque_del_Retiro,_Madrid,_Espa%C3%B1a,_2017-05-18,_DD_21.jpg"
      },
      {
        "src": "/destinations/madrid/weekend-3.jpg",
        "altNo": "La Latina i Madrid",
        "altEn": "La Latina in Madrid",
        "photographer": "IngolfBLN",
        "license": "CC BY-SA 2.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Madrid_-_Metro_-_Estaci%C3%B3n_de_La_Latina_(7190471132).jpg"
      }
    ]
  },
  "malaga": {
    "hero": {
      "src": "/destinations/malaga/hero.jpg",
      "altNo": "Málaga sett fra Alcazaba",
      "altEn": "Málaga from the Alcazaba",
      "photographer": "Javier Almenara",
      "license": "CC BY 3.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:M%C3%A1laga_Desde_El_Mirador_De_La_Alcazaba_(261488481).jpeg"
    },
    "weekend": [
      {
        "src": "/destinations/malaga/weekend-1.jpg",
        "altNo": "Gamlebyen i Málaga",
        "altEn": "Málaga Old Town",
        "photographer": "Matti Blume",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Centro_Historico,_Malaga_(DSC02857-Pano).jpg"
      },
      {
        "src": "/destinations/malaga/weekend-2.jpg",
        "altNo": "Alcazaba i Málaga",
        "altEn": "The Alcazaba in Málaga",
        "photographer": "Ronny Siegel",
        "license": "CC BY 4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Malaga_Panorama_02.jpg"
      },
      {
        "src": "/destinations/malaga/weekend-3.jpg",
        "altNo": "La Malagueta-stranden",
        "altEn": "La Malagueta Beach",
        "photographer": "Francesca Be",
        "license": "CC BY-SA 2.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Beach_of_Malaga.jpg"
      }
    ]
  },
  "manchester": {
    "hero": {
      "src": "/destinations/manchester/hero.jpg",
      "altNo": "Manchester sentrum",
      "altEn": "Manchester city centre",
      "photographer": "Manc360",
      "license": "CC0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Manchester_Skyline_2018.jpg"
    },
    "weekend": [
      {
        "src": "/destinations/manchester/weekend-1.jpg",
        "altNo": "Northern Quarter",
        "altEn": "The Northern Quarter",
        "photographer": "Tricia Neal",
        "license": "CC BY-SA 2.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Manchester%27s_%22Northern_Quarter%22_-_geograph.org.uk_-_3794486.jpg"
      },
      {
        "src": "/destinations/manchester/weekend-2.jpg",
        "altNo": "Manchester sentrum",
        "altEn": "Central Manchester",
        "photographer": "Ridiculopathy",
        "license": "CC0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Middlewood_Locks_housing_development,_off_East_Ordsall_Lane,_Salford,_Manchester,_UK_03.jpg"
      },
      {
        "src": "/destinations/manchester/weekend-3.jpg",
        "altNo": "Kanalene i Castlefield",
        "altEn": "Castlefield canals",
        "photographer": "Bob Harvey",
        "license": "CC BY-SA 2.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Canal_boat_in_Castlefield_-_geograph.org.uk_-_5405306.jpg"
      }
    ]
  },
  "katowice": {
    "hero": {
      "src": "/destinations/katowice/hero.jpg",
      "altNo": "Moderne Katowice sentrum",
      "altEn": "Modern central Katowice",
      "photographer": "Bern1894",
      "license": "CC BY-SA 4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Modern_Katowice.jpg"
    },
    "weekend": [
      {
        "src": "/destinations/katowice/weekend-1.jpg",
        "altNo": "Rynek i Katowice",
        "altEn": "Katowice Market Square",
        "photographer": "Ranjithsiji",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Katowice_Rynek_DSC_3205.jpg"
      },
      {
        "src": "/destinations/katowice/weekend-2.jpg",
        "altNo": "Kultursonen og Spodek",
        "altEn": "Katowice Culture Zone and Spodek",
        "photographer": "Ranjithsiji",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Spodek,_Katowice_DSC_3427.jpg"
      },
      {
        "src": "/destinations/katowice/weekend-3.jpg",
        "altNo": "Nikiszowiec",
        "altEn": "Nikiszowiec",
        "photographer": "b3tarev3 from England",
        "license": "Public domain",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Nikiszowiec_(8845729031).jpg"
      }
    ]
  },
  "amsterdam": {
    "hero": {
      "src": "/destinations/amsterdam/hero.jpg",
      "altNo": "Kanalhusene i Amsterdam",
      "altEn": "Amsterdam canal houses",
      "photographer": "Diliff",
      "license": "CC BY 2.5",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Amsterdam_Canals_-_July_2006.jpg"
    },
    "weekend": [
      {
        "src": "/destinations/amsterdam/weekend-1.jpg",
        "altNo": "Jordaan i Amsterdam",
        "altEn": "Jordaan in Amsterdam",
        "photographer": "kevinmcgill from Den Bosch, Netherlands",
        "license": "CC BY-SA 2.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Canal_in_Jordaan,_Amsterdam_(9258952020).jpg"
      },
      {
        "src": "/destinations/amsterdam/weekend-2.jpg",
        "altNo": "Museumplein og Rijksmuseum",
        "altEn": "Museumplein and Rijksmuseum",
        "photographer": "Rijksmuseum",
        "license": "CC0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Het_Rijksmuseum_gezien_vanaf_de_zijde_van_het_Museumplein_in_Amsterdam,_RP-F-2003-37.jpg"
      },
      {
        "src": "/destinations/amsterdam/weekend-3.jpg",
        "altNo": "Vondelpark",
        "altEn": "Vondelpark",
        "photographer": "Øyvind Holmstad",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Vondelpark_Amsterdam_2023_1.jpg"
      }
    ]
  },
  "nice": {
    "hero": {
      "src": "/destinations/nice/hero.jpg",
      "altNo": "Nice sett fra Castle Hill",
      "altEn": "Nice from Castle Hill",
      "photographer": "Spike",
      "license": "CC BY-SA 4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Nice_from_Castle_Hill_01.jpg"
    },
    "weekend": [
      {
        "src": "/destinations/nice/weekend-1.jpg",
        "altNo": "Gamlebyen i Nice",
        "altEn": "Nice Old Town",
        "photographer": "GFreihalter",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Nice_(06)_Vieux-Nice_Rue_de_la_Croix_725.jpg"
      },
      {
        "src": "/destinations/nice/weekend-2.jpg",
        "altNo": "Cours Saleya",
        "altEn": "Cours Saleya",
        "photographer": "Zairon",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Nice_Cours_Saleya_15.jpg"
      },
      {
        "src": "/destinations/nice/weekend-3.jpg",
        "altNo": "Havnen i Nice",
        "altEn": "Nice harbour",
        "photographer": "Miguel Mendez",
        "license": "CC BY 2.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Panorama_Harbour_of_Nice_Port_Lympia_2019.jpg"
      }
    ]
  },
  "milan": {
    "hero": {
      "src": "/destinations/milan/hero.jpg",
      "altNo": "Duomo i Milano",
      "altEn": "Milan Cathedral",
      "photographer": "Tanweer Morshed",
      "license": "CC BY-SA 4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Piazza_del_Duomo,_Milan_panorama.jpg"
    },
    "weekend": [
      {
        "src": "/destinations/milan/weekend-1.jpg",
        "altNo": "Navigli i Milano",
        "altEn": "Navigli in Milan",
        "photographer": "Spens03",
        "license": "CC BY-SA 3.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Navigli_S1.jpg"
      },
      {
        "src": "/destinations/milan/weekend-2.jpg",
        "altNo": "Galleria Vittorio Emanuele II",
        "altEn": "Galleria Vittorio Emanuele II",
        "photographer": "Leonhard Lenz",
        "license": "CC0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Galleria_Vittorio_Emanuele_II_Milano_2022-09-28_03.jpg"
      },
      {
        "src": "/destinations/milan/weekend-3.jpg",
        "altNo": "Brera i Milano",
        "altEn": "Brera in Milan",
        "photographer": "Jean-Christophe BENOIST",
        "license": "CC BY 3.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Milan_-_Pinacoth%C3%A8que_de_Brera_-_Cour_int%C3%A9rieure.jpg"
      }
    ]
  },
  "helsinki": {
    "hero": {
      "src": "/destinations/helsinki/hero.jpg",
      "altNo": "Helsinki domkirke en sommerkveld",
      "altEn": "Helsinki Cathedral on a summer evening",
      "photographer": "Szilas",
      "license": "CC BY-SA 4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Helsinki_Cathedral_in_a_summer_evening.jpg"
    },
    "weekend": [
      {
        "src": "/destinations/helsinki/weekend-1.jpg",
        "altNo": "Design District i Helsinki",
        "altEn": "Helsinki Design District",
        "photographer": "Coen",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Munkkisaarenkatu_in_Punavuori,_Helsinki,_Finland,_2021_July.jpg"
      },
      {
        "src": "/destinations/helsinki/weekend-2.jpg",
        "altNo": "Suomenlinna",
        "altEn": "Suomenlinna",
        "photographer": "Francisco Anzola from United States",
        "license": "CC BY 2.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Suomenlinna_Sea_Fortress_(54591139961).jpg"
      },
      {
        "src": "/destinations/helsinki/weekend-3.jpg",
        "altNo": "Salutorget i Helsinki",
        "altEn": "Helsinki Market Square",
        "photographer": "Pekka Vyhtinen",
        "license": "CC BY 4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Abandoned_harbour_rail_tracks_at_the_Market_Square_in_Helsinki,_Finland,_2024_April.jpg"
      }
    ]
  },
  "copenhagen": {
    "hero": {
      "src": "/destinations/copenhagen/hero.jpg",
      "altNo": "De fargerike husene i Nyhavn",
      "altEn": "Colourful houses in Nyhavn",
      "photographer": "Jorge Láscar from Melbourne, Australia",
      "license": "CC BY 2.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Colourful_fa%C3%A7ades_-_Nyhavn_(Panorama)_(34784192335).jpg"
    },
    "weekend": [
      {
        "src": "/destinations/copenhagen/weekend-1.jpg",
        "altNo": "Vesterbro i København",
        "altEn": "Vesterbro in Copenhagen",
        "photographer": "Kristoffer Trolle from Copenhagen, Denmark",
        "license": "CC BY 2.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Vesterbro_street_with_roses_(Copenhagen,_Denmark)_(50329681757).jpg"
      },
      {
        "src": "/destinations/copenhagen/weekend-2.jpg",
        "altNo": "Christianshavn",
        "altEn": "Christianshavn",
        "photographer": "Tony Webster from Portland, Oregon, United States",
        "license": "CC BY 2.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Christianshavn_Canal_(15911963215).jpg"
      },
      {
        "src": "/destinations/copenhagen/weekend-3.jpg",
        "altNo": "Nørrebro i København",
        "altEn": "Nørrebro in Copenhagen",
        "photographer": "Leif Jørgensen",
        "license": "CC BY-SA 3.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:N%C3%B8rrebrogade.jpg"
      }
    ]
  },
  "skopje": {
    "hero": {
      "src": "/destinations/skopje/hero.jpg",
      "altNo": "Steinbroen og elven Vardar i Skopje",
      "altEn": "Stone Bridge and the Vardar River in Skopje",
      "photographer": "Dristovski",
      "license": "CC BY-SA 4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8%D0%BE%D1%82_%D0%BC%D0%BE%D1%81%D1%82_%D0%B2%D0%BE_%D0%A1%D0%BA%D0%BE%D0%BF%D1%98%D0%B5_-_%D0%A0._%D0%9C%D0%B0%D0%BA%D0%B5%D0%B4%D0%BE%D0%BD%D0%B8%D1%98%D0%B0.jpg"
    },
    "weekend": [
      {
        "src": "/destinations/skopje/weekend-1.jpg",
        "altNo": "Debar Maalo",
        "altEn": "Debar Maalo",
        "photographer": "Dandarmkd",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:%D0%97%D0%B3%D1%80%D0%B0%D0%B4%D0%B0_%D0%BD%D0%B0_%D0%B1%D1%83%D0%BB._%E2%80%9E%D0%98%D0%BB%D0%B8%D0%BD%D0%B4%D0%B5%D0%BD%E2%80%9C_%D0%B1%D1%80._65,_%D0%A1%D0%BA%D0%BE%D0%BF%D1%98%D0%B5_01.jpg"
      },
      {
        "src": "/destinations/skopje/weekend-2.jpg",
        "altNo": "Den gamle basaren i Skopje",
        "altEn": "Skopje Old Bazaar",
        "photographer": "Liridon",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Street_in_Old_Bazaar,_Shkup_(2).jpg"
      },
      {
        "src": "/destinations/skopje/weekend-3.jpg",
        "altNo": "Matka Canyon",
        "altEn": "Matka Canyon",
        "photographer": "Bijonse",
        "license": "CC BY-SA 3.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Matka_Canyon,_207.JPG"
      }
    ]
  },
  "palma-de-mallorca": {
    "hero": {
      "src": "/destinations/palma-de-mallorca/hero.jpg",
      "altNo": "Palma og La Seu-katedralen",
      "altEn": "Palma and La Seu Cathedral",
      "photographer": "This Photo was taken by Wolfgang Moroder . Feel free to use my photos, but please mention me as the author and send me a message . This image is not in the public domain . Please respect the copyright protection. It may only be used according to the rules mentioned here. This specifically excludes use in social media , if applicable terms of the licenses listed here not appropriate. Please do not upload an updated image here without consultation with the Author. The author would like to make corrections only at his own source. This ensures that the changes are preserved. Please if you think that any changes should be required, please inform the author. Otherwise you can upload a new image with a new name. Please use one of the templates derivative or extract .",
      "license": "CC BY-SA 3.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Palma_de_Mallorca_Royal_Palace_La_Almudaina_Cathedral.jpg"
    },
    "weekend": [
      {
        "src": "/destinations/palma-de-mallorca/weekend-1.jpg",
        "altNo": "Santa Catalina i Palma",
        "altEn": "Santa Catalina in Palma",
        "photographer": "Paucabot",
        "license": "CC BY-SA 3.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Mercat.de.Santa.Catalina.jpg"
      },
      {
        "src": "/destinations/palma-de-mallorca/weekend-2.jpg",
        "altNo": "Gamlebyen i Palma",
        "altEn": "Palma Old Town",
        "photographer": "José Luis Filpo Cabana",
        "license": "CC BY 3.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:La_Lonja_de_los_Mercaderes._Palma_de_Mallorca.jpg"
      },
      {
        "src": "/destinations/palma-de-mallorca/weekend-3.jpg",
        "altNo": "Portixol i Palma",
        "altEn": "Portixol in Palma",
        "photographer": "Rafael Ortega Díaz",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:PortixolPalma.jpg"
      }
    ]
  },
  "gothenburg": {
    "hero": {
      "src": "/destinations/gothenburg/hero.jpg",
      "altNo": "Gøteborg sentrum ved vannet",
      "altEn": "Gothenburg city waterfront",
      "photographer": "Amjad Sheikh",
      "license": "CC BY 4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:G%C3%B6teborg_Panorama.jpg"
    },
    "weekend": [
      {
        "src": "/destinations/gothenburg/weekend-1.jpg",
        "altNo": "Linnégatan i Gøteborg",
        "altEn": "Linnégatan in Gothenburg",
        "photographer": "Andrzej Otrębski",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Goteborg_kamienice_Linnegatan_2-6.jpg"
      },
      {
        "src": "/destinations/gothenburg/weekend-2.jpg",
        "altNo": "Haga i Gøteborg",
        "altEn": "Haga in Gothenburg",
        "photographer": "Alexey Komarov",
        "license": "CC BY 3.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Haga_Church,_Gothenburg_-_panoramio.jpg"
      },
      {
        "src": "/destinations/gothenburg/weekend-3.jpg",
        "altNo": "Skjærgården utenfor Gøteborg",
        "altEn": "Gothenburg archipelago",
        "photographer": "Alexey Komarov",
        "license": "CC BY 3.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:H%C3%A4ls%C3%B6_Island,_Northern_Archipelago,_Gothenburg_-_panoramio_-_Alexey_Komarov.jpg"
      }
    ]
  }
};

const flyferiePhoto = (src: string, altNo: string, altEn: string): DestinationPhoto => ({
  src,
  altNo,
  altEn,
  photographer: "Flyferie",
  license: "",
  sourceUrl: ""
});

Object.assign(destinationMedia, {
  gothenburg: {
    ...destinationMedia.gothenburg,
    hero: destinationMedia.gothenburg.weekend[0]
  },
  madrid: {
    ...destinationMedia.madrid,
    hero: destinationMedia.madrid.weekend[0]
  },
  malaga: {
    ...destinationMedia.malaga,
    hero: destinationMedia.malaga.weekend[0]
  },
  helsinki: {
    ...destinationMedia.helsinki,
    hero: destinationMedia.helsinki.weekend[2]
  },
  copenhagen: {
    ...destinationMedia.copenhagen,
    hero: destinationMedia.copenhagen.weekend[2]
  },
  manchester: {
    ...destinationMedia.manchester,
    weekend: [
      flyferiePhoto("/destinations/manchester/flyferie-1.jpg", "United Trinity-statuen ved Old Trafford", "The United Trinity statue at Old Trafford"),
      flyferiePhoto("/destinations/manchester/flyferie-2.jpg", "Old Trafford fra tribunen", "Old Trafford from the stands"),
      flyferiePhoto("/destinations/manchester/flyferie-3.jpg", "Kanalene i Manchester", "Manchester canals")
    ]
  },
  berlin: {
    ...destinationMedia.berlin,
    weekend: [
      flyferiePhoto("/destinations/berlin/flyferie-1.jpg", "Konzerthaus på Gendarmenmarkt", "Konzerthaus at Gendarmenmarkt"),
      flyferiePhoto("/destinations/berlin/flyferie-2.jpg", "Checkpoint Charlie", "Checkpoint Charlie"),
      flyferiePhoto("/destinations/berlin/flyferie-3.jpg", "Seierssøylen i Berlin", "Berlin Victory Column")
    ]
  },
  tbilisi: {
    hero: flyferiePhoto("/destinations/tbilisi/flyferie-hero.jpg", "Gamle Tbilisi i kveldsregn", "Old Tbilisi on a rainy evening"),
    weekend: [
      destinationMedia.tbilisi.weekend[0],
      flyferiePhoto("/destinations/tbilisi/flyferie-2.jpg", "Utsikt over Tbilisi", "View across Tbilisi"),
      flyferiePhoto("/destinations/tbilisi/flyferie-3.jpg", "Tbilisi opplyst om kvelden", "Tbilisi illuminated at night")
    ]
  },
  krakow: {
    hero: flyferiePhoto("/destinations/krakow/flyferie-hero.jpg", "Mariakirken i Krakow om kvelden", "St Mary's Basilica in Krakow at night"),
    weekend: [
      destinationMedia.krakow.weekend[0],
      flyferiePhoto("/destinations/krakow/flyferie-2.jpg", "Wawel-slottet om kvelden", "Wawel Castle at night"),
      flyferiePhoto("/destinations/krakow/flyferie-3.jpg", "Pierogi i Krakow", "Pierogi in Krakow")
    ]
  },
  katowice: {
    ...destinationMedia.katowice,
    weekend: [
      flyferiePhoto("/destinations/katowice/flyferie-1.jpg", "Vinterdag ved en kirke i Katowice", "A winter day by a church in Katowice"),
      flyferiePhoto("/destinations/katowice/flyferie-2.jpg", "Julestemning i Katowice", "Christmas atmosphere in Katowice"),
      flyferiePhoto("/destinations/katowice/flyferie-3.jpg", "Utsikt over Katowice", "View across Katowice")
    ]
  },
  amsterdam: {
    hero: flyferiePhoto("/destinations/amsterdam/flyferie-hero.jpg", "Kanal og kanalhus i Amsterdam", "Canal and canal houses in Amsterdam"),
    weekend: [destinationMedia.amsterdam.weekend[0], destinationMedia.amsterdam.weekend[1], flyferiePhoto("/destinations/amsterdam/flyferie-3.jpg", "Amsterdam i julelys", "Amsterdam in Christmas lights")]
  },
  nice: {
    hero: flyferiePhoto("/destinations/nice/flyferie-hero.jpg", "Havnen og åsene i Nice", "Nice harbour and hills"),
    weekend: [
      flyferiePhoto("/destinations/nice/flyferie-1.jpg", "Gamlebyen i Nice", "Nice Old Town"),
      flyferiePhoto("/destinations/nice/flyferie-2.jpg", "Palmer ved Promenade des Anglais", "Palm trees by the Promenade des Anglais"),
      destinationMedia.nice.weekend[1]
    ]
  },
  milan: {
    hero: flyferiePhoto("/destinations/milan/flyferie-hero.jpg", "Duomo i Milano om kvelden", "Milan Cathedral at night"),
    weekend: [
      flyferiePhoto("/destinations/milan/flyferie-1.jpg", "Galleria Vittorio Emanuele II", "Galleria Vittorio Emanuele II"),
      flyferiePhoto("/destinations/milan/flyferie-2.jpg", "Sforza-slottet i Milano", "Sforza Castle in Milan"),
      destinationMedia.milan.weekend[2]
    ]
  },
  skopje: {
    hero: flyferiePhoto("/destinations/skopje/flyferie-hero.jpg", "Makedonia-plassen i Skopje", "Macedonia Square in Skopje"),
    weekend: [
      flyferiePhoto("/destinations/skopje/flyferie-1.jpg", "Vardar-elven gjennom Skopje", "The Vardar River through Skopje"),
      flyferiePhoto("/destinations/skopje/flyferie-2.jpg", "Opplyst bro i Skopje", "Illuminated bridge in Skopje"),
      destinationMedia.skopje.weekend[2]
    ]
  },
  "palma-de-mallorca": {
    hero: flyferiePhoto("/destinations/palma-de-mallorca/flyferie-hero.jpg", "La Seu-katedralen i Palma om kvelden", "La Seu Cathedral in Palma at night"),
    weekend: destinationMedia["palma-de-mallorca"].weekend
  },
  oslo: {
    hero: flyferiePhoto("/destinations/oslo/flyferie-hero.jpg", "Slottet i Oslo", "The Royal Palace in Oslo"),
    weekend: [
      flyferiePhoto("/destinations/oslo/flyferie-1.jpg", "MUNCH og Bjørvika", "MUNCH and Bjørvika"),
      flyferiePhoto("/destinations/oslo/flyferie-2.jpg", "Astrup Fearnley Museet og Tjuvholmen", "The Astrup Fearnley Museum and Tjuvholmen"),
      flyferiePhoto("/destinations/oslo/flyferie-3.jpg", "Vigelandsparken om vinteren", "Vigeland Park in winter")
    ]
  },
  monaco: {
    hero: flyferiePhoto("/destinations/monaco/hero.jpg", "Havnen i Monaco ved solnedgang", "Monaco harbour at sunset"),
    weekend: [
      flyferiePhoto("/destinations/monaco/weekend-1.jpg", "Casino de Monte-Carlo", "Casino de Monte-Carlo"),
      flyferiePhoto("/destinations/monaco/weekend-2.jpg", "Havnepromenaden i Monaco", "Monaco harbour promenade"),
      flyferiePhoto("/destinations/monaco/weekend-3.jpg", "Hageanlegg i Monaco", "Gardens in Monaco")
    ]
  },
  cannes: {
    hero: flyferiePhoto("/destinations/cannes/hero.jpg", "Havnepromenaden i Cannes", "Cannes harbour promenade"),
    weekend: [
      flyferiePhoto("/destinations/cannes/weekend-1.jpg", "Byliv og uteserveringer i Cannes", "Street life and cafés in Cannes"),
      flyferiePhoto("/destinations/cannes/weekend-2.jpg", "Palmer ved strandpromenaden", "Palm trees by the seafront"),
      flyferiePhoto("/destinations/cannes/weekend-3.jpg", "Båttur utenfor Cannes", "Boat trip off Cannes")
    ]
  },
  barcelona: {
    hero: flyferiePhoto("/destinations/barcelona/hero.jpg", "Sagrada Familia i Barcelona", "Sagrada Família in Barcelona"),
    weekend: [
      flyferiePhoto("/destinations/barcelona/weekend-1.jpg", "Utsikt over Barcelona fra Montjuïc", "Barcelona from Montjuïc"),
      flyferiePhoto("/destinations/barcelona/weekend-2.jpg", "Camp Nou i Barcelona", "Camp Nou in Barcelona"),
      flyferiePhoto("/destinations/barcelona/weekend-3.jpg", "Detaljer på Sagrada Familia", "Sagrada Família details")
    ]
  },
  rome: {
    hero: flyferiePhoto("/destinations/rome/hero.jpg", "Trevifontenen i Roma", "Trevi Fountain in Rome"),
    weekend: [
      flyferiePhoto("/destinations/rome/weekend-1.jpg", "Colosseum i Roma", "The Colosseum in Rome"),
      flyferiePhoto("/destinations/rome/weekend-2.jpg", "Pantheon i Roma", "The Pantheon in Rome"),
      flyferiePhoto("/destinations/rome/weekend-3.jpg", "Peterskirken i Vatikanstaten", "St Peter's Basilica in Vatican City")
    ]
  },
  "gran-canaria": {
    hero: flyferiePhoto("/destinations/gran-canaria/hero.jpg", "Kysten på Gran Canaria i kveldslys", "Gran Canaria coast in evening light"),
    weekend: [
      flyferiePhoto("/destinations/gran-canaria/weekend-1.jpg", "Turkis bukt på Gran Canaria", "Turquoise bay in Gran Canaria"),
      flyferiePhoto("/destinations/gran-canaria/weekend-2.jpg", "Basseng med utsikt mot Atlanterhavet", "Pool overlooking the Atlantic"),
      flyferiePhoto("/destinations/gran-canaria/weekend-3.jpg", "Solnedgang over havet", "Sunset over the ocean")
    ]
  },
  gdansk: {
    hero: flyferiePhoto("/destinations/gdansk/hero.jpg", "Gamlebyen og rådhustårnet i Gdansk", "Gdansk Old Town and Town Hall tower"),
    weekend: [
      flyferiePhoto("/destinations/gdansk/weekend-1.jpg", "Motława-elven og museumsskipet", "Motława River and museum ship"),
      flyferiePhoto("/destinations/gdansk/weekend-2.jpg", "Neptunfontenen i Gdansk", "Neptune Fountain in Gdansk"),
      flyferiePhoto("/destinations/gdansk/weekend-3.jpg", "Havnepromenaden i Gdansk", "Gdansk waterfront")
    ]
  },
  frankfurt: {
    hero: flyferiePhoto("/destinations/frankfurt/hero.jpg", "Skyskraperne i Frankfurt", "Frankfurt skyline"),
    weekend: [
      flyferiePhoto("/destinations/frankfurt/weekend-1.jpg", "Historisk arkitektur i Frankfurt", "Historic architecture in Frankfurt"),
      flyferiePhoto("/destinations/frankfurt/weekend-2.jpg", "Bindingsverk i gamlebyen", "Half-timbered architecture in the Old Town"),
      flyferiePhoto("/destinations/frankfurt/weekend-3.jpg", "Julemarked i Frankfurt", "Frankfurt Christmas market")
    ]
  },
  hamburg: {
    hero: flyferiePhoto("/destinations/hamburg/hero.jpg", "Julemarked i Hamburg", "Hamburg Christmas market"),
    weekend: [
      flyferiePhoto("/destinations/hamburg/weekend-1.jpg", "Fotballkamp i Hamburg", "Football match in Hamburg"),
      flyferiePhoto("/destinations/hamburg/weekend-2.jpg", "Tysk mat og øl i Hamburg", "German food and beer in Hamburg"),
      flyferiePhoto("/destinations/hamburg/weekend-3.jpg", "Vinterkveld i Hamburg", "Winter evening in Hamburg")
    ]
  },
  bangkok: {
    hero: flyferiePhoto("/destinations/bangkok/hero.jpg", "Rama VIII-broen i Bangkok om kvelden", "Rama VIII Bridge in Bangkok at night"),
    weekend: [
      flyferiePhoto("/destinations/bangkok/weekend-1.jpg", "ICONSIAM ved Chao Phraya-elven", "ICONSIAM by the Chao Phraya River"),
      flyferiePhoto("/destinations/bangkok/weekend-2.jpg", "Middag med utsikt over Bangkok", "Dinner with a view over Bangkok"),
      flyferiePhoto("/destinations/bangkok/weekend-3.jpg", "Thailandske vårruller", "Thai spring rolls")
    ]
  },
  "ao-nang": {
    hero: flyferiePhoto("/destinations/ao-nang/hero.jpg", "Strandutsikt i Ao Nang", "Beach view in Ao Nang"),
    weekend: [
      flyferiePhoto("/destinations/ao-nang/weekend-1.jpg", "Strand og kalksteinsklipper i Krabi", "Beach and limestone cliffs in Krabi"),
      flyferiePhoto("/destinations/ao-nang/weekend-2.jpg", "ATV-tur gjennom naturen", "ATV ride through the countryside"),
      flyferiePhoto("/destinations/ao-nang/weekend-3.jpg", "Thailandsk mat i Ao Nang", "Thai food in Ao Nang")
    ]
  },
  phuket: {
    hero: {
      src: "/destinations/phuket/hero.jpg",
      altNo: "Banana Beach på Phuket",
      altEn: "Banana Beach in Phuket",
      photographer: "Anton Zelenov",
      license: "CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Banana_beach_Phuket_2017_-_01.jpg"
    },
    weekend: [
      {
        src: "/destinations/phuket/weekend-1.jpg",
        altNo: "Fargerike bygninger i Phuket Old Town",
        altEn: "Colourful buildings in Phuket Old Town",
        photographer: "Mussi Katz",
        license: "CC0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Phuket_old_town_(52549766215).jpg"
      },
      {
        src: "/destinations/phuket/weekend-2.jpg",
        altNo: "Promthep Cape på Phuket",
        altEn: "Promthep Cape in Phuket",
        photographer: "edwin.11",
        license: "CC BY 2.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Laem_Phromthep_in_Phuket_(5733622568).jpg"
      },
      {
        src: "/destinations/phuket/weekend-3.jpg",
        altNo: "Kata Beach på Phuket",
        altEn: "Kata Beach in Phuket",
        photographer: "ADwarf",
        license: "Public domain",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Phuket_-_Kata_Beach_001.jpg"
      }
    ]
  },
  "hua-hin": {
    hero: {
      src: "/destinations/hua-hin/hero.jpg",
      altNo: "Utsikt over Hua Hin-bukta",
      altEn: "View across Hua Hin Bay",
      photographer: "All Fronts Quiet",
      license: "CC BY-SA 3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Hua_Hin_bay_-_panoramio.jpg"
    },
    weekend: [
      {
        src: "/destinations/hua-hin/weekend-1.jpg",
        altNo: "Buddhistmunker ved Hua Hin jernbanestasjon",
        altEn: "Buddhist monks at Hua Hin railway station",
        photographer: "Ian Gratton",
        license: "CC BY 2.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Buddist_monks,_Hua_Hin_rly_stn._(8289441264).jpg"
      },
      {
        src: "/destinations/hua-hin/weekend-2.jpg",
        altNo: "Cicada Night Market i Hua Hin",
        altEn: "Cicada Night Market in Hua Hin",
        photographer: "Wutthichai Charoenburi",
        license: "CC BY 2.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Cicada_Hua_Hin_Night_Market.jpg"
      },
      {
        src: "/destinations/hua-hin/weekend-3.jpg",
        altNo: "Kystlandskap sør for Hua Hin",
        altEn: "Coastal landscape south of Hua Hin",
        photographer: "Clay Gilliland",
        license: "CC BY-SA 2.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Monkey_Island_(12250088293).jpg"
      }
    ]
  }
} satisfies Record<string, DestinationMedia>);
