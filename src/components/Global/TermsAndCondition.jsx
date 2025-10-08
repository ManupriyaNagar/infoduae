// components/TermsAndConditions.jsx
"use client";

export default function TermsAndConditions() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By using Infod’s Services, you agree to these Terms and Conditions, our Privacy Policy, and any additional guidelines, rules, or terms posted within the Services. If you do not agree, you must not use the Services.",
    },
    {
      title: "Eligibility",
      content:
        "You must be at least 18 years old or of legal age in your jurisdiction to use the Services. By using the Services, you represent and warrant that you meet this requirement.",
    },
    {
      title: "Account Registration",
      content:
        "Some Services may require account creation. You agree to provide accurate and up-to-date information. You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account. You must notify Infod immediately of any unauthorized use of your account.",
    },
    {
      title: "Use of Services",
      content:
        "Infod provides data-driven analytics, financial insights, and SaaS tools to help individuals and businesses manage their finances. You agree to use the Services for lawful purposes only and not to engage in activities that could harm Infod or other users. You must not attempt to reverse engineer, copy, or interfere with the functionality of the Services.",
    },
    {
      title: "Intellectual Property",
      content:
        "All content, software, and intellectual property on Infod’s platform are owned by Infod or its licensors and are protected by copyright, trademark, and other laws. You are granted a limited, non-exclusive, non-transferable license to access and use the Services for personal or business purposes.",
    },
    {
      title: "Fees and Payments",
      content:
        "Certain Services may require payment. Subscription fees and payment terms will be specified at the time of purchase. All payments are non-refundable unless required by law or explicitly stated otherwise.",
    },
    {
      title: "Privacy",
      content:
        "Your use of the Services is subject to Infod’s Privacy Policy, which explains how we collect, use, and protect your personal information.",
    },
    {
      title: "Disclaimers",
      content:
        "The Services are provided “as is” and “as available” without warranties of any kind, either express or implied. Infod does not guarantee accuracy, completeness, or reliability of any information or analysis provided through the Services. Infod is not responsible for any financial losses or damages resulting from your use of the Services.",
    },
    {
      title: "Limitation of Liability",
      content:
        "To the maximum extent permitted by law, Infod and its affiliates shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of your use of the Services.",
    },
    {
      title: "Indemnification",
      content:
        "You agree to indemnify, defend, and hold harmless Infod, its officers, employees, and affiliates from any claims, damages, or expenses arising from your use of the Services or violation of these Terms.",
    },
    {
      title: "Termination",
      content:
        "Infod may suspend or terminate your access to the Services at any time, without notice, for violations of these Terms or for any other reason. Upon termination, all rights granted to you will cease immediately.",
    },
    {
      title: "Governing Law",
      content:
        "These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to conflict of law principles.",
    },
    {
      title: "Changes to Terms",
      content:
        "Infod reserves the right to update or modify these Terms at any time. Changes will be posted on this page, and your continued use of the Services constitutes acceptance of any new terms.",
    },
    {
      title: "Contact Information",
      content:
        "If you have questions about these Terms, please contact us at:\nEmail: support@infod.com\nPhone: +971 56 859 1870\nAddress: OPAL TOWER, No-703, 7th Floor, Burj Khalifa Street, Business Bay, Dubai",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 ">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
          Terms and Conditions
        </h1>

        {sections.map((section, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
              {section.title}
            </h2>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
