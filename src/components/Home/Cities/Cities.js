const cities = [
  {
    id: 1,
    name: "Casablanca",
    shortDescription: "Morocco's largest city with modern charm.",
    description:
      "Casablanca, Morocco's economic and business hub, is known for its modern architecture, lively atmosphere, and vibrant markets. From the iconic Hassan II Mosque to the bustling streets of the medina, Casablanca offers a unique blend of tradition and progress.",
    image:
      "https://images.unsplash.com/photo-1579017461826-8ea20d5cdb28?q=80&w=1556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2: "",
    image3: "",
    image4: "",
  },
  {
    id: 2,
    name: "Marrakech",
    shortDescription: "Magical city with historic charm.",
    description:
      "Marrakech, often referred to as the 'Red City,' captivates visitors with its enchanting medina, colorful souks, and iconic landmarks like the Jardin Majorelle. Immerse yourself in the lively atmosphere of Jemaa el-Fna square and savor the rich flavors of Moroccan cuisine.",
    image:
      "https://www.visitmorocco.com/sites/default/files/thumbnails/image/marrakech.jpg",
    image2: "",
    image3: "",
    image4: "",
  },
  {
    id: 3,
    name: "Fes",
    shortDescription: "Ancient city with a rich cultural heritage.",
    description:
      "Fes, one of Morocco's oldest imperial cities, is a treasure trove of history and culture. Explore the medieval medina, visit the University of Al Quaraouiyine, and be captivated by the intricate architecture of Bou Inania Madrasa. Fes is a journey back in time.",
    image:
      "https://images.unsplash.com/photo-1528657305805-d8d56cee1785?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2: "",
    image3: "",
    image4: "",
  },
  {
    id: 4,
    name: "Rabat",
    shortDescription: "Capital city with a blend of modernity and tradition.",
    description:
      "Rabat, Morocco's capital, boasts a mix of historic landmarks and modern developments. Visit the Royal Palace, wander through the charming Kasbah of the Udayas, and explore the impressive Hassan Tower. Rabat offers a serene and culturally rich experience.",
    image:
      "https://www.visitmorocco.com/sites/default/files/thumbnails/image/rabat.jpg",
    image2: "",
    image3: "",
    image4: "",
  },
  {
    id: 5,
    name: "Tangier",
    shortDescription: "Gateway to Africa with a cosmopolitan vibe.",
    description:
      "Tangier, located at the crossroads of Africa and Europe, has a unique charm. Stroll along the famous Boulevard Pasteur, visit the medina and Kasbah, and enjoy panoramic views from Cape Spartel. Tangier has been a haven for artists and writers throughout history.",
    image:
      "https://e1.pxfuel.com/desktop-wallpaper/396/715/desktop-wallpaper-tangier.jpg",
  },
  {
    id: 6,
    name: "Chefchaouen",
    shortDescription: "The blue city nestled in the Rif Mountains.",
    description:
      "Chefchaouen, known for its blue-washed buildings, is a picturesque gem in the Rif Mountains. Lose yourself in the narrow, winding streets, discover local crafts, and hike to the Spanish Mosque for breathtaking views. Chefchaouen is a tranquil and visually stunning escape.",
    image:
      "https://www.visitmorocco.com/sites/default/files/thumbnails/image/chefchaouen.jpg",
    image2: "",
    image3: "",
    image4: "",
  },
  {
    id: 7,
    name: "Essaouira",
    shortDescription: "Coastal town with a laid-back atmosphere.",
    description:
      "Essaouira, situated along the Atlantic coast, offers a relaxed and artistic ambiance. Wander through the UNESCO-listed medina, stroll along the windswept beach, and experience the vibrant arts scene. Essaouira is a charming destination with a maritime heritage.",
    image:
      "https://images.unsplash.com/photo-1602158051657-1d46106e4a96?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2: "",
    image3: "",
    image4: "",
  },
  {
    id: 8,
    name: "Agadir",
    shortDescription: "Modern seaside resort with sandy beaches.",
    description:
      "Agadir, a modern resort city along the Atlantic, is renowned for its long sandy beaches and vibrant nightlife. Rebuilt after a devastating earthquake, Agadir offers a perfect blend of relaxation and entertainment, making it a popular destination for sun-seekers.",
    image:
      "https://images.unsplash.com/photo-1630172006681-a0b1d335c9e3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Meknes",
    shortDescription: "Imperial city with grand architecture.",
    description:
      "Meknes, one of Morocco's imperial cities, showcases grand architecture and historical significance. Explore the vast Heri es-Souani granaries, visit the mausoleum of Moulay Ismail, and experience the vibrant atmosphere of the El Hedim Square. Meknes is a testament to Morocco's rich heritage.",
    image:
      "https://www.visitmorocco.com/sites/default/files/thumbnails/image/meknes.jpg",
    image2: "",
    image3: "",
    image4: "",
  },
  {
    id: 10,
    name: "Ouarzazate",
    shortDescription: "Gateway to the Sahara with cinematic landscapes.",
    description:
      "Ouarzazate, often referred to as the 'Gateway to the Sahara,' is a city surrounded by stunning desert landscapes. Visit the famous Ait Ben Haddou Kasbah, explore the Atlas Film Studios, and embark on a desert adventure. Ouarzazate is a captivating destination for film enthusiasts and desert explorers.",
    image:
      "https://www.visitmorocco.com/sites/default/files/thumbnails/image/ouarzazate.jpg",
    image2: "",
    image3: "",
    image4: "",
  },
  {
    id: 11,
    name: "Safi",
    shortDescription: "Coastal city known for its pottery and sea views.",
    description:
      "Safi, a coastal city on the Atlantic, is famous for its pottery and panoramic sea views. Explore the historic medina, visit the Pottery Museum, and enjoy fresh seafood by the sea. Safi's artistic heritage and maritime charm make it a unique destination.",
    image:
      "https://www.visitmorocco.com/sites/default/files/thumbnails/image/safi.jpg",
    image2: "",
    image3: "",
    image4: "",
  },
];
export default cities;
