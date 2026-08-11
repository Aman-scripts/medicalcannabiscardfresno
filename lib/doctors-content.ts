export type DoctorCredential = {
  label: string;
  value: string;
};

export type DoctorEducation = {
  school: string;
  detail: string;
};

export type DoctorLicense = {
  state: string;
  license: string;
  verifyUrl?: string;
};

export type DoctorCondition = {
  name: string;
  note: string;
};

export type DoctorFaq = {
  q: string;
  a: string;
};

export type DoctorProfile = {
  slug: string;
  name: string;
  honorificPrefix: string;
  honorificSuffix: string;
  givenName: string;
  familyName: string;
  jobTitle: string;
  specialty: string;
  image: string;
  shortBio: string;
  longBio: string[];
  roleBio: string[];
  experienceYears: number;
  licensedStatesLabel: string;
  npi: string;
  status: string;
  credentials: DoctorCredential[];
  education: DoctorEducation[];
  licenses: DoctorLicense[];
  conditions: DoctorCondition[];
  faqs: DoctorFaq[];
  verifiedProfiles: string[];
  lastVerified: string;
};

export const doctorsHub = {
  breadcrumb: "Our Doctors",
  eyebrow: "Our Doctors",
  titleBefore: "Meet Our Licensed",
  titleAccent: "Medical Marijuana Doctor",
  heroSubhead:
    "In Fresno, our healthcare team is dedicated to helping patients safely and legally access medical cannabis recommendations. With years of experience and a deep understanding of California's medical marijuana program, our provider guides you through a quick and hassle-free evaluation under Proposition 215 and the Medicinal and Adult-Use Cannabis Regulation and Safety Act (MAUCRSA).",
  trustBadges: [
    "Prop 215 Compliant",
    "HIPAA Secure",
    "99% Approval Rate",
    "Same-Day Recommendations",
  ],
  doctorSection: {
    title: "Our Board-Certified Doctor",
    subhead:
      "A California-licensed MMJ doctor specialized in medical cannabis evaluations and patient care. Committed to excellence, providing personalized, confidential, and compassionate evaluations to help Fresno patients access medical marijuana.",
  },
  whySection: {
    title: "Why Our Doctor Is the Right Choice",
    subhead:
      "Fresno patients deserve a physician who knows the state's rules cold — and treats a cannabis evaluation like real medical care.",
    features: [
      {
        title: "Licensed Professional",
        body: "Fully licensed by the Medical Board of California, ensuring legal compliance and the highest medical standards.",
      },
      {
        title: "Specialized Expertise",
        body: "Specialized knowledge in pediatric and chronic-condition care, offering a personalized medical cannabis recommendation to each patient.",
      },
      {
        title: "HIPAA-Compliant",
        body: "Your medical records and health information are protected under federal HIPAA regulations, ensuring complete privacy and confidentiality.",
      },
      {
        title: "Quick Approval",
        body: "Fast and efficient consultations and recommendations, with priority guidance for accessing medical cannabis.",
      },
      {
        title: "Trusted by Thousands",
        body: "Has served thousands of California patients, consistently earning the highest ratings for professional, compassionate, and reliable cannabis care.",
      },
      {
        title: "Telehealth Access",
        body: "Consult from the comfort of your home via secure video or audio call, in compliance with California telehealth requirements.",
      },
    ],
    ctaNote:
      "Get evaluated by a licensed California physician today and receive your medical marijuana recommendation.",
  },
  processSection: {
    title: "How Your Doctor Evaluates Patients",
    subhead:
      "Four steps, one appointment. Here's exactly what happens between booking and your California recommendation.",
    steps: [
      {
        title: "Medical History Review",
        body: "The physician reviews your submitted medical history, current medications, and documented qualifying conditions prior to the consultation.",
      },
      {
        title: "Virtual Consultation",
        body: "A secure video consultation to discuss your medical condition, treatment goals, and assess whether medical cannabis may be appropriate.",
      },
      {
        title: "Clinical Assessment",
        body: "The physician evaluates your condition against California's qualifying criteria and determines medical appropriateness based on clinical judgment.",
      },
      {
        title: "Recommendation Decision",
        body: "If approved, the physician issues a signed medical cannabis recommendation valid for one year under California law. If not approved, alternative treatment options may be discussed.",
      },
    ],
  },
  faqSection: {
    title: "Frequently Asked Questions",
    subhead: "Everything patients ask before their first Fresno evaluation.",
    faqs: [
      {
        q: "Is the doctor licensed to recommend medical marijuana?",
        a: "Yes. Our doctor is licensed in good standing by the Medical Board of California and is authorized to evaluate and recommend medical cannabis under Proposition 215 and MAUCRSA.",
      },
      {
        q: "What qualifications does the doctor have?",
        a: "Dr. Cheryl Bugailiskis is a board-certified pediatrician with over 15 years of clinical experience. Her credentials, including NPI and California medical license, are publicly verifiable through federal and state registries.",
      },
      {
        q: "How can I speak directly with the doctor?",
        a: "Book an online evaluation through our secure telehealth platform. After you submit your intake form, you'll join a video or audio consultation with the licensed physician assigned to your appointment.",
      },
      {
        q: "How long does a consultation usually take?",
        a: "Most consultations run about 10–15 minutes. If you're approved, your digital recommendation is typically issued the same day.",
      },
      {
        q: "What should I prepare before my appointment?",
        a: "Have a valid photo ID, proof of California residency when requested, a brief summary of your medical history, current medications, and any relevant records that support your qualifying condition.",
      },
      {
        q: "Will the doctor ask for my medical history or records?",
        a: "Yes. The physician reviews your medical history, symptoms, and current treatments to determine whether a medical cannabis recommendation is appropriate under California law.",
      },
      {
        q: "How is my privacy protected?",
        a: "All consultations run on a HIPAA-compliant, encrypted telehealth platform. Your health information is handled under federal privacy standards and is not shared without your permission unless required by law.",
      },
      {
        q: "How does the doctor decide if I qualify for medical marijuana?",
        a: "The physician evaluates your condition against California's qualifying criteria and uses independent clinical judgment. Approval is never guaranteed and is never influenced by pricing or timelines.",
      },
      {
        q: "What happens if my condition isn't approved?",
        a: "If the physician determines you do not qualify, you are covered by our refund policy. The doctor may also discuss alternative treatment options when appropriate.",
      },
      {
        q: "Do I need a Medical Marijuana Identification Card (MMIC) in Fresno?",
        a: "A state MMIC is optional in California — a valid physician recommendation alone is enough to purchase at licensed dispensaries. The MMIC adds a sales-tax exemption and higher possession limits.",
      },
      {
        q: "Does the doctor handle both renewals and first-time evaluations?",
        a: "Yes. Our physician evaluates both first-time Fresno patients and patients renewing an existing medical cannabis recommendation.",
      },
    ],
  },
  scheduleSection: {
    title: "Schedule Your Appointment Today",
    subhead:
      "Receive an expert evaluation and MAUCRSA-compliant medical marijuana recommendation from an experienced California physician, all online and hassle-free.",
    microcopy:
      "Complete the process in 15–30 minutes · 100% online · No office visit required",
  },
} as const;

