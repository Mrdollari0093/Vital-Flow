import Logo from "./Materials/Logo.svg";
import Img1 from "./Materials/Pediatrics.svg";
import Img2 from "./Materials/Orthopedics.svg";
import Img3 from "./Materials/Langs.svg";
import Img4 from "./Materials/Neurology.svg";
import Img5 from "./Materials/Cardiology.svg";
import Img6 from "./Materials/Care.svg";
import Arrow from "./Materials/right-arrow.png";

export const ServicesTitle = "Services";
export const ServiceHeader = "Personalized solutions for better oral health";

export const ServicesData = [
  {
    id: 1,
    title: "Pediatrics",
    description:
      "Monitor your child's growth and development closely to ensure their health at every stage.",
    buttonText: "View Services",
    image: Img1,
    slug: "pediatrics",
  },
  {
    id: 2,
    title: "Orthopedics",
    description:
      "Receive care for bone and muscle health with advanced treatments tailored to your needs.",
    buttonText: "View Services",
    image: Img2,
    slug: "orthopedics",
  },
  {
    id: 3,
    title: "Gastroenterology",
    description:
      "Comprehensive care for digestive health to address issues with precision and personalized attention.",
    buttonText: "View Services",
    image: Img3,
    slug: "gastroenterology",
  },
  {
    id: 4,
    title: "Neurology",
    description:
      "Specialized treatments for brain and nerve health, ensuring advanced and compassionate care always.",
    buttonText: "View Services",
    image: Img4,
    slug: "neurology",
  },
  {
    id: 5,
    title: "Cardiology",
    description:
      "State-of-the-art heart care focused on your cardiovascular health with expertise and dedication.",
    buttonText: "View Services",
    image: Img5,
    slug: "cardiology",
  },
  {
    id: 6,
    title: "General Care",
    description:
      "Reliable primary healthcare services designed to maintain your well-being at every stage of life.",
    buttonText: "View Services",
    image: Img6,
    slug: "general-care",
  },
];

export { Arrow, Logo };