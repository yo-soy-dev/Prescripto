import appointment_img from './appointment_img.png';
import header_img from './header_img.png';
import group_profiles from './group_profiles.png';
import profile_pic from './profile_pic.png';
import contact_image from './contact_image.png';
import about_image from './about_image.png';
import logo from './logo.svg';
import dropdown_icon from './dropdown_icon.svg';
import menu_icon from './menu_icon.svg';
import cross_icon from './cross_icon.png';
import chats_icon from './chats_icon.svg';
import verified_icon from './verified_icon.svg';
import arrow_icon from './arrow_icon.svg';
import info_icon from './info_icon.svg';
import upload_icon from './upload_icon.png';
import stripe_logo from './stripe_logo.png';
import razorpay_logo from './razorpay_logo.png';
import doc1 from './doc1.png';
import doc2 from './doc2.png';
import doc3 from './doc3.png';
import doc4 from './doc4.png';
import doc5 from './doc5.png';
import doc6 from './doc6.png';
import doc7 from './doc7.png';
import doc8 from './doc8.png';
import doc9 from './doc9.png';
import doc10 from './doc10.png';
import doc11 from './doc11.png';
import doc12 from './doc12.png';
import doc13 from './doc13.png';
import doc14 from './doc14.png';
import doc15 from './doc15.png';
import Dermatologist from './Dermatologist.svg';
import Gastroenterologist from './Gastroenterologist.svg';
import General_physician from './General_physician.svg';
import Gynecologist from './Gynecologist.svg';
import Neurologist from './Neurologist.svg';
import Pediatricians from './Pediatricians.svg';

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  { speciality: 'General physician', image: General_physician },
  { speciality: 'Gynecologist', image: Gynecologist },
  { speciality: 'Dermatologist', image: Dermatologist },
  { speciality: 'Pediatricians', image: Pediatricians },
  { speciality: 'Neurologist', image: Neurologist },
  { speciality: 'Gastroenterologist', image: Gastroenterologist },
];

