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
  { href: "/policy/privacy/", label: "Privacy Policy" },
  { href: "/policy/hipaa-compliance/", label: "HIPAA Compliance" },
  { href: "/policy/consent-for-telehealth/", label: "Consent to Telehealth" },
  { href: "/policy/terms/", label: "Terms of Use" },
  { href: "/policy/refund-policy/", label: "Refund Policy" },
  { href: "/policy/shipment-policy/", label: "Shipment Policy" },
  { href: "/policy/accessibility-statement/", label: "Accessibility Statement" },
  { href: "/policy/editorial-policy/", label: "Editorial Policy" },
  { href: "/policy/disclaimer/", label: "Disclaimer & Policies" },
];

export const privacyPolicy: LegalPage = {
  slug: "privacy",
  href: "/policy/privacy/",
  navLabel: "Privacy Policy",
  title: "Privacy Policy",
  lastUpdated: null,
  description:
    "Learn how Medical Cannabis Card Fresno collects, uses, and protects your personal and health information during your medical marijuana evaluation.",
  sections: [
    {
      paragraphs: [
        "At Medical Cannabis Card Fresno, protecting your privacy matters to us just as much as helping you get your medical marijuana recommendation. This policy explains what information we collect when you visit our website or book an evaluation with us, how we use it, and the steps we take to keep it safe.",
        "We know that health information is sensitive. That's why our practices are built around HIPAA principles wherever they apply, and why we limit who can access your records to only the people who actually need them to do their job.",
        "By using our website or booking a consultation through us, you're agreeing to the practices outlined below. Please take a few minutes to read through it.",
      ],
    },
    {
      heading: "What Information We Collect",
      paragraphs: [
        "When you schedule an evaluation with us, we ask for the basics needed to confirm your identity and connect you with a licensed physician. That includes your name, contact details, and some form of identification, along with any health information relevant to your evaluation.",
        "We also collect some technical details automatically when you browse our site, things like your IP address, device type, and how you interact with our pages. We rely on tools such as Google Analytics to understand this and to keep our website running smoothly and securely.",
      ],
    },
    {
      heading: "Your Health Information",
      paragraphs: [
        "When you speak with one of our licensed physicians, they'll ask about your medical history and current health to determine whether a medical marijuana recommendation is appropriate for you. This information is handled carefully and used only for that purpose.",
        "We don't use your health details for marketing, and we don't hand them over to anyone outside our care team without your permission, unless we're legally required to.",
      ],
    },
    {
      heading: "How We Use Your Information",
      paragraphs: ["Generally speaking, we use what we collect to:"],
      listItems: [
        "Match you with a licensed physician for your evaluation",
        "Confirm your identity and eligibility",
        "Process your payment and schedule your appointment",
        "Send you appointment reminders and updates",
        "Keep accurate records for compliance purposes",
        "Improve how our website works",
      ],
    },
    {
      heading: "Payments",
      paragraphs: [
        "All payments go through secure, third party processors. We never see or store your full card number on our own servers. If you're redirected to a payment provider's site to finish checking out, their privacy policy covers what happens with your information there.",
      ],
    },
    {
      heading: "Cookies and Website Analytics",
      paragraphs: [
        "Like most websites, ours uses cookies to help things run better and to give us a sense of how people use our site. You're free to adjust your browser to block cookies, though a few features might not work quite right if you do.",
      ],
    },
    {
      heading: "Staying in Touch",
      paragraphs: [
        "If you give us a phone number or email, we may use it to send appointment confirmations, reminders, or the occasional update about our services. You can opt out of anything promotional whenever you'd like. We won't sell your email or phone number to anyone.",
      ],
    },
    {
      heading: "Who We Share Information With",
      paragraphs: [
        "We only share what's necessary, and only with:",
      ],
      listItems: [
        "The licensed physician handling your evaluation",
        "Trusted vendors who help us with hosting, payments, or communication",
        "Legal authorities, if we're required by law to disclose something",
      ],
    },
    {
      paragraphs: ["We do not sell your personal or health information. Period."],
    },
    {
      heading: "How We Protect Your Data",
      paragraphs: [
        "We use a combination of technical and administrative safeguards, including encryption, to keep your information secure. That said, no online system is completely risk free, and we can't promise absolute security, though we work hard to minimize that risk.",
      ],
    },
    {
      heading: "Your Rights as a California Resident",
      paragraphs: [
        "Since we serve patients here in Fresno and throughout California, the California Consumer Privacy Act (CCPA) gives you a few specific rights, including the ability to:",
      ],
      listItems: [
        "Ask what personal information we have on file for you",
        "Request that we delete your personal information",
        "Know that we don't sell your data, so there's nothing to opt out of there",
      ],
    },
    {
      paragraphs: [
        "If you'd like to make any of these requests, just reach out to us using the contact details below. We'll get back to you within 30 days.",
      ],
    },
    {
      heading: "Children's Privacy",
      paragraphs: [
        "Our services are meant for adults 18 and older. We don't knowingly collect information from anyone under 18, and if we ever find out we have, we'll delete it right away.",
      ],
    },
    {
      heading: "Questions About This Policy",
      paragraphs: [
        "If anything here isn't clear or you'd like to submit a privacy request, reach out to us anytime:",
        "Medical Cannabis Card Fresno",
        "Phone: (559) 234-4795",
        "Email: contact@medicalcannabiscardfresno.com",
        "Address: 1510 C St, Fresno, CA 93706",
      ],
    },
  ],
};

