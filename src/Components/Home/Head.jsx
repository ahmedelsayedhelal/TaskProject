

export const Head = () => {
  return (
      <section className="flex flex-col bg-black mb-40">
        <div className="relative h-[700px] max-h-full  ">
          <div className="w-full flex flex-col md:flex-row md:items-start items-end  py-32  gap-6 md:gap-100 md:px-20 px-8 ">
            <h1 className="text-5xl md:text-7xl font-bold w-full text-left md:w-[890px] text-white uppercase   ">
             UnixStudio <br/>
             DIGITAL <br/>
             AGENCY
            </h1>

            <img
              src="/public/assets/head.png"
              className="w-[100px] h-[100px] md:w-[140px] md:h-[140px]"
            />
          </div>


          <img className="hidden md:block absolute h-[400px] w-full bottom-[-15%]  z-10 " src="/public/assets/Graphic.png" />
          <img className="block  transform h-[400px]  md:hidden absolute w-full bottom-[-15%]  z-10 " src="/public/assets/Vector 136 (1).png" />


          <img className="hidden md:block absolute  w-full bottom-[-10%] z-20   " src="/public/assets/22.svg" />
          <img className="block  absolute bottom-[14%] md:hidden h-[200px] bg-black w-full " src="/public/assets/Vector (2).png" />

          <p className="absolute  bottom-[-12%] md:bottom-[-15%] md:px-20 text-2xl font-normal px-8  z-20">
            We build engaging user experience for early-stage <br />startups by connecting  the dots between users’ needs <br /> and the client’s business model.
          </p>
          <img className="absolute w-20 bottom-[12%] md:bottom-[-15%] md:w-30 right-4 md:right-16 z-20" src="/public/assets/Circle Button (Desktop).png" />
        </div>

      </section>
  );
}