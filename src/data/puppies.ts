export interface Puppy {
  id: string;
  name: string;
  price: string;
  breed: string;
  gender: "Male" | "Female";
  weeks: string;
  readyNow?: boolean;
  mini?: boolean;
  generation?: "F1" | "F1B";
  hasVideo?: boolean;
  image: string;
}

export interface DeliveryVideoCard {
  id: string;
  src: string;
  image: string;
}

export const puppies: Puppy[] = [
  {
    id: "lewis",
    name: "Lewis",
    price: "$3,950",
    breed: "Akita",
    gender: "Male",
    weeks: "10 weeks",
    readyNow: true,
    mini: true,
    generation: "F1",
    hasVideo: true,
    image: "/assets/akita-lewis.webp",
  },
  {
    id: "desiree",
    name: "Desiree",
    price: "$4,975",
    breed: "Akita",
    gender: "Female",
    weeks: "4 weeks",
    hasVideo: true,
    image: "/assets/akita-desiree.webp",
  },
  {
    id: "annie",
    name: "Annie",
    price: "$4,975",
    breed: "Akita",
    gender: "Female",
    weeks: "4 weeks",
    hasVideo: true,
    image: "/assets/akita-annie.webp",
  },
  {
    id: "louie",
    name: "Louie",
    price: "$3,450",
    breed: "Akita",
    gender: "Male",
    weeks: "15 weeks",
    readyNow: true,
    mini: true,
    hasVideo: true,
    image: "/assets/akita-louie.webp",
  },
  {
    id: "queenie",
    name: "Queenie",
    price: "$4,650",
    breed: "Akita",
    gender: "Female",
    weeks: "8 weeks",
    readyNow: true,
    mini: true,
    image: "/assets/akita-queenie.webp",
  },
  {
    id: "buddy",
    name: "Buddy",
    price: "$4,975",
    breed: "Akita",
    gender: "Male",
    weeks: "4 weeks",
    hasVideo: true,
    image: "/assets/akita-buddy.webp",
  },
  {
    id: "potato",
    name: "Potato",
    price: "$3,900",
    breed: "Akita",
    gender: "Male",
    weeks: "7 weeks",
    hasVideo: true,
    image: "/assets/akita-potato.webp",
  },
  {
    id: "jila",
    name: "Jila",
    price: "$4,450",
    breed: "Akita",
    gender: "Female",
    weeks: "6 weeks",
    mini: true,
    generation: "F1B",
    hasVideo: true,
    image: "/assets/akita-jila.webp",
  },
  {
    id: "cordelia",
    name: "Cordelia",
    price: "$3,450",
    breed: "Akita",
    gender: "Female",
    weeks: "15 weeks",
    readyNow: true,
    mini: true,
    hasVideo: true,
    image: "/assets/akita-cordelia.webp",
  },
  {
    id: "carrot",
    name: "Carrot",
    price: "$3,900",
    breed: "Akita",
    gender: "Male",
    weeks: "7 weeks",
    hasVideo: true,
    image: "/assets/akita-carrot.webp",
  },
  {
    id: "wheeler",
    name: "Wheeler",
    price: "$3,900",
    breed: "Akita",
    gender: "Male",
    weeks: "12 weeks",
    readyNow: true,
    hasVideo: true,
    image: "/assets/akita-wheeler.webp",
  },
  {
    id: "hampton",
    name: "Hampton",
    price: "$5,975",
    breed: "Akita",
    gender: "Male",
    weeks: "11 weeks",
    readyNow: true,
    mini: true,
    generation: "F1",
    hasVideo: true,
    image: "/assets/akita-hampton.webp",
  },
  {
    id: "jacob",
    name: "Jacob",
    price: "$3,700",
    breed: "Akita",
    gender: "Male",
    weeks: "11 weeks",
    readyNow: true,
    mini: true,
    generation: "F1B",
    hasVideo: true,
    image: "/assets/akita-jacob.webp",
  },
  {
    id: "teddy",
    name: "Teddy",
    price: "$4,975",
    breed: "Akita",
    gender: "Male",
    weeks: "4 weeks",
    hasVideo: true,
    image: "/assets/akita-teddy.webp",
  },
  {
    id: "thatcher",
    name: "Thatcher",
    price: "$3,450",
    breed: "Akita",
    gender: "Male",
    weeks: "15 weeks",
    readyNow: true,
    mini: true,
    hasVideo: true,
    image: "/assets/akita-thatcher.webp",
  },
  {
    id: "mitts",
    name: "Mitts",
    price: "$3,900",
    breed: "Akita",
    gender: "Male",
    weeks: "12 weeks",
    readyNow: true,
    hasVideo: true,
    image: "/assets/akita-mitts.webp",
  },
  {
    id: "sparky",
    name: "Sparky",
    price: "$2,950",
    breed: "Akita",
    gender: "Male",
    weeks: "14 weeks",
    readyNow: true,
    mini: true,
    generation: "F1",
    hasVideo: true,
    image: "/assets/akita-sparky.webp",
  },
  {
    id: "radish",
    name: "Radish",
    price: "$3,900",
    breed: "Akita",
    gender: "Male",
    weeks: "7 weeks",
    hasVideo: true,
    image: "/assets/akita-radish.webp",
  },
  {
    id: "jack-sparrow",
    name: "Jack Sparrow",
    price: "$4,550",
    breed: "Akita",
    gender: "Male",
    weeks: "11 weeks",
    readyNow: true,
    mini: true,
    hasVideo: true,
    image: "/assets/akita-jacksparrow.webp",
  },
  {
    id: "bolo",
    name: "Bolo",
    price: "$5,500",
    breed: "Akita",
    gender: "Male",
    weeks: "11 weeks",
    readyNow: true,
    mini: true,
    generation: "F1",
    hasVideo: true,
    image: "/assets/akita-bolo.webp",
  },
  {
    id: "aero",
    name: "Aero",
    price: "$3,900",
    breed: "Akita",
    gender: "Male",
    weeks: "12 weeks",
    readyNow: true,
    hasVideo: true,
    image: "/assets/akita-aero.webp",
  },
];