export const doctors = [
  {
    _id: 'doc1',
    name: 'Dr. J M Dua',
    image: doc1,
    speciality: 'General physician',
    degree: 'MBBS, MD',
    experience: '10 Years',
    about: 'Dr. J M Dua specializes in diagnosing and treating a wide range of General Physician/ Internal Medicine conditions, including Acute Pancreatitis, Antibiotic-associated diarrhea, Brucellosis, Chickenpox, Chikungunya, and more.',
    fees: 50,
    address: {
      line1: 'Sarita Vihar, New Delhi',
      line2: 'Janakpuri, Delhi'
    }
  },
  {
    _id: 'doc2',
    name: 'Dr. Bindu Garg',
    image: doc2,
    speciality: 'Gynecologist',
    degree: 'MBBS, MD',
    experience: '40+ Years',
    about: 'Dr. Garg specializes in infertility treatments, and also excels in normal deliveries, high-risk pregnancies, PCOS/PCOD management, and laparoscopic surgeries, having trained numerous gynecologists in advanced reproductive techniques.',
    fees: 70,
    address: {
      line1: 'Shalimar Village, Delhi',
      line2: 'Sikandarpur Ghosi, Gurugram'
    }
  },
  {
    _id: 'doc3',
    name: 'Dr. Shrilata Trasi',
    image: doc3,
    speciality: 'Dermatologist',
    degree: 'MBBS, MD, DVD, DDV, FCPS',
    experience: '40+ Years',
    about: 'Dr. Shrilata specializes in Dermato Surgery & Cosmetology.',
    fees: 60,
    address: {
      line1: 'Dadar West, Mumbai',
      line2: 'Khar West, Mumbai'
    }
  },
  {
    _id: 'doc4',
    name: 'Dr. Dhananjay Malankar',
    image: doc4,
    speciality: 'Pediatricians',
    degree: 'MBBS, MS, McH',
    experience: '13+ Years',
    about: 'Dr. Dhananjay Malankar specializes in pediatric and neonatal cardiac surgery, providing expert care for complex heart conditions in newborns and children.',
    fees: 50,
    address: {
      line1: 'Mulund, Mumbai',
      line2: 'Nahur West, Mumbai'
    }
  },
  {
    _id: 'doc5',
    name: 'Dr. (Col) Joy Dev Mukherji',
    image: doc5,
    speciality: 'Neurologist',
    degree: 'MBBS, MD, DM, FRCP',
    experience: '30 Years',
    about: 'Dr. Joy specializes in Multiple Sclerosis, Movement Disorders, Stroke Management, Headaches, and Critical Care Neurology, providing expert neurological care across a wide range of conditions.',
    fees: 80,
    address: {
      line1: 'Dwarka, New Delhi',
      line2: 'Saket, New Delhi'
    }
  },
  {
    _id: 'doc6',
    name: 'Dr. Puneet Agarwal',
    image: doc6,
    speciality: 'Neurologist',
    degree: 'MBBS, MD, DM',
    experience: '25 Years',
    about: 'Dr. Puneet specializes in Multiple Sclerosis, Movement Disorders, Stroke Management, Headaches, and Critical Care Neurology, providing expert neurological care across a wide range of conditions.',
    fees: 80,
    address: {
      line1: 'Panchsheel Park, New Delhi',
      line2: 'Saket, New Delhi'
    }
  },
  {
    _id: 'doc7',
    name: 'Dr. Prof Ramulu',
    image: doc7,
    speciality: 'General physician',
    degree: 'MBBS, MD',
    experience: '47 Years',
    about: 'Dr. Prof specializes in treating head and neck infections, viral fevers, and infectious diseases, with expertise in managing IBS and helping patients reduce insulin dependency.',
    fees: 50,
    address: {
      line1: 'Secunderabad, Hyderabad',
      line2: 'Secunderabad City'
    }
  },
  {
    _id: 'doc8',
    name: 'Dr. Hrishikesh Pai',
    image: doc8,
    speciality: 'Gynecologist',
    degree: 'MBBS, MD',
    experience: '40+ Years',
    about: 'Dr. Hrishikesh is an expert in advanced gynecological procedures including laparoscopy, hysteroscopy, ovarian cystectomy, myomectomy, ectopic pregnancy management, and both vaginal and abdominal hysterectomy.',
    fees: 70,
    address: {
      line1: 'Sector 44, Gurgaon',
      line2: 'Gomti Nagar, Lucknow'
    }
  },
  {
    _id: 'doc9',
    name: 'Dr Shefali Trasi',
    image: doc9,
    speciality: 'Dermatologist',
    degree: 'MBBS, MD',
    experience: '15+ Years',
    about: 'Dr. Shefali has extensive expertise in treating skin, hair, and nail disorders, and is highly skilled in dermatosurgery, performing procedures from mole excisions to complex vitiligo and nail surgeries.',
    fees: 60,
    address: {
      line1: 'Dadar West, Mumbai',
      line2: 'Khar West, Mumbai'
    }
  },
  {
    _id: 'doc10',
    name: 'Dr. Arbinder Singal',
    image: doc10,
    speciality: 'Pediatricians',
    degree: 'MBBS, MD, DNB',
    experience: '20+ Years',
    about: 'Dr. Arbinder specializes in treating pediatric hernia, hypospadias, appendicitis and congenital diseases.',
    fees: 50,
    address: {
      line1: 'Kharghar, Navi Mumbai',
      line2: 'Vashi, Navi Mumbai'
    }
  },
  {
    _id: 'doc11',
    name: 'Dr. Usha Srinivas',
    image: doc11,
    speciality: 'Gastroenterologist',
    degree: 'MBBS, MD, DM',
    experience: '28+ Years',
    about: 'Dr. Usha specializes in treating conditions such as Digestive Disorders, Acid Peptic Disorders, Liver Disease In Pregnancy, and her key treatments include Acidity Treatment, Peptic Gastric Ulcer Treatment, Piles Treatment Non Surgical.',
    fees: 50,
    address: {
      line1: 'Thousand Lights West, Chennai',
      line2: 'Greams Road, Chennai'
    }
  },
  {
    _id: 'doc12',
    name: 'Dr. Vivek Kumar',
    image: doc12,
    speciality: 'Neurologist',
    degree: 'MBBS, MD, DM',
    experience: '28+ Years',
    about: 'Dr. Vivek specializes in Epilepsy, Stroke Management, Headaches, and Movement disorder, providing expert neurological care across a wide range of conditions.',
    fees: 80,
    address: {
      line1: 'Patparganj, East Delhi',
      line2: 'Vaishali, Ghaziabad'
    }
  },
  {
    _id: 'doc13',
    name: 'Dr Om Prakash Sharma',
    image: doc13,
    speciality: 'General physician',
    degree: 'MBBS, MD',
    experience: '46+ Years',
    about: 'Dr. Om offers comprehensive care across a wide range of conditions, specializing in preventive treatment, chronic and viral illnesses, diabetes, thyroid, pain and allergy management, and outpatient treatments including de-addiction and sexual health.',
    fees: 50,
    address: {
      line1: 'Greams Road, Chennai',
      line2: 'Near Chepuk Stadium, Chennai'
    }
  },
  {
    _id: 'doc14',
    name: 'Dr.Laila Dave',
    image: doc14,
    speciality: 'Gynecologist',
    degree: 'MBBS, MD',
    experience: '45+ Years',
    about: 'Dr. Laila specializes in gynecological issues, pregnancy diseases, obstetrics issues, prenatal checkups, and pregnancy exercise.',
    fees: 70,
    address: {
      line1: 'Worli, Mumbai',
      line2: 'Tardeo, Mumbai'
    }
  },
  {
    _id: 'doc15',
    name: 'Dr. Rinky Kapoor',
    image: doc15,
    speciality: 'Dermatologist',
    degree: 'MBBS, MD, DMTH, DVD',
    experience: '36+ Years',
    about: 'Dr. Rinky specializes in dermato-cosmetology, platelet rich plasma therapy, micropigmentation, skin grafting, and melanocyte transplantation for the treatment of vitiligo, hair management, allergy management, and allergy immunotherapy.',
    fees: 60,
    address: {
      line1: 'Kandivali East, Mumbai',
      line2: 'Mahim (West), Mumbai'
    }
  }
];
