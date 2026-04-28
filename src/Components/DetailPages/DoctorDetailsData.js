import DoctorImg1 from "./Materials/DoctorImg1.png";
import DoctorImg2 from "./Materials/DoctorImg2.png";
import DoctorImg3 from "./Materials/DoctorImg3.png";
import DoctorImg4 from "./Materials/DoctorImg4.png";
import DoctorImg5 from "./Materials/DoctorImg5.png";
import DoctorImg6 from "./Materials/DoctorImg6.png";

import LinkedInIcon from "./Materials/LinkedIn.svg";
import TwitterIcon from "./Materials/Twitter.svg";
import FacebookIcon from "./Materials/Facebook.svg";

const DoctorDetailsData = [
  {
    id: 1,
    name: "Jonathan Reed",
    specialty: "Gastroenterologist",
    experience: "3 years",
    qualifications: "MBBS, MD",
    workingHours: "8 Hours",
    location: "123 Main Street, Springfield, USA",

    heroImage: DoctorImg1,

    socialIcons: {
      linkedin: LinkedInIcon,
      twitter: TwitterIcon,
      facebook: FacebookIcon,
    },

    about:
      "Dr. Jonathan Reed is a highly experienced gastroenterologist with over 16 years of practice in diagnosing and treating a broad spectrum of digestive disorders. He earned his medical degree from Johns Hopkins University School of Medicine and completed his fellowship in gastroenterology at the Cleveland Clinic. Dr. Reed is known for his thorough and compassionate approach to patient care, taking the time to understand each patient’s symptoms and concerns fully. His dedication to his field is evident in his commitment to staying at the forefront of medical advancements, ensuring that his patients receive the most effective and up-to-date treatments available.",

    experienceDetails:
      "Wealth of experience in both hospital and outpatient settings. He has served as the Head of Gastroenterology at Riverside Medical Center, where he led a team in providing comprehensive care for patients with complex digestive disorders. He has also worked as a consultant gastroenterologist at several prestigious institutions, including the Mayo Clinic and Mount Sinai Hospital, where he provided expert care and performed advanced endoscopic procedures. Dr. Reed’s extensive experience allows him to manage a wide range of conditions, from routine gastrointestinal issues to rare and complex disorders.",

    specialities:
      "Additionally, Dr. Reed has a strong focus on the management of irritable bowel syndrome (IBS) and other functional gastrointestinal disorders, providing patients with tailored treatment plans that address their specific symptoms. His expertise extends to the diagnosis and treatment of gastrointestinal cancers, where he emphasizes the importance of early detection and comprehensive care.",
  },

  {
    id: 2,
    name: "Olivia Bennett",
    specialty: "Dermatologist",
    experience: "5 years",
    qualifications: "DO, MPH",
    workingHours: "7 Hours",
    location: "45 Elm Avenue, New York, NY 10001",

    heroImage: DoctorImg2,

    socialIcons: {
      linkedin: LinkedInIcon,
      twitter: TwitterIcon,
      facebook: FacebookIcon,
    },

    about:
      "Dr. Olivia Bennett is a board-certified dermatologist with over 14 years of experience in treating a wide range of skin conditions. She graduated with honors from the University of Pennsylvania Perelman School of Medicine and completed her dermatology residency at the University of California, San Francisco. Dr. Bennett is highly regarded for her expertise in both medical and cosmetic dermatology, providing patients with comprehensive care that addresses their skin health and aesthetic concerns. Her approach is centered on understanding each patient’s unique skin type and concerns, allowing her to create personalized treatment plans that achieve optimal results.",

    experienceDetails:
      "Where she led a team of dermatologists in providing state-of-the-art care for patients with complex skin conditions. Additionally, she has held a faculty position at the University of Southern California, where she taught dermatology residents and contributed to the development of new dermatological curricula. Dr. Bennett’s extensive experience in both clinical and cosmetic dermatology allows her to offer a wide range of treatments, from managing chronic skin conditions to performing advanced cosmetic procedures.",

    specialities:
      "Specializes in treating a variety of dermatological conditions, including acne, eczema, psoriasis, and rosacea, using the latest evidence-based practices to ensure effective and lasting results. She is also highly skilled in cosmetic dermatology, offering treatments such as Botox, dermal fillers, and laser therapy to help patients achieve their aesthetic goals. Dr. Bennett’s expertise in skin cancer detection and treatment is another key aspect of her practice, where she emphasizes the importance of early detection and prevention.",
  },

  {
    id: 3,
    name: "David Harris",
    specialty: "Pediatrician",
    experience: "2 years",
    qualifications: "BDS, MDS",
    workingHours: "7 Hours",
    location: "12 High Street, London, UK NW1 5HD",

    heroImage: DoctorImg3,

    socialIcons: {
      linkedin: LinkedInIcon,
      twitter: TwitterIcon,
      facebook: FacebookIcon,
    },

    about:
      "Dr. David Harris is a compassionate and experienced pediatrician with over 12 years of dedicated service in caring for children from infancy through adolescence. He obtained his medical degree from the University of Chicago Pritzker School of Medicine and completed his residency at Boston Children’s Hospital, where he developed a strong foundation in pediatric care. Dr. Harris is known for his gentle approach and ability to connect with young patients and their families, ensuring that each child receives personalized care tailored to their unique needs. His commitment to fostering a positive healthcare experience for children has made him a trusted and beloved figure among his patients.",

    experienceDetails:
      "Dr. Harris has worked in various pediatric settings, ranging from private practices to large healthcare facilities. He has served as the Lead Pediatrician at Sunshine Children’s Clinic, where he managed a diverse patient population and implemented innovative health programs for children with special needs. Additionally, Dr. Harris has been a pediatric consultant at St. Mary’s Hospital, providing expert care for children with complex medical conditions. His extensive experience in both general pediatrics and specialized care allows him to offer comprehensive services that address the full spectrum of pediatric health.",

    specialities:
      "His expertise in childhood nutrition ensures that his young patients receive dietary guidance that supports their growth and development, helping to establish healthy habits that last a lifetime. Dr. Harris is also well-versed in managing chronic conditions such as asthma and diabetes in children, providing personalized treatment plans that consider the child’s physical and emotional well-being.",
  },

  {
    id: 4,
    name: "Emily Rogers",
    specialty: "Orthopedic",
    experience: "7 years",
    qualifications: "MS (Orthopedics)",
    workingHours: "7 Hours",
    location: "90 Sunset Boulevard, Miami, FL 33101",

    heroImage: DoctorImg4,

    socialIcons: {
      linkedin: LinkedInIcon,
      twitter: TwitterIcon,
      facebook: FacebookIcon,
    },

    about:
      "Dr. Emily Rogers is a highly skilled orthopedic surgeon with over 18 years of experience in treating musculoskeletal conditions and performing complex surgeries. She completed her medical training at Yale School of Medicine and went on to specialize in orthopedic surgery at the Cleveland Clinic. Dr. Rogers is recognized for her expertise in joint replacement surgery and her innovative approach to minimally invasive techniques. Her dedication to her patients is reflected in her thorough consultations, where she ensures each individual understands their condition and the available treatment options.",

    experienceDetails:
      "Dr. Rogers has an extensive background in both academic and clinical settings. She has served as the Chief of Orthopedic Surgery at Metropolitan Hospital, where she oversaw a team of surgeons and developed protocols to enhance patient care. Her previous roles include Senior Consultant Orthopedic Surgeon at the Hospital for Special Surgery, where she specialized in complex joint reconstruction and trauma cases. Dr. Rogers' vast experience includes treating a wide range of orthopedic conditions, from sports injuries to degenerative joint diseases, making her a leader in her field.",

    specialities:
      "She has successfully performed hundreds of hip and knee replacements with outstanding outcomes. Her expertise also extends to minimally invasive surgical techniques, which reduce recovery times and improve patient satisfaction. In addition, she is highly skilled in treating sports-related injuries, particularly in athletes.",
  },

  {
    id: 5,
    name: "Michael Carter",
    specialty: "Cardiologist",
    experience: "5 years",
    qualifications: "PGDCC",
    workingHours: "8 Hours",
    location: "101 Palm Avenue, Dubai, UAE 00000",

    heroImage: DoctorImg5,

    socialIcons: {
      linkedin: LinkedInIcon,
      twitter: TwitterIcon,
      facebook: FacebookIcon,
    },

    about:
      "Dr. Michael Carter is a board-certified cardiologist with over 20 years of experience in treating a wide array of heart conditions. He earned his medical degree from Stanford University School of Medicine and completed his fellowship in cardiology at the Mayo Clinic. Known for his meticulous approach to patient care, Dr. Carter combines state-of-the-art diagnostic techniques with a personalized treatment plan for each of his patients. His primary focus is on preventive cardiology, helping patients manage risk factors and maintain heart health through lifestyle changes and medical interventions.",

    experienceDetails:
      "Dr. Carter has a distinguished career in both clinical practice and academia. He has served as the Director of the Cardiology Department at St. Luke’s Hospital, where he led a multidisciplinary team in providing comprehensive cardiac care. Additionally, he has held the position of Associate Clinical Professor of Cardiology at Columbia University, where he has trained the next generation of cardiologists. Dr. Carter's extensive experience spans a wide range of cardiovascular conditions, including coronary artery disease, heart failure, and arrhythmias, making him a trusted expert in his field.",

    specialities:
      "Focuses on reducing risk factors for heart disease through lifestyle modifications and early intervention. Expertise in minimally invasive procedures such as angioplasty and stenting to treat coronary artery disease. Provides comprehensive care for patients with heart failure, including advanced treatment options and ongoing management.",
  },

  {
    id: 6,
    name: "Sarah Thompson",
    specialty: "Neurologist",
    experience: "5 years",
    qualifications: "DNB (Neurology)",
    workingHours: "7 Hours",
    location: "90 Sunset Boulevard, Miami, FL 33101",

    heroImage: DoctorImg6,

    socialIcons: {
      linkedin: LinkedInIcon,
      twitter: TwitterIcon,
      facebook: FacebookIcon,
    },

    about:
      "Dr. Sarah Thompson is a highly respected neurologist with over 15 years of experience in diagnosing and treating a wide range of neurological disorders. She completed her medical degree at Harvard Medical School and went on to complete her residency at Johns Hopkins Hospital.",

    experienceDetails:
      "Dr. Thompson has accumulated extensive experience working in both academic and clinical settings. She has served as the Chief Neurologist at the City Medical Center, where she led a team in providing cutting-edge care for patients with complex neurological conditions. Her previous roles include Associate Professor of Neurology at the University of California, Los Angeles, where she mentored medical students and residents, and Director of the Epilepsy Clinic at the Boston Medical Group. Dr. Thompson’s vast experience has enabled her to handle a diverse range of cases with expertise and precision.",

    specialities:
      "Expert in the diagnosis and treatment of seizure disorders, including advanced treatment options and personalized management plans. Offers specialized care for Parkinson’s disease, including medication management and support for movement disorders.",
  }
];

export default DoctorDetailsData;