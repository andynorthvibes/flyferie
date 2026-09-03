export type LocalRecommendation = {
  name: string;
  categoryNo: string;
  categoryEn: string;
  descriptionNo: string;
  descriptionEn: string;
  image: string;
  imageAltNo: string;
  imageAltEn: string;
  url: string;
};

export const localRecommendations: Record<string, LocalRecommendation[]> = {
  krakow: [
    {
      name: "C.K. Browar",
      categoryNo: "Bar og restaurant",
      categoryEn: "Bar and restaurant",
      descriptionNo:
        "Et hyggelig og livlig sted for god mat og husbrygget øl. Det passer spesielt godt når dere reiser som vennegjeng.",
      descriptionEn:
        "A friendly and lively place for good food and house-brewed beer. It works especially well for a trip with friends.",
      image: "/destinations/krakow/recommendations/ck-browar.jpg",
      imageAltNo: "Vennegjeng rundt bordet hos C.K. Browar i Krakow",
      imageAltEn: "Friends gathered around a table at C.K. Browar in Krakow",
      url: "https://ckbrowar.pl/en/menu/",
    },
    {
      name: "Morskie Oko",
      categoryNo: "Polsk restaurant",
      categoryEn: "Polish restaurant",
      descriptionNo:
        "Tradisjonell polsk mat i en lun og rustikk kjeller. Et stemningsfullt valg når dere vil prøve klassiske lokale retter.",
      descriptionEn:
        "Traditional Polish food in a warm, rustic cellar. An atmospheric choice when you want to try classic local dishes.",
      image: "/destinations/krakow/recommendations/morskie-oko.jpg",
      imageAltNo: "Middag i den rustikke kjelleren hos Morskie Oko i Krakow",
      imageAltEn: "Dinner in the rustic cellar at Morskie Oko in Krakow",
      url: "https://www.morskieoko.krakow.pl/",
    },
    {
      name: "Qrudo",
      categoryNo: "Restaurant",
      categoryEn: "Restaurant",
      descriptionNo:
        "En moderne restaurant med pent presenterte retter og en lun atmosfære. Et fint alternativ for en roligere middag.",
      descriptionEn:
        "A modern restaurant with beautifully presented dishes and a warm atmosphere. A good option for a more relaxed dinner.",
      image: "/destinations/krakow/recommendations/qrudo.jpg",
      imageAltNo: "Middag og pent presenterte retter hos Qrudo i Krakow",
      imageAltEn: "Dinner and beautifully presented dishes at Qrudo in Krakow",
      url: "https://qrudo.pl/",
    },
    {
      name: "Międzymiastowa",
      categoryNo: "Cocktailbar, restaurant og klubb",
      categoryEn: "Cocktail bar, restaurant and club",
      descriptionNo:
        "Et livlig stopp for gode drinker midt på Rynek Główny. Stedet fungerer både som restaurant, cocktailbar og klubb.",
      descriptionEn:
        "A lively stop for good drinks on Rynek Główny. The venue combines a restaurant, cocktail bar and club.",
      image: "/destinations/krakow/recommendations/miedzymiastowa.jpg",
      imageAltNo: "Cocktailer hos Międzymiastowa i Krakow",
      imageAltEn: "Cocktails at Międzymiastowa in Krakow",
      url: "https://miastowa.com/",
    },
  ],
};
