"use client";

export default function PrivacyPolicy() {
  return (
    <section className="bg-white text-gray-900 py-16 px-4 md:px-20">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>
     

        {/* Introduction */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Infod (“we,” “our,” or “us”) values your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website, services, and applications.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            We may collect the following types of information from you:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li><strong>Personal Information:</strong> Name, email, phone number, company, and other details you provide.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent, and interactions.</li>
            <li><strong>Cookies and Tracking:</strong> Cookies and similar technologies to improve your experience and analyze website usage.</li>
          </ul>
        </div>

        {/* How We Use Your Information */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Provide, improve, and personalize our services.</li>
            <li>Communicate with you, respond to inquiries, and send updates.</li>
            <li>Conduct analytics to understand user behavior.</li>
            <li>Ensure security and prevent unauthorized access.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </div>

        {/* Sharing Your Information */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. Sharing Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell or rent your personal information. We may share your information with:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li><strong>Service Providers:</strong> Companies that help us operate our website and services.</li>
            <li><strong>Legal Compliance:</strong> When required by law or to protect our rights and property.</li>
            <li><strong>Business Transfers:</strong> In case of a merger, acquisition, or sale of assets.</li>
          </ul>
        </div>

        {/* Data Security */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement reasonable technical, administrative, and physical safeguards to protect your personal information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </div>

        {/* Your Rights */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
          <p className="text-gray-700 leading-relaxed">
            Depending on your location, you may have rights such as:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Accessing and updating your personal information.</li>
            <li>Requesting deletion of your personal data.</li>
            <li>Opting out of marketing communications.</li>
            <li>Restricting or objecting to certain processing of your data.</li>
          </ul>
        </div>

        {/* Cookies and Third-Party Links */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Cookies and Tracking</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website uses cookies and similar tools to enhance your browsing experience and collect analytics data. You can manage or disable cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-semibold mb-2 mt-4">7. Third-Party Links</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
          </p>
        </div>

        {/* Children’s Privacy */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">8. Children’s Privacy</h2>
          <p className="text-gray-700 leading-relaxed">
            Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete it.
          </p>
        </div>

        {/* Changes */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">9. Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. The revised version will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
          </p>
        </div>

        {/* Contact */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions or concerns regarding this Privacy Policy or your personal data, please contact us:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li><strong>Email:</strong> <a href="mailto:support@infod.com" className="text-[#00FFAA] hover:underline">support@infod.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+971568591870" className="text-[#00FFAA] hover:underline">+971 56 859 1870</a></li>
            <li><strong>Address:</strong> OPAL TOWER, No-703, 7th Floor, Burj Khalifa Street, Business Bay, Dubai</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