export const doctors: DoctorProfile[] = [
  {
    slug: "cheryl-bugailiskis",
    name: "Cheryl Bugailiskis, MD",
    honorificPrefix: "Dr.",
    honorificSuffix: "MD",
    givenName: "Cheryl",
    familyName: "Bugailiskis",
    jobTitle: "Medical Cannabis Evaluating Physician (California)",
    specialty: "Specialist in Pediatric Medicine • Medical Cannabis Evaluations",
    image: "/dr-cheryl-bugailiskis.webp",
    shortBio:
      "A board-certified pediatrician with over a decade of clinical experience conducting compliant medical cannabis evaluations.",
    longBio: [
      "Dr. Cheryl-Lynn Marie Bugailiskis is a registered physician listed in the National Provider Identifier registry with an active professional status since 2011. Her credentials are maintained within the federal healthcare provider database managed by the Centers for Medicare & Medicaid Services (CMS).",
      "With experience participating in structured healthcare education and training programs, Dr. Bugailiskis supports patient care through professional medical evaluations and structured clinical consultation processes for qualifying Fresno and California patients.",
    ],
    roleBio: [
      "As a physician working with Medical Cannabis Card Fresno, Dr. Bugailiskis conducts secure online medical evaluations using a HIPAA-compliant telehealth platform. Each consultation is designed to provide a confidential and convenient experience while maintaining professional medical standards.",
      "During consultations, patients receive a comprehensive review of their medical history, discussion of symptoms and qualifying conditions, and a professional evaluation based on individual healthcare needs. The process is structured to ensure clarity, efficiency, and compliance with applicable medical guidelines.",
    ],
    experienceYears: 15,
    licensedStatesLabel: "California",
    npi: "1871882035",
    status: "Active",
    credentials: [
      { label: "NPI Number", value: "1871882035" },
      { label: "Status", value: "Active" },
      { label: "Licensed States", value: "California (primary for Fresno patients)" },
    ],
    education: [
      {
        school: "University of Illinois College of Medicine at Chicago",
        detail: "Residency, Pediatrics, 2011 - 2014",
      },
      {
        school: "American University of the Caribbean School of Medicine",
        detail: "Class of 2011",
      },
    ],
    licenses: [
      {
        state: "California",
        license: "A130557",
        verifyUrl: "https://search.dca.ca.gov/",
      },
    ],
    conditions: [
      { name: "Chronic Pain", note: "California qualifying evaluation" },
      { name: "PTSD", note: "Physician-assessed eligibility" },
      { name: "Anxiety Disorders", note: "Physician-assessed eligibility" },
      { name: "Cancer-Related Symptoms", note: "California qualifying evaluation" },
    ],
    faqs: [
      {
        q: "Which states can Dr. Bugailiskis evaluate me in?",
        a: "For Medical Cannabis Card Fresno patients, Dr. Bugailiskis evaluates California residents, including Fresno patients, under California's medical cannabis program. If another licensed physician is assigned to your appointment, you will still be evaluated by a California-licensed doctor.",
      },
      {
        q: "What conditions does Dr. Bugailiskis evaluate?",
        a: "Dr. Bugailiskis evaluates patients for conditions recognized under California's medical cannabis program. Common examples include chronic pain, PTSD, anxiety, cancer-related symptoms, insomnia, multiple sclerosis, arthritis, Crohn's disease, migraines, glaucoma, and epilepsy. Final eligibility is determined during your consultation.",
      },
      {
        q: "How long does an evaluation with Dr. Bugailiskis take?",
        a: "Most consultations run 10–15 minutes. Dr. Bugailiskis reviews your medical history, asks about your symptoms and any current medications, and discusses whether medical cannabis is appropriate for your situation. If approved, your certification is typically issued the same day.",
      },
      {
        q: "What can I expect during the consultation?",
        a: "A real medical evaluation. Dr. Bugailiskis will ask about your symptoms, medical history, current medications, allergies, and what you've tried before. She'll discuss whether medical cannabis fits your situation and how to use it responsibly. The consultation is documented in your medical record.",
      },
      {
        q: "Is the consultation confidential?",
        a: "Yes. All consultations are conducted on a HIPAA-compliant telehealth platform with encrypted transmission. Your medical information is protected under federal privacy law and is not shared with employers, insurance companies, or other parties without your written consent unless required by law.",
      },
      {
        q: "What happens if Dr. Bugailiskis isn't available when I request her?",
        a: "If Dr. Bugailiskis is fully booked or unavailable, your evaluation will be assigned to another California-licensed physician on our network. Every evaluating physician holds an active medical license and follows the same credentialing standards.",
      },
    ],
    verifiedProfiles: [
      "Doximity",
      "U.S. News Health",
      "WebMD",
      "Healthline",
      "Vitals",
      "LinkedIn",
    ],
    lastVerified: "May 2026",
  },
];

export function getDoctorBySlug(slug: string) {
  return doctors.find((doctor) => doctor.slug === slug);
}

export function getDoctorSlugs() {
  return doctors.map((doctor) => doctor.slug);
}
