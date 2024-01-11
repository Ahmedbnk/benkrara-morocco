const cities = [
  {
    id: 1,
    name: "Marrakech",
    secondName: "Marrakech: The Red City's Magical Charm",
    shortDescription: "Magical city with historic charm",
    description:
      "Marrakech, often referred to as the 'Red City,' captivates visitors with its enchanting medina, colorful souks, and iconic landmarks like the Jardin Majorelle. Immerse yourself in the lively atmosphere of Jemaa el-Fna square and savor the rich flavors of Moroccan cuisine.",
    image:
      "https://www.visitmorocco.com/sites/default/files/thumbnails/image/marrakech.jpg",
    image2: "",
    image3: "",
    image4: "",
    essentialFacts: [
      {
        id: 1,
        title: "Historic Charm of the Red City",
        image:
          "https://www.marrakechsunset.com/images/blog/what_is_the_red_city.jpg",
        description:
          "Marrakech, often referred to as the 'Red City,' is a captivating blend of historic charm and vibrant energy. Its enchanting medina, lively souks, and iconic landmarks like the Jardin Majorelle create a unique atmosphere that draws visitors from around the world.",
      },
      {
        id: 2,
        title: "Jemaa el-Fna Essence",
        image:
          "https://touringinmorocco.com/wp-content/uploads/2021/02/resize-16138426931864477503morocco286205912801.jpg",
        description:
          "Immerse yourself in the lively atmosphere of Jemaa el-Fna square, Marrakech's vibrant heart. From traditional storytellers and snake charmers to bustling food stalls, the square comes alive with a kaleidoscope of sights, sounds, and aromas, offering a true Moroccan experience.",
      },
      {
        id: 3,
        title: "Jardin Majorelle: Oasis of Tranquility",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/4f/7f/06/20190418-125956-largejpg.jpg?w=1200&h=1200&s=1",
        description:
          "Escape the hustle and bustle at the Jardin Majorelle, a botanical garden designed by Jacques Majorelle. Wander through vibrant blue structures, exotic plants, and serene fountains, experiencing a peaceful oasis that contrasts with the lively energy of the medina.",
      },
      {
        id: 4,
        title: "Rich Culinary Delights",
        image:
          "https://media.cnn.com/api/v1/images/stellar/prod/130508154450-morocco-food-stall.jpg?q=w_1500,h_1000,x_0,y_0,c_fill/h_618",
        description:
          "Savor the rich flavors of Moroccan cuisine in Marrakech. From aromatic tagines and couscous to flavorful street food, the city's diverse culinary scene is a delight for food enthusiasts. Don't miss the opportunity to indulge in traditional Moroccan tea and pastries.",
      },
      {
        id: 5,
        title: "Traditional Souks and Craftsmanship",
        image:
          "https://www.alksar.com/wp-content/uploads/2017/10/medina_marrakech-a-pied.jpg",
        description:
          "Explore Marrakech's bustling souks, where narrow alleyways lead to a treasure trove of handicrafts, textiles, and traditional Moroccan goods. The city's artisans showcase their craftsmanship, offering a unique shopping experience filled with color and cultural richness.",
      },
      {
        id: 6,
        title: "Architectural Marvels and Riads",
        image:
          "https://lp-cms-production.imgix.net/2019-06/51cfc4a974e1d8fb50716e9c9cd66437-bahia-palace.jpg",
        description:
          "Marrakech boasts architectural marvels, from the intricate details of the Bahia Palace to the historic Ben Youssef Madrasa. Experience the charm of staying in a traditional riad, with its courtyard gardens and authentic Moroccan design, providing a tranquil retreat in the heart of the medina.",
      },
      {
        id: 7,
        title: "Gateway to the Atlas Mountains",
        image:
          "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/07/13.jpg",
        description:
          "Venture beyond the city to discover the majestic Atlas Mountains. Marrakech serves as a gateway to this breathtaking mountain range, offering opportunities for hiking, exploring Berber villages, and experiencing the stunning landscapes that surround the Red City.",
      },
      {
        id: 8,
        title: "Cultural Festivals and Events",
        image:
          "https://thearabweekly.com/sites/default/files/styles/article_image_800x450_/public/2022-09/1_55.jpg?itok=DWJeIWDW",
        description:
          "Immerse yourself in Marrakech's cultural scene by attending festivals and events. From the Marrakech International Film Festival to traditional music and arts events, the city celebrates its rich cultural heritage, providing visitors with diverse and memorable experiences.",
      },
    ],
  },
  {
    id: 2,
    name: "Casablanca",
    secondName: "Casablanca: Where Tradition Meets Modernity",
    shortDescription: "Morocco's largest city with modern charm",
    description:
      "Casablanca, Morocco's economic and business hub, is known for its modern architecture, lively atmosphere, and vibrant markets. From the iconic Hassan II Mosque to the bustling streets of the medina, Casablanca offers a unique blend of tradition and progress.",
    image:
      "https://images.unsplash.com/photo-1579017461826-8ea20d5cdb28?q=80&w=1556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2:
      "https://static.medias24.com/content/uploads/2022/02/04/me%CC%81dina-casa.jpg?x68346",
    image3:
      "https://i.pinimg.com/originals/82/0e/9a/820e9abae01c7a7a7af5b6b7d9f1e3ed.jpg",
    image4:
      "https://www.challenge.ma/wp-content/uploads/2023/08/5ff8cd02417c3.jpg",
    essentialFacts: [
      {
        id: 1,
        title: "Economic Hub of Morocco",
        image:
          "https://media.cnn.com/api/v1/images/stellar/prod/140829142043-casablanca-finance-city.jpg?q=w_1160,h_813,x_0,y_0,c_fill/h_618",
        description:
          "Casablanca serves as Morocco's economic and business epicenter. With a thriving commercial landscape, the city hosts major financial institutions, multinational corporations, and dynamic industries, contributing significantly to the country's economic growth.",
      },
      {
        id: 2,
        title: "Morocco's Largest City",
        image:
          "https://www.worldatlas.com/r/w768/upload/21/19/d8/shutterstock-1030290235.jpg",
        description:
          "As the largest city in Morocco, Casablanca is a sprawling metropolis that embraces both modernity and tradition. Its expansive urban footprint is home to diverse neighborhoods, each with its unique character and charm.",
      },
      {
        id: 3,
        title: "Hassan II Mosque: Architectural Marvel",
        image:
          "https://ramaarya.files.wordpress.com/2018/12/casablanca_hassan_ii_mosque1.jpg?w=640",
        description:
          "The iconic Hassan II Mosque stands as a testament to Casablanca's architectural prowess. Overlooking the Atlantic Ocean, this grand mosque boasts intricate craftsmanship, breathtaking design, and is a symbol of religious tolerance.",
      },
      {
        id: 4,
        title: "Dynamic Cultural Fusion",
        image:
          "https://www.micemag.com/wp-content/uploads/2023/01/mice-casablanca-as-a-mice-destination-02.jpg",
        description:
          "Casablanca embodies a dynamic fusion of cultures, blending Moroccan traditions with influences from Arab, Berber, and French heritage. The city's cultural tapestry is woven into its daily life, cuisine, and vibrant arts scene.",
      },
      {
        id: 5,
        title: "Mediterranean Climate",
        image:
          "https://cdn-fnbga.nitrocdn.com/tAUlWYyReWTSQTSbTBayZSCXnamUPFKB/assets/images/optimized/rev-7d6cc98/www.purlife-maroc.com/wp-content/uploads/2021/07/PLM_Web_Destinationen_Casablanca-3.jpg",
        description:
          "Enjoying a Mediterranean climate, Casablanca experiences mild, wet winters and warm, dry summers. The pleasant weather makes it an ideal destination for visitors throughout the year.",
      },
      {
        id: 6,
        title: "Corniche and Coastal Beauty",
        image:
          "https://friendlymorocco.com/wp-content/uploads/2017/06/casablanca-corniche.jpg",
        description:
          "The scenic Corniche along the Atlantic coast is a popular destination for locals and tourists alike. Stroll along the waterfront, enjoy sea views, and explore the bustling cafes, restaurants, and shops that line this picturesque promenade.",
      },
      {
        id: 7,
        title: "Rich History and Colonial Legacy",
        image:
          "https://www.barcelo.com/guia-turismo/wp-content/uploads/2022/10/casablanca-catedral-pal.jpg",
        description:
          "Casablanca's history is intertwined with its colonial past. From the French colonial architecture in the city center to the historic neighborhoods, visitors can trace the footsteps of the past while experiencing modern urban life.",
      },
      {
        id: 8,
        title: "Gastronomic Delights Await",
        image:
          "https://morocco-traveler.com/wp-content/uploads/Ricks-Cafe-Casablanca.jpg",
        description:
          "Indulge in Casablanca's culinary wonders, where traditional Moroccan flavors meet international influences. From authentic street food stalls to upscale dining establishments, the city's diverse gastronomic scene caters to every palate.",
      },
    ],
  },
  {
    id: 3,
    name: "Fes",
    secondName: "Fes: Ancient City with a Rich Cultural Heritage",
    shortDescription: "Ancient city with a rich cultural heritage",
    description:
      "Fes, one of Morocco's oldest imperial cities, is a treasure trove of history and culture. Explore the medieval medina, visit the University of Al Quaraouiyine, and be captivated by the intricate architecture of Bou Inania Madrasa. Fes is a journey back in time.",
    image:
      "https://images.unsplash.com/photo-1528657305805-d8d56cee1785?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2: "",
    image3: "",
    image4: "",
    essentialFacts: [
      {
        id: 1,
        image:
          "https://hips.hearstapps.com/hmg-prod/images/fes-morocco-lead-1520376494.jpg?crop=1xw:0.8433521923620934xh;center,top&resize=1200:*",
        title: "Medieval Splendor of Fes",
        description:
          "Fes, one of Morocco's oldest imperial cities, is a treasure trove of medieval splendor. Its well-preserved medina, ancient madrasas, and historic monuments transport visitors back in time, offering a glimpse into the rich cultural and architectural heritage of Morocco.",
      },
      {
        id: 2,
        image:
          "https://www.fescity.com/wp-content/uploads/2014/12/mosquee_karaouiyine3.jpg",
        title: "Oldest Operating University",
        description:
          "Visit the University of Al Quaraouiyine, recognized by UNESCO and considered the oldest continuously operating educational institution in the world. Founded in 859 AD, the university reflects Fes's longstanding commitment to knowledge, scholarship, and Islamic learning.",
      },
      {
        id: 3,
        image:
          "data:image/jpeg;base64,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",
        title: "Bou Inania Madrasa: Architectural Marve",
        description:
          "Marvel at the intricate architecture of Bou Inania Madrasa, a historic Islamic school in Fes. Admire the detailed tilework, geometric patterns, and calligraphy that adorn this architectural masterpiece, showcasing the skilled craftsmanship of Moroccan artisans.",
      },
      {
        id: 4,
        image:
          "https://cdn.kimkim.com/files/a/images/2383dec353573d5fdab0c729fdf446159f972d95/big-cb0f68b7a02884a4ddc0c21ae1bc9c08.jpg",
        title: "Fes Medina: UNESCO Heritage ",
        description:
          "Explore the UNESCO-listed Fes Medina, a labyrinthine maze of narrow streets, bustling souks, and hidden squares. The medina's medieval character, vibrant markets, and traditional craftsmanship make it a captivating destination for those seeking an authentic Moroccan experience.",
      },
      {
        id: 5,
        image:
          "https://www.fes.fr/f/marruecos/fez/guia/curtiduria-chouwara-m.jpg",
        title: "Tanneries and Traditional Crafts",
        description:
          "Discover Fes's traditional crafts, including leather goods produced in the city's historic tanneries. Witness the tanning process and explore the vibrant array of leather products, textiles, and handicrafts available in the local markets, showcasing the city's artisanal traditions.",
      },
      {
        id: 6,
        image:
          "https://img.cuisineaz.com/1024x768/2013/12/20/i60194-photo-de-pastilla-au-poulet.jpeg",
        title: "Culinary Exploration in Fes",
        description:
          "Embark on a culinary exploration in Fes, known for its diverse and flavorful cuisine. Indulge in traditional dishes such as pastilla, harira soup, and succulent tagines. Fes's culinary scene reflects the city's cultural richness and offers a delightful experience for food enthusiasts.",
      },
      {
        id: 7,
        image:
          "https://www.rjtravelagency.com/wp-content/uploads/2023/03/Bab-Bou-Jeloud-Blue-Gate-Fes-1.jpg",
        title: "Historic Gates and Architecture",
        description:
          "Admire the historic gates and architecture that define Fes, including the impressive Bab Bou Jeloud gate. The city's walls, gates, and monuments showcase a blend of Arab, Andalusian, and Moorish influences, contributing to Fes's status as a cultural and historical gem.",
      },
      {
        id: 8,
        image:
          "https://moroccoshinydays.com/wp-content/uploads/2022/05/fes-festiv-1.png",
        title: "Fes Festivals and Celebrations",
        description:
          "Experience the vibrant festivals and celebrations that take place in Fes throughout the year. From the Fes Festival of World Sacred Music to local events celebrating art and culture, the city comes alive with a dynamic cultural calendar, providing unique and memorable experiences for visitors.",
      },
    ],
  },
  {
    id: 4,
    name: "Rabat",
    secondName: "Rabat: Capital City with a Blend of Modernity and Tradition",
    shortDescription: "Capital city with a blend of modernity and tradition",
    description:
      "Rabat, Morocco's capital, boasts a mix of historic landmarks and modern developments. Visit the Royal Palace, wander through the charming Kasbah of the Udayas, and explore the impressive Hassan Tower. Rabat offers a serene and culturally rich experience. & 100% nasarahou lah 👙♟",
    image:
      "https://www.visitmorocco.com/sites/default/files/thumbnails/image/rabat.jpg",
    image2: "",
    image3: "",
    image4: "",
    essentialFacts: [
      {
        id: 1,
        image:
          "https://www.moroccoworldnews.com/wp-content/uploads/2014/03/Rabat-Medina-the-Capital-of-Morocco.jpg",
        title: "Majesty of the Capital City",
        description:
          "Rabat, the capital city of Morocco, exudes majesty with its blend of historic landmarks and modern developments. As the political and administrative center of the country, Rabat offers visitors a serene and culturally rich experience.",
      },
      {
        id: 2,
        image: "https://www.gpsmycity.com/img/gd_sight/44658.jpg",
        title: "Royal Palace Splendor",
        description:
          "Visit the Royal Palace of Rabat, an architectural masterpiece that reflects Morocco's regal heritage. While the palace itself is not open to the public, the grandeur of its gates and exterior showcases the city's royal and administrative importance.",
      },
      {
        id: 3,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/97/Kasbah_Oudayas_exterior.jpg",
        title: "Kasbah of the Udayas",
        description:
          "Wander through the charming Kasbah of the Udayas, a historic fortress overlooking the Atlantic Ocean. The Kasbah's narrow streets, Andalusian gardens, and whitewashed walls create a picturesque setting, offering panoramic views of the river and the city.",
      },
      {
        id: 4,
        image:
          "https://www.visitrabat.com/wp-content/uploads/2019/04/tour_hassan2.jpg",
        title: "Hassan Tower: Iconic Landmark",
        description:
          "Explore the impressive Hassan Tower, an iconic architectural landmark of Rabat. The unfinished minaret stands as a testament to the city's rich history and architectural prowess. The nearby Mausoleum of Mohammed V adds to the cultural significance of this historic site.",
      },
      {
        id: 5,
        image:
          "https://www.visitrabat.com/wp-content/uploads/2019/04/chellah_111.jpg",
        title: "Chellah Roman & Muslim Necropolis",
        description:
          "Discover the Chellah Necropolis, an ancient Roman and medieval Muslim necropolis in Rabat. The site features ruins, gardens, and historic monuments, creating a unique blend of Roman and Islamic architectural elements surrounded by peaceful greenery.",
      },
      {
        id: 6,
        image:
          "https://content.cdntwrk.com/files/aHViPTEyODE5MCZjbWQ9aXRlbWVkaXRvcmltYWdlJmZpbGVuYW1lPWl0ZW1lZGl0b3JpbWFnZV82NDE0YWEwOTgzMGVjLmpwZyZ2ZXJzaW9uPTAwMDAmc2lnPTRlM2M1NzUyYTE2MDE5MDFlZTg5NGVhNDEwZDZhZDc0",
        title: "Modern Bouregreg Marina",
        description:
          "Experience the modernity of Rabat at the Bouregreg Marina. This contemporary waterfront development offers a picturesque setting with yachts, cafes, and cultural spaces. Enjoy a leisurely stroll along the marina and soak in the views of the river and the city.",
      },
      {
        id: 7,
        image:
          "https://en.dollar-maroc.com/upload/stuff/images/dma/musee%20de%20l%20histoire%20et%20des%20civilisations%20rabat%20location%20voiture%20maroc.webp",
        title: "Nat'l Archaeo Museum",
        description:
          "Visit the National Archaeological Museum in Rabat, home to a rich collection of artifacts that showcase Morocco's archaeological heritage. From prehistoric finds to Roman artifacts, the museum provides insights into the diverse history of the region.",
      },
      {
        id: 8,
        image:
          "https://www.orient-occident.org/wp-content/uploads/2017/06/world-refugee-day.jpg",
        title: "Cultural Events and Festivals",
        description:
          "Immerse yourself in Rabat's cultural events and festivals, celebrating art, music, and literature. The city hosts various cultural gatherings, including the Mawazine Festival and the Rabat International Film Festival, creating vibrant and engaging experiences for residents and visitors alike.",
      },
    ],
  },
  {
    id: 5,
    name: "Tangier",
    secondName: "Tangier: Gateway to Africa with a Cosmopolitan Vibe",
    shortDescription: "Gateway to Africa with a cosmopolitan vibe",
    description:
      "Tangier, located at the crossroads of Africa and Europe, has a unique charm. Stroll along the famous Boulevard Pasteur, visit the medina and Kasbah, and enjoy panoramic views from Cape Spartel. Tangier has been a haven for artists and writers throughout history.",
    image:
      "https://e1.pxfuel.com/desktop-wallpaper/396/715/desktop-wallpaper-tangier.jpg",
    image2: "",
    image3: "",
    image4: "",
    essentialFacts: [
      {
        id: 1,
        image:
          "https://marleneonthemove.com/wp-content/uploads/2019/04/Tangier-Kasbah-Tanger2-scaled.jpg",
        title: "Gateway to Africa and Europe",
        description:
          "Tangier, strategically located at the crossroads of Africa and Europe, has long served as a gateway between two continents. The city's unique position has shaped its cosmopolitan character and made it a melting pot of diverse cultures and influences.",
      },
      {
        id: 2,
        image:
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/180293031.jpg?k=fba002c53a91a81615bd428f62ec8a91b7aa18a704021f95c5ebae710cd1e901&o=&hp=1",
        title: "Boulevard Pasteur: Iconic Stroll",
        description:
          "Stroll along the famous Boulevard Pasteur, a bustling avenue in Tangier known for its vibrant atmosphere, street cafes, and historical charm. Enjoy the lively street scenes, shop for local goods, and savor the cosmopolitan vibe that defines this iconic boulevard.",
      },
      {
        id: 3,
        image:
          "https://content.r9cdn.net/rimg/dimg/a3/3d/fb553b4f-city-15337-16567bc0854.jpg?crop=true&width=1020&height=498",
        title: "Tangier's Historic Medina and Kasbah",
        description:
          "Explore Tangier's historic Medina and Kasbah, where narrow winding streets lead to hidden gems and panoramic views of the city and the sea. The Medina's lively markets, traditional crafts, and historic architecture offer a glimpse into Tangier's rich cultural heritage.",
      },
      {
        id: 4,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Cape_Spartel_lighthouse_panorama.jpg/800px-Cape_Spartel_lighthouse_panorama.jpg",
        title: "Cape Spartel Panorama",
        description:
          "Visit Cape Spartel for breathtaking panoramic views where the Atlantic Ocean meets the Mediterranean Sea. The iconic lighthouse and the Caves of Hercules add to the natural beauty of this coastal area, making it a must-visit destination for nature enthusiasts and photographers.",
      },
      {
        id: 5,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Tanger_cor.jpg/640px-Tanger_cor.jpg",
        title: "Artistic and Literary Haven",
        description:
          "Tangier has been a haven for artists and writers throughout history, attracting notable figures like Paul Bowles and William S. Burroughs. The city's bohemian atmosphere, diverse communities, and inspiring landscapes continue to draw creatives from around the world.",
      },
      {
        id: 6,
        image:
          "https://www.urtrips.com/wp-content/uploads/2022/10/american-legation-museum-tanger-7-1024x768.jpg",
        title: "American Legation Museum",
        description:
          "Explore the American Legation Museum, the only historic landmark of the United States located outside the country. Housed in a former diplomatic residence, the museum showcases Tangier's international significance and its role in diplomatic history.",
      },
      {
        id: 7,
        image:
          "https://www.urtrips.com/wp-content/uploads/2017/04/Tangier-Grand-Socco-Square.jpg",
        title: "The Grand Socco Square",
        description:
          "Experience the lively Grand Socco Square, a central gathering place surrounded by shops, cafes, and historic landmarks. The square reflects Tangier's dynamic atmosphere and is a starting point for exploring the city's diverse neighborhoods and cultural attractions.",
      },
      {
        id: 8,
        image:
          "https://lp-cms-production.imgix.net/features/2019/01/restaurant-domahana-tangier-d2a78e3c3dad.jpg?auto=format&q=75&w=1920",
        title: "Tangier's Multicultural Cuisine",
        description:
          "Indulge in Tangier's multicultural cuisine, where flavors from Morocco, Spain, and international influences blend seamlessly. From traditional Moroccan dishes to Mediterranean delights, the city's diverse culinary scene caters to a variety of tastes and preferences.",
      },
    ],
  },
  {
    id: 6,
    name: "Chefchaouen",
    secondName: "Chefchaouen: The Blue City Nestled in the Rif Mountains",
    shortDescription: "The blue city nestled in the Rif Mountains",
    description:
      "Chefchaouen, known for its blue-washed buildings, is a picturesque gem in the Rif Mountains. Lose yourself in the narrow, winding streets, discover local crafts, and hike to the Spanish Mosque for breathtaking views. Chefchaouen is a tranquil and visually stunning escape.",
    image:
      "https://www.visitmorocco.com/sites/default/files/thumbnails/image/chefchaouen.jpg",
    image2: "",
    image3: "",
    image4: "",
    essentialFacts: [
      {
        id: 1,
        image: "https://i.redd.it/oa9fe1pgjfxz.jpg",
        title: "Blue-Washed Beauty",
        description:
          "Chefchaouen, often referred to as the 'Blue Pearl,' is renowned for its unique blue-washed buildings. The distinct azure hues create a visually stunning cityscape against the backdrop of the Rif Mountains, making Chefchaouen a picturesque and tranquil destination.",
      },
      {
        id: 2,
        image:
          "https://us.images.westend61.de/0001358867pw/morocco-chefchaouen-province-chefchaouen-archway-of-empty-cobblestone-alley-between-old-blue-colored-houses-VEGF01868.jpg",
        title: "Medina Exploration",
        description:
          "Wander through Chefchaouen's enchanting medina, where narrow cobblestone streets lead to hidden gems, charming cafes, and artisanal shops. The medina's vibrant blue walls and doorways, adorned with colorful flowers, create a magical atmosphere that invites exploration and discovery.",
      },
      {
        id: 3,
        image:
          "https://i0.wp.com/www.bonjoursunset.com/wp-content/uploads/2020/05/DSCF8562.jpg?resize=1000%2C667&ssl=1",
        title: " Hiking Adventure",
        description:
          "Embark on a hike to the Spanish Mosque for breathtaking panoramic views of Chefchaouen and the surrounding mountains. The journey to this vantage point is rewarded with spectacular sunset vistas, providing a serene and awe-inspiring experience.",
      },
      {
        id: 4,
        image:
          "https://broganabroad.com/wp-content/uploads/2019/05/AdobeStock_102160560-Edited-by-me.jpg.webp",
        title: "Local Crafts",
        description:
          "Discover local crafts and souvenirs in Chefchaouen's markets, where artisans showcase handmade textiles, ceramics, and traditional Moroccan goods. The medina's shops and stalls offer a wide array of blue-themed items, allowing visitors to take home a piece of the city's distinctive charm.",
      },
      {
        id: 5,
        image:
          "https://images.world-of-waterfalls.com/Chefchaouen_126_05212015.jpg",
        title: "Ras El Ma River Walk",
        description:
          "Take a leisurely walk along the Ras El Ma River, a serene watercourse that adds to Chefchaouen's natural beauty. Lush greenery, small waterfalls, and the soothing sound of flowing water create a peaceful environment, inviting visitors to relax and immerse themselves in nature.",
      },
      {
        id: 6,
        image:
          "https://live.staticflickr.com/65535/52745718035_f4207e72a2_b.jpg",
        title: "Avenue Hassan II",
        description:
          "Explore Avenue Hassan II, the main thoroughfare in Chefchaouen, lined with shops, cafes, and restaurants. The avenue is a hub of activity, offering a mix of local flavors and international influences. Enjoy a leisurely stroll and experience the city's laid-back atmosphere.",
      },
      {
        id: 7,
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f1/83/85/caption.jpg?w=1200&h=-1&s=1",
        title: "Kasbah Museum",
        description:
          "Visit the Kasbah Museum to delve into Chefchaouen's history and culture. Housed in a 15th-century fortress, the museum showcases artifacts, exhibits, and insights into the city's past. The rooftop terrace provides panoramic views of the medina and the surrounding landscape.",
      },
      {
        id: 8,
        image:
          "https://www.onmoroccotours.com/wp-content/uploads/2021/11/where-to-eat-in-Chefchaouen.jpg",
        title: "Culinary Delights",
        description:
          "Savor the culinary delights of Chefchaouen, where local eateries serve traditional Moroccan dishes with a unique twist. From aromatic tagines to refreshing mint tea, the city's diverse food scene reflects the rich flavors of the region, making it a treat for food enthusiasts.",
      },
    ],
  },
  {
    id: 7,
    name: "Essaouira",
    secondName: "Essaouira: Coastal Town with a Laid-back Atmosphere",
    shortDescription: "Coastal town with a laid-back atmosphere",
    description:
      "Essaouira, situated along the Atlantic coast, offers a relaxed and artistic ambiance. Wander through the UNESCO-listed medina, stroll along the windswept beach, and experience the vibrant arts scene. Essaouira is a charming destination with a maritime heritage.",
    image:
      "https://images.unsplash.com/photo-1602158051657-1d46106e4a96?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2: "",
    image3: "",
    image4: "",
    essentialFacts: [
      {
        id: 1,
        title: "Coastal Charms",
        image:
          "https://www.ontheluce.com/wp-content/uploads/2014/03/essaouira-morocco.jpg",
        description:
          "Essaouira, a picturesque coastal town, captivates visitors with its laid-back atmosphere and maritime charm. The city's historic medina, scenic beaches, and vibrant arts scene make it a delightful destination along Morocco's Atlantic coast.",
      },
      {
        id: 2,
        title: "Heritage Medina",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Medina_of_Essaouira_walk_along_the_narrow_streets.jpg/1200px-Medina_of_Essaouira_walk_along_the_narrow_streets.jpg",
        description:
          "Wander through Essaouira's UNESCO-listed medina, where narrow streets, white-washed buildings, and blue accents create a visually stunning backdrop. Explore artisan workshops, boutique stores, and local markets, experiencing the city's artistic and cultural richness.",
      },
      {
        id: 3,
        title: "Windswept Beaches",
        image:
          "https://exploreessaouira.com/wp-content/uploads/2022/08/Kite-surfers-Essaouira-beach-1024x732.jpg",
        description:
          "Stroll along Essaouira's windswept beaches, where the Atlantic Ocean meets golden sands. The refreshing sea breeze, crashing waves, and panoramic views make the beaches a perfect retreat for relaxation and seaside enjoyment.",
      },
      {
        id: 4,
        title: "Historic Port",
        image:
          "https://cdn.getyourguide.com/img/tour/5d3798b89a1268cb.jpeg/97.jpg",
        description:
          "Visit Essaouira's historic port and harbor, known for its blue fishing boats and bustling maritime activity. The port's lively atmosphere, seafood restaurants, and panoramic viewpoints offer a glimpse into the city's seafaring heritage.",
      },
      {
        id: 5,
        title: "Gnaoua World Music Festival",
        image:
          "https://e1.hespress.com/wp-content/uploads/2022/05/36580655_2522030061156147_5173184771118858240_n-e1653335402891.jpg",
        description:
          "Experience the Gnaoua World Music Festival, a vibrant celebration of music, arts, and culture held annually in Essaouira. The festival attracts renowned artists and musicians, creating a dynamic atmosphere that resonates throughout the city's streets and venues.",
      },
      {
        id: 6,
        title: "Skala de la Ville Fortress",
        image:
          "https://lp-cms-production.imgix.net/2019-06/f48357bc954d809bac4ec480f09dcff9-skala-du-port.jpg",
        description:
          "Explore Skala de la Ville, a historic fortress and rampart offering panoramic views of Essaouira's medina and coastline. The cannons and battlements of Skala de la Ville provide a glimpse into the city's defensive past, with stunning vistas as a backdrop.",
      },
      {
        id: 7,
        title: "Moulay Hassan Square",
        image:
          "https://ak-d.tripcdn.com/images/1i62o4224t0yws83m1BF1.jpg?proc=source/trip",
        description:
          "Visit Moulay Hassan Square, the heart of Essaouira's medina, surrounded by cafes, shops, and local markets. The square is a lively gathering place, where visitors can soak in the city's energy, enjoy street performances, and savor Moroccan cuisine.",
      },
      {
        id: 8,
        title: "Essaouira's Artistic Spirit",
        image:
          "https://live.staticflickr.com/65535/52717003001_0cf8246ca9_c.jpg",
        description:
          "Immerse yourself in Essaouira's artistic spirit, where galleries, workshops, and street art showcase the city's creative vibe. From traditional crafts to contemporary expressions, Essaouira's art scene reflects the diversity and talent of its local artisans.",
      },
    ],
  },
  {
    id: 8,
    name: "Agadir",
    secondName: "Agadir: Modern Seaside Resort with Sandy Beaches",
    shortDescription: "Modern seaside resort with sandy beaches",
    description:
      "Agadir, a modern resort city along the Atlantic, is renowned for its long sandy beaches and vibrant nightlife. Rebuilt after a devastating earthquake, Agadir offers a perfect blend of relaxation and entertainment, making it a popular destination for sun-seekers.",
    image:
      "https://images.unsplash.com/photo-1630172006681-a0b1d335c9e3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2: "",
    image3: "",
    image4: "",
    essentialFacts: [
      {
        id: 1,
        title: "Sunny Beach",
        image:
          "https://media.istockphoto.com/id/948875038/photo/beach-of-agadir.jpg?s=612x612&w=0&k=20&c=XcHzQal1H9gfN-dkgIvyoriSewJ3GsAwWpPHNSQZLW8=",
        description:
          "Agadir, a modern seaside resort, is renowned for its sun-soaked beaches and pleasant climate. With long stretches of sandy shores, beachfront promenades, and clear blue waters, Agadir beckons sun-seekers and water enthusiasts from around the world.",
      },
      {
        id: 2,
        title: "Vibrant Nightlife",
        image:
          "https://a.cdn-hotels.com/gdcs/production1/d830/e3d11fb0-a086-4fd7-bd98-96f75fa4c6ca.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        description:
          "Experience Agadir's vibrant nightlife, where beachfront bars, clubs, and entertainment venues come alive after sunset. From live music to beach parties, the city offers a diverse range of nocturnal experiences for those seeking excitement and socializing.",
      },
      {
        id: 3,
        title: "Agadir Oufella Ruins",
        image:
          "https://aujourdhui.ma/wp-content/uploads/2019/02/Casbah-d-Agadir-Oufella.jpg",
        description:
          "Explore the historic Agadir Oufella ruins, perched on a hill overlooking the city. The remnants of an ancient kasbah, the site provides panoramic views of Agadir, its coastline, and the surrounding landscapes, offering a glimpse into the city's past.",
      },
      {
        id: 4,
        title: "Souk El Had Market",
        image:
          "https://taxitaghazout.com/wp-content/uploads/2022/02/Souk-el-hed-Agadir-Taxi-Taghazout.jpeg",
        description:
          "Immerse yourself in the vibrant atmosphere of Souk El Had, Agadir's bustling market. With stalls offering a variety of goods, from spices to handicrafts, the market provides a sensory journey through Moroccan flavors, scents, and traditional craftsmanship.",
      },
      {
        id: 5,
        title: "Valley of the Birds",
        image:
          "https://www.locationvoiture-agadir.fr/timg/phpThumb.php?src=../admin/media/img_blog/eb99fff74376fe17f848d23ab6523df4_maxresdefault.jpg&far=C&bg=FFFFFF&f=png&hash=3dd45b048a01d2f4ca32a32ed207a591",
        description:
          "Visit the Valley of the Birds, a serene botanical garden in the heart of Agadir. Home to a diverse collection of flora and fauna, the garden provides a tranquil escape from the urban bustle, inviting visitors to relax and appreciate nature.",
      },
      {
        id: 6,
        title: "Coastal Stroll",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/07/5c/99/81/seafront-promenade.jpg",
        description:
          "Stroll along Agadir's picturesque beach promenade, lined with palm trees, cafes, and shops. The promenade offers stunning views of the Atlantic Ocean and is a popular destination for leisurely walks, seaside dining, and enjoying the city's coastal ambiance.",
      },
      {
        id: 7,
        title: "Marina d'Agadir",
        image:
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/119917809.jpg?k=359b6650c9d185a0112c8d018272a1970a8dfa7c93715176fedce72340e82d9b&o=&hp=1",
        description:
          "Discover the Marina d'Agadir, a modern marina surrounded by upscale shops, restaurants, and yachts. The marina's stylish ambiance, waterfront views, and leisure options make it a popular destination for both locals and visitors seeking a touch of luxury.",
      },
      {
        id: 8,
        title: "Amayour's Tamazirt",
        image:
          "https://www.blondieinmorocco.com/wp-content/uploads/2022/04/berbe-Granaries-morocco-Agadir-Imchguiguiln5.jpg",
        description:
          "Indulge in wellness and relaxation at Tamazirt by Amayour, a spa and hammam in Agadir. Offering traditional Moroccan spa experiences, the venue provides a rejuvenating retreat where visitors can unwind and pamper themselves in a serene setting.",
      },
    ],
  },
  {
    id: 9,
    name: "Meknes",
    secondName: "Meknes: Imperial City with Grand Architecture",
    shortDescription: "Imperial city with grand architecture",
    description:
      "Meknes, one of Morocco's imperial cities, showcases grand architecture and historical significance. Explore the vast Heri es-Souani granaries, visit the mausoleum of Moulay Ismail, and experience the vibrant atmosphere of the El Hedim Square. Meknes is a testament to Morocco's rich heritage.",
    image:
      "https://www.visitmorocco.com/sites/default/files/thumbnails/image/meknes.jpg",
    image2: "",
    image3: "",
    image4: "",
    essentialFacts: [
      {
        id: 1,
        image:
          "https://visit-meknes.com/fr/wp-content/uploads/2022/06/285681417_7613845358658090_689819082169521664_n.jpeg",
        title: "Imperial Grandeur",
        description:
          "Meknes, one of Morocco's imperial cities, exudes grandeur and historical significance. Home to architectural marvels, impressive city gates, and expansive squares, Meknes invites visitors to explore its rich heritage and witness the legacy of the past.",
      },
      {
        id: 2,
        image: "https://www.photohound.co/images/1009247m.jpg",
        title: "Granary Architecture",
        description:
          "Explore the vast Heri es-Souani granaries, a historic complex in Meknes. Built by Moulay Ismail to store grains for the royal horses, these immense structures showcase the engineering prowess of the time and offer a glimpse into Morocco's agricultural history.",
      },
      {
        id: 3,
        image:
          "https://thumbs.dreamstime.com/b/moulay-ismail-mausoleum-meknes-morocco-23380058.jpg",
        title: "Sacred Resting",
        description:
          "Visit the Mausoleum of Moulay Ismail, the final resting place of the powerful sultan who shaped Meknes' history. The mausoleum's stunning architecture, intricate decorations, and serene ambiance make it a place of reverence and cultural significance.",
      },
      {
        id: 4,
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/11/6f/cd/mausoleum-of-mouley-ismail.jpg?w=1200&h=1200&s=1",
        title: "El Hedim Square",
        description:
          "Experience the vibrant atmosphere of El Hedim Square, a central hub in Meknes surrounded by shops, cafes, and historic landmarks. The square is a lively gathering place, offering a taste of local life and a starting point for exploring the city's wonders.",
      },
      {
        id: 5,
        image: "https://live.staticflickr.com/6188/6094995864_c9a93f5edd_b.jpg",
        title: "Bab Mansour Gate",
        description:
          "Admire the Bab Mansour Gate, one of the grandest gates in Morocco, located in Meknes. Named after the architect Mansour Laalej, this monumental gate captivates with its intricate tilework, imposing structure, and historical significance.",
      },
      {
        id: 6,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZpcyI18FktbES_TPP9XzbkEoZe0mov5LBWQ&usqp=CAU",
        title: "Lahboul Gardens",
        description:
          "Relax in the Lahboul Gardens, a green oasis in Meknes offering a peaceful escape. With manicured lawns, shaded walkways, and charming fountains, the gardens provide a serene environment for leisurely strolls and moments of tranquility.",
      },
      {
        id: 7,
        image:
          "https://arganiatravel.com/blog/wp-content/uploads/2019/06/AdobeStock_8414741-1024x1024.jpeg",
        title: "Dar Jamai Museum",
        description:
          "Discover the Dar Jamai Museum, housed in a beautifully restored palace in Meknes. The museum showcases Moroccan arts, crafts, and artifacts, providing insights into the country's cultural heritage and artistic traditions.",
      },
      {
        id: 8,
        image:
          "https://www.palaisamani.com/wp-content/uploads/2020/08/Volubilis.png",
        title: "Meknes Volubilis",
        description:
          "Discover UNESCO-listed Volubilis near Meknes, an ancient Roman city. Delve into its history through well-preserved ruins, showcasing the grandeur of Roman civilization in Morocco. Explore intricate mosaics, triumphal arches, and remnants of Roman architecture, providing a captivating glimpse into the past.",
      },
    ],
  },
  {
    id: 10,
    name: "Ouarzazate",
    secondName: "Ouarzazate: Gateway to the Sahara with Cinematic Landscapes",
    shortDescription: "Gateway to the Sahara with cinematic landscapes",
    description:
      "Ouarzazate, often referred to as the 'Gateway to the Sahara,' is a city surrounded by stunning desert landscapes. Visit the famous Ait Ben Haddou Kasbah, explore the Atlas Film Studios, and embark on a desert adventure. Ouarzazate is a captivating destination for film enthusiasts and desert explorers.",
    image:
      "https://wanderingwagars.com/wp-content/uploads/2022/12/Things-to-do-in-Ouarzazate-Morocco-Feature.jpg",
    image2: "",
    image3: "",
    image4: "",
    essentialFacts: [
      {
        id: 1,
        image:
          "https://www.lopinion.ma/photo/art/grande/62909660-45475074.jpg?v=1646815379",
        title: "Film Industry ",
        description:
          "Ouarzazate is a hub for the film and television industry, attracting filmmakers from around the world. Explore the city's connection to cinema, from film studios to iconic locations that have graced the silver screen in various international productions.",
      },
      {
        id: 2,
        image:
          "https://visitdraatafilalet.com/wp-content/uploads/2021/11/Ouarzazate-Web-90-1024x683-1.jpg",
        title: "Oasis Fint",
        description:
          "Experience the natural beauty of Oasis Fint, an oasis near Ouarzazate surrounded by stunning landscapes. The lush greenery, traditional Berber villages, and serene atmosphere provide a refreshing contrast to the arid desert surroundings.",
      },
      {
        id: 3,
        image:
          "https://bigbanana.co.za/wp-content/uploads/2016/01/OUARZAZATE-KASBAH-TIFOULTOUTE-0031-Location-Scouting-and-Research.jpg",
        title: "Tifoultoute Kasbah",
        description:
          "Visit Tifoultoute Kasbah, an ancient fortress overlooking the Ounila River. The kasbah's strategic location offers panoramic views of the surrounding valleys and mountains, making it a picturesque spot with historical significance.",
      },
      {
        id: 4,
        image:
          "https://cdn.getyourguide.com/img/tour/5bcbc9c7097a3.jpeg/145.jpg",
        title: "Desert Adventures",
        description:
          "Embark on Sahara Desert adventures from Ouarzazate, whether it's camel trekking, exploring desert dunes, or camping under the starlit sky. Ouarzazate's proximity to the Sahara allows visitors to experience the magic and tranquility of the desert landscape.",
      },
      {
        id: 5,
        image:
          "https://www.desertmajesty.com/wp-content/uploads/2021/05/tours-from-ouarzazate-to-the-desert.jpg",
        title: "Gateway to the Sahara",
        description:
          "Ouarzazate, often referred to as the 'Gateway to the Sahara,' is a city surrounded by cinematic landscapes and mesmerizing desert vistas. Its strategic location makes it a popular starting point for desert adventures and exploration of the nearby Sahara Desert.",
      },
      {
        id: 6,
        image:
          "https://moroccanjourneys.com/wp-content/uploads/ksar-of-ait-ben-haddou.jpg",
        title: "Ait Ben Haddou Kasbah",
        description:
          "Visit the famous Ait Ben Haddou Kasbah, a UNESCO World Heritage site near Ouarzazate. This ancient fortress, with its earthen architecture and unique charm, has served as a backdrop for numerous films and stands as a testament to Morocco's rich cultural heritage.",
      },
      {
        id: 7,
        image:
          "https://chrisnsue.files.wordpress.com/2020/08/atlas-studio-18.jpg?w=509",
        title: "Atlas Film Studios",
        description:
          "Explore the Atlas Film Studios, one of the largest film studios in the world, located in Ouarzazate. Known as the 'Hollywood of the Desert,' the studios have hosted the production of many blockbuster films and provide a fascinating glimpse into the world of cinema.",
      },
      {
        id: 8,
        image:
          "https://travel-exploration.com/images/Kasbah-Taourirt-Ouarzazate-Travel-Exploration-Morocco.png",
        title: "Kasbah Taourirt",
        description:
          "Wander through the historic Kasbah Taourirt in Ouarzazate, a well-preserved fortress that offers a glimpse into the region's medieval history. The kasbah's maze-like corridors, traditional architecture, and panoramic views make it a captivating destination.",
      },
    ],
  },
  {
    id: 11,
    name: "Safi",
    secondName: "Safi: Coastal City Known for Its Pottery and Sea Views",
    shortDescription: "Coastal city known for its pottery and sea views",
    description:
      "Safi, a coastal city on the Atlantic, is famous for its pottery and panoramic sea views. Explore the historic medina, visit the Pottery Museum, and enjoy fresh seafood by the sea. Safi's artistic heritage and maritime charm make it a unique destination.",
    image:
      "https://www.visitmorocco.com/sites/default/files/thumbnails/image/safi.jpg",
    image2: "",
    image3: "",
    image4: "",
    essentialFacts: [
      {
        id: 1,
        title: "Safi's Fakhar",
        image:
          "data:image/jpeg;base64,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",
        description:
          "Safi, a coastal city on the Atlantic, is renowned for its vibrant pottery scene and artistic heritage. Explore the historic medina, where traditional pottery workshops showcase the craftsmanship passed down through generations, creating unique and colorful ceramics.",
      },
      {
        id: 2,
        title: "Panoramic Sea Views",
        image:
          "https://dardif.com/wp-content/uploads/2022/02/Visit-Safi-Morocco.jpg",
        description:
          "Enjoy panoramic sea views from Safi's coastal areas. The city's location along the Atlantic Ocean provides stunning vistas of the ocean, creating a picturesque setting for relaxation and exploration of the seaside landscape.",
      },
      {
        id: 3,
        title: "Kasr el-Bahr",
        image:
          "https://www.hlimg.com/images/things2do/738X538/ttd_201901211303291548056009182645t.jpg",
        description:
          "Discover the historical significance of Kasr al Bahr, a landmark that reflects Safi's rich cultural and architectural heritage. This historical site provides insights into Safi's medieval past and showcases the city's enduring cultural legacy.",
      },
      {
        id: 4,
        title: "Historic Medina",
        image:
          "https://us.123rf.com/450wm/elec/elec1703/elec170300585/75013351-cityscape-of-safi-a-city-in-western-morocco-on-the-atlantic-ocean.jpg?ver=6",
        description:
          "Explore Safi's historic medina, where narrow winding streets lead to charming squares and historical landmarks. The medina reflects Safi's cultural and architectural heritage, with glimpses of its medieval past and vibrant present.",
      },
      {
        id: 5,
        title: "Fresh Seafood",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/32/44/0f/pastilla-poissons-fruits.jpg?w=1200&h=-1&s=1",
        description:
          "Indulge in fresh seafood delights in Safi, known for its culinary offerings from the sea. The city's coastal location ensures a variety of delicious seafood dishes, providing a delightful experience for food enthusiasts.",
      },
      {
        id: 6,
        title: "Safi Beach",
        image:
          "https://exploreessaouira.com/wp-content/uploads/2022/11/Safi-beach-1024x731.jpg",
        description:
          "Relax on the beautiful Safi Beach, where golden sands meet the sparkling sea. Whether you're looking to sunbathe, take a dip, or simply enjoy the picturesque surroundings, Safi Beach offers a serene escape for beach lovers.",
      },
      {
        id: 7,
        title: "Maritime Charm",
        image:
          "https://www.itpm-safi.ac.ma/wp-content/uploads/2016/08/20160727_1510552.jpg",
        description:
          "Experience Safi's maritime charm, characterized by its fishing industry and nautical traditions. The city's connection to the sea is evident in its daily life, festivals, and events that celebrate Safi's coastal identity.",
      },
      {
        id: 8,
        title: "Safi Pottery Museum",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/40/Ceramics%2C_Asian_collection_-_Worcester_Art_Museum_-_IMG_7547.JPG",
        description:
          "Visit the Safi Pottery Museum to delve deeper into the city's rich pottery tradition. The museum showcases a diverse collection of pottery pieces, from traditional to contemporary, offering insights into Safi's artistic evolution over the years.",
      },
    ],
  },
];
export default cities;
