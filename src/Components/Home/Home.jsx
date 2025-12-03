import { ArrowDownLeft, ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { OurProjects } from "./OurProjects";
import { Worthy } from "./Worthy"
import {Head} from "./Head"


export const Home = () => {
  const services = [
    "MARKETING AND\n COMMUNICATION PLAN",
    "BRANDING",
    "DIGITAL CAMPAIGNS",
    "PROGRAMMATIC \n ADVERTISING",
    "MARKETING AS A SERVICE",
  ];
  const images = [
    { src: "/public/assets/slider1.svg", title: "MEDIT", subtitle: "Website Design" },
    { src: "/public/assets/slider2.svg", title: "MEDIT", subtitle: "Website Design" },
    { src: "/public/assets/slider1.svg", title: "MEDIT", subtitle: "Website Design" },
    { src: "/public/assets/slider2.svg", title: "MEDIT", subtitle: "Website Design" },
    { src: "/public/assets/slider1.svg", title: "MEDIT", subtitle: "Website Design" }
  ];



  return (
    <>
     
     <Head />

     

      <div className="flex flex-col w-full space-y-0  relative ">

      <h1 className="font-bold font-panchang text-3xl md:text-7xl uppercase px-8 md:px-20 mb-12 ">
        LET’s Find Your <br/>
        DEsign Product
      </h1>
      
      <p className="text-xl md:text-3xl px-8 md:px-20 font-panchang font-semibold ">
        Safe and Beneficial Design for Humanity.
      </p>
    

      <div className="flex justify-between mt-8">
      <p className="px-8 md:px-20 text-2xl ">
        We build engaging user experience for early-stage startups
         by connecting<br/>  the dots between users’ needs and the client’s business model.
      </p>
      <p className="px-8 md:px-20 underline text-xl ">
        See Details
      </p>

      </div>
        <div className="w-full py-20 mt-10 px-8 md:px-20">
          <ul className="divide-y divide-gray-200">
            {services.map((title, index) => (
              <li key={index} className="py-8">
                <button className="w-full flex items-center justify-between group">
                  <h2 className="font-panchang text-xl md:text-5xl font-bold cursor-text  whitespace-pre-line text-left">
                    {title}
                  </h2>
                  <ArrowUpRight size={60} className=" text-gray-400 group-hover:text-black transition" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="w-full bg-cover h-full"
          style={{ backgroundImage: "url('/public/assets/background.svg')" }}
        >
          <div className="relative w-full flex flex-col items-center md:items-start z-10 px-8 md:px-20 py-20">
              <div className="  min-w-full  ">
                <img src="/public/assets/IMG.svg" className="  w-full" />

            </div>
            <h1 className="font-bold text-white text-3xl md:text-6xl md:text-left mb-2">
              Unix STUDIO
            </h1>

            <div className="flex flex-col w-full items-center md:flex-row md:justify-between">
              <p className="text-gray-500 text-3xl md:text-4xl text-left mb-2">Website Design</p>
              <p className="text-[#FFFFFF] border-b border-b-gray-200 text-xl md:text-2xl md:text-right">Catch a glimse!</p>
            </div>
          </div>

          <h1 className="font-bold text-center text-2xl md:text-6xl font-panchang md:text-left text-white px-8 md:px-20 mt-4 md:mt-12 mb-8">
            WITNESS THE BEAUTY
          </h1>

          <h3 className="text-white text-xl md:text-3xl font-panchang text-center  md:text-left px-8 md:px-20 md:mb-32">
            SAFE AND BENEFICIAL DESIGIN FOR <br /> HUMANITY.
          </h3>

          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
            }}
            className="mt-20 px-4 md:px-20 overflow-hidden "
          >
            {images.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col gap-4 px-8 md:pl-20">
                  <img
                    src={item.src}
                    className="w-full h-auto max-w-full cursor-grab active:cursor-grabbing "
                  />
                  <div className="flex justify-between text-white mt-4">
                    <p className="font-bold text-xl">{item.title}</p>
                    <p className="text-xl text-[#B8B8B8]">{item.subtitle}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <h1 className="font-bold text-center text-2xl md:text-6xl font-panchang text-white px-4 md:px-20 mt-4 md:mt-48 mb-8 md:mb-32">
            ABOUT CEO
          </h1>

          <div className="flex flex-row items-center px-4 md:px-20 gap-8 md:gap-12">
            <div className="hidden shrink-0 w-40 h-40 md:w-40 md:h-40 md:flex items-end justify-center">
              <img src="../../../public/assets/head.png" />
            </div>


            <span className="text-6xl md:text-9xl font-bold self-start text-white align-top  ">“</span>


            <div className="flex-1 py-12">
              <div className="relative mb-8">
                <p className="text-lg md:text-3xl lg:text-5xl pt-8 text-white leading-relaxed ml-8 md:ml-12  -mt-4 md:-mt-8">
                  This is the highest level of professionalism I have ever encountered in the years that
                  I have been hiring people in this field. You have the distinct impression that you are
                  a part of a productive team.
                </p>
              </div>
              <div className="flex w-full items-center justify-between ">
              <div className="flex items-center gap-4 mt-8 px-8">
                <img
                  src="/public/assets/Mask group.svg"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover  shrink-0"
                  alt="Rachel Russiia"
                />
                <div>
                  <h3 className="text-white font-bold text-lg md:text-2xl uppercase ">
                    RACHEL RUSSIIA
                  </h3>
                  <p className="text-gray-300 text-sm md:text-lg">
                    CEO of Unix Studio
                  </p>
                </div>
                </div>
                <div className="flex gap-4 mt-8 px-8">
                 <ArrowDownLeft size={40} className="text-[#B8B8B8] " />

                <ArrowUpRight size={40} className="text-[#B8B8B8]  " />
                </div>
                
              </div>

            </div>
            
          </div>

        


        </div>
  

        <OurProjects />
        <Worthy />
      </div>
    </>
  );
};
