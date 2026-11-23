import type { ImageMetadata } from "astro";
import sydney from "../assets/photos/sydney.jpg";
import london from "../assets/photos/london.jpg";
import usa from "../assets/photos/usa.jpg";
import toronto from "../assets/photos/toronto.jpg";
import auckland from "../assets/photos/auckland.jpg";
import europe from "../assets/photos/europe.jpg";

export interface Destination {
  slug: string;
  name: string;
  /** Name as used in a sentence: "Study in the UK". */
  inName: string;
  img: ImageMetadata;
  imgAlt: string;
  pos: string;
  line: string;
  intro: string[];
  why: string[];
  courses: string[];
  intakes: string;
  institutions: string;
}

// General, long-standing facts only. Visa rules, fees and work rights change often;
// those are confirmed with each student during counselling, never printed here.
export const destinations: Destination[] = [
  {
    slug: "australia",
    name: "Australia",
    inName: "Australia",
    img: sydney,
    imgAlt: "Sydney Opera House and Harbour Bridge at night",
    pos: "60% 50%",
    line: "Universities and vocational colleges, with post-study work options.",
    intro: [
      "Australia is one of the most popular choices for students from Hyderabad: English-speaking, multicultural, and home to universities that rank well worldwide.",
      "You can choose between universities and vocational (VET/TAFE) colleges, and many courses are built around practical, job-ready skills.",
    ],
    why: [
      "Globally ranked universities in every major city",
      "Practical, industry-linked courses",
      "Large, welcoming Indian community",
      "Post-study work options for eligible graduates",
    ],
    courses: ["IT & computer science", "Engineering", "Business & accounting", "Nursing & health", "Data science", "Hospitality"],
    intakes: "Main intakes in February and July, with some courses also starting in November.",
    institutions: "Universities, TAFE institutes and private vocational colleges.",
  },
  {
    slug: "uk",
    name: "United Kingdom",
    inName: "the UK",
    img: london,
    imgAlt: "London's Houses of Parliament and the Thames at dusk",
    pos: "50% 50%",
    line: "Many master's degrees are completed in just one year.",
    intro: [
      "The UK is home to some of the world's oldest and most respected universities, and its degrees are recognised everywhere.",
      "Many taught master's programmes run for one year, which keeps the total cost and time away from home lower than in many other countries.",
    ],
    why: [
      "Degrees recognised worldwide",
      "One-year master's programmes",
      "Wide choice of universities across the country",
      "Post-study work options for eligible graduates",
    ],
    courses: ["Business & management", "Computer science", "Law", "Engineering", "Public health", "Finance"],
    intakes: "Main intake in September, with a second intake in January at many universities.",
    institutions: "Public universities across England, Scotland, Wales and Northern Ireland.",
  },
  {
    slug: "usa",
    name: "USA",
    inName: "the USA",
    img: usa,
    imgAlt: "New York skyline at sunset",
    pos: "50% 40%",
    line: "Bachelor's, master's and community college pathways.",
    intro: [
      "The USA has the largest number of universities in the world, from major research universities to smaller colleges and community colleges.",
      "Its flexible system lets you explore subjects before choosing a major, and STEM programmes are especially strong.",
    ],
    why: [
      "The widest choice of universities and courses",
      "Strong STEM and research programmes",
      "Scholarships and assistantships at many universities",
      "Flexible, credit-based study",
    ],
    courses: ["Computer science", "Data science & analytics", "Engineering", "Business (MBA, MS)", "Biotechnology", "Health sciences"],
    intakes: "Main intake in Fall (August–September), with a Spring intake in January.",
    institutions: "Public and private universities, colleges and community colleges.",
  },
  {
    slug: "canada",
    name: "Canada",
    inName: "Canada",
    img: toronto,
    imgAlt: "Toronto's CN Tower and waterfront at dusk",
    pos: "50% 40%",
    line: "Universities and colleges, and a route many later take to PR.",
    intro: [
      "Canada combines high-quality education with a safe, welcoming society, and it consistently ranks among the best countries to live in.",
      "Alongside universities, Canada's colleges offer career-focused diplomas, and many graduates go on to work and later apply for permanent residency.",
    ],
    why: [
      "Safe, multicultural cities",
      "Career-focused college diplomas as well as degrees",
      "Post-study work options for eligible graduates",
      "A pathway many students later take to PR",
    ],
    courses: ["Computer science & IT", "Business & project management", "Engineering", "Healthcare", "Supply chain", "Hospitality"],
    intakes: "Main intake in September, with January and May intakes at many institutions.",
    institutions: "Universities and public colleges across all provinces.",
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    inName: "New Zealand",
    img: auckland,
    imgAlt: "Auckland skyline at night",
    pos: "52% 60%",
    line: "Universities and institutes of technology in a welcoming country.",
    intro: [
      "New Zealand offers a high standard of education in a calm, safe and friendly setting, with smaller class sizes than many larger countries.",
      "All of its universities are well regarded internationally, and its institutes of technology focus on practical, applied learning.",
    ],
    why: [
      "Every university internationally ranked",
      "Smaller classes and personal attention",
      "Safe, friendly and relaxed lifestyle",
      "Post-study work options for eligible graduates",
    ],
    courses: ["IT", "Engineering", "Business", "Agriculture & environment", "Hospitality & tourism", "Health"],
    intakes: "Main intakes in February and July.",
    institutions: "Eight universities, plus institutes of technology and polytechnics.",
  },
  {
    slug: "europe",
    name: "Europe",
    inName: "Europe",
    img: europe,
    imgAlt: "Brandenburg Gate, Berlin",
    pos: "50% 45%",
    line: "Germany, Ireland and more, including low-tuition options.",
    intro: [
      "Europe offers excellent education across many countries. We most often help students with Germany and Ireland, and with other European options on request.",
      "Germany's public universities charge low or no tuition for many programmes, while Ireland offers English-taught degrees and a strong technology sector.",
    ],
    why: [
      "Low-tuition public universities in Germany",
      "English-taught programmes in many countries",
      "Strong engineering and technology industries",
      "Travel across Europe during your studies",
    ],
    courses: ["Mechanical & automotive engineering", "Computer science", "Data science", "Business", "Pharmacy & life sciences", "Renewable energy"],
    intakes: "Germany: winter (October) and summer (April) semesters. Ireland: mainly September.",
    institutions: "Public and private universities and universities of applied sciences.",
  },
];

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);
