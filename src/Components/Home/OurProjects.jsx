import { ArrowUpRight } from "lucide-react";

export const OurProjects = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full h-auto   justify-between px-8 md:px-20 py-20 md:items-end  ">
        <p className="font-bold text-3xl md:text-6xl font-panchang  ">
          OUR PAST<br />
          PROJECTS

        </p>
        <p className="text-xl md:text-2xl h-9 border-b-2  pb-1">
          500+ PROJECTS

        </p>
      </div>
      <div className=" md:mt-12 grid  sm:grid-cols-1 md:grid-cols-3 w-full  divide-x divide-y divide-gray-300  border-l border-r border-t border-b border-gray-200  ">

        <div className="md:col-start-2 md:col-end-3 border-l border-gray-200  ">
          <div className="flex flex-col  ">
            <div className="md:mb-80">
              <div className="flex justify-between items-center md:flex-row md:justify-between py-8 px-8 md:px-16">

                <h3 className="font-bold text-2xl md:text-3xl  ">Olive Max</h3>

                <ArrowUpRight />
              </div>
              <p className="w-[424px]  text-left px-8 md:px-16">
                The platform allows incredible flexibility via creation, distribution, and purchasing features for
                the brands to stand out and create their own identity in the Metaverse.
              </p>
            </div>
            <div>
              <p className="font-bold pb-20 px-8 md:px-16">
                INTERFACE & WEBSITE
              </p>
            </div>

          </div>
        </div>

        <div className="md:col-start-3 w-full   justify-self-end  ">
            <img src="/public/assets/projectone.svg " className="h-[600px] w-[400px] p-[32px_0px_32px_32px] " />
        </div>
        <div className="md:col-start-2 md:col-end-3 border-l border-gray-200  ">
            <img src="/public/assets/projecttwo.svg" className="h-[600px] w-[400px] p-[32px_0px_32px_32px] pr-0" />
        </div>

        <div className="md:col-start-3 ">
          <div className="flex flex-col  ">
            <div className="md:mb-80">
              <div className="flex justify-between items-center md:flex-row md:justify-between py-8 px-8 md:px-16 ">

                <h3 className="font-bold text-2xl md:text-3xl  border-b-2 "> SHOCK </h3>

                <ArrowUpRight />
              </div>
              <p className="w-[424px]  text-left px-8 md:px-16">
                The platform allows incredible flexibility via creation, distribution, and purchasing features for
                the brands to stand out and create their own identity in the Metaverse.
              </p>
            </div>
            <div>
              <p className="font-bold px-8 md:px-16">
                INTERFACE & WEBSITE
              </p>
            </div>

          </div>
        </div>

        <div className="md:col-start-2 md:col-end-4  border  border-gray-100 border-b-0  border-t-0 mb-20 ">
          <p className="text-xs tracking-widest text-gray-500 pt-20 pl-8">SERVICES</p>

          <h2 className="text-3xl md:text-4xl px-8 md:px-28  ">
            We combine human empathy and <br />
            intelligent data to provide the
          </h2>
          <br />
          <h2 className=" text-3xl md:text-5xl px-8   ">highest level of satisfaction for our <br/>
            customers and their users.
          </h2>


        </div>
        <div className="md:col-start-2 md:col-end-3 border  border-gray-100  border-t-0 mt-8 md:mt-16  ">
          <div className="flex justify-between border-b border-gray-200 px-8 ">
            <h3 className="font-bold text-2xl md:text-3xl   py-8">

              Web <br />
              Application

            </h3>
            <div className="py-8">
              <ArrowUpRight size={40} />

            </div>

          </div>

          <div className="text-left mt-4 md:mt-20 px-8 md:px-12">
            The platform allows incredible flexibility via creation, distribution, and purchasing features for the brands
            to stand out and create their own identity in the Metaverse.

          </div>

          <div className="flex justify-between border-b border-gray-200 px-8">
            <h3 className="font-bold text-2xl md:text-3xl   py-8">

              Web <br />
              Application

            </h3>
            <div className="py-8">
              <ArrowUpRight size={40} />

            </div>

          </div>

          <div className="text-left mt-4 md:mt-20 px-8">
            The platform allows incredible flexibility via creation, distribution, and purchasing features for the brands
            to stand out and create their own identity in the Metaverse.

          </div>
        </div>
        <div className="md:col-start-3 border  border-gray-100  border-t-0 ">
          <div className="flex justify-between border-b border-gray-200 px-8">
            <h3 className="font-bold text-2xl md:text-3xl    py-8">

              Web <br />
              Application

            </h3>
            <div className="py-8">
              <ArrowUpRight size={40} />

            </div>

          </div>

          <div className="text-left mt-4 md:mt-20 px-8">
            The platform allows incredible flexibility via creation, distribution, and purchasing features for the brands
            to stand out and create their own identity in the Metaverse.

          </div>

          <div className="flex justify-between border-b border-gray-200 px-8 ">
            <h3 className="font-bold text-2xl md:text-3xl    py-8">

              Web <br />
              Application

            </h3>
            <div className="py-8">
              <ArrowUpRight size={40} />

            </div>

          </div>

          <div className="text-left mt-4 md:mt-20 px-8 mb-4">
            The platform allows incredible flexibility via creation, distribution, and purchasing features for the brands
            to stand out and create their own identity in the Metaverse.

          </div>

        </div>
      </div>

    </>
  );
}