export const termsOfUse: LegalPage = {
  slug: "terms",
  href: "/policy/terms/",
  navLabel: "Terms of Use",
  title: "Terms of Use",
  lastUpdated: null,
  description:
    "Read the terms that govern your use of Medical Cannabis Card Fresno's website and telehealth medical marijuana evaluation services.",
  sections: [
    {
      heading: "DISCLAIMER",
      paragraphs: [
        "Please read these terms carefully before using our website or booking an evaluation with us.",
        "By accessing this website or using any of our services, you're agreeing to be bound by these Terms of Use along with our Privacy Policy. If you continue using the site after we update these terms, that counts as your acceptance of the changes.",
        "Medical Cannabis Card Fresno is a platform that connects patients in Fresno with independent, licensed physicians for medical marijuana evaluations. We don't practice medicine ourselves, and we can't promise that any particular evaluation will result in a recommendation. That decision always rests with the physician who examines you.",
      ],
    },
    {
      heading: "1. What We Do",
      paragraphs: [
        "Medical Cannabis Card Fresno helps people in Fresno connect with independent, state licensed physicians for medical marijuana evaluations. We're not a medical practice ourselves. Every evaluation and every recommendation comes from the judgment of the physician you're paired with, not from us.",
        "Our job is to handle the administrative and technical side of things, scheduling, video connections, and communication, so you can get in front of a licensed doctor without the hassle of an in person visit.",
        "If a recommendation is issued, it's issued entirely at the discretion of the physician after they've assessed you individually. We have no influence over that outcome.",
      ],
    },
    {
      heading: "2. Who Can Use Our Services",
      paragraphs: [
        "To use our services, you need to be located in California, since that's where our services are offered and where our physicians are licensed to practice. By using this site, you're confirming that:",
      ],
      listItems: [
        "You're at least 18 years old",
        "You're physically located in California at the time of your evaluation",
        "The information you give us during registration and your evaluation is accurate and truthful",
      ],
    },
    {
      paragraphs: [
        "We rely on you to comply with all applicable California and federal laws around medical marijuana use and possession. If regulations change in a way that affects our ability to offer services, we reserve the right to adjust or pause them accordingly.",
      ],
    },
    {
      heading: "3. The Physician Patient Relationship",
      paragraphs: [
        "A physician patient relationship only begins once a licensed doctor agrees to evaluate you and starts your assessment. We don't employ or supervise these physicians in a clinical sense. They're independent professionals making their own medical judgments.",
        "Any advice, diagnosis, or recommendation you receive comes directly from that physician, not from Medical Cannabis Card Fresno.",
      ],
    },
    {
      heading: "4. Telehealth Consent",
      paragraphs: [
        "Using our services means you're agreeing to receive your evaluation through telehealth, meaning video calls, messaging, or other digital communication rather than an in person visit.",
        "A few things worth understanding upfront:",
      ],
      listItems: [
        "A virtual visit isn't identical to seeing a doctor in person",
        "Some conditions might not be a good fit for a remote evaluation",
        "Technical hiccups can occasionally delay or interrupt a session",
        "Your physician may decide an in person exam is needed instead",
      ],
    },
    {
      paragraphs: [
        "Telehealth through our platform isn't meant for medical emergencies. If you're experiencing one, please call 911 or go to your nearest emergency room.",
      ],
    },
    {
      heading: "5. Privacy",
      paragraphs: [
        "How we collect, use, and protect your information, including anything shared during your evaluation, is covered in our Privacy Policy. We handle all health information in line with HIPAA privacy and security standards. Using our site means you've read and agree to that policy as well.",
      ],
    },
    {
      heading: "6. Where Federal and State Law Stand",
      paragraphs: [
        "Cannabis laws can be confusing because state and federal rules don't line up. California permits medical marijuana use under state law, but marijuana is still classified as a Schedule I substance federally. That mismatch means certain activities, like possession or transport, can carry federal risk even when they're legal under California law.",
        "We operate in line with California's rules for medical marijuana evaluations, but we can't speak to federal legality, and nothing here should be taken as legal advice.",
      ],
    },
    {
      heading: "7. Your Responsibilities",
      paragraphs: ["When you use our platform, you agree to:"],
      listItems: [
        "Give us accurate and honest information",
        "Keep your account details private and secure",
        "Follow all applicable laws while using our services",
      ],
    },
    {
      paragraphs: ["You agree not to:"],
      listItems: [
        "Submit false or misleading information",
        "Use someone else's identity to access our services",
        "Try to break into our systems or access accounts that aren't yours",
        "Interfere with how the platform runs",
        "Copy, alter, or misuse our website's content or technology",
      ],
    },
    {
      paragraphs: [
        "If we find that you've violated these terms or used our platform in a way that's unlawful or harmful, we can suspend or terminate your access.",
      ],
    },
    {
      heading: "8. Fees and Refunds",
      paragraphs: [
        "We'll always let you know the cost of your evaluation before you confirm your appointment. Whether you qualify for a refund depends on a few factors, including the outcome of your evaluation and the timing of your request. You can find the full breakdown in our Refund Policy.",
      ],
    },
    {
      heading: "9. Limits on Our Liability",
      paragraphs: [
        "To the extent allowed by California law, Medical Cannabis Card Fresno and our team aren't responsible for indirect or consequential damages related to your use of our services, things like lost profits or business interruptions.",
        "If we are found liable for anything, our total responsibility won't exceed what you paid us in the twelve months before the issue arose. Some parts of California law may limit how far this protection goes, in which case we'll follow whatever the law allows.",
      ],
    },
    {
      heading: "10. Indemnification",
      paragraphs: [
        "If a claim comes up because of something you did, misusing our services, breaking these terms, breaking the law, or infringing on someone else's rights, you agree to cover any resulting costs, damages, or legal fees we incur as a result. This responsibility continues even after you stop using our services.",
      ],
    },
    {
      heading: "11. Governing Law",
      paragraphs: [
        "These terms are governed by the laws of the State of California, regardless of conflict of law principles. Any dispute related to these terms will be handled in California state or federal courts, and you agree to that jurisdiction.",
        "Claims must be brought individually, not as part of a class action. That said, either of us can still seek an injunction or similar relief when it's appropriate.",
      ],
    },
    {
      heading: "12. Changes to These Terms",
      paragraphs: [
        "We may update these terms from time to time. Once a revised version is posted, it takes effect immediately, and continuing to use our site afterward means you accept the changes. We also reserve the right to adjust or pause parts of our service as needed for legal or operational reasons.",
      ],
    },
    {
      heading: "13. Ending Access",
      paragraphs: [
        "We can suspend or end your access to our platform at any time if we believe you've violated these terms or used our services in a harmful or unlawful way. Ending your access doesn't erase any obligations you already had, like unpaid fees. Sections that are meant to last beyond termination, like liability limits and indemnification, will continue to apply.",
      ],
    },
    {
      heading: "14. Contact Us",
      paragraphs: [
        "Questions about these terms? Reach out anytime.",
        "Medical Cannabis Card Fresno",
        "Phone: (559) 234-4795",
        "Email: contact@medicalcannabiscardfresno.com",
        "Address: 1510 C St, Fresno, CA 93706",
      ],
    },
  ],
};

