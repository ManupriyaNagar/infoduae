"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  // New state for form submission success
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Here you would send data to your backend API
    // For now, just mark as submitted
    setSubmitted(true);

    // Optionally reset the form
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="w-full bg-[#f8f9fb]">
      {/* Hero Section */}
      <div className="relative bg-[url('/bg.jpg')] bg-cover bg-center h-[300px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center z-10">
          <h1 className="text-4xl md:text-5xl font-semibold">Contact Us</h1>
          <p className="mt-2 text-lg md:text-xl text-gray-200">
            InfoD is ready to provide the right solution according to your needs
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row bg-black text-white rounded-lg -mt-20 relative z-10">
        {/* Left - Contact Info */}
        <div className="md:w-1/2 p-6 md:p-10 border-b md:border-b-0 md:border-r border-gray-200">
          <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
          <p className="text-gray-200 mb-8">
            Reach out to us for any inquiries, collaborations, or support. We’re
            here to help you make informed decisions.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-[#00FFAA] w-6 h-6" />
              <div>
                <h4 className="font-semibold text-gray-200">Head Office</h4>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=OPAL+TOWER,+No-703,+7th+Floor,+Burj+Khalifa+Street,+Business+Bay,+Dubai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00FFAA] transition-colors"
                >
                  <p>
                    OPAL TOWER
                    <br />
                    No-703, 7th Floor, Burj Khalifa Street
                    <br />
                    Business Bay
                    <br />
                    Dubai
                  </p>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-[#00FFAA] w-6 h-6" />
              <div>
                <h4 className="font-semibold text-gray-200">Email Us</h4>
                <a 
                  href="mailto:support@infod.com" 
                  className="text-gray-300 hover:text-[#00FFAA] transition-colors"
                >
                  support@infod.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-[#00FFAA] w-6 h-6" />
              <div>
                <h4 className="font-semibold text-gray-200">Call Us</h4>
                <a 
                  href="tel:+971568591870" 
                  className="text-gray-300 hover:text-[#00FFAA] transition-colors"
                >
                  +971 56 859 1870
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="md:w-1/2 p-6 md:p-10">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#00FFAA]"
                onChange={handleChange}
                value={formData.name}
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#00FFAA]"
                onChange={handleChange}
                value={formData.company}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#00FFAA]"
                onChange={handleChange}
                value={formData.phone}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#00FFAA]"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#00FFAA]"
              onChange={handleChange}
              value={formData.subject}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#00FFAA]"
              onChange={handleChange}
              value={formData.message}
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#00FFAA] text-black font-semibold py-3 rounded-lg hover:bg-[#00d490] transition"
            >
              Send
            </button>
          </form>
          
          {/* Success Message */}
          {submitted && (
            <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg">
              <p className="font-semibold">Thank you!</p>
              <p>Your message has been sent successfully.</p>
              <div className="mt-2 text-sm">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Company:</strong> {formData.company}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Subject:</strong> {formData.subject}</p>
                <p><strong>Message:</strong> {formData.message}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Google Map */}
      <div className="w-full h-[400px] mt-10">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5171202945094!2d55.27302957571063!3d25.185777732162578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69fde4a356f5%3A0x90c323502027a8c1!2sOpal%20Tower!5e0!3m2!1sen!2sin!4v1759917787365!5m2!1sen!2sin" 
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}
