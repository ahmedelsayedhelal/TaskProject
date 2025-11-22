import React from 'react';

const Footer = () => {
  const socialLinks = [
    { name: 'Linkedin' },
    { name: 'Instagram' },
    { name: 'Dribble' },
    { name: 'Behance' },
    { name: 'Facebook' }
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans relative overflow-hidden">
      {/* Left Panel */}
      <div className="flex-1 bg-gray-100 px-10 lg:px-20 py-12 lg:py-16 flex flex-col justify-between relative z-10">
        {/* Social Media Links */}
        <div className="flex flex-col gap-3 mb-16 lg:mb-20">
          <div className="flex gap-3 flex-wrap">
            {socialLinks.slice(0, 3).map((link, index) => (
              <a
                key={index}
                className="px-6 py-2.5 border-2 border-black rounded-full text-black text-sm font-medium transition-all duration-300 whitespace-nowrap hover:bg-black hover:text-white cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex gap-3 flex-wrap">
            {socialLinks.slice(3, 5).map((link, index) => (
              <a
                key={index}
                className="px-6 py-2.5 border-2 border-black rounded-full text-black text-sm font-medium transition-all duration-300 whitespace-nowrap hover:bg-black hover:text-white cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="text-[11px] text-gray-500 uppercase tracking-widest mb-2 font-medium">
            OUR TEAM IS
          </div>
          <div className="text-3xl lg:text-4xl font-bold text-black uppercase tracking-wide leading-tight">
            IN NEWYORK, USA
          </div>
        </div>

        <div className="mb-12">
          <div className="text-[11px] text-gray-500 uppercase tracking-widest mb-2 font-medium">
            DROP US A LINE
          </div>
          <div className="text-3xl lg:text-4xl font-normal text-black leading-tight">
            Hello@unixstudio.agency
          </div>
        </div>

        <button className="px-9 py-4.5 bg-black text-white border-none rounded-lg text-base font-semibold uppercase tracking-wide cursor-pointer inline-flex items-center gap-3 transition-all duration-300 self-start mb-10 hover:bg-gray-800 hover:-translate-y-0.5">
          BECOME A CLIENT
          <span className="text-xl font-light">↗</span>
        </button>

        <div className="flex items-center gap-3 text-xs text-gray-500 mt-auto mb-12">
          <span className="text-sm">↑</span>
          <span className="tracking-wide">
            © 2025 Unix Studio. – Product Design Agency
          </span>
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden">
        <img
          src="/public/assets/fooooter.png"
          alt="Team working collaboratively"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute left-1/2 md:left-[55%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 z-20 pointer-events-none">
        <img
          src="/public/assets/Icon.png"
          alt="Get in Touch"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Footer;