export const refundPolicy: LegalPage = {
  slug: "refund-policy",
  href: "/policy/refund-policy/",
  navLabel: "Refund Policy",
  title: "Refund Policy",
  lastUpdated: null,
  description:
    "Read our refund policy, including when you qualify for a full refund on your medical marijuana evaluation and how to request one.",
  sections: [
    {
      paragraphs: [
        "We stand behind our evaluations with a 100% money back guarantee, as long as your situation meets the conditions below. This policy covers the medical marijuana evaluation services we provide here in Fresno.",
        "Please take a moment to read through this before booking your appointment.",
      ],
    },
    {
      heading: "When You Qualify for a Full Refund",
      paragraphs: [
        "You're eligible for a complete refund of your evaluation fee in these situations:",
        "The physician doesn't approve you. If the licensed physician reviews your case and determines you don't qualify for a medical marijuana recommendation, you get your money back.",
        "We miss our turnaround window. If your approved recommendation isn't delivered within the timeframe we've promised, typically 24 to 48 hours after your evaluation is approved, you're entitled to a refund.",
        "There's a verification issue on our end. If your recommendation can't be verified because of an error made by the physician or our platform, that's on us, and we'll refund you.",
        "One thing worth noting: refunds only cover the evaluation fee you paid us directly. Any separate state fees or third party charges aren't included.",
      ],
    },
    {
      heading: "When Refunds Don't Apply",
      paragraphs: [
        "There are a few situations where we're not able to offer a refund:",
      ],
      listItems: [
        "You cancel after finishing your evaluation but before the physician has made a decision",
        "You receive a valid recommendation and simply change your mind afterward",
        "You gave us false or misleading information during your evaluation",
        "You didn't qualify because you don't meet California's eligibility requirements",
      ],
    },
    {
      heading: "Missed Appointments",
      paragraphs: [
        "Life happens, but if you know you can't make your scheduled appointment, please reach out to us ahead of time so we can reschedule.",
        "If you miss your appointment without giving us notice, a $25 missed appointment fee may apply. If you're later eligible for a refund on that same evaluation, this fee may be subtracted from it.",
      ],
    },
    {
      heading: "How to Request a Refund",
      paragraphs: [
        "Ready to request one? Just email us at contact@medicalcannabiscardfresno.com with your full name, the email address you used when you signed up, and a short note explaining what happened.",
      ],
    },
    {
      heading: "How Long It Takes",
      paragraphs: [
        "Once your refund is approved, it typically takes 7 to 10 business days to show up, depending on how you originally paid.",
      ],
    },
    {
      heading: "The Final Word",
      paragraphs: [
        "We reserve the right to review each request and make the final call on refund eligibility, based on this policy and applicable law.",
      ],
    },
    {
      heading: "Questions?",
      paragraphs: [
        "Medical Cannabis Card Fresno",
        "Phone: (559) 234-4795",
        "Email: contact@medicalcannabiscardfresno.com",
        "Address: 1510 C St, Fresno, CA 93706",
      ],
    },
  ],
};