export const deliveryVideos: DeliveryVideoCard[] = [
  { id: "delivery-1", src: "", image: "/assets/akita-delivery1.webp" },
  { id: "delivery-2", src: "", image: "/assets/akita-delivery2.webp" },
  { id: "delivery-3", src: "", image: "/assets/akita-delivery3.webp" },
];

/**
 * Grid composition mirrors the original site:
 * puppies at positions 1-7, video at 8, puppies 9-15, video at 16, puppies 17-23, video at 24
 */
export function buildGridItems(): Array<{ type: "puppy"; puppy: Puppy } | { type: "video"; video: DeliveryVideoCard }> {
  const items: Array<{ type: "puppy"; puppy: Puppy } | { type: "video"; video: DeliveryVideoCard }> = [];
  const withVideos = [...deliveryVideos];
  puppies.forEach((puppy, index) => {
    items.push({ type: "puppy", puppy });
    if (index === 6 || index === 13 || index === 20) {
      const video = withVideos.shift();
      if (video) items.push({ type: "video", video });
    }
  });
  return items;
}

export const navItems = [
  { label: "Available Puppies", active: true },
  { label: "Breeds", active: false, dropdown: true },
  { label: "Testimonials", active: false },
  { label: "Health Guarantee", active: false },
  { label: "Breeder Standards", active: false, dropdown: true },
  { label: "Our Story", active: false, dropdown: true },
];

export const trustItems = [
  {
    title: "Vet-Checked & Vaccinated",
    desc: "Every puppy is vet-checked and up to date on vaccinations.",
    icon: "shield-check",
  },
  {
    title: "10-Year Health Guarantee",
    desc: "Industry-leading health guarantee for total peace of mind.",
    icon: "shield-plus",
  },
  {
    title: "Free Nationwide Delivery",
    desc: "Safe, comfortable delivery to your door.",
    icon: "truck",
  },
  {
    title: "Registration Included",
    desc: "Complete registration for eligible puppies.",
    icon: "award",
  },
  {
    title: "Lifetime Puppy Support",
    desc: "Our team is here for you for the life of your dog.",
    icon: "headphones",
  },
];

export const statsItems = [
  { big: "4.9", small: "Google Rating", icon: "google" },
  { big: "3,000+", small: "Puppies Placed", icon: "paw" },
  { big: "10-Year", small: "Health Guarantee", icon: "shield" },
  { big: "Free", small: "Nationwide Delivery", icon: "truck" },
  { big: "USA Today", small: "Seen In", icon: "monitor" },
];

export const footerColumns = [
  {
    title: "Puppies",
    icon: "paw",
    links: ["Available Puppies", "American Akita Puppies", "Japanese Akita Puppies", "Mini Akita Puppies", "Long-Coat Akita Puppies"],
    viewAll: true,
  },
  {
    title: "Puppy Parents",
    icon: "heart",
    links: ["How It Works", "Puppy Delivery", "Puppy Care Guide", "Blog"],
  },
  {
    title: "Health & Safety",
    icon: "shield",
    links: ["10-Year Health Guarantee", "Health Standards"],
  },
  {
    title: "About Us",
    icon: "user",
    links: ["About HonestPet", "Our Breeders", "Ethical Standards", "Testimonials", "Scam Protection"],
  },
];

