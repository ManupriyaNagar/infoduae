import React from 'react';

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: 'L' },
  { name: 'Facebook', href: '#', icon: 'F' },
  { name: 'Instagram', href: '#', icon: 'I' },
  { name: 'YouTube', href: '#', icon: 'Y' },
];

const navLinks = [
  'Home',
  'Collective',
  'Models',
  'About',
  'Blog',
  'DV8',
];

const NavigationBar = () => {
  // Helper component for the social media links with the rounded, bordered style
  const SocialLink = ({ name, href, icon }) => (
    <a
      href={href}
      className="text-[#00FFAA] border border-[#00FFAA] rounded-full px-3 py-1 text-sm font-medium transition duration-300 hover:bg-[#00FFAA] hover:text-black"
      aria-label={name}
    >
      {/* For LinkedIn, Facebook, Instagram, YouTube, we use the full name 
          For 'X' (or the fifth icon), we'll use a single character as shown */}
      {name === 'X' ? icon : name} 
    </a>
  );

  // Helper component for the main navigation links
  const NavLink = ({ name, href, depth }) => {
    // Determine the margin-left and padding-left based on the link's "depth" 
    // to recreate the cascading look from the image.
    const depthStyles = {
      0: 'ml-0',
      1: 'ml-12',
      2: 'ml-24', // 'Models' is at this level
      3: 'ml-36', // 'About' is at this level
      4: 'ml-48', // 'Blog' is at this level
      5: 'ml-60', // 'DV8' is at this level
    };

    // The image shows a different structure, so we manually assign the depth for simplicity
    const getDepth = (linkName) => {
      switch (linkName) {
        case 'Home': return 0;
        case 'Collective': return 1;
        case 'Models': return 2;
        case 'About': return 3;
        case 'Blog': return 4;
        case 'DV8': return 5;
        default: return 0;
      }
    };

    const currentDepth = getDepth(name);
    
    return (
      <li className={`${depthStyles[currentDepth]} my-2`}>
        <a
          href={href}
          className="relative text-3xl md:text-5xl font-light text-white uppercase tracking-wider group hover:text-custom-teal transition duration-300"
        >
          {name}
          {/* The decorative line and circle */}
          <span className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 h-3 w-3 rounded-full bg-custom-teal opacity-0 group-hover:opacity-100 transition-opacity"></span>
          <span className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 h-2 w-2 rounded-full bg-white opacity-100 group-hover:opacity-0 transition-opacity"></span>
          
          {/* The long horizontal line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-custom-teal transition-all duration-300 transform translate-x-12 opacity-100"></div>
        </a>
      </li>
    );
  };


  return (
    <header className="w-full min-h-screen bg-black p-8 md:p-12 lg:p-16">
      <div className="flex flex-col md:flex-row justify-between w-full">
        
        {/* Social Media Links Section (Left) */}
        <div className="flex space-x-2 mb-0 md:mb-0 text-white">
          {socialLinks.map((link) => (
            <SocialLink key={link.name} {...link} />
          ))}
          {/* The fifth, 'X' icon is often simpler */}
          <SocialLink name="X" href="#" icon="X" /> 
        </div>

        {/* Main Navigation Links Section (Right) */}
        <nav>
          <ul className="list-none p-0 m-0">
            {navLinks.map((name) => (
              <NavLink key={name} name={name} href="#" />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;