// Wedding Configuration Settings
// Edit this file to customize all wedding details

const settings = {
  // Couple Information
  couple: {
    bride: {
      name: "Patinya",
      fullName: "Patinya Surname",
      email: "patinya@wedding.com",
      phone: "+66 123 456 789",
      instagram: "@patinya",
      parents: "Mr. & Mrs. Surname"
    },
    groom: {
      name: "Dar",
      fullName: "Dar Surname",
      email: "dar@wedding.com",
      phone: "+66 987 654 321",
      instagram: "@dar",
      parents: "Mr. & Mrs. Surname"
    },
    hashtag: "#PatinyaAndDar2026",
    email: "hello@patinyaanddar.com"
  },

  // Wedding Date & Time
  wedding: {
    date: "2026-03-07", // Format: YYYY-MM-DD
    displayDate: "March 07, 2026",
    shortDate: "03.07.26",
    day: "Saturday",
    ceremony: {
      time: "17:30", // 24-hour format
      displayTime: "5:30 PM",
      duration: "1 hour"
    },
    cocktailHour: {
      time: "18:30",
      displayTime: "6:30 PM"
    },
    reception: {
      time: "19:00",
      displayTime: "7:00 PM",
      endTime: "00:00",
      displayEndTime: "Midnight"
    }
  },

  // Venue Information
  venue: {
    name: "The Botanical House Bangkok",
    ceremonyLocation: "Garden Chapel",
    receptionLocation: "Grand Ballroom",
    cocktailLocation: "Garden Terrace",
    address: {
      full: "The Botanical House Bangkok, Rama IX Rd, Suanluang, Prawet, Bangkok 10250, Thailand",
      street: "Rama IX Rd",
      district: "Suanluang, Prawet",
      city: "Bangkok",
      postalCode: "10250",
      country: "Thailand"
    },
    coordinates: {
      lat: 13.7422323,
      lng: 100.5754059
    },
    googleMapsUrl: "https://maps.google.com/?q=13.7422323,100.5754059",
    shareUrl: "https://share.google/fZbzYMuySwltxPJZJ",
    parking: "Valet Parking Available",
    accommodation: [
      {
        name: "The Botanical Hotel",
        distance: "On-site",
        bookingCode: "PATDAR2026"
      },
      {
        name: "Bangkok Marriott",
        distance: "5 minutes",
        bookingCode: "WEDDING2026"
      }
    ]
  },

  // Event Details
  events: {
    ceremony: {
      title: "The Ceremony",
      description: "Join us as we exchange vows in the beautiful Garden Chapel",
      dressCode: "Modern Formal",
      colors: ["Black", "White", "Gold"],
      notes: "Outdoor ceremony - sun hats welcome"
    },
    reception: {
      title: "The Reception",
      description: "Dinner, dancing, and celebration under the stars",
      dressCode: "Cocktail Attire",
      features: ["Open Bar", "Live Band", "DJ", "Photo Booth"],
      menu: "Thai & International Cuisine"
    }
  },

  // Love Story Timeline
  loveStory: [
    {
      date: "May 2021",
      title: "First Meeting",
      description: "Coffee shop magic in Bangkok",
      icon: "Heart"
    },
    {
      date: "Dec 2021",
      title: "First Adventure",
      description: "Exploring Chiang Mai together",
      icon: "MapPin"
    },
    {
      date: "Feb 2024",
      title: "The Proposal",
      description: "Under the stars at Koh Samui",
      icon: "Sparkles"
    },
    {
      date: "March 2026",
      title: "Our Wedding",
      description: "Beginning our forever journey",
      icon: "Calendar"
    }
  ],

  // Gallery Images
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80",
      alt: "Romantic couple photo",
      caption: "Our engagement shoot"
    },
    {
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&q=80",
      alt: "Beautiful wedding rings",
      caption: "The rings"
    },
    {
      url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500&q=80",
      alt: "Engagement photo",
      caption: "Engaged!"
    },
    {
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&q=80",
      alt: "Wedding bouquet",
      caption: "Floral details"
    },
    {
      url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=500&q=80",
      alt: "Couple walking together",
      caption: "Adventure awaits"
    },
    {
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=500&q=80",
      alt: "Wedding celebration",
      caption: "Celebration time"
    }
  ],

  // Venue Gallery Images
  venueGallery: {
    heroImage: "/botanical-house-bkk/wide_bh.png",
    images: [
      {
        url: "/botanical-house-bkk/5.jpg",
        alt: "The Botanical House Bangkok - Garden View",
        caption: "Beautiful garden entrance"
      },
      {
        url: "/botanical-house-bkk/3.jpg",
        alt: "The Botanical House Bangkok - Ceremony Space",
        caption: "Garden chapel area"
      },
      {
        url: "/botanical-house-bkk/4.jpg",
        alt: "The Botanical House Bangkok - Reception Setup",
        caption: "Evening reception setting"
      }
    ]
  },

  // Social Media
  social: {
    instagram: {
      bride: "@patinya",
      groom: "@dar",
      wedding: "@patinyaanddar2026",
      hashtag: "#PatinyaAndDar2026"
    },
    facebook: {
      eventPage: "https://facebook.com/events/patinyaanddar2026"
    }
  },

  // RSVP Settings
  rsvp: {
    deadline: "2026-02-01",
    displayDeadline: "February 1st, 2026",
    maxGuests: 5,
    allowPlusOne: true,
    collectDietaryInfo: true,
    collectSongRequests: true,
    emailNotification: "rsvp@patinyaanddar.com"
  },

  // Theme Colors (for consistency)
  theme: {
    colors: {
      primary: "#1a1a1a",
      accent: "#ff6b6b",
      gold: "#d4af37",
      cream: "#faf8f3",
      sage: "#87a878",
      blush: "#ffc4c4"
    },
    fonts: {
      heading: "Playfair Display",
      body: "Inter"
    }
  },

  // Registry Information
  registry: {
    enabled: true,
    message: "Your presence is our present, but if you wish to contribute...",
    links: [
      {
        name: "Honeymoon Fund",
        url: "https://registry.com/honeymoon",
        icon: "Plane"
      },
      {
        name: "Home Fund",
        url: "https://registry.com/home",
        icon: "Home"
      }
    ]
  },

  // Contact Information
  contact: {
    weddingPlanner: {
      name: "Bangkok Wedding Planners",
      phone: "+66 555 123 456",
      email: "planner@bangkokweddings.com"
    },
    photographer: {
      name: "Moments Photography",
      instagram: "@momentsphotobkk"
    }
  },

  // COVID/Health Guidelines (if needed)
  guidelines: {
    enabled: false,
    message: "We're following all local health guidelines for your safety.",
    requirements: []
  },

  // Metadata for SEO
  metadata: {
    title: "Patinya & Dar | March 07, 2026",
    description: "Join us for our wedding celebration at The Botanical House Bangkok",
    keywords: "wedding, bangkok, patinya, dar, 2026, botanical house",
    ogImage: "/og-image.jpg"
  }
};

export default settings;