export const infoSections = {
  intro: {
    title: "Puppies for Sale",
    text: "Find your perfect puppy with HonestPet – healthy, happy, and raised by trusted breeders. Every pup is vet-checked, backed by a 10-year health guarantee, microchipped, and delivered safely to your door. Real breeders, real care, and lifelong support for your new best friend.",
  },
  whyTitle: "Ethically-Bred Puppies for Sale Online",
  whyLead: "Here's why thousands of happy families trust us:",
  blocks: [
    {
      h: "Nationwide Comfort Delivery",
      p: "Your puppy's safety is our top priority. USDA-licensed couriers use temperature-controlled cars to transport all packages. This way, your new pet travels securely and arrives calm and happy.",
    },
    {
      h: "10-Year Health Guarantee",
      p: "We guarantee the health of every puppy we place for ten years. With our 10-year health guarantee, we give you peace of mind.",
    },
    {
      h: "Microchip Protection",
      p: "We microchip and register each puppy so that you'll soon find them again if they ever get lost.",
    },
    {
      h: "Transparent Health Records",
      p: "Each HonestPet puppy comes with a full digital health record that includes vaccination history and vet reports. This way, you'll know your pup has been cared for from the start.",
    },
    {
      h: "Training & Lifetime Support",
      p: "Get started with puppy basics, behavioral problems, and socialization recommendations from our in-house trainers for the rest of your life. It's assistance for life to help your puppy become a happy, confident dog.",
    },
    {
      h: "Breeders We Trust and Verify",
      p: "We only work with breeders that follow our strict rules on health, care, and ethics. We have trusted relationships with our breeders, so you can be sure of where your puppy originates from. That means no puppy mills.",
    },
  ],
  flexTitle: "Flexible Pickup or Delivery Options",
  flexItems: [
    {
      b: "Meet the Breeder:",
      p: "Do you want to meet your puppy before you take them home? You can meet your puppy in person and pick them up near the breeder's home.",
    },
    {
      b: "Comfortable Nationwide Delivery:",
      p: "Our USDA-licensed delivery drivers can safely bring your puppy home in a comfortable car ride with the temperature just right.",
    },
    {
      b: "Puppy Flight Friend:",
      p: "For longer travels, your puppy will fly in the cabin with a trained, USDA-licensed flight companion who will take them straight to your local airport. We take care of all the details so you can relax and await your puppy.",
    },
  ],
  stepsTitle: "An Adoption Process That’s Clear and Simple",
  stepsLead: "Welcome your perfect puppy in just four simple steps:",
  steps: [
    {
      b: "Step 1: Find Your Puppy:",
      p: "Look through our list of puppies for sale. All of them are raised with love and checked for health, temperament, and care quality.",
    },
    {
      b: "Step 2: Secure Checkout:",
      p: "After you find your puppy, use our safe online checkout to reserve it. Our helpful Customer Care team is always here to help.",
    },
    {
      b: "Step 3: Vet-Checked Screening:",
      p: "A vet checks each puppy's health. Before your dog arrives home, you'll receive all their digital health records.",
    },
    {
      b: "Step 4: Safe Home Delivery:",
      p: "Once we confirm your reservation, our USDA-approved couriers will make sure your package gets to your door safely. Your puppy will come to you healthy, happy, and ready to play.",
    },
  ],
  faqTitle: "Frequently Asked Questions",
  faqs: [
    {
      q: "What Kinds of Dog Breeds Does HonestPet Have?",
      a: "We specialize in Japanese and American Akitas, raised by verified breeders you can trust. Every puppy comes with full health records and lifetime support.",
    },
    {
      q: "How Does the Delivery of Honest Pet's Puppies Work?",
      a: "After you choose your puppy, we work with USDA-licensed personnel to make sure it gets to your home or the nearest airport safely. For safety and comfort, all vehicles feature settings for the temperature.",
    },
    {
      q: "Can I Meet the HonestPet Puppy First?",
      a: "Yes! We can set up a video call with the breeder so you can meet your puppy and the breeder in person before you adopt.",
    },
    {
      q: "Is the Health of My HonestPet Puppy Guaranteed?",
      a: "Yes. You can be sure that your new puppy from HonestPet is healthy and properly cared for since they come with a 10-year health guarantee.",
    },
  ],
};