export const hipaaCompliance: LegalPage = {
  slug: "hipaa-compliance",
  href: "/policy/hipaa-compliance/",
  navLabel: "HIPAA Compliance",
  title: "HIPAA Compliance and Health Information Privacy",
  lastUpdated: null,
  description:
    "Learn how Medical Cannabis Card Fresno protects patient health information and follows HIPAA privacy and security standards during telehealth evaluations.",
  sections: [
    {
      paragraphs: [
        "Protecting your privacy is something we take seriously at Medical Cannabis Card Fresno. As a telehealth service connecting Fresno patients with licensed physicians for medical marijuana evaluations, we understand that your health information is personal, and we've built our practices around keeping it that way.",
        "Our policies and systems are designed with HIPAA (the Health Insurance Portability and Accountability Act) in mind, so this page walks through what that means and how we put it into practice.",
      ],
    },
    {
      heading: "What Is HIPAA?",
      paragraphs: [
        "HIPAA is a federal law passed in 1996 that sets national standards for protecting sensitive patient health information. It requires organizations that handle medical data, like ours, to put safeguards in place that prevent unauthorized access, disclosure, or misuse of that information.",
        "At its core, HIPAA is about three things: keeping health information confidential, securing electronic records and communications, and giving patients real control over their own medical data.",
      ],
    },
    {
      heading: "Our Approach to Compliance",
      paragraphs: [
        "We've put administrative, technical, and physical safeguards in place that align with HIPAA standards. In practice, that means your health information is:",
      ],
      listItems: [
        "Only collected when it's actually needed for your evaluation",
        "Stored on secure systems with limited access",
        "Protected from unauthorized disclosure or misuse",
        "Only accessible to the physicians and staff who need it to do their job",
      ],
    },
    {
      paragraphs: [
        "We regularly review our policies and systems to make sure we're keeping up with best practices.",
      ],
    },
    {
      heading: "What Counts as Protected Health Information",
      paragraphs: [
        "Protected Health Information, or PHI, refers to anything that identifies you and relates to your health or care. For our patients, that typically includes things like:",
      ],
      listItems: [
        "Your medical history or current health conditions",
        "Notes from your physician consultation",
        "Details from your telehealth visit",
        "Information related to your medical marijuana evaluation",
      ],
    },
    {
      paragraphs: [
        "All of this is treated with the same level of care and protection required under HIPAA.",
      ],
    },
    {
      heading: "How We Keep Your Information Safe",
      paragraphs: [
        "We rely on a few different layers of protection to keep your information secure.",
        "Administrative safeguards limit who on our team can access your health information, based on whether they actually need it for their role.",
        "Technical safeguards cover the systems themselves, encrypted communication, secure storage, and access controls that keep your data protected as it moves through our platform.",
        "Physical safeguards protect the infrastructure behind the scenes, the servers and networks that support our telehealth services.",
        "Together, these layers work to keep your information confidential and accurate.",
      ],
    },
    {
      heading: "Keeping Your Telehealth Visit Private",
      paragraphs: [
        "Since your evaluation happens remotely, we use secure video calls, protected messaging, and encrypted transmission for any medical documentation involved. These tools are there to make sure your visit stays just as private as an in person appointment would be.",
      ],
    },
    {
      heading: "How Your Information Gets Used",
      paragraphs: [
        "We only use or share your health information when it's necessary, such as to:",
      ],
      listItems: [
        "Support your physician during your evaluation",
        "Facilitate your telehealth visit",
        "Keep accurate records for compliance purposes",
        "Meet legal requirements when we're required to",
      ],
    },
    {
      paragraphs: ["We do not sell your medical information, ever."],
    },
    {
      heading: "Your Rights as a Patient",
      paragraphs: [
        "You have certain rights when it comes to your own health information, including the ability to:",
      ],
      listItems: [
        "Ask to see your personal health records",
        "Request a correction if something's inaccurate",
        "Ask us to limit certain uses of your information",
        "Request a specific, confidential way to be contacted",
      ],
    },
    {
      paragraphs: [
        "If you'd like to make any of these requests, just reach out using the contact details below.",
      ],
    },
    {
      heading: "Data Security",
      paragraphs: [
        "We use reasonable safeguards, including encryption and controlled access, to protect your data from unauthorized use or disclosure. That said, no system connected to the internet can promise complete security, and we want to be upfront about that even as we do our best to minimize risk.",
        "This page works alongside our Privacy Policy and Terms of Use, which go into more detail on how your data is collected and handled overall.",
      ],
    },
    {
      heading: "Frequently Asked Questions",
      paragraphs: [
        "Is Medical Cannabis Card Fresno HIPAA compliant? Yes. We follow privacy and security practices built around HIPAA standards to protect your health information throughout your telehealth evaluation.",
        "How do you protect my information? We use secure systems, limited access controls, and privacy safeguards designed to keep patient data protected from unauthorized access or disclosure.",
        "Are telehealth visits actually secure? Yes. Our telehealth consultations use HIPAA aligned technology to help keep your visit private and confidential from start to finish.",
        "Is my medical marijuana evaluation kept confidential? Yes. Any evaluation conducted through one of our licensed physicians is treated as confidential medical information under HIPAA guidelines.",
        "Who can see my health information? Access is limited strictly to the licensed physician handling your care and any staff members who need it to support your evaluation.",
      ],
    },
    {
      heading: "Questions About Your Privacy?",
      paragraphs: [
        "Medical Cannabis Card Fresno",
        "Phone: (559) 234-4795",
        "Email: contact@medicalcannabiscardfresno.com",
        "Address: 1510 C St, Fresno, CA 93706",
      ],
    },
  ],
};

