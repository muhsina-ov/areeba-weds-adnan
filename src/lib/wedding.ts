export const wedding = {
  bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  bismillahLatin: "In the name of Allah, the Most Gracious, the Most Merciful",
  ayah: "And of His signs is that He created for you mates from among yourselves, that you may find tranquillity in them; and He placed between you affection and mercy.",
  ayahRef: "Surah Ar-Rum 30:21",
  bride: {
    name: "Areeba",
    fullName: "Ms. Areeba Siddiqui",
    line: "Daughter of Mr. Imran Uddin Siddiqui & Mrs. Aisha Siddiqui",
    blurb: "Radiant with grace, warmth, and joyful laughter, embarking on life's sweetest adventure.",
    photo: "/wedding/areeba.jpg",
  },
  groom: {
    name: "Adnan",
    fullName: "Mr. Adnan Moyeez Siddiqui",
    line: "Son of Dr. Abdul Moyeez Siddiqui & Dr. Farhat Siddiqui",
    blurb: "Kind-hearted, steadfast, and ready to walk hand-in-hand towards a blessed forever.",
    photo: "/wedding/adnan.jpg",
  },
  heroArt: "/wedding/hero.jpg",
  introCover: "/wedding/cover.png",
  introVideo: "/wedding/intro-video.mp4",
  // Local wedding time (IST): Barrat begins at 7:30 PM, Rukhsati at 12:00 MN
  dateISO: "2026-11-28T19:30:00+05:30",
  endISO: "2026-11-29T00:00:00+05:30",
  dateLabel: "Saturday, 28 November 2026",
  timeLabel: "7:30 PM onwards",
  venue: {
    name: "Bharat Marriage Lawn",
    city: "Lucknow",
    address: "Mubarakpur, Mutkkipur, Lucknow, Uttar Pradesh 226013",
    mapsUrl: "https://maps.app.goo.gl/kQQPPWAGRmNkrhgg9?g_st=aw",
    shareUrl: "https://share.google/U3Qekmfegol1z06",
    preview: "/wedding/map.jpg",
  },
  itinerary: [
    {
      time: "7:30 PM",
      title: "Barrat",
      description: "Grand arrival of the groom and the wedding procession",
    },
    {
      time: "8:30 PM",
      title: "Nikah",
      description: "The auspicious and sacred marriage solemnisation",
    },
    {
      time: "9:00 PM",
      title: "Dinner",
      description: "A lavish feast and celebratory dinner with family & friends",
    },
    {
      time: "12:00 MN",
      title: "Rukhsati",
      description: "Heartfelt farewell with prayers and warmest blessings",
    },
  ],
  meta: {
    siteUrl: "https://areeba-weds-adnan.vercel.app",
    title: "Areeba & Adnan — Wedding Invitation | 28 Nov 2026",
    description:
      "With love and the blessings of Allah, we invite you to celebrate the wedding of Ms. Areeba Siddiqui & Mr. Adnan Moyeez Siddiqui on Saturday, 28 November 2026 at Bharat Marriage Lawn, Lucknow.",
    ogTitle: "Areeba & Adnan — Wedding Invitation",
    ogDescription:
      "With love and the blessings of Allah, we invite you to celebrate the wedding of Ms. Areeba Siddiqui & Mr. Adnan Moyeez Siddiqui on Saturday, 28 November 2026 at Bharat Marriage Lawn, Lucknow.",
    ogImage: "/wedding/areeba-adnan-dance.jpg",
    ogImageAlt: "Areeba & Adnan Wedding Invitation",
    ogImageType: "image/jpeg",
    ogSiteName: "InviteStory",
  },
  bgMusic: {
    src: "/wedding/bg-music.m4a",
    srcWebm: "/wedding/bg-music.webm",
  },
  gallery: [
    "/wedding/areeba-adnan-dance.jpg",
    "/wedding/areeba.jpg",
    "/wedding/adnan.jpg",
    "/wedding/areeba-adnan-candid.jpg",
    "/wedding/areeba-adnan-outdoor.jpg",
    "/wedding/areeba-adnan-cafe.jpg",
  ],
  closing:
    "Your duas and presence are the blessing we wish for. Come, share this joy with us, and help us begin forever, insha'Allah.",
} as const;
