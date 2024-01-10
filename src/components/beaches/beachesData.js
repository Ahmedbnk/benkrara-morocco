const beachesData = [
  {
    id: 1,
    name: "Oualidia Beach",
    shortDescription: "Notable for its lagoon and oyster farming activities",
    description:
      "Oualidia Beach is known for its lagoon and oyster farming, offering a serene environment and delicious seafood, making it a hidden gem on Morocco's coastline.",
    image:
      "https://exoticlinestravels.com/wp-content/uploads/2019/02/iStock_000071862239_Large.jpg",
    facts: [
      {
        id: 1,
        title: "Unique Lagoon",
        description:
          "Oualidia Beach is home to a unique lagoon that changes its colors with the tides, providing a mesmerizing and ever-changing landscape.",
        image:
          "https://vibestravels.com/media/cache/media_large/uploads/activities/4600537c0d92f46f43eb32296b9e4ce0.jpg",
      },
      {
        id: 2,
        title: "Avian Paradise",
        description:
          "The lagoon is a haven for birdwatchers, attracting various species of migratory birds, making it an ideal destination for bird enthusiasts.",
        image:
          "https://www.moroccopedia.com/wp-content/uploads/2021/08/oualidia_sultana-1024x683.jpg",
      },
      {
        id: 3,
        title: "Luxurious Retreat",
        description:
          "Oualidia is not only a beach but also a luxury destination, offering upscale resorts and spas for those seeking a tranquil and indulgent retreat.",
        image:
          "https://www.theluxevoyager.com/wp-content/uploads/2019/10/La-Sultana-Hotel-Qualidia-Pool.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Plage Quemado",
    shortDescription:
      "Clear turquoise waters and scenic cliffs, perfect for relaxation",
    description:
      "Plage Quemado in Al Hoceima is a picturesque beach known for clear turquoise waters and scenic cliffs, offering an ideal spot to unwind and enjoy the Moroccan coastline.",
    image:
      "https://content.r9cdn.net/rimg/dimg/26/88/8b5694e5-city-40510-17119e40ce9.jpg?crop=true&width=1366&height=768&xhint=2101&yhint=937",
    facts: [
      {
        id: 1,
        title: "Marine Life Exploration",
        description:
          "The clear turquoise waters of Plage Quemado are perfect for snorkeling, allowing visitors to explore vibrant marine life beneath the surface.",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/20/11/83/notre-client-a-immortalise.jpg?w=500&h=-1&s=1",
      },
      {
        id: 2,
        title: "Rocky Coves",
        description:
          "Apart from its sandy stretches, the beach is adorned with rocky coves, adding a touch of rugged beauty to the coastal scenery.",
        image:
          "https://dardif.com/wp-content/uploads/2021/10/The-beach-of-Tikkit-in-Al-Hoceima.jpg",
      },
      {
        id: 3,
        title: "Sunset Spectacle",
        description:
          "Plage Quemado is renowned for its breathtaking sunsets, creating a romantic atmosphere for couples and a peaceful ambiance for all.",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/55/ff/bf/hotel-mercure-quemado.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Agadir Beach",
    shortDescription: "Well-known beach with a long stretch of golden sand",
    description:
      "Agadir Beach, one of Morocco's favorites, features a long stretch of golden sand and excellent surfing conditions, providing a vibrant beachfront experience.",
    image: "https://www.worldbeachguide.com/photos/agadir-beach-view.jpg",
    facts: [
      {
        id: 1,
        title: "Surfing Hotspot",
        description:
          "Agadir Beach is not only about sunbathing but is also a popular destination for surfers, attracting wave enthusiasts from around the world.",
        image:
          "https://surfparadisemorocco.net/wp-content/uploads/2022/05/waves-in-Agadir-1024x768.jpg",
      },
      {
        id: 2,
        title: "Camel Treks",
        description:
          "Explore the beauty of Agadir Beach with camel treks along the shore. Camels offer a unique way to experience the stunning scenery, providing a memorable adventure for visitors.",
        image:
          "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/d2/73.jpg",
      },
      {
        id: 3,
        title: "Historical Significance",
        description:
          "Agadir has a rich history, and the beach offers stunning views of the Kasbah, a historic fortress that stands as a testament to the city's past.",
        image:
          "https://i.pinimg.com/736x/f2/60/a2/f260a2197a9d74d00eefb932ee0b63a2.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Legzira Beach",
    shortDescription:
      "Famous for natural stone arches sculpted by the Atlantic Ocean.",
    description:
      "Legzira Beach, in Sidi Ifni, boasts stunning natural stone arches sculpted by the Atlantic Ocean, making it a haven for photographers and nature lovers.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/87/41/cd/legzira-beach.jpg?w=1200&h=-1&s=1",
    facts: [
      {
        id: 1,
        title: "Geological Marvels",
        description:
          "The natural stone arches at Legzira Beach are geological wonders, and their shapes and sizes have been carved over centuries by the powerful Atlantic waves.",
        image:
          "https://www.contemporarynomad.com/wp-content/uploads/2016/07/legzira-beach-5-960x640.jpg",
      },
      {
        id: 2,
        title: "Secluded Beauty",
        description:
          "Despite its fame, Legzira maintains a certain degree of seclusion, making it a serene spot for those seeking a quiet escape.",
        image:
          "https://www.moroccopedia.com/wp-content/uploads/2017/01/sidi_ifni_k-1024x470.jpg",
      },
      {
        id: 3,
        title: "Sunset Photography",
        description:
          "Sunset at Legzira is a photographer's delight, with the arches casting long shadows and creating a dramatic backdrop against the evening sky.",
        image:
          "https://d37tspgf48im77.cloudfront.net/CACHE/images/uploads/08aec6c7290ca511025ca7defd724b913ea61ba3bf639008a694f6d57c1c302b/shutterstock_1428692039/4b32581f1a3fd7410508148fc5861a59.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Essaouira Beach",
    shortDescription:
      "Windy beach for water sports in a UNESCO-listed historic city.",
    description:
      "Essaouira Beach is popular for windsurfing and kitesurfing, complemented by a historic port city with UNESCO World Heritage status, creating a dynamic destination.",
    image: "https://www.worldbeachguide.com/photos/essaouira-beach-view.jpg",
    facts: [
      {
        id: 1,
        title: "Windsurfing Hub",
        description:
          "Essaouira Beach is a windsurfing and kitesurfing hub, attracting enthusiasts who revel in the strong and consistent winds along the coast.",
        image:
          "https://www.sportif.travel/images/uploads/centres/Essaouira/WS/2_Morocco_Essaouira_Windsurf_Kitesurf_Holiday_Sailing_Area_800x533.jpg",
      },
      {
        id: 2,
        title: "Artistic Vibes",
        description:
          "The beach and city are known for their artistic ambiance, with numerous galleries, street art, and music festivals contributing to a lively cultural scene.",
        image:
          "https://www.manvsglobe.com/wp-content/uploads/2022/09/horse-riding-essaouira.jpg",
      },
      {
        id: 3,
        title: "Historic Port City",
        description:
          "Beyond the beach, Essaouira is a UNESCO-listed historic port city with well-preserved architecture, creating a charming blend of history and recreation.",
        image:
          "https://cdn.getyourguide.com/img/tour/b1d4bbc782909395.jpeg/97.jpg",
      },
    ],
  },
];

export default beachesData;
