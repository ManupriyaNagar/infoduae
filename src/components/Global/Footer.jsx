"use client";

const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "X", href: "#" },
];

const navLinks = [
  { name: "Home", width: "w-[30vw]" },
  { name: "About", width: "w-[20vw]" },
  { name: "Service", width: "w-[40vw]" },
  { name: "Contact", width: "w-[25vw]" },

];

export default function Footer() {
  const SocialLink = ({ name, href }) => (
    <a
      href={href}
      className="text-[#00FFAA] border border-[#00FFAA] rounded-full px-6 py-2 text-lg font-light transition duration-300 hover:bg-[#00FFAA] hover:text-black"
    >
      {name}
    </a>
  );

  return (
    <footer className="relative bg-black text-white  py-10">
      <div className="">
      {/* Top Section */}
      <div className="bg-black">
        {/* Social Buttons */}
        <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6 mb-10 container mx-auto">
          {socialLinks.map((link) => (
            <SocialLink key={link.name} {...link} />
          ))}
        </div>

        {/* Right: Navigation Links with custom line widths */}
        <div className="-mt-20 flex flex-col gap-6 md:gap-8 text-right w-full md:w-auto">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="flex items-center justify-end text-4xl md:text-5xl font-light group"
            >
              <span className="mr-4 group-hover:text-[#00FFAA] transition-colors duration-300">
                {link.name}
              </span>
              <span className="relative flex items-center">
                <span className="w-3 h-3 rounded-full border border-[#00FFAA]"></span>
                <span
                  className={`${link.width} h-[1px] bg-[#00FFAA] ml-2 transition-all duration-500 group-hover:w-[35vw]`}
                ></span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 pb-10 mt-12">
        {/* Subscribe */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 ">
          <h3 className="text-5xl font-light mb-4">Subscribe to Updates</h3>
          <form className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
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
        </div>

        {/* Contact Info */}
        <div className="text-right ">
          <p className="text-5xl font-light mb-2">support@infod.com</p>
          <p className="text-[#00FFAA] text-xl mb-1">9036269683</p>
        </div>
      </div>

      {/* Bottom Section */}
    <div className="flex flex-col md:flex-row items-center justify-between mt-6 text-sm text-gray-400 container mx-auto">
  {/* Left */}
  <div className="text-left md:text-left flex-1">
    <p>© 2025 Copyright : Infod</p>
  </div>

  {/* Center */}
  <div className="text-center flex-1">
    Powered by <span className="hover:text-[#00FFAA]">
      <a href="https://rbshstudio.com/">RBSH STUDIO</a>
    </span>
  </div>

  {/* Right */}
  <div className="flex gap-4 justify-end flex-1 mt-4 md:mt-0">
    <a href="#" className="hover:text-white">Privacy Policy</a>
    <a href="#" className="hover:text-white">Terms & Conditions</a>
  </div>
</div>

      </div>
    </footer>
  );
}
