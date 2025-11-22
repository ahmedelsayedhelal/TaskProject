import { RevalonScroll } from "../Relevanscroll";

export const AboutHead = () => {
  return (
    <RevalonScroll>
      <section className="">
        <div className="relative h-[600px] max-h-full ">
          <div className="w-full flex flex-col md:flex-row md:items-start items-end justify-center bg-black py-32 px-4 md:px-8 gap-6 md:gap-12">
            <h1 className="text-4xl md:text-8xl font-bold w-full text-left md:w-[890px] text-white  ">
              ABOUT US
              <p className="text-3xl font-normal text-white md:mt-20  ">WE LIVE BY THE CODE OF PASSION</p>
              <div className="  w-4/5 mt-4 h-px bg-white"></div>
            </h1>

            <img
              src="/public/assets/head.png"
              className="w-[100px] h-[100px] md:w-[140px] md:h-[140px]"
            />
          </div>


          <img className="hidden md:block absolute h-[400px] w-full bottom-[-35%]  z-10 " src="/public/assets/Graphic.png" />
          <img className="block  transform h-[400px]  md:hidden absolute w-full bottom-[-5%]  z-10 " src="/public/assets/Vector 136 (1).png" />


          <img className="hidden md:block absolute  w-full bottom-[-20%]  bg-black " src="/public/assets/Vector.png" />
          <img className="block absolute bottom-[2%] md:hidden h-[200px] bg-black w-full " src="/public/assets/Vector (2).png" />

          <p className="absolute bottom-[-12%] md:bottom-[-25%] md:px-28   left-4 z-20">
            We combine human empathy and intelligent data to provide the
            <br /> Google, Netflix, and Spotify
          </p>
          <img className="absolute w-20 bottom-[8%] md:bottom-[-30%] md:w-30 right-4 md:right-16 z-20" src="/public/assets/Circle Button (Desktop).png" />
        </div>
      </section>
    </RevalonScroll>
  );
}