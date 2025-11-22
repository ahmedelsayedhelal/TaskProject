import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { OurProjects } from "./OurProjects";
import { Worthy } from "./Worthy"
import { RevalonScroll } from "../Relevanscroll";

export const Home = () => {
  const services = [
    "MARKETING AND\n COMMUNICATION PLAN",
    "BRANDING",
    "DIGITAL CAMPAIGNS",
    "PROGRAMMATIC \n ADVERTISING",
    "MARKETING AS A SERVICE",
  ];
  const images = [
  { src: "/public/assets/product.png", title: "Medit", subtitle: "Website Design" },
  { src: "/public/assets/image 10.png", title: "Medit", subtitle: "Website Design" },
  { src: "/public/assets/product.png", title: "Medit", subtitle: "Website Design" },
  { src: "/public/assets/image 10.png", title: "Medit", subtitle: "Website Design" },
  { src: "/public/assets/product.png", title: "Medit", subtitle: "Website Design" }
];


  return (
    <>
      <div className="w-full overflow-hidden ">
        <RevalonScroll>
          <div className="relative h-[600px] max-h-full bg-black ">
            <div className="w-full flex flex-col md:flex-row md:items-start items-end justify-center bg-black py-32 px-4 md:px-8 gap-6 md:gap-12">
              <h1 className="text-4xl md:text-8xl font-bold w-full text-left md:w-[890px] text-white   ">
                UNIXSTUDIO<br />
                DIGITAL<br />
                AGENCY
              </h1>

              <img
                src="/public/assets/head.png"
                className="w-[100px] h-[100px] md:w-[140px] md:h-[140px]"
              />
            </div>


            <img className="hidden md:block absolute h-[400px] w-full bottom-[-35%]  z-10 " src="/public/assets/Graphic.png" />
            <img className="block   h-[500px]  md:hidden absolute w-full bottom-[-20%]  z-10 " src="/public/assets/Vector 136 (1).png" />


            <img className="hidden md:block absolute  w-full bottom-[-25%]  bg-black " src="/public/assets/Vector.png" />
            <img className="block absolute bottom-[2%] md:hidden h-[200px] bg-black w-full " src="/public/assets/Vector (2).png" />

            <p className="absolute bottom-[-12%] md:bottom-[-25%] md:px-28  left-4 z-20">
              We won 50+ design awards in 2022 stand alone,
              <br /> some of which had us share the stage with
              <br /> Google, Netflix, and Spotify
            </p>
            <img className="absolute w-20 bottom-[8%] md:bottom-[-30%] md:w-30 right-4 md:right-16 z-20" src="/public/assets/Circle Button (Desktop).png" />
          </div>
        </RevalonScroll>



        <div className="py-20 mt-100 w-full flex flex-col items-start gap-8 px-4 md:px-20 overflow-x-hidden">
          <h1 className=" text-5xl md:text-8xl font-bold text-left">LET’s Find Your
            DEsign Product</h1>
          <p className="font-bold text-2xl">Safe and Beneficial Design for Humanity.</p>

          <p className=" mt-28">
            We build engaging user experience for early-stage startups by connecting
            <br /> the dots between users’ needs and the client’s business model.
          </p>
          <a href="#Details" className="underline mt-2">
            See Details
          </a>
        </div>

        <div className="w-full py-20 mt-10 px-4 md:px-20">
          <ul className="divide-y divide-gray-200">
            {services.map((title, index) => (
              <li key={index} className="py-8">
                <button className="w-full flex items-center justify-between group">
                  <h2 className="font-panchang text-3xl md:text-6xl font-bold tracking-tight leading-tight whitespace-pre-line text-left">
                    {title}
                  </h2>
                  <ArrowUpRight className="w-7 h-7 text-gray-400 group-hover:text-black transition" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="py-20 mt-10 px-4 md:px-20">
          <h1 className="font-bold text-4xl md:text-7xl text-center leading-tight tracking-tight">
            Behold our Greatest
            Masterpiece Ever         </h1>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className="w-full bg-cover h-auto"
          style={{ backgroundImage: "url('/public/assets/Graphic (1).jpg')" }}
        >
          <div className="relative flex flex-col items-center md:items-start z-10 px-4 md:px-20 py-20">
            <img src="/public/assets/IMG.png" className="w-3/4 md:w-full md:h-[746px] mb-10 max-w-full" />

            <h1 className="font-bold text-white text-3xl md:text-6xl md:text-left mb-2">
              Unix STUDIO
            </h1>

            <div className="flex flex-col w-full items-center md:flex-row md:justify-between">
              <p className="text-gray-500 text-3xl md:text-4xl text-left mb-2">Website Design</p>
              <p className="text-white underline text-xl md:text-2xl md:text-right">Catch a glimse!</p>
            </div>
          </div>

          <h1 className="font-bold text-4xl md:text-7xl text-left text-white px-4 md:px-20 mt-8 mb-2">
            Witness the beauty
          </h1>

          <h3 className="text-white text-xl md:text-4xl text-left px-4 md:px-20 mb-10">
            Safe and Beneficial Design for Humanity.
          </h3>

         <Swiper
         spaceBetween={0}
        slidesPerView={1}
          breakpoints={{
          768: { slidesPerView: 2 },
         1024: { slidesPerView: 2.5 },
          }}
          className="mt-10 px-4 md:px-20 overflow-hidden "
           >
        {images.map((item, i) => (
          <SwiperSlide key={i}>
          <div className="flex flex-col gap-4 pl-20">
        <img
          src={item.src}
          className="w-full h-auto max-w-full cursor-grab active:cursor-grabbing "
        />
        <div className="flex justify-between text-white">
          <p>{item.title}</p>
          <p>{item.subtitle}</p>
        </div>
        </div>
       </SwiperSlide>
       ))}
      </Swiper>


          <div className="flex flex-col items-center mt-10">
            <img src="/public/assets/ABOUT CEO.png" className="w-full max-w-4xl py-10 max-w-full" />
          </div>


        </div>
        <RevalonScroll>

          <OurProjects />
        </RevalonScroll>
        <RevalonScroll>

          <Worthy />
        </RevalonScroll>
      </div>
    </>
  );
};
