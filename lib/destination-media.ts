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
