import IC1 from "./Materials/Title1.svg";
import IC2 from "./Materials/Title2.svg";
import IC3 from "./Materials/Title3.svg";
import IC4 from "./Materials/Title4.svg";
import IC5 from "./Materials/Title5.svg";
import IC6 from "./Materials/Title6.svg";

import P1 from "./Materials/P1.png";
import P2 from "./Materials/P2.png";
import P3 from "./Materials/P3.png";
import P4 from "./Materials/P4.png";
import P5 from "./Materials/P5.png";
import P6 from "./Materials/P6.png";

import Doc1 from "./Materials/DocS1.png";
import Doc2 from "./Materials/DocS2.png";
import Doc3 from "./Materials/DocS3.png";
import Doc4 from "./Materials/DocS4.png";
import Doc5 from "./Materials/DocS5.png";
import Doc6 from "./Materials/DocS6.png";

import IconGo from "./Materials/GoIcon.svg";
import PhoneIcon from "./Materials/Ph1.svg";
import MessageIcon from "./Materials/Me1.svg";
import LocationIcon from "./Materials/Lo1.svg";

const ServiceDetailsData = [
  {
    id: 1,
    title: "Pediatrics",
    description: "Monitor your child's growth and development closely to ensure their health at every stage.",
    titleIcon: IC1,
    heroImage: P1,

    doctor: {
      name: "Michael Carter",
      role: "Cardiologist",
      image: Doc1,
      path:"/doctor/5"
    },

    contact: {
      phone: "(253) 456 - 1189",
      email: "name@gmail.com",
      location: "(253) 456 - 1189",
    },

    icons: {
      go: IconGo,
      phone: PhoneIcon,
      message: MessageIcon,
      location: LocationIcon,
    },

    aboutService: [
      "Our paediatrics service provides comprehensive care for children, focusing on their physical, emotional, and developmental health. From routine check-ups to managing chronic conditions, we ensure your child’s well-being at every stage of growth.",
      "We prioritize a nurturing and comforting environment to make every visit stress-free for both children and parents. With a dedicated team of specialists, we address your child’s unique healthcare needs with precision and compassion.",
    ],

    list: [
      "Routine wellness exams and developmental screenings.",
      "Vaccinations and immunization schedules tailored to each child's needs.",
      "Diagnosis and treatment of common childhood illnesses and chronic conditions.",
      "Nutritional guidance and support for healthy growth and development.",
      "Parental education and resources for child health and safety.",
    ],
  },

  {
    id: 2,
    title: "Orthopedics",
    description: "Receive care for bone and muscle health with advanced treatments tailored to your needs.",
    titleIcon: IC2,
    heroImage: P2,

    doctor: {
      name: "Sarah Thompson",
      role: "Neurologist",
      image: Doc2,
      path:"/doctor/6"

    },

    contact: {
      phone: "(253) 456 - 1189",
      email: "name@gmail.com",
      location: "(253) 456 - 1189",
    },

    icons: {
      go: IconGo,
      phone: PhoneIcon,
      message: MessageIcon,
      location: LocationIcon,
    },

    aboutService: [
      "Our orthopaedics department specializes in diagnosing and treating musculoskeletal conditions, ensuring mobility and quality of life. From fractures to joint replacements, we provide advanced care tailored to your specific needs.",
      "Equipped with modern facilities and expert surgeons, we offer effective solutions for sports injuries, arthritis, and other orthopedic challenges. Your recovery and long-term health are our utmost priority.",
    ],

    list: [
      "Advanced diagnostic imaging and musculoskeletal assessments.",
      "Surgical and non-surgical treatment options for fractures, dislocations, and other injuries.",
      "Specialized care for joint disorders, including arthritis and tendonitis.",
      "Comprehensive rehabilitation and physical therapy programs.",
      "Preventive care and education to support long-term musculoskeletal health.",
    ],
  },

  {
    id: 3,
    title: "Gastroenterology",
    description: "Comprehensive care for digestive health to address issues with precision and personalized attention.",
    titleIcon: IC3,
    heroImage: P3,

    doctor: {
      name: "Olivia Bennett",
      role: "Dermatologist",
      image: Doc3,
      path:"/doctor/2"

    },

    contact: {
      phone: "(253) 456 - 1189",
      email: "name@gmail.com",
      location: "(253) 456 - 1189",
    },

    icons: {
      go: IconGo,
      phone: PhoneIcon,
      message: MessageIcon,
      location: LocationIcon,
    },

    aboutService: [
      "Our gastroenterology services focus on digestive health, diagnosing and treating conditions affecting the stomach, liver, and intestines. We deliver personalized care to manage symptoms and improve digestive function.",
      "Using advanced diagnostic tools, we ensure accurate assessments for conditions such as GERD, IBS, and liver diseases. Our team is dedicated to helping you achieve a healthier digestive system.",
    ],

    list: [
      "Comprehensive diagnostic testing, including endoscopy and colonoscopy.",
      "Management of chronic digestive conditions like IBS, GERD, and Crohn's disease.",
      "Treatment for liver and pancreatic disorders, including hepatitis and pancreatitis.",
      "Nutritional counseling and lifestyle guidance to support digestive health.",
      "Ongoing monitoring and follow-up care for long-term digestive health management.",
    ],
  },

  {
    id: 4,
    title: "Neurology",
    description: "Specialized treatments for brain and nerve health, ensuring advanced and compassionate care always.",
    titleIcon: IC4,
    heroImage: P4,

    doctor: {
      name: "David Harris",
      role: "Pediatrician",
      image: Doc4,
      path:"/doctor/3"

    },

    contact: {
      phone: "(253) 456 - 1189",
      email: "name@gmail.com",
      location: "(253) 456 - 1189",
    },

    icons: {
      go: IconGo,
      phone: PhoneIcon,
      message: MessageIcon,
      location: LocationIcon,
    },

    aboutService: [
      "Our neurology team is skilled in diagnosing and treating disorders of the nervous system, including the brain, spine, and nerves. We provide expert care for conditions like migraines, epilepsy, and stroke recovery.",
      "Through a combination of cutting-edge technology and compassionate care, we aim to improve your neurological health and enhance your quality of life. Personalized treatment plans ensure optimal outcomes.",
    ],

    list: [
      "Comprehensive neurological assessments and advanced diagnostic imaging.",
      "Treatment for a wide range of neurological disorders, including migraines and epilepsy.",
      "Specialized care for neurodegenerative diseases like Parkinson's and Alzheimer's.",
      "Management of chronic pain and neuropathy to improve daily functioning.",
      "Rehabilitation and ongoing support for patients recovering from neurological events like strokes.",
    ],
  },

  {
    id: 5,
    title: "Cardiology",
    description: "State-of-the-art heart care focused on your cardiovascular health with expertise and dedication.",
    titleIcon: IC5,
    heroImage: P5,

    doctor: {
      name: "Michael Carter",
      role: "Cardiologist",
      image: Doc5,
      path:"/doctor/5"

    },

    contact: {
      phone: "(253) 456 - 1189",
      email: "name@gmail.com",
      location: "(253) 456 - 1189",
    },

    icons: {
      go: IconGo,
      phone: PhoneIcon,
      message: MessageIcon,
      location: LocationIcon,
    },

    aboutService: [
      "Our cardiology services offer advanced care for heart health, addressing conditions such as hypertension, arrhythmia, and coronary artery disease. We focus on preventive care as well as effective treatments.",
      "With state-of-the-art diagnostic tools and experienced cardiologists, we provide tailored care to keep your heart strong and healthy. Your cardiovascular wellness is our commitment.",
    ],

    list: [
      "Comprehensive heart health assessments and diagnostic testing.",
      "Management and treatment of heart diseases, including hypertension and arrhythmias.",
      "Specialized care for heart attack recovery and cardiac rehabilitation.",
      "Preventive cardiology services to reduce the risk of heart disease.",
      "Ongoing monitoring and follow-up care to ensure long-term heart health.",
    ],
  },

  {
    id: 6,
    title: "General care",
    description: "Reliable primary healthcare services designed to maintain your well-being at every stage of life.",
    titleIcon: IC6,
    heroImage: P6,

    doctor: {
      name: "Emily Rogers",
      role: "Orthopedic",
      image: Doc6,
      path:"/doctor/4"

    },

    contact: {
      phone: "(253) 456 - 1189",
      email: "name@gmail.com",
      location: "(253) 456 - 1189",
    },

    icons: {
      go: IconGo,
      phone: PhoneIcon,
      message: MessageIcon,
      location: LocationIcon,
    },

    aboutService: [
      "Our general care services focus on overall health and wellness, offering routine check-ups, preventive care, and treatment for common illnesses. We are your trusted partner for primary healthcare needs.",
      "From managing chronic conditions to promoting healthy lifestyles, our general care team ensures personalized attention for patients of all ages. Your well-being is always our priority.",
    ],

    list: [
      "Routine check-ups and personalized health assessments.",
      "Preventive care services, including vaccinations and health screenings.",
      "Chronic disease management and ongoing monitoring.",
      "Health education and lifestyle counseling for better long-term health.",
      "Coordination of care with specialists as needed.",
    ],
  },
];

export default ServiceDetailsData;