"use client";

const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "X", href: "#" },
];

const navLinks = [
  { name: "Home", width: "w-[30vw]" , href: "/" },
  { name: "About", width: "w-[20vw]" , href: "/about" },
  { name: "Service", width: "w-[40vw]" , href: "/service" },
  { name: "Contact", width: "w-[25vw]" , href: "/contact" },
];

export default function Footer() {
  const SocialLink = ({ name, href }) => (
    <a
      href={href}
      className="text-[#00FFAA] border border-[#00FFAA] rounded-full px-5 py-2 text-sm sm:text-lg font-light transition duration-300 hover:bg-[#00FFAA] hover:text-black text-center"
    >
      {name}
    </a>
  );

  return (
    <footer className="relative bg-black text-white py-12 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto flex flex-col gap-10">

        {/* Social Buttons */}
        {/* <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-6 mb-8">
          {socialLinks.map((link) => (
            <SocialLink key={link.name} {...link} />
          ))}
        </div> */}

        {/* Navigation Links */}
       <div className="flex flex-col gap-4 md:gap-6 text-center md:text-right items-center md:items-end w-full">
  {navLinks.map((link) => (
    <div
      key={link.name}
      className="flex flex-col sm:flex-row items-center justify-center md:justify-end text-2xl sm:text-4xl md:text-5xl font-light group"
    >
      <a href={link.href} className="block text-white group-hover:text-[#00FFAA] transition-colors">
      <span className="text-white group-hover:text-[#00FFAA] transition-colors duration-300">
        {link.name}
      </span>
      </a>
      <span className="hidden sm:flex items-center ml-4">
        <span className="w-2 h-2 rounded-full border border-[#00FFAA]"></span>
        <span
          className={`${link.width} h-[1px] bg-[#00FFAA] ml-2 transition-all duration-500 group-hover:w-[35vw]`}
        ></span>
      </span>
    </div>
  ))}
</div>


        {/* Subscribe + Contact */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 pb-8">
          {/* Subscribe */}
          {/* <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
              Subscribe to Updates
            </h3>
            <form className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-3">
              <input
                type="email"
                placeholder="Email"
                className="w-full sm:w-72 px-4 py-2 rounded-full outline-none text-black bg-white"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#00FFAA] text-black font-medium rounded-full hover:bg-teal-300 transition"
              >
                Submit
              </button>
            </form>
          </div> */}

          {/* Contact Info */}
          <div className="text-center md:text-right w-full md:w-auto">
            <a
              href="mailto:support@infod.com"
              className="block text-2xl sm:text-4xl md:text-5xl font-light mb-2 hover:text-[#00FFAA] transition-colors"
            >
              support@infod.com
            </a>
            <a
              href="tel:9036269683"
              className="text-[#00FFAA] text-base sm:text-xl hover:underline"
            >
              9036269683
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 text-sm text-gray-400">
          <div className="text-center md:text-left w-full md:w-1/3">
            <p>© 2025 Copyright : Infod</p>
          </div>

          <div className="text-center w-full md:w-1/3">
            Powered by{" "}
            <a
              href="https://rbshstudio.com/" target="_blank"
              className="hover:text-[#00FFAA] transition cursor-pointer"
            >
              RBSH STUDIO
            </a>
          </div>

          <div className="flex gap-4 justify-center md:justify-end w-full md:w-1/3">
            <a href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/terms-condition" className="hover:text-white transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
