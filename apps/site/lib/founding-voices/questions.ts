export interface ChoiceOption {
  id: string;
  title: string;

  icon?: string;
  description?: string;
}

export interface ChoiceQuestion {
  id: string;

  sectionTitle: string;
  sectionDescription: string;

  reviewTitle?: string;
  reviewIcon?: string;

  title: string;
  description: string;

  type: "choice";

  multiple?: boolean;

  options: ChoiceOption[];
}

export const questions: ChoiceQuestion[] = [
  {
    id: "businessRole",

    sectionTitle: "Let's get to know you",

    sectionDescription:
      "Your experience will help shape how DUWEM serves African businesses.",

    reviewTitle: "Business Role",

    reviewIcon: "🏪",

    title: "Tell us where you're starting from.",

    description:
      "Choose the option that best describes your business today.",

    type: "choice",

    options: [
      {
        id: "owner",
        icon: "🏪",
        title: "I own a business",
        description:
          "I already sell products or services.",
      },
      {
        id: "manager",
        icon: "🏢",
        title: "I manage a business",
        description:
          "I help operate an existing business.",
      },
      {
        id: "starter",
        icon: "🌱",
        title: "I'm planning to start one",
        description:
          "I'm preparing to launch my business.",
      },
    ],
  },

  {
    id: "customerDiscovery",

    sectionTitle: "Finding Customers",

    sectionDescription:
      "Every business grows because someone discovers it.",

    reviewTitle: "Customer Discovery",

    reviewIcon: "📣",

    title:
      "How do customers usually discover your business?",

    description:
      "Select all that apply.",

    type: "choice",

    multiple: true,

    options: [
      {
        id: "walkin",
        title: "Walk-in customers",
      },
      {
        id: "whatsapp",
        title: "WhatsApp",
      },
      {
        id: "facebook",
        title: "Facebook",
      },
      {
        id: "instagram",
        title: "Instagram",
      },
      {
        id: "marketplace",
        title:
          "Online marketplace (Jumia, etc.)",
      },
      {
        id: "word-of-mouth",
        title: "Word of mouth",
      },
    ],
  },
  {
    id: "growthChallenges",

    sectionTitle: "Growing Your Business",

    sectionDescription:
      "Help us understand the biggest challenges you face today.",

    reviewTitle: "Growth Challenges",

    reviewIcon: "⚠",

    title:
      "What are the biggest obstacles to growing your online business today?",

    description:
      "Select all that apply.",

    type: "choice",

    multiple: true,

    options: [
      {
        id: "customers",
        title: "Not enough customers",
      },
      {
        id: "ads",
        title: "High cost of advertisement",
      },
      {
        id: "trust",
        title: "Building customer trust",
      },
      {
        id: "inventory",
        title: "Managing inventory",
      },
      {
        id: "payments",
        title: "Receiving payments",
      },
      {
        id: "delivery",
        title: "Delivery & logistics",
      },
      {
        id: "retention",
        title: "Keeping customers coming back",
      },
      {
        id: "not-online",
        title: "I don't sell online yet",
      },
    ],
  },
  {
    id: "platformValue",

    sectionTitle: "The Future of Commerce",

    sectionDescription:
      "We're exploring a new way for African businesses to sell, grow and build lasting customer relationships.",

    reviewTitle: "Your View of DUWEM",

    reviewIcon: "💜",

    title:
      "How valuable would a platform like this be for your business?",

    description:
      "Product sales, branded digital storefronts, Smart Inventory, customer communities, referrals, reviews, reputation, rewards and business analytics in one ecosystem.",

    type: "choice",

    options: [
      {
        id: "extremely",
        title: "Extremely valuable",
        description: "I'd use something like this every day.",
      },
      {
        id: "valuable",
        title: "Somewhat valuable",
        description: "I'd definitely like to try it.",
      },
      {
        id: "neutral",
        title: "Neutral",
        description: "I'd need to learn more.",
      },
      {
        id: "unlikely",
        title: "Probably wouldn't use it",
        description: "I don't think it solves my needs.",
      },
    ],
  },
  {
    id: "dailyFeatures",

    sectionTitle: "Your Ideal Commerce Platform",

    sectionDescription:
      "Help us understand what would make DUWEM part of your daily business.",

    reviewTitle: "Daily Value",

    reviewIcon: "🚀",

    title:
      "Which features would make DUWEM worth opening every day?",

    description:
    "Select all the features that would provide the most value to your business.",

    type: "choice",

    multiple: true,

    options: [
      {
        id: "moreCustomers",
        title: "More customers",
      },
      {
        id: "affordableAds",
        title: "Affordable advertising",
      },
      {
        id: "smartInventory",
        title: "Smart Inventory & Sales",
      },
      {
        id: "analytics",
        title: "Business insights & analytics",
      },
      {
        id: "loyalty",
        title: "Customer loyalty & rewards",
      },
      {
        id: "community",
        title: "Business community",
      },
      {
        id: "storefront",
        title: "Branded digital storefront",
      },
      {
        id: "assistant",
        title: "AI business assistant",
      },
    ],
  },
];
export const questionsById = Object.fromEntries(
  questions.map((question) => [
    question.id,
    question,
  ])
);