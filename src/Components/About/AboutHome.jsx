
import { ArrowUpLeft, ArrowUpRight } from "lucide-react"

export const AboutHome = () => {

  

  return (
    <section className="md:mt-20 min-h-screen w-full md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-3 w-full items-start">

        <div className="flex flex-col h-[440px] md:py-8 items-center justify-center order-1 md:order-1 border-r border-r-gray-300 px-8">
          <p className="text-3xl font-bold">
            MEET BATUMBA
          </p>
          <p className="text-xl  md:mx-12">
            We combine human empathy and intelligent data to provide the
          </p>
        </div>

        <div className="flex flex-col  h-[440px] md:py-8 items-center justify-center order-2 md:order-3 px-8  border-l border-l-gray-300">
          <p className="text-4xl font-bold">
            HEADING
          </p>
          <p className="text-xl  md:mx-28">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center col-span-2 order-3 md:order-2 md:col-span-1">
          <img className="w-[400px] h-[400px] mt-16" src="/public/assets/About1.svg" />
          <p className="text-xl text-center py-4">
            BOOST YOUR <br /> BUSINESS!
          </p>
        </div>

      </div>

      <p className="text-center text-xl w-3/4 mx-auto">
        User-oriented design has proved to bring lucrative business benefits.
        From improving brand awareness to increasing customer acquisition
        & retention to gaining market share – UX directly impacts business.
      </p>

      <div
        className="w-full bg-cover h-auto"
        style={{ backgroundImage: "url('/public/assets/Graphic (1).jpg')" }}>

        <div className="relative flex flex-col items-center md:items-start z-10 px-4 md:px-20 py-20">
          <img src="/public/assets/About2.svg" className="w-3/4 md:w-full md:h-[746px] mb-10 max-w-full" />

          <div className="flex flex-col w-full items-center py-8">
            <div className="w-full md:w-1/2 px-4">
              <p className="text-white text-left text-3xl md:text-5xl mb-2 py-8 font-panchang">
                TESTIMONIAL
              </p>

              <p className="text-white text-xl md:text-2xl text-left py-8">
                User-oriented design has proved to bring lucrative <br />
                business benefits. From improving brand awareness <br />
                to increasing customer acquisition
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center   w-full ">
            <div className="flex flex-col items-center ">
              <img className="w-[560] h-[600px] " src="/public/assets/1.svg" />
              <p className="w-[291px] h-7 text-white text-[28px] text-center">Eugene Massy</p>

            </div>
            <div className="hidden md:flex flex-col items-center ">
              <img className="w-[560] h-[600px] " src="/public/assets/4.svg" />
              <p className="w-[291px] h-7 text-white text-[28px] text-center ">Eugene Massy</p>

            </div>
            <div className="hidden md:flex flex-col items-center j ">
              <img className="w-[560] h-[600px] " src="/public/assets/1.svg" />
              <p className="w-[291px] h-7 text-white text-[28px] text-center">Eugene Massy</p>

            </div>

          </div>


        </div >


      </div>

      <h3 className="text-3xl md:text-6xl w-[600px] font-bold text-left mt-12 md:ml-12 py-8 px-8 uppercase">
        OUR GUIDING
        PRINCIPLES

      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-8 w-full items-center px-4">

        <div className="col-start-2 col-end-4 py-8 border-l border-l-gray-200">

          <div className="flex flex-col items-start">
            <p className="text-left text-3xl md:text-4xl leading-snug px-6 md:px-10">
              <span className="text-sm pb-20  mr-20">SECTORS</span>  Unix Studio combines the freedom of personality and the synergy of an agency. Striving to bring the best to clients, we unite forces, cooperate closely

            </p>
             <div className="relative w-full h-[600px] mt-20">
  
             <div className="absolute top-10 left-1/2 -translate-x-1/2 rotate-6 bg-black text-white px-8 py-3 rounded-full text-sm font-medium">
             PASSION IS OUR CRAFT
            </div>

             <div className="absolute top-30 left-[38%] rotate-330 bg-white border text-black px-8 py-3 rounded-full text-sm font-medium">
              DILIGENCE
            </div>

           <div className="absolute top-52 left-[45%] rotate-18 bg-black text-white px-10 py-3 rounded-full text-sm font-medium">
            JERKS SHALL NOT PASS
           </div>

          <div className="absolute top-[390px] left-[40%] rotate-330 bg-black text-white px-8 py-3 rounded-full text-sm font-medium">
           SINCERITY
          </div>

          <div className="absolute top-[380px] left-[68%] rotate-45 bg-black text-white px-10 py-3 rounded-full text-sm font-medium">
         SINCERITY
        </div>

         <div className="absolute top-[350px] left-[20%] rotate-330 bg-white border text-black px-10 py-3 rounded-full text-sm font-medium">
        HUMOUR & IRONY
       </div>

        <div className="absolute top-[470px] left-0-[20%] md:left-[30%] rotate-30 bg-white border text-black px-10 py-3 rounded-full text-sm font-medium">
        AMIABLE NERDINESS
      </div>

</div>

         
            <p className="text-left text-3xl md:text-4xl leading-snug px-6 md:px-10">
              <span className="text-sm pb-20  mr-20">SECTORS</span>  We combine human empathy and intelligent data to provide the

            </p>
            <p className="text-left text-3xl md:text-4xl mt-8 leading-snug px-6 md:px-10">
              We combine human empathy and intelligent data to provide the

            </p>

               <div className="bg-black rounded-full p-4 m-8 hover:opacity-50">
                          <ArrowUpLeft size={40} className="text-white" />
                           </div>

          </div>



        </div>
      </div>




    </section>

  );

}