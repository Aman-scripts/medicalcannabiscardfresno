export type LegalSection = {
  heading?: string | null;
  paragraphs?: string[];
  listItems?: string[];
};

export type LegalPage = {
  slug: string;
  href: string;
  navLabel: string;
  title: string;
  lastUpdated?: string | null;
  description: string;
  sections: LegalSection[];
};

export const legalNav: { href: string; label: string }[] = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/hipaa-compliance", label: "HIPAA Compliance" },
  { href: "/consent-for-telehealth", label: "Consent for Telehealth" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/shipment-policy", label: "Shipment Policy" },
  { href: "/accessibility-statement", label: "Accessibility Statement" },
  { href: "/editorial-policy", label: "Editorial Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export const privacyPolicy: LegalPage = {
  slug: "privacy",
  href: "/privacy",
  navLabel: "Privacy Policy",
  title: "Privacy Policy",
  lastUpdated: "16 September 2025",
  description:
    "How Medical Cannabis Card Fresno collects, uses, and protects your information.",
  sections: [
    {
      paragraphs: [
        "At Medical Cannabis Card Fresno, protecting your privacy is part of our commitment to patient care. This policy explains what information we collect, how it is used, and the choices you have.",
      ],
    },
    {
      heading: "Our Commitment",
      paragraphs: [
        "We respect your privacy and safeguard your personal, medical, and payment details. All practices comply with HIPAA, the California Consumer Privacy Act (CCPA), the California Privacy Rights Act (CPRA), state laws, and Fresno local ordinances.",
      ],
    },
    {
      heading: "Information We Collect",
      paragraphs: ["We may collect the following types of information:"],
      listItems: [
        "Personal Details: Name, contact information, ID, and proof of Fresno residency.",
        "Medical Information: Health history, conditions, medications, and prior cannabis use, if shared.",
        "Technical Data: Device type, browser, IP address, cookies, and site usage.",
        "Payment Details: Processed securely through third-party providers; we do not store full card numbers.",
        "Account & Location Data: Basic account credentials (when you sign up), ZIP code, or general location to confirm eligibility.",
        "Children’s Privacy: Our services are not intended for children under 13. We do not knowingly collect personal information from anyone under 13 and will delete such data if discovered.",
      ],
    },
    {
      heading: "Why We Collect Information",
      paragraphs: ["We use the information collected to:"],
      listItems: [
        "Confirm your identity, age, and residency.",
        "Provide accurate medical cannabis evaluations.",
        "Send service updates, reminders, and important notifications (via email, SMS, or phone calls).",
        "Meet California and Fresno legal requirements.",
        "Improve site functionality, security, and services.",
        "Understand how our site is used (through cookies and analytics) and personalize your experience.",
      ],
    },
    {
      heading: "Cookies and Analytics",
      paragraphs: [
        "We use cookies and similar technologies to analyze website traffic and improve user experience. You can accept or deny cookies in your browser settings. Denying cookies may limit personalized features.",
        "We may also use trusted analytics providers (such as Google Analytics or Microsoft Clarity) to collect anonymous data like page views, time spent on site, and device/browser information. This helps us optimize our services and detect fraud or security issues.",
      ],
    },
    {
      heading: "Do Not Sell or Share My Personal Information (CPRA)",
      paragraphs: [
        "Under the CPRA, California residents have the right to opt out of the sale or sharing of their personal information. While Medical Cannabis Card Fresno does not sell personal information, we still provide a “Do Not Sell or Share My Personal Information” option on our website.",
      ],
    },
    {
      heading: "Information Sharing",
      paragraphs: [
        "We do not sell or trade your information. Data may only be shared with:",
      ],
      listItems: [
        "Licensed doctors for evaluation purposes",
        "Trusted service providers under strict privacy agreements",
        "Government authorities, when required by law or regulation",
      ],
    },
    {
      heading: "How We Protect Data",
      paragraphs: ["We use industry-standard safeguards, including:"],
      listItems: [
        "Encrypted online connections.",
        "HIPAA-compliant record storage.",
        "Restricted staff access with authentication controls.",
        "End-to-end encryption for sensitive data.",
        "Regular monitoring and system checks.",
      ],
    },
    {
      heading: "Data Retention",
      paragraphs: [
        "We retain personal data only as long as necessary to provide services and comply with legal or business obligations. This may include:",
      ],
      listItems: [
        "Legal requirements under state or federal law.",
        "Protecting or defending our legal rights.",
        "Maintaining accurate business and financial records.",
      ],
    },
    {
      paragraphs: [
        "Once data is no longer required, it is securely deleted.",
      ],
    },
    {
      heading: "Your Rights",
      paragraphs: ["Under CCPA and CPRA, you may request to:"],
      listItems: [
        "Know the categories and specific pieces of personal information we collect.",
        "Understand the sources, purposes, and third parties with whom data is shared.",
        "View or update your records.",
        "Receive a copy of your data in a secure format.",
        "Adjust your communication preferences.",
        "Request deletion of your account and related data (unless retention is required by law).",
      ],
    },
    {
      heading: "Contact Us",
      paragraphs: [
        "For privacy-related questions or requests, reach out to our Medical Cannabis Card Fresno support team. We respond within 24 hours.",
        "Email: contact@medicalcannabiscardfresno.com",
        "Phone: 5592344795",
      ],
    },
    {
      heading: "Policy Updates",
      paragraphs: [
        "We may update this Privacy Policy at any time. Updates will appear here with a revised “Last Updated” date. Continued use of our services means acceptance of the updated policy.",
      ],
    },
  ],
};

export const termsOfUse: LegalPage = {
  slug: "terms",
  href: "/terms",
  navLabel: "Terms of Use",
  title: "Terms of Use",
  lastUpdated: "16 September 2025",
  description:
    "Terms and conditions for using Medical Cannabis Card Fresno services.",
  sections: [
    {
      paragraphs: [
        "Welcome to Medical Cannabis Card Fresno. By accessing or using our website, you agree to the following terms and conditions. Please review them carefully before continuing.",
      ],
    },
    {
      heading: "Who We Are",
      paragraphs: [
        "Medical Cannabis Card Fresno provides access to licensed California physicians who evaluate patients for medical cannabis eligibility under state law. We are not a dispensary or cannabis provider. Card approvals are made only by licensed doctors after proper evaluation.",
      ],
    },
    {
      heading: "Who Can Use Our Services",
      listItems: [
        "You must be 18 or older.",
        "Patients under 18 require parent/guardian consent in line with California law.",
        "You must be a California resident with a valid ID, and proof of Fresno residency is required.",
      ],
    },
    {
      heading: "How You May Use Our Services",
      paragraphs: [
        "When using our website or booking an evaluation, you agree to:",
      ],
      listItems: [
        "Provide true and accurate information.",
        "Use the platform only for lawful purposes.",
        "Keep your account details secure.",
        "Follow California’s medical cannabis regulations and applicable Fresno ordinances.",
      ],
    },
    {
      heading: "You Agree Not To",
      listItems: [
        "Submit false medical records.",
        "Engage in fraud or unauthorized payments.",
        "Attempt to hack, disrupt, or misuse our systems.",
        "Copy, resell, or repurpose our website content.",
      ],
    },
    {
      heading: "Important Medical Notice",
      listItems: [
        "Information on this site is for educational purposes only.",
        "It is not a substitute for direct medical advice from your healthcare provider.",
        "Cannabis remains illegal under federal law. Recommendations are valid only in California under state guidelines.",
        "The effectiveness of medical cannabis varies by patient; no guarantees of outcome are made.",
      ],
    },
    {
      heading: "Payments, Refunds & Cancellations",
      listItems: [
        "Payments: All fees must be paid before the consultation. We accept most major credit/debit cards.",
        "Refunds: Provided when your medical cannabis card is not approved or the recommendation isn’t delivered within 24 to 48 hours. Not available after issuance.",
        "Cancellations: You may reschedule or cancel with 24 to 48 hours’ notice. Late cancellations may incur fees.",
      ],
    },
    {
      heading: "Our Rights & Content Ownership",
      listItems: [
        "All text, images, graphics, videos, and other materials on this site belong to Medical Cannabis Card Fresno.",
        "You may not copy, share, or modify content without written permission.",
      ],
    },
    {
      heading: "Liability & Responsibility",
      paragraphs: ["We are not responsible for:"],
      listItems: [
        "Any indirect, incidental, or unexpected damages from using our services.",
        "Third-party websites linked from our site.",
        "Results or effectiveness of medical cannabis treatment.",
      ],
    },
    {
      paragraphs: [
        "Our maximum liability is limited to the amount you paid for the service in question.",
      ],
    },
    {
      heading: "Your Agreement to Protect Us",
      paragraphs: [
        "By using this site, you agree to indemnify and hold harmless Medical Cannabis Card Fresno, its staff, and physicians from any claims, losses, or expenses that result from misuse of our services or violation of these Terms.",
      ],
    },
    {
      heading: "Privacy Protection",
      paragraphs: [
        "Your use of our site is also subject to our Privacy Policy, which explains how we collect, store, and safeguard your information.",
      ],
    },
    {
      heading: "Ending or Changing Services",
      listItems: [
        "We may suspend or terminate your access if you violate these Terms.",
        "We may update, modify, or discontinue parts of the website at any time.",
        "Certain obligations (like payment, liability limits, and intellectual property) will continue even after termination.",
      ],
    },
    {
      heading: "Governing Law",
      paragraphs: [
        "These Terms are governed by the laws of California. Any disputes must be resolved in the courts of Fresno County, CA.",
      ],
    },
    {
      heading: "Updates to Terms",
      paragraphs: [
        "We may revise these Terms at any time without prior notice. Updates are effective once posted. Continued use of the site means you accept the changes.",
      ],
    },
  ],
};

export const refundPolicy: LegalPage = {
  slug: "refund-policy",
  href: "/refund-policy",
  navLabel: "Refund Policy",
  title: "Refund Policy",
  lastUpdated: "16 September 2025",
  description:
    "How Medical Cannabis Card Fresno handles refunds for consultations and card services.",
  sections: [
    {
      paragraphs: [
        "Your trust is our priority at Medical Cannabis Card Fresno. This policy explains how we handle refunds for telehealth consultations and medical cannabis card services.",
      ],
    },
    {
      heading: "Who Can Request a Refund",
      paragraphs: ["Refunds are available to patients who:"],
      listItems: [
        "Did not complete their consultation due to technical issues or provider absence.",
        "Canceled 24 hours or more before their appointment.",
        "Were found ineligible for a medical cannabis recommendation.",
        "Were charged twice for the same service.",
      ],
    },
    {
      paragraphs: [
        "All refund requests must be submitted within 30 days of the original transaction.",
      ],
    },
    {
      heading: "When Refunds Are Not Available",
      paragraphs: ["Refunds cannot be provided if:"],
      listItems: [
        "Your consultation or recommendation has already been completed.",
        "You missed your appointment or canceled it less than 24 hours before.",
        "You paid state or third-party fees (e.g., MMIC processing, background checks).",
        "You simply changed your mind after booking.",
      ],
    },
    {
      heading: "How to Submit a Refund Request",
      paragraphs: ["Follow these steps to request a refund:"],
    },
    {
      heading: "1. Gather Your Information",
      listItems: [
        "Full name used for booking",
        "Email linked to your account",
        "Transaction ID or receipt",
        "Appointment date",
        "Reason for refund",
        "Any supporting documents",
      ],
    },
    {
      heading: "2. Submit Your Request",
      listItems: [
        "Email: contact@medicalcannabiscardfresno.com",
        "Phone: 5592344795, Mon to Fri, 9 AM to 6 PM PST",
      ],
    },
    {
      heading: "3. Processing",
      listItems: [
        "Refunds are reviewed within 24 to 48 hours.",
        "Approved refunds are issued within 5 to 7 business days.",
      ],
    },
    {
      heading: "Partial Refunds",
      paragraphs: ["Partial refunds may be considered if:"],
      listItems: [
        "Your consultation starts, but cannot be completed due to technical issues.",
        "Platform interruptions prevent full service delivery.",
      ],
    },
    {
      paragraphs: [
        "Partial refund amounts depend on how much of the consultation was completed.",
      ],
    },
    {
      heading: "Refund Method & Security",
      listItems: [
        "Refunds are issued to the original payment method.",
        "All payments are handled securely through encrypted systems.",
        "If your payment method is inactive, our support team will arrange an alternative.",
      ],
    },
    {
      heading: "Additional Notes",
      listItems: [
        "Always review fees, services, and policies before booking.",
        "Contact our support team with any questions regarding refunds.",
        "Refunds are designed to be fair, transparent, and timely.",
      ],
    },
  ],
};

export const hipaaCompliance: LegalPage = {
  slug: "hipaa-compliance",
  href: "/hipaa-compliance",
  navLabel: "HIPAA Compliance",
  title: "HIPAA Compliance",
  lastUpdated: "16 September 2025",
  description:
    "How Medical Cannabis Card Fresno protects patient health information under HIPAA.",
  sections: [
    {
      paragraphs: [
        "Medical Cannabis Card Fresno is committed to protecting your protected health information (PHI) in accordance with the Health Insurance Portability and Accountability Act (HIPAA) and applicable California privacy laws.",
      ],
    },
    {
      heading: "1. Our Commitment",
      paragraphs: [
        "We maintain administrative, technical, and physical safeguards designed to protect the confidentiality, integrity, and availability of your health information. Access to PHI is limited to authorized personnel and licensed providers who need it to deliver care or support your evaluation.",
      ],
    },
    {
      heading: "2. How We Protect Your Information",
      listItems: [
        "Encrypted transmission of sensitive data where appropriate.",
        "Secure systems and access controls for staff and providers.",
        "Business Associate Agreements with vendors that handle PHI.",
        "Staff training on privacy and security practices.",
        "Monitoring and response procedures for potential security incidents.",
      ],
    },
    {
      heading: "3. How We Use and Share PHI",
      paragraphs: [
        "We use and disclose PHI only as permitted or required by law, including to:",
      ],
      listItems: [
        "Provide telehealth evaluations and related services.",
        "Coordinate care with licensed physicians and clinical staff.",
        "Process payments and maintain required records.",
        "Comply with legal, regulatory, or law-enforcement requests when required.",
      ],
    },
    {
      heading: "4. Your Rights",
      paragraphs: [
        "Depending on applicable law, you may have rights to access, request corrections to, receive an accounting of certain disclosures of, or request restrictions on certain uses of your PHI. To exercise these rights, contact our support team.",
      ],
    },
    {
      heading: "5. Questions or Concerns",
      paragraphs: [
        "If you have questions about our HIPAA practices, email contact@medicalcannabiscardfresno.com or call (559) 234-4795. We respond within 24 hours whenever possible.",
      ],
    },
  ],
};

export const consentForTelehealth: LegalPage = {
  slug: "consent-for-telehealth",
  href: "/consent-for-telehealth",
  navLabel: "Consent for Telehealth",
  title: "Consent for Telehealth",
  lastUpdated: "16 September 2025",
  description:
    "Informed consent for telehealth medical cannabis evaluations in Fresno, California.",
  sections: [
    {
      paragraphs: [
        "By booking or participating in a telehealth evaluation with Medical Cannabis Card Fresno, you acknowledge and consent to receiving healthcare services remotely by video or audio, as permitted under California law (including Business and Professions Code § 2290.5).",
      ],
    },
    {
      heading: "1. Nature of Telehealth Services",
      paragraphs: [
        "Telehealth allows you to consult with a licensed California healthcare provider without an in-person visit. The provider will review your information, discuss your medical history and qualifying condition(s), and determine whether a medical cannabis recommendation is appropriate.",
      ],
    },
    {
      heading: "2. Benefits and Limitations",
      listItems: [
        "Benefits may include convenience, faster access, and reduced travel.",
        "Limitations may include technology failures, reduced ability to perform a full physical exam, and potential delays if your connection is unstable.",
        "Your provider may determine that telehealth is not appropriate and recommend an in-person evaluation instead.",
      ],
    },
    {
      heading: "3. Privacy and Security",
      paragraphs: [
        "Telehealth sessions are conducted through platforms intended to protect patient privacy. You agree to join from a reasonably private location and not record the session without permission. See our Privacy Policy and HIPAA Compliance page for more detail.",
      ],
    },
    {
      heading: "4. Your Responsibilities",
      listItems: [
        "Provide accurate identity, residency, and medical information.",
        "Use a device and internet connection suitable for video or audio consultation.",
        "Disclose relevant medications, conditions, and allergies.",
        "Ask questions if you do not understand any part of the evaluation.",
      ],
    },
    {
      heading: "5. Right to Withdraw Consent",
      paragraphs: [
        "You may withdraw telehealth consent at any time before or during the consultation. Withdrawal may mean we cannot complete a remote evaluation, and refund eligibility will follow our Refund Policy.",
      ],
    },
    {
      heading: "6. Acknowledgment",
      paragraphs: [
        "By continuing with a booking or consultation, you confirm that you understand the nature, benefits, and limitations of telehealth, and that you voluntarily consent to receive services in this manner.",
      ],
    },
  ],
};

export const accessibilityStatement: LegalPage = {
  slug: "accessibility-statement",
  href: "/accessibility-statement",
  navLabel: "Accessibility Statement",
  title: "Accessibility Statement",
  lastUpdated: "16 September 2025",
  description:
    "Our commitment to making Medical Cannabis Card Fresno accessible to all users.",
  sections: [
    {
      paragraphs: [
        "Medical Cannabis Card Fresno aims to provide a website experience that is accessible to people with disabilities and usable across common devices and assistive technologies.",
      ],
    },
    {
      heading: "1. Our Commitment",
      paragraphs: [
        "We work to align our site with widely recognized accessibility practices, including principles from the Web Content Accessibility Guidelines (WCAG). We continuously improve navigation, contrast, readability, and interactive elements.",
      ],
    },
    {
      heading: "2. Accessibility Measures",
      listItems: [
        "Semantic headings and structured page layouts.",
        "Keyboard-friendly navigation for key interactive elements.",
        "Text alternatives for meaningful images where provided.",
        "Readable typography and brand color contrast for primary content.",
        "Responsive layouts for desktop and mobile screens.",
      ],
    },
    {
      heading: "3. Known Limitations",
      paragraphs: [
        "Some third-party content, such as embedded maps or external widgets, may not fully meet the same accessibility standards as our core pages. We welcome feedback so we can prioritize improvements.",
      ],
    },
    {
      heading: "4. Feedback",
      paragraphs: [
        "If you encounter an accessibility barrier, contact us at contact@medicalcannabiscardfresno.com or (559) 234-4795. Please include the page URL and a brief description of the issue. We will review your request and respond as soon as possible.",
      ],
    },
  ],
};

export const editorialPolicy: LegalPage = {
  slug: "editorial-policy",
  href: "/editorial-policy",
  navLabel: "Editorial Policy",
  title: "Editorial Policy",
  lastUpdated: "16 September 2025",
  description:
    "How Medical Cannabis Card Fresno creates and reviews educational content.",
  sections: [
    {
      paragraphs: [
        "This Editorial Policy explains how Medical Cannabis Card Fresno develops, reviews, and updates educational content about medical cannabis access in Fresno and California.",
      ],
    },
    {
      heading: "1. Purpose of Our Content",
      paragraphs: [
        "Our content is intended to educate patients about qualifying conditions, the evaluation process, card options, and related California regulations. It is not a substitute for personalized medical advice from a licensed clinician.",
      ],
    },
    {
      heading: "2. Accuracy and Review",
      listItems: [
        "We strive to keep information accurate, clear, and up to date.",
        "Content related to medical or legal topics is reviewed against current California guidance and our clinical workflow.",
        "We update pages when laws, processes, pricing, or service details change.",
      ],
    },
    {
      heading: "3. Sources",
      paragraphs: [
        "When we reference laws or programs, we rely on publicly available California statutes, regulations, and reputable health-education sources. Clinical decisions remain with licensed providers after an individual evaluation.",
      ],
    },
    {
      heading: "4. Independence",
      paragraphs: [
        "Educational articles and service pages are written to inform patients. Marketing offers or partner mentions, if any, will be presented clearly and will not replace medical judgment.",
      ],
    },
    {
      heading: "5. Corrections",
      paragraphs: [
        "If you believe content is inaccurate or outdated, email contact@medicalcannabiscardfresno.com with the page link and details. We will investigate and correct material errors when appropriate.",
      ],
    },
  ],
};

export const shipmentPolicy: LegalPage = {
  slug: "shipment-policy",
  href: "/shipment-policy",
  navLabel: "Shipment Policy",
  title: "Shipment Policy",
  lastUpdated: null,
  description:
    "Delivery timelines and support for your Medical Cannabis Card Fresno plastic card.",
  sections: [
    {
      paragraphs: [
        "At Medical Cannabis Card Fresno, we prioritize the safe and timely delivery of your medical marijuana card. Once approved, your card will be shipped and is expected to arrive within 10 to 12 business days. In the unlikely event that you do not receive your card, or if it arrives damaged or incorrect, our team is here to help and will respond within 24 hours.",
        "We provide 24/7 support to resolve any delivery issues promptly. For assistance, please contact us at contact@medicalcannabiscardfresno.com or call us at (559) 234-4795. Your satisfaction and timely access to your medical cannabis card are our top priorities.",
      ],
    },
  ],
};

export const disclaimer: LegalPage = {
  slug: "disclaimer",
  href: "/disclaimer",
  navLabel: "Disclaimer",
  title: "Medical Disclaimer",
  lastUpdated: null,
  description:
    "Educational disclaimer for Medical Cannabis Card Fresno information and services.",
  sections: [
    {
      paragraphs: [
        "The information provided by Medical Cannabis Card Fresno is for educational and informational purposes only. Approval and issuance of a medical cannabis card does not constitute medical advice or treatment. Always consult a licensed healthcare professional regarding any medical condition or questions about medical cannabis use. Use of medical cannabis should be in accordance with applicable state laws and your physician’s recommendations.",
      ],
    },
  ],
};

export const legalPages = [
  privacyPolicy,
  hipaaCompliance,
  consentForTelehealth,
  termsOfUse,
  refundPolicy,
  shipmentPolicy,
  accessibilityStatement,
  editorialPolicy,
  disclaimer,
] as const;