export const consentForTelehealth: LegalPage = {
  slug: "consent-for-telehealth",
  href: "/policy/consent-for-telehealth/",
  navLabel: "Consent to Telehealth",
  title: "Consent to Telehealth",
  lastUpdated: null,
  description:
    "Understand how telehealth works for your medical marijuana evaluation with Medical Cannabis Card Fresno, including your rights and what to expect.",
  sections: [
    {
      paragraphs: [
        "This page explains how telehealth works when you book an evaluation with Medical Cannabis Card Fresno. Telehealth lets you connect with a licensed physician remotely, using secure video and messaging instead of an in person visit.",
        "By using our telehealth services, you're confirming that you understand this consent and agree to receive care this way, wherever it's permitted by law.",
      ],
    },
    {
      heading: "How Telehealth Works",
      paragraphs: [
        "Telehealth lets a physician evaluate you and offer medical guidance without you needing to step into an office. Your consultation might involve:",
      ],
      listItems: [
        "A live video call",
        "A phone or audio conversation",
        "Secure messaging",
        "Digital sharing of medical documents or records",
      ],
    },
    {
      paragraphs: [
        "We operate as a platform that connects Fresno patients with independent, licensed physicians for medical marijuana evaluations. You can find more detail on how this works in our Terms of Use.",
      ],
    },
    {
      heading: "How This Differs From an In Person Visit",
      paragraphs: [
        "A virtual visit isn't quite the same as sitting across from a doctor in person. Since everything happens remotely, your physician relies heavily on the information you share during the call to make their assessment.",
        "There are also situations where an in person exam might be needed instead, and your physician has the final say on whether telehealth is appropriate for you.",
      ],
    },
    {
      heading: "The Upside of Telehealth",
      paragraphs: [
        "There's a reason telehealth has become so popular. It typically means:",
      ],
      listItems: [
        "Easier access to care, especially if getting to an office is a hassle",
        "No travel time involved",
        "Faster turnaround when connecting with a physician",
      ],
    },
    {
      heading: "What to Keep in Mind",
      paragraphs: [
        "Like any medical service, there are a few limitations worth knowing about:",
      ],
      listItems: [
        "Occasional technical hiccups or delays during your call",
        "Physical exams aren't possible the way they would be in person",
        "Incomplete or inaccurate information on your end could slow things down or affect your evaluation",
      ],
    },
    {
      heading: "Not Meant for Emergencies",
      paragraphs: [
        "Telehealth through Medical Cannabis Card Fresno isn't built for medical or psychiatric emergencies. If you're going through one, please call 911 or head to the nearest emergency room right away.",
      ],
    },
    {
      heading: "When the Physician Relationship Begins",
      paragraphs: [
        "Just scheduling an appointment or filling out your information doesn't create a physician patient relationship on its own. That relationship only starts once a licensed physician actually begins your evaluation.",
      ],
    },
    {
      heading: "Be Honest and Thorough",
      paragraphs: [
        "Your physician bases their evaluation on what you tell them, so it matters that the information you provide, your health history, symptoms, and current conditions, is accurate and complete. Leaving things out or providing false information can affect the quality of care you receive.",
      ],
    },
    {
      heading: "About Electronic Communication",
      paragraphs: [
        "Telehealth visits happen through digital tools like video calls and messaging platforms. We take reasonable steps to protect this communication, but no electronic system is completely risk free. You can read more about how we handle your data in our Privacy Policy.",
      ],
    },
    {
      heading: "Keeping Your Information Private",
      paragraphs: [
        "We handle everything shared during your telehealth visit in line with HIPAA privacy standards. For more on how we protect your health information, take a look at our HIPAA Compliance page.",
      ],
    },
    {
      heading: "Your Voluntary Agreement",
      paragraphs: [
        "By moving forward with a telehealth visit, you're confirming that:",
      ],
      listItems: [
        "You understand what telehealth involves",
        "You're aware of both its benefits and its limitations",
        "You're voluntarily choosing to receive care this way",
        "You've had the chance to review our Terms of Use and Privacy Policy",
      ],
    },
    {
      paragraphs: [
        "If any part of this doesn't sit right with you, it's best not to proceed with a telehealth evaluation through our platform.",
      ],
    },
    {
      heading: "Have Questions?",
      paragraphs: [
        "Medical Cannabis Card Fresno",
        "Phone: (559) 234-4795",
        "Email: contact@medicalcannabiscardfresno.com",
        "Address: 1510 C St, Fresno, CA 93706",
      ],
    },
  ],
};

export const accessibilityStatement: LegalPage = {
  slug: "accessibility-statement",
  href: "/policy/accessibility-statement/",
  navLabel: "Accessibility Statement",
  title: "Accessibility Statement",
  lastUpdated: null,
  description:
    "Medical Cannabis Card Fresno is committed to making our website and telehealth services accessible to all patients, including those with disabilities.",
  sections: [
    {
      paragraphs: [
        "At Medical Cannabis Card Fresno, we want everyone to be able to use our website and telehealth services comfortably, including patients with disabilities. Whether you're checking your eligibility, reading through our resources, or scheduling a consultation, we want that experience to work for you. Accessibility isn't something we check off once, it's something we keep working on.",
      ],
    },
    {
      heading: "Our Commitment",
      paragraphs: [
        "We put real effort into making sure our site works well for people with a range of abilities and assistive technology needs. Since we're a telehealth provider, that matters even more, patients need to be able to reach a licensed physician online without running into unnecessary obstacles.",
        "We regularly go back through our website looking for ways to make it easier to use, because accessibility isn't a one time fix.",
      ],
    },
    {
      heading: "The Standards We Follow",
      paragraphs: [
        "Our website is built with accessibility best practices in mind, guided by the Web Content Accessibility Guidelines (WCAG) 2.1 from the World Wide Web Consortium. These are widely recognized standards meant to help people with visual, auditory, motor, or cognitive disabilities use the web more easily, and to make sure our site plays nicely with assistive technology.",
      ],
    },
    {
      heading: "What That Looks Like on Our Site",
      paragraphs: [
        "A few things we build into our website to support accessibility:",
      ],
      listItems: [
        "A clean, consistent layout across pages",
        "Headings that follow a logical order",
        "Compatibility with screen readers",
        "Alt text on images",
        "A responsive design that works well on both mobile and desktop",
        "Text that's easy to read and can be resized",
        "Enough color contrast to make text easy to see",
      ],
    },
    {
      heading: "Making Telehealth Accessible",
      paragraphs: [
        "Our whole platform is built around removing barriers to getting care, and that includes making sure patients using assistive technology can find what they need, whether that's scheduling info, eligibility details, or how to reach support.",
      ],
    },
    {
      heading: "We're Always Improving",
      paragraphs: [
        "Standards and technology change, and so do we. We check in on our website regularly to spot areas that could be better and keep making updates as things evolve.",
      ],
    },
    {
      heading: "A Note on Third Party Tools",
      paragraphs: [
        "Parts of our site, like scheduling or payment processing, run through outside tools we don't fully control. We do our best to keep things accessible throughout, but we can't make guarantees about tools built by someone else. If you run into a snag with any of these, just let us know and we'll help however we can.",
      ],
    },
    {
      heading: "Need a Hand?",
      paragraphs: [
        "If you're having trouble accessing something on our website, reach out to us. We'll do what we can to get you the information or support you need in a format that works for you.",
      ],
    },
    {
      heading: "Related Pages",
      paragraphs: [
        "Accessibility ties into how we handle patient data and run our platform more broadly. You might also find these pages helpful:",
      ],
      listItems: [
        "Privacy Policy",
        "Terms of Use",
        "HIPAA Compliance",
      ],
    },
    {
      heading: "Have Feedback?",
      paragraphs: [
        "If you've run into a barrier on our site or have an idea for how we can improve, we'd genuinely like to hear it. Feel free to reach out anytime.",
        "Medical Cannabis Card Fresno",
        "Phone: (559) 234-4795",
        "Email: contact@medicalcannabiscardfresno.com",
        "Address: 1510 C St, Fresno, CA 93706",
      ],
    },
  ],
};

