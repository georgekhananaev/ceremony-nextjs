// Wedding Configuration Settings
// Edit this file to customize all wedding details

const settings = {
  // Theme Configuration
  theme: {
    colors: {
      primary: '#d4af37', // Gold
      secondary: '#ff6b6b', // Rose
      accent: '#4a90e2', // Blue
      dark: '#1a1a1a',
      darker: '#0a0a0a',
      light: '#f5f5f5',
      white: '#ffffff',
      overlay: 'rgba(26, 26, 26, 0.95)',
      text: {
        primary: '#ffffff',
        secondary: '#d4af37',
        dark: '#1a1a1a'
      }
    },
    animations: {
      duration: {
        fast: 0.3,
        medium: 0.5,
        slow: 1.0,
        verySlow: 1.5
      },
      easing: 'easeInOut'
    },
    spacing: {
      section: 'py-20',
      container: 'px-4 md:px-8'
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Inter',
      script: 'Dancing Script',
      // Font weights
      weights: {
        thin: 100,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      }
    }
  },

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
      url: "/our-moments/no-image.jpg",
      alt: "Romantic couple photo",
      caption: "Our engagement shoot"
    },
    {
      url: "/our-moments/no-image.jpg",
      alt: "Beautiful wedding rings",
      caption: "The rings"
    },
    {
      url: "/our-moments/no-image.jpg",
      alt: "Our Wedding Rings",
      caption: "Our Wedding Rings"
    },
    {
      url: "/our-moments/no-image.jpg",
      alt: "Wedding bouquet",
      caption: "Floral details"
    },
    {
      url: "/our-moments/no-image.jpg",
      alt: "Couple walking together",
      caption: "Adventure awaits"
    },
    {
      url: "/our-moments/no-image.jpg",
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