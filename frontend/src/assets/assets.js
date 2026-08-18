import logo from './images/logo.svg'
import profile_img from './images/profile_img.png'
import header_img from './images/header_img.png'
import general_medicine from "./images/general-medicine.svg"
import cardiology from "./images/cardiology.svg"
import pediatrics from "./images/pediatrics.svg"
import gynecology from "./images/gynecology.svg"
import dentistry from "./images/dentistry.svg"
import ophthalmology from "./images/ophthalmology.svg"
import ent from "./images/ent.svg"
import orthopedics from "./images/orthopedics.svg"
import psychiatry from "./images/psychiatry.svg"
import gastroenterology from "./images/gastroenterology.svg"
import doc001 from "./images/doc001.png"
import doc002 from "./images/doc002.png"

export const assets = {
  logo,
  profile_img,
  header_img,



}

export const specialityData = [
  {
    name: "General Medicine",
    slug: "general-medicine",
    image: general_medicine
  },
  {
    name: "Cardiology",
    slug: "cardiology",
    image: cardiology
  },
  {
    name: "Pediatrics",
    slug: "pediatrics",
    image: pediatrics
  },
  {
    name: "Gynecology",
    slug: "gynecology",
    image: gynecology
  },
  {
    name: "Dentistry",
    slug: "dentistry",
    image: dentistry
  },
  {
    name: "Ophthalmology",
    slug: "ophthalmology",
    image: ophthalmology
  },
  {
    name: "ENT",
    slug: "ent",
    image: ent
  },
  {
    name: "Orthopedics",
    slug: "orthopedics",
    image: orthopedics
  },
  {
    name: "Psychiatry",
    slug: "psychiatry",
    image: psychiatry
  },
  {
    name: "Gastroenterology",
    slug: "gastroenterology",
    image: gastroenterology
  },
];


export const doctors = [
  {
    _id: "doc001",
    name: "Dr. Sarah Ahmed",
    image: doc001,
    speciality: "Cardiology",
    degree: "MBBS, MD",
    experience: "12 Years",
    about:
      "Experienced cardiologist specializing in preventive cardiology, heart disease management, and cardiovascular health.",
    fees: 50,
    address: {
      line1: "Al Noor Medical Center",
      line2: "Riyadh, Saudi Arabia",
    },
    available: true,
    rating: 4.9,
  },

  {
    _id: "doc002",
    name: "Dr. Omar Hassan",
    image: doc002,
    speciality: "General Medicine",
    degree: "MBBS, MD",
    experience: "10 Years",
    about:
      "Dedicated physician providing comprehensive primary care, routine checkups, and diagnosis of common medical conditions.",
    fees: 35,
    address: {
      line1: "City Care Clinic",
      line2: "Jeddah, Saudi Arabia",
    },
    available: true,
    rating: 4.8,
  },

  {
    _id: "doc003",
    name: "Dr. Emily Wilson",
    image: doc001,
    speciality: "Pediatrics",
    degree: "MBBS, DCH",
    experience: "8 Years",
    about:
      "Pediatrician focused on child health, preventive care, growth monitoring, and treatment of common childhood illnesses.",
    fees: 40,
    address: {
      line1: "Family Health Clinic",
      line2: "Dubai, UAE",
    },
    available: true,
    rating: 4.9,
  },

  {
    _id: "doc004",
    name: "Dr. Daniel Kim",
    image: doc002,
    speciality: "Orthopedics",
    degree: "MBBS, MS Orthopedics",
    experience: "15 Years",
    about:
      "Orthopedic specialist experienced in treating bone, joint, muscle, and sports-related conditions.",
    fees: 60,
    address: {
      line1: "Seoul Medical Center",
      line2: "Seoul, South Korea",
    },
    available: false,
    rating: 4.7,
  },

  {
    _id: "doc005",
    name: "Dr. Maria Lopez",
    image: doc001,
    speciality: "Gynecology",
    degree: "MBBS, MD",
    experience: "11 Years",
    about:
      "Gynecologist providing comprehensive women's healthcare, reproductive health services, and routine gynecological care.",
    fees: 45,
    address: {
      line1: "Women's Care Hospital",
      line2: "Jeddah, Saudi Arabia",
    },
    available: true,
    rating: 4.8,
  },

  {
    _id: "doc006",
    name: "Dr. James Carter",
    image: doc002,
    speciality: "Gastroenterology",
    degree: "MBBS, MD, DM",
    experience: "14 Years",
    about:
      "Gastroenterologist specializing in digestive health, gastrointestinal disorders, and liver-related conditions.",
    fees: 55,
    address: {
      line1: "Central Medical Hospital",
      line2: "Shanghai, China",
    },
    available: true,
    rating: 4.9,
  },

  {
    _id: "doc007",
    name: "Dr. Aisha Mohammed",
    image: doc001,
    speciality: "Ophthalmology",
    degree: "MBBS, MS Ophthalmology",
    experience: "9 Years",
    about:
      "Ophthalmologist specializing in comprehensive eye examinations, vision disorders, and general eye care.",
    fees: 40,
    address: {
      line1: "Vision Care Center",
      line2: "Riyadh, Saudi Arabia",
    },
    available: true,
    rating: 4.8,
  },

  {
    _id: "doc008",
    name: "Dr. Michael Brown",
    image: doc002,
    speciality: "Psychiatry",
    degree: "MBBS, MD Psychiatry",
    experience: "13 Years",
    about:
      "Psychiatrist providing professional assessment and treatment for a wide range of mental and emotional health concerns.",
    fees: 50,
    address: {
      line1: "Wellness Medical Center",
      line2: "Dubai, UAE",
    },
    available: false,
    rating: 4.7,
  },
];


export const specialties = [
  "General Medicine",
  "Cardiology",
  "Pediatrics",
  "Gynecology",
  "Dentistry",
  "Ophthalmology",
  "ENT",
  "Orthopedics",
  "Psychiatry",
  "Gastroenterology",
];