export const editorialPolicy: LegalPage = {
  slug: "editorial-policy",
  href: "/policy/editorial-policy/",
  navLabel: "Editorial Policy",
  title: "Editorial Policy",
  lastUpdated: null,
  description:
    "Learn about the standards behind the medical marijuana content published by Medical Cannabis Card Fresno, from accuracy checks to our review process.",
  sections: [
    {
      paragraphs: [
        "At Medical Cannabis Card Fresno, we care about giving our readers accurate, useful information about medical marijuana, cannabis wellness, and the legal and health topics that come with it. This page explains the standards our content is held to and how we make sure it's worth your time.",
      ],
    },
    {
      heading: "What We Stand For",
      paragraphs: [
        "Our vision is to make reliable, easy to understand medical marijuana information available to every patient and caregiver who needs it.",
        "Our mission is to explain MMJ usage, regulations, and wellness topics in a way that's accurate, ethical, and genuinely easy to follow.",
        "Our promise is to stay aligned with California's medical marijuana regulations and back our content with input from licensed professionals and credible research.",
      ],
    },
    {
      heading: "How We Approach Our Content",
      paragraphs: [
        "We take a few things seriously when putting content together:",
      ],
      listItems: [
        "Expert input. Our content is written and reviewed by people who actually understand this space, not generic filler writers.",
        "Accuracy first. We fact check what we publish and lean on credible sources like state regulations and established research rather than guesswork.",
        "Clearing up confusion. There's a lot of misinformation floating around about medical marijuana, and we try to address it head on rather than add to it.",
        "Trustworthy sourcing. We only reference sources we consider current and reliable, because our goal is for you to actually trust what you're reading.",
      ],
    },
    {
      heading: "Our Ethical Standards",
      paragraphs: [
        "We believe education works better than criticism. You won't find us taking shots at other providers, dispensaries, or practitioners here. Our focus stays on giving you useful, respectful information.",
        "When it comes to medical, legal, or wellness topics, we aim to stay objective and put patient safety and legal compliance first, every time.",
      ],
    },
    {
      heading: "Why You Can Trust What We Publish",
      paragraphs: [
        "A few things back up the content on this site:",
      ],
      listItems: [
        "Our team has real experience in cannabis medicine, wellness, and the regulatory side of things",
        "We genuinely care about patient advocacy and responsible cannabis use, not just page views",
        "Any medical or legal guidance comes from licensed professionals, not from us guessing",
        "Every piece goes through research that considers the science, real patient experiences, and the legal landscape",
      ],
    },
    {
      heading: "How We Review Everything",
      paragraphs: [
        "Before anything gets published, it goes through a careful editing process to check for clarity and accuracy. We also revisit our process regularly to catch mistakes early and keep improving how we do things.",
      ],
    },
    {
      heading: "Found Something Off?",
      paragraphs: [
        "We're not perfect, and we'd rather know about a mistake than have it sit uncorrected. If you spot an error or have a suggestion, reach out to us at contact@medicalcannabiscardfresno.com.",
        "We take feedback seriously and update our content whenever it makes things more accurate or useful.",
      ],
    },
    {
      heading: "Our Commitment to You",
      paragraphs: [
        "At the end of the day, we want Fresno patients, caregivers, and anyone curious about medical marijuana to have a resource they can actually rely on. That's what we're working toward with every page we publish.",
      ],
    },
  ],
};

