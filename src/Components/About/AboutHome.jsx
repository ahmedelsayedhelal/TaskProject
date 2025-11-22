
import { RevalonScroll } from "../Relevanscroll";

export const AboutHome = () => {
  return (
    <section className="mt-84 min-h-screen w-full py-20">
      <div className="grid grid-cols-2 md:grid-cols-3 w-full items-start">

        <div className="flex flex-col h-[440px] py-8 items-center justify-center order-1 md:order-1 border-r border-r-gray-300 ">
          <p className="text-3xl font-bold">
            MEET BATUMBA
          </p>
          <p className="text-xl px-8 mx-12">
            We combine human empathy and intelligent data to provide the
          </p>
        </div>

        <div className="flex flex-col  h-[440px] py-8 items-center justify-center order-2 md:order-3  border-l border-l-gray-300">
          <p className="text-4xl font-bold">
            HEADING
          </p>
          <p className="text-xl px-8 mx-28">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center col-span-2 order-3 md:order-2 md:col-span-1">
          <img className="w-[400px] h-[400px] mt-16" src="/public/assets/IMGCircle.png" />
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
          <img src="/public/assets/IMGABOUTT.png" className="w-3/4 md:w-full md:h-[746px] mb-10 max-w-full" />

          <div className="flex flex-col w-full items-center py-8">
            <div className="w-full md:w-1/2">
              <p className="text-white text-left text-3xl md:text-5xl mb-2 py-8">
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
              <img className="w-[560] h-[600px] " src="/public/assets/3.png" />
              <p className="w-[291px] h-7 text-white text-[28px] text-center">Eugene Massy</p>

            </div>
            <div className="hidden md:flex flex-col items-center ">
              <img className="w-[560] h-[600px] " src="/public/assets/4.png" />
              <p className="w-[291px] h-7 text-white text-[28px] text-center ">Eugene Massy</p>

            </div>
            <div className="hidden md:flex flex-col items-center j ">
              <img className="w-[560] h-[600px] " src="/public/assets/3.png" />
              <p className="w-[291px] h-7 text-white text-[28px] text-center">Eugene Massy</p>

            </div>

          </div>


        </div >


      </div>

      <h3 className="text-6xl w-[600px] font-bold text-left mt-12 ml-12 py-8">
        OUR GUIDING
        PRINCIPLES

      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-8 w-full">

        <div className="col-start-2 col-end-4 py-8 border-l border-l-gray-200">

          <div className="flex flex-col items-start">
            <p className="text-left text-3xl md:text-4xl leading-snug px-6 md:px-10">
              <span className="text-sm pb-20  mr-20">SECTORS</span>  Unix Studio combines the freedom of personality and the synergy of an agency. Striving to bring the best to clients, we unite forces, cooperate closely

            </p>
            <img src="/public/assets/List (1).png" className="w-[950px] h-[750px]" />
            <p className="text-left text-3xl md:text-4xl leading-snug px-6 md:px-10">
              <span className="text-sm pb-20  mr-20">SECTORS</span>  We combine human empathy and intelligent data to provide the

            </p>
            <p className="text-left text-3xl md:text-4xl mt-8 leading-snug px-6 md:px-10">
              We combine human empathy and intelligent data to provide the

            </p>

            <img className="w-[120px] p-8" src="/public/assets/Button Circle.png" />


          </div>



        </div>
      </div>




    </section>

  );

}