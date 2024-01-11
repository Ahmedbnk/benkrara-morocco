const ArtAndCultureData = [
  {
    id: 1,
    image:
      "https://www.kamkamdunes.com/wp-content/uploads/2021/12/moroccan-cusine.jpg",
    mainImageTitle: "The Inviting Culinary Delights of Morocco",
    title: "gastronomy",
    largeTitle: "Gastronomic journey with Moroccan flavours",
    generalParagraphe: `
     Morocco's diverse culinary heritage features iconic dishes like Couscous, Tajine, Pastilla, Mrouzia, and R'fissa, blending Berber, Arab-Andalusian, and Jewish culinary traditions. The rich cultural heritage of each region has earned Morocco a global culinary reputation.`,
    content: [
      {
        id: 1,
        title: "Savory pastries and dishes",
        paragraphe:
          "From Pastilla, Couscous, Rfissa, Tajine, to Méchoui, Moroccan culinary art symbolizes a variety of influences that have given rise to a rich tradition. The dishes are certainly tasty, but Moroccan pastry also has its say. Gazelle horns, Briouates with honey, Ghriba... These sweet little delights, which are served especially during Eid celebrations, seduce the most demanding gourmets.",
        image:
          "https://www.oliverstravels.com/blog/wp-content/uploads/2019/09/traditional-moroccan-tajine-of-chicken-with-dried-fruits-and-spices-picture-id1143191120.jpg",
        imageTitle: "Dishes and pastries",
      },
      {
        id: 2,
        title: "Spices with captivating scents",
        paragraphe:
          "Cinnamon, Coriander, Saffron, Cumin, or Ras El-Hanout, Morocco takes you to a journey of colors and perfumes. Available in the specialized markets of the medinas as well as in the supermarkets, these spices are also part of the Souk culture. Besides cooking, they are used for their therapeutic virtues.",
        image:
          "https://wildgreensandsardines.com/wp-content/uploads/2019/03/Ras-el-Hanout_4716.jpg",
        imageTitle: "Spices",
      },
      {
        id: 3,
        title: "International awards",
        paragraphe:
          "In 2014, Morocco was awarded second gastronomic destination in the world by the British blog Worldsim. In October 2018, the Spanish newspaper 'La Razon' paid tribute to the Kingdom's refined cuisine by qualifying it as the best international gastronomic destination. Fifteen Moroccan restaurants are now listed among the 1000 best restaurants in the world according to 'La Liste' ranking.",
        image: "https://www.maigaedu.com/img/programs/1619431090.png",
        imageTitle: "International awards",
      },
      {
        id: 4,
        title: "Savoury dishes in northern and central regions",
        paragraphe:
          "In addition to the most refined culinary traditions, there are also scrumptious dishes traditionally prepared that delights the most demanding gourmets, such as Smen, a rancid and salty butter from North Africa and the Middle East. Khliî, is spicy dried meat from the cradle of Moroccan gastronomy in Fez.",
        image: `data:image/jpeg;base64,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`,
        imageTitle: "Savoury delights",
      },
      {
        id: 5,
        title: "Sweet delights of Agadir",
        paragraphe:
          "With argan oil being one of the specialties of Agadir, Amlou the Moroccan Nutella, which is a mixture of argan oil, honey, and almond almonds, is the most common recipe in the South. Agadir is also famous for its wide variety of honey, which is a delicious sweet added to a soft breakfast.",
        image:
          "https://primemoroccotours.com/wp-content/uploads/2022/07/Moroccan-Sweets-3.jpg",
        imageTitle: "Sweet delights",
      },
      {
        id: 6,
        title: "À Marrakech, des restaurants en plein air",
        paragraphe:
          "Ranked as the 9th best world destination in 2019 by TripAdvisor ahead of Dubai and New York, the sumptuous Jemaa-el-Fna of Marrakech is completely transformed into a giant open-air restaurant as the night falls. The latter invites its visitors to taste delicious feasts: from Harira, which is a bean soup with pasta and lentils, to the dates and honey delights that are traditionally prepared for Ramadan.",
        image:
          "https://www.dianamiaus.com/wp-content/uploads/2018/11/image-2-1440x1800.jpg",
        imageTitle: "Open-Air Restaurants",
      },
      {
        id: 7,
        title: "A journey of senses",
        paragraphe:
          "In the specialized markets, the stalls of the spice sellers form a striking picture of colors: red of paprika, beige of cumin, yellow of turmeric, green of aniseed with its distinctive smell. These natural products are presented in woven baskets or plastic tubs. A sensory feast added to the pleasure of sight.",
        image: "https://live.staticflickr.com/3774/9086790135_a7225f206f_b.jpg",
        imageTitle: "The souk",
      },
      {
        id: 8,
        title: "Moments of sharing and conviviality",
        paragraphe:
          "The culinary tradition in Morocco is also about conviviality and sharing. Everyone gathers around the table to enjoy a tasty Couscous or a Tajine at lunchtime. Afternoon tea is not to be missed; it is the icon of traditional Moroccan beverages.",
        image:
          "https://www.swedishnomad.com/wp-content/images/2019/10/food-from-Morocco.jpg",
        imageTitle: "Conviviality",
      },
      {
        id: 9,
        title: "Moroccan hospitality",
        paragraphe:
          "Rather than traveling from hotel to hotel, a homestay offers an unparalleled experience harking back to your deep-rooted traditions. How else can you enjoy a Berber bread baked in a traditional oven soaked in mild and strong olive oil? How to taste Harbel, the crushed durum wheat soup with milk, or a rabbit tagine with Demnate raisins or liver and olives.",
        image:
          "https://theglobalwizards.com/wp-content/uploads/2023/06/Morocco-with-kids.jpg",
        imageTitle: "Hospitality",
      },
    ],
  },
  {
    id: 2,
    image: "https://fr.hespress.com/wp-content/uploads/2019/03/terroir.jpg",
    mainImageTitle: "Moroccan Natural Treasures",
    title: "localproducts",
    largeTitle: "Authentic Moroccan nature gifts",
    generalParagraphe:
      'Morocco makes the most of its generous nature. Skilled craftsmen use inherited know-how to shape beautiful products. The local products are of an incomparable richness: spices such as saffron, also called "red gold", olive oil, honey and orange blossom water, not forgetting the exquisite taste of argan oil. The hammam ritual uses henna, rose water, black soap and ghassoul. Let yourself be tempted by their benefits. If you spot any of these small Moroccan treasures, take the most your luggage can carry!',
    content: [
      {
        id: 1,
        title: "Saffron",
        paragraphe:
          "This particular spice with a red color has a very imposing scent. Although it never was that famous in the past, saffron, which is produced in the region of 'Taliouine,' is now a very popular product. Saffron bears well its name of 'red gold': its use is no longer limited to cooking. For years, its therapeutic and medicinal virtues have been proven by several research and clinical studies.",
        image:
          "https://images.herzindagi.info/image/2023/Aug/grow-saffron-at-home-at-half-price.jpg",
      },
      {
        id: 2,
        title: "Argan oil",
        paragraphe:
          "There are many terms associated with Argan oil which is now irrefutable. 'Liquid gold,' 'precious oil,' or even 'gift of God,' this Moroccan product is becoming more and more demanded by anyone concerned about their health or beauty. Extracted from the argan tree, this oil that originates from the South includes numerous cosmetic and therapeutic virtues. For a youthful flair or for a dose of vitamins, Argan oil will be your new health and beauty companion!",
        image:
          "https://www.treehugger.com/thmb/qHOAVOgA_HxgViHf0lXtSWnGrQk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/argan-oil-with-fruits-155268256-aef0d4bf255b42b997cf00d1c816ea97.jpg",
      },
      {
        id: 3,
        title: "Rosewater",
        paragraphe:
          "In the Dades Valley, between Kelaa M'gouna and Boulmane Dades, there are small villages that live mainly from the cultivation of roses. Also known as the valley of roses, this place with its captivating scents bears well its name. Rosewater, which is the star of the Moussem of roses, is a perfect beauty companion and an icon of traditional Moroccan cosmetics.",
        image:
          "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/320/320216/rose-water-in-small-glass-bottle-next-to-rose-flower.jpg?w=1155&h=1541",
      },
      {
        id: 4,
        title: "The Prickly Pear",
        paragraphe:
          "This little fruit serves us magnificent juices, and we fancy it! The prickly pear doesn't need to be introduced anymore. Everybody knows it and requires it. This fruit with an exquisite taste is very common in the South-West of Morocco and is health-friendly. Its therapeutic power and its anti-inflammatory capacities push us to enjoy it without restraint!",
        image: "https://cdn.mos.cms.futurecdn.net/iRQENUSDs7t5MByC7giQUY.jpg",
      },
      {
        id: 5,
        title: "Orange blossom water",
        paragraphe:
          "Orange blossom water is highly in-demand in cooking and cosmetology. Grown and distilled in the Khemisset region, orange blossom water or Neroli flower water can be used to flavor cakes. It is also an excellent local product to integrate into your beauty ritual!",
        image:
          "https://www.tastingtable.com/img/gallery/why-you-should-always-keep-orange-blossom-water-in-your-pantry/l-intro-1658756989.jpg",
      },
    ],
  },
  {
    id: 3,
    image:
      "https://previews.123rf.com/images/ealisa/ealisa1405/ealisa140500088/28665699-traditional-moroccan-carpets-in-a-berber-store-in-marakesh-morocco.jpg",
    mainImageTitle: "Traditional Crafts and Artistry in Morocco",
    title: "moroccanTraditionalCraft",
    largeTitle: "Morocco: a land of unique crafts and art!",
    generalParagraphe:
      "Traditional craftsmanship and design are one of the deep-rooted cultural heritage. Various and multiple materials are finely worked by hand using machines and traditional tools, to make decorative daily objects. From table art, furniture, to jewelry and clothing, you won’t resist carrying Moroccan souvenirs with you! Morocco is also a country of craftsmanship. Carpets in Ouarzazate, Leather in Marrakech, and clay in Safi, Fez or Zagora, these cities have a lot to offer to you. From slippers to lounge articles, discover a range of charming creations, and aesthetic innovations.",
    content: [
      {
        id: 1,
        title: "Tannery, leather, and leather goods",
        paragraphe:
          "The old medinas of Morocco, especially the medina of Fez, brim with leather objects in its souks. Originating from ancient tanneries that look like a palette of watercolors, the tanneries of Fez are where the skins of cows, goats, and goats are processed for use in leather goods. Coats, shoes, bags, and shoes... these are true icons of traditional craftsmanship.",
        image:
          "https://planetmarrakech.com/wp-content/uploads/2022/12/morocco-leather-bags.jpg",
      },
      {
        id: 2,
        title: "Jewelry",
        paragraphe:
          "Home to original handmade jewelry, the region of Marrakech is full of lavish Amazigh jewelry! Most of the jewelry shops await for you in the medina next to the Jemaa El Fna square. Many silver jewels are also produced in cities such as Goulimine, Agadir, Essaouira, Tiznit or Taroudant. In gold or silver, they are made by craftsmen and sold in the souks of the old medinas.",
        image:
          "https://thumbs.dreamstime.com/b/hand-female-tourist-holding-moroccan-costume-jewelry-pendant-store-marrakech-morocco-city-full-street-stores-259279940.jpg",
      },
      {
        id: 3,
        title: "Plaster and zellige",
        paragraphe:
          "As an interior design, Zellige tiles with intricate shapes are lining the walls and floors of every Riad. Being a cultural heritage, it is an essential element of Moroccan architecture. All over the country, find these mosaics on traditional objects or used in innovative creations! Plaster sculptures are also easy to see when entering a Riad. What about the Moroccan capital of zellige? That’s undoubtedly the city of Fez! Buy a multitude of wonders in its typical tiny shops.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYTED-uG5Mc_eRV20RNY501jD83OlHSlDaEF8MbVEWfnTrevF6aE2KrmHB7hy5sTLGBOA&usqp=CAU",
      },
      {
        id: 4,
        title: "Ceramics and pottery",
        paragraphe:
          "In Rabat, the potteries illustrate the interweaving of Amazigh and Andalusian culture. Ceramics are also in common use. The shapes and colors used vary from region to region: blue patterns in Fez, yellows in Safi, and greens in Meknes. Go to Safi to discover unique, multicolored pottery. In Azemmour, women artisans have their own structure. If you’re staying in Salé, don't miss out on a visit to the potters' complex, the Oulja.",
        image: "https://fr.hespress.com/wp-content/uploads/2022/03/safi.jpg",
      },
      {
        id: 5,
        title: "Marquetry and the Thuja tree",
        paragraphe:
          "In Essaouira, you’ll be able to buy items made of Thuya, a precious wood from the Atlas Mountains. For centuries, wood decoration has been an artisanal Moroccan specialty that has won a place in the world of decoration. Likewise, the marquetry which are decorations in typical wooden plates, that you can spot anywhere you go in Morocco.",
        image:
          "https://st4.depositphotos.com/4075971/41110/i/450/depositphotos_411108772-stock-photo-wood-handmade-items-market-essaouira.jpg",
      },
      {
        id: 6,
        title: "Traditional clothing",
        paragraphe:
          "Traditional clothing, which is still common during festivals and ceremonies, is now adopting an innovative style. From caftan to babouche, try on the Moroccan fashion clothing! It is available in all styles and many designers offer models both arty and trendy!",
        image:
          "https://malbusaat.co.uk/cdn/shop/products/4579712106dd4d0ab6e657e70a7a409b.jpg?v=1659645742",
      },
      {
        id: 7,
        title: "Moroccan carpets",
        paragraphe:
          "Rabat, Fez, and Tetouan offer you a wide range of Moroccan handicrafts, including a variety of rugs and carpets for different types of use. Depending on the region, rugs often tell stories through their patterns and mixed colors. Decorate the floors, seating covers, bed covers, or blankets. For urban use or rural use, these rugs are traditionally handmade mostly by women using the typical knotting techniques stemming from Amazigh culture.",
        image:
          "https://assets-vinterior-2.vinterior.co/uploads/listing_image/image/6847680/large_vintage-moroccan-rug-315x205-cm-tazenacht-berber-atlas-tribal-red-orange-blue_0.jpg",
      },
      {
        id: 8,
        title: "The wrought iron",
        paragraphe:
          "In Marrakech, Fez, or Safi, you come across icons of Moroccan wrought iron work. Candelabras, lanterns, mirrors, or lampshades will perfectly fit into your interiors. Magnificent woven objects made of wicker and raffia and palm tree are waiting for you in Fez, Marrakech, or Salé.",
        image:
          "https://i.etsystatic.com/14851386/r/il/1af973/3507859124/il_570xN.3507859124_7phb.jpg",
      },
      {
        id: 9,
        title: "The dinanderie",
        paragraphe:
          "In Fez, Marrakech, and Tetouan, copperware is in common use: frames, pots, knockers, lamps, and many other objects are finely worked on copper, silver, or brass. These fascinating objects made the reputation of Moroccan designers. Nowadays, you can find modern versions.",
        image:
          "https://fr.hespress.com/wp-content/uploads/2018/07/12-900x506.jpg",
      },
    ],
  },
  {
    id: 4,
    image:
      "https://friendlymorocco.com/wp-content/uploads/2017/11/moroccan-hospitality2-950x640.jpg",
    mainImageTitle: "A Land of Elegance and Grace",
    title: "moroccanHospitality",
    largeTitle: "Typical accommodation for an authentic stay",
    generalParagraphe:
      "A warm welcome, magnificent landscapes, a secular culture, everything was thought to offer you an unforgettable stay. Whatever solution you choose, the charm of Moroccan art of living will not fail to surprise you!",
    content: [
      {
        id: 1,
        title: "Guide and accommodation",
        paragraphe:
          "You may lose all our bearings when traveling, especially when it comes to communicating with local people, but in Morocco you’ll feel at home. Moroccan unparalleled hospitality will make your trip a lot easier! Without even asking, you’ll be given advice but also places to stay in! Several mobile applications are there to help you out and give you lots of practical information and guidance during your stay.",
        image:
          "https://friendlymorocco.com/wp-content/uploads/2017/11/moroccan-hospitality2-950x640.jpg",
      },
      {
        id: 2,
        title: "Riads, hotels and inns: Moroccan traditional take!",
        paragraphe:
          "Inside the famous medinas, the Riads and guest houses will shower you with warm reception and affection. You won’t fail to find authenticity in the mountains or in the valleys either, if you decide to stay with the inhabitants, in a lodging, an inn, or in a Kasbah made of mud-brick. And for those who dream of deserts and oases, a bivouac in the Sahara is tailor-made for you.",
        image: "https://www.visitmorocco.com/sites/default/files/riad_0.jpg",
      },
      {
        id: 3,
        title: "Tea ceremony",
        paragraphe:
          "When you’re invited, you are being served tea! People traditionally get to know each other while having a thirst-quencher tea. It’s hard to decline any such invitation even when you’ve just had a drink a while ago. Nothing is better than a warm welcoming accompanied by some tasty Moroccan delicacies.",
        image:
          "https://3t-travel.com/wp-content/uploads/2022/11/tea-pouring-1200x800-1.jpg",
      },
    ],
  },
  {
    id: 5,
    image:
      "https://www.arabnews.com/sites/default/files/userimages/445491/shutterstock_272558387.jpg",
    mainImageTitle: "Living Art and Rich Cultural Traditions in Morocco",
    title: "lifestyle",
    largeTitle: "Long-standing traditions",
    generalParagraphe:
      "A rich country in long-standing culture, Morocco is home to vibrant preserved traditions through generations. Every festival, ritual, or special gathering is a symbol of the living arts in the country. Get a taste of traditional Moroccan experiences in every corner during your stay.",
    content: [
      {
        id: 1,
        title: "Parties and celebrations",
        paragraphe:
          "Several Moroccan events and celebrations take place in all Moroccan cities. These cultural and religious events that perfectly symbolize Moroccan traditions, are held during the famous Moussems and festivals. Don't miss the Tan-Tan festival, which is particularly renowned and has been listed as part of the cultural and intangible heritage of humanity since 2008, the Cherry Festival in Sefrou, the Moussem of Roses in Kalâat M'gouna or the Gnaoua festival in Essaouira. Celebrate the Moroccan way!",
        image:
          "https://www.mosaicnorthafrica.com/wp-content/uploads/2020/11/fantasia-at-moussem-festival.jpg",
      },
      {
        id: 2,
        title: "A vibrant culture",
        paragraphe:
          "If you want an immersive experience in both Moroccan culture and traditions, the medinas are the perfect choice. As you stroll the streets of each medina, observe the hidden details of Moroccan daily life. As a Mediterranean country, Morocco is renowned for its friendly gatherings: from a refreshing tea ceremony to a delicious Couscous, the staple of solidarity, to a colorful folklore celebration, you’ll get back home with amazing memories to share.",
        image:
          "https://sp-ao.shortpixel.ai/client/q_glossy,ret_img/http://www.morocco-desert-camp.com/wp-content/uploads/2015/02/atta-desert-activities-600x300.jpg",
      },
      {
        id: 3,
        title: "Gnaoua Music",
        paragraphe:
          "Gnaoua music takes us on a spiritual but also cultural journey. Being classified by UNESCO as World heritage since 2019, Gnawa music tells the story of slaves from sub-Saharan Africa. This ritual song with traditional music and dancing lets you just go with the flow. The artists put on colorful costumes and sing to the beat of 'Lguembri' and 'Qraqeb', which are the two musical instruments of the Gnaouas. It’s not a surprise that great artists such as Led Zeppelin, Pat Metheny, Didier Lockwood, or Marcus Miller have come to Morocco only to perform alongside the greatest musicians.",
        image:
          "https://i0.wp.com/worldmusiccentral.org/wp-content/uploads/Gnawa_musicians_1.jpg?resize=500%2C334&ssl=1",
      },
    ],
  },
];

export default ArtAndCultureData;