export const shipmentPolicy: LegalPage = {
  slug: "shipment-policy",
  href: "/policy/shipment-policy/",
  navLabel: "Shipment Policy",
  title: "Shipment Policy",
  lastUpdated: null,
  description:
    "Learn how Medical Cannabis Card Fresno ships your medical marijuana card, including delivery timeframes, tracking, and what to do if there's an issue.",
  sections: [
    {
      paragraphs: [
        "Getting your medical marijuana card to you safely and on time matters to us. Here's what to expect once your application is approved.",
      ],
    },
    {
      heading: "1. Processing and Delivery Time",
      paragraphs: [
        "Once you're approved, we get your card prepared and shipped within 10 to 12 business days. We move as quickly as we can so you can start using your card without unnecessary waiting around.",
      ],
    },
    {
      heading: "2. Shipping and Tracking",
      paragraphs: [
        "We ship through trusted carriers, and every card comes with a tracking number so you can follow its progress from our office all the way to your door.",
      ],
    },
    {
      heading: "3. If Something Goes Wrong",
      paragraphs: [
        "If your card hasn't shown up by the expected date, or if it arrives lost, damaged, or stolen, reach out to our support team right away. We'll get back to you within 24 hours, and if a replacement is needed, we'll take care of it.",
      ],
    },
    {
      heading: "4. How Your Card Is Packaged",
      paragraphs: [
        "Your card ships in a securely sealed envelope, so it stays protected and untampered with the whole way to you.",
      ],
    },
    {
      heading: "5. Your Part in the Process",
      paragraphs: [
        "Once your package is delivered, and signed for if that's required, it's considered received on our end. It helps to have someone available at the delivery address so your card doesn't sit out unattended.",
      ],
    },
    {
      heading: "6. When Delays Happen",
      paragraphs: [
        "Every now and then, things like holidays, carrier backups, or bad weather can push delivery back a bit. It doesn't happen often, but we appreciate your patience if it does.",
      ],
    },
    {
      heading: "7. Need Help?",
      paragraphs: [
        "Our team is here for any questions about your shipment.",
        "Medical Cannabis Card Fresno",
        "Phone: (559) 234-4795",
        "Email: contact@medicalcannabiscardfresno.com",
        "Address: 1510 C St, Fresno, CA 93706",
        "We want your medical marijuana card to reach you safely and on time, so you can focus on what matters, your health.",
      ],
    },
  ],
};

export const disclaimer: LegalPage = {
  slug: "disclaimer",
  href: "/policy/disclaimer/",
  navLabel: "Disclaimer & Policies",
  title: "Disclaimer & Policies",
  lastUpdated: null,
  description:
    "Review the disclaimers and policies that apply to Medical Cannabis Card Fresno's website and medical marijuana evaluation services.",
  sections: [
    {
      paragraphs: [
        "At Medical Cannabis Card Fresno, our goal is to make it easy for people in Fresno to access educational information and connect with licensed physicians for medical marijuana evaluations. Before you use this site, there are a few things we want to be upfront about. By browsing our website or using our services, you're agreeing to the points below.",
      ],
    },
    {
      heading: "1. Information Only, Not Medical Advice",
      paragraphs: [
        "Everything on this website is meant to inform, not to replace guidance from a healthcare provider. We want to help you understand your options, but any decision about your health should be made together with a licensed physician, not based solely on something you read here.",
      ],
    },
    {
      heading: "2. We're Not a Healthcare Provider",
      paragraphs: [
        "Medical Cannabis Card Fresno itself doesn't practice medicine. What we do is connect you with a licensed physician who conducts your evaluation. A medical marijuana recommendation isn't the same thing as a prescription, and it shouldn't take the place of care you're already receiving from your regular doctor.",
      ],
    },
    {
      heading: "3. We Don't Diagnose or Treat",
      paragraphs: [
        "Nothing on our site is designed to diagnose a condition, treat it, or claim to cure anything. Our role is limited to helping you connect with a physician who can properly evaluate you. For anything beyond that, please talk to a qualified healthcare provider.",
      ],
    },
    {
      heading: "4. Your Health, Your Choice",
      paragraphs: [
        "Whatever you decide to do based on information from our platform is ultimately your call, and your responsibility. We can't be held accountable for outcomes tied to decisions made without a licensed provider's input. When in doubt, check with a physician first.",
      ],
    },
    {
      heading: "5. About Testimonials",
      paragraphs: [
        "If you come across patient testimonials or reviews on our site, keep in mind that they reflect one person's individual experience. Your results could be completely different, and testimonials should never be treated as medical guidance.",
      ],
    },
    {
      heading: "6. No Endorsements",
      paragraphs: [
        "We don't vouch for the safety or effectiveness of any product, service, or therapy mentioned on our website. Just because something is referenced here doesn't mean we're recommending it. Always do your own research and loop in a healthcare provider before trying anything new.",
      ],
    },
    {
      heading: "7. What We Actually Do",
      paragraphs: [
        "To put it simply, our platform exists to link Fresno residents with licensed physicians for medical marijuana evaluations. We're not a substitute for an established doctor patient relationship, and the medical decisions themselves come from the physician, not from us.",
      ],
    },
    {
      heading: "8. If You're Having an Emergency",
      paragraphs: [
        "Our platform isn't built for urgent or emergency care. If you're facing a medical emergency, please call 911 or head to your nearest emergency room right away rather than using our site.",
      ],
    },
    {
      heading: "9. Links to Other Websites",
      paragraphs: [
        "You might occasionally find links on our site pointing to outside websites. We don't manage or vouch for what's on those sites, so anything you do there is at your own discretion. It's worth checking their privacy and usage policies separately.",
      ],
    },
    {
      heading: "10. A Few Special Situations",
      paragraphs: [
        "If you're under 18, pregnant, breastfeeding, or managing a serious health condition, please talk with a licensed physician before acting on anything from this website. These situations call for more personalized guidance than a general disclaimer can offer.",
      ],
    },
    {
      heading: "11. Alternative or Emerging Treatments",
      paragraphs: [
        "From time to time, our content might touch on newer or alternative treatment approaches. These aren't guaranteed to be safe or effective, so we'd encourage you to run anything like this by a trusted medical professional first.",
      ],
    },
    {
      heading: "12. Updates to This Page",
      paragraphs: [
        "We may revise this page occasionally to keep it accurate and current. Any changes will be posted right here, so it's a good idea to check back once in a while.",
      ],
    },
    {
      heading: "Questions?",
      paragraphs: [
        "If anything here needs clarifying, we're happy to help.",
        "Medical Cannabis Card Fresno",
        "Phone: (559) 234-4795",
        "Email: contact@medicalcannabiscardfresno.com",
        "Address: 1510 C St, Fresno, CA 93706",
      ],
    },
  ],
};

export const aboutUs: LegalPage = {
  slug: "about-us",
  href: "/about-us/",
  navLabel: "About Us",
  title: "About Us",
  lastUpdated: null,
  description:
    "Learn about Medical Cannabis Card Fresno, our team, and how we connect Fresno patients with licensed physicians for medical marijuana evaluations.",
  sections: [
    {
      paragraphs: [
        "Medical Cannabis Card Fresno is a fully online telehealth platform built to make getting your medical marijuana evaluation simple, affordable, and fully compliant with California law. We started with one goal in mind: cut out the confusion and delays that usually come with the certification process, and connect Fresno patients with licensed physicians through a secure virtual visit.",
        "Since 2020, our platform has helped thousands of patients throughout California get their medical marijuana recommendations quickly and responsibly. Everything about how we operate is built around reducing barriers, protecting your privacy, and making sure every evaluation meets California's medical and legal standards.",
      ],
    },
    {
      heading: "Why We Exist",
      paragraphs: [
        "Getting access to medical cannabis shouldn't feel confusing or overpriced. Too many patients run into complicated rules, long waits, and information that's hard to trust. We exist to make that process simpler.",
        "Our goal is to give Fresno patients clear answers, honest pricing, and a legitimate medical evaluation, without the runaround. By pairing solid technology with genuinely patient focused care, we let you spend your energy on your health instead of paperwork.",
        "Legal Compliance. Every evaluation is handled by a licensed physician, in line with California's medical marijuana and telehealth laws.",
        "Secure Telemedicine. Our platform runs on HIPAA compliant, encrypted technology, so your information stays protected the whole way through.",
        "Unbiased Medical Judgment. Physicians make their own independent decisions based on your medical history and California's qualifying conditions, nothing else factors in.",
      ],
    },
    {
      heading: "Meet Our Leadership Team",
      paragraphs: [
        "Our leadership brings together experience in healthcare operations, technology, and ethical, patient centered marketing.",
        "Gourav Sharma, Founder. Gourav oversees platform strategy and operations, focused on scaling compliant digital healthcare while keeping the patient experience smooth and straightforward.",
        "Prince Sharma, Chief Marketing Officer. Prince leads brand strategy and patient education, with an emphasis on ethical, compliant healthcare marketing.",
        "Ashish Osten, Marketing Manager. Ashish oversees content strategy and visibility, making sure patients can find accurate, reliable information about medical cannabis.",
      ],
    },
    {
      heading: "How It Works",
      paragraphs: [
        "Our process is secure, HIPAA compliant, and built to be as painless as possible.",
      ],
      listItems: [
        "Connect. Fill out a short intake form with your basic information.",
        "Book. Pick a time that works for you to meet with a California licensed physician.",
        "Consult. Join a secure video visit, usually around 10 to 15 minutes.",
        "Receive. If you're approved, your recommendation is delivered digitally.",
      ],
    },
    {
      paragraphs: [
        "Every evaluation is handled by an independent, state licensed physician who follows established medical and telehealth guidelines. We don't promise approvals, and nothing about pricing or timelines has any influence on a physician's decision.",
      ],
    },
    {
      heading: "Medical Credibility and Compliance",
      paragraphs: [
        "Medical integrity guides everything we do. Our platform is built to support physicians in delivering evaluations that are compliant with California law while keeping the process clear for patients.",
      ],
      listItems: [
        "Licensed physicians only",
        "HIPAA compliant technology",
        "Evaluations built around California's specific requirements",
        "Transparent standards at every step",
      ],
    },
    {
      paragraphs: [
        "From your first form to your final result, we try to keep things clear and predictable. That said, the medical decision always belongs to your physician, based on your history and California's requirements, not shortcuts or automation.",
      ],
    },
    {
      heading: "Transparent Pricing",
      paragraphs: [
        "You deserve to know exactly what you're paying for, upfront, with no surprises.",
      ],
      listItems: [
        "No hidden fees",
        "No cannabis sales",
        "No commissions",
        "Clear, straightforward pricing",
      ],
    },
    {
      paragraphs: [
        "You only pay for your evaluation. Any state registration fees, if applicable, go directly to the state, not through us.",
      ],
    },
    {
      heading: "What We Stand For",
      paragraphs: [
        "Our Mission. To make medical marijuana evaluations simple, affordable, and patient focused, while holding to the highest standards of ethics, privacy, and legal compliance.",
        "Our Vision. To be a trusted name in cannabis based telehealth, known for transparency and genuine care for patient wellbeing.",
        "Our Core Values. Patient trust and privacy come first. Physicians make independent medical judgments. We follow California's cannabis laws closely. And evaluations stay accessible and affordable.",
      ],
    },
    {
      heading: "What Not to Expect",
      paragraphs: [
        "We'd rather be upfront about what we don't do:",
      ],
      listItems: [
        "We don't provide direct medical treatment, only independent evaluations and recommendations",
        "We can't guarantee approval, that call belongs entirely to the physician",
        "We don't sell or distribute cannabis or cannabis products",
        "Pricing and timelines never influence a physician's medical decision",
        "We don't offer legal advice or interpret cannabis regulations",
        "We have no partnerships or financial ties to dispensaries",
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
  aboutUs,
] as const;
