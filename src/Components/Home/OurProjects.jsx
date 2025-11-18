import { ArrowUpRight } from "lucide-react";

export const OurProjects = () =>
{
  return (
    <>
      <div className="flex flex-col md:flex-row w-full h-auto items-center  justify-around py-20 md:items-end  ">
        <p className="font-bold text-3xl md:text-6xl   ">
        OUR PASt<br/>
        PROJECTS

      </p>
        <p className="text-xl md:text-2xl h-9 border-b-2 inline-block pb-1">
        500+ PROJECTS

        </p>
      </div>
      <div className=" mt-12 grid  sm:grid-cols-1 md:grid-cols-3 border border-gray-100    ">

      <div className="md:col-start-2 md:col-end-3 border  border-gray-100  border-t-0 h-[600px]  ">
      <div className="flex flex-col  ">
      <div className="mb-80">
       <div className="flex justify-between items-center md:flex-row md:justify-around py-8 ">

       <h3 className="font-bold text-2xl md:text-3xl  border-b-2 ">Olive Max</h3>

       <ArrowUpRight/>
       </div>
       <p className="w-[424px] px-16 text-left">
        The platform allows incredible flexibility via creation, distribution, and purchasing features for 
        the brands to stand out and create their own identity in the Metaverse.
       </p>
       </div>
       <div>
        <p className="font-bold px-16">
          INTERFACE & WEBSITE
        </p>
       </div>
      
         </div>
      </div>

      <div className="md:col-start-3 border border-gray-100 border-t-0 ">
         <div className="">
           <img src="../../../src/assets/a1202085fe857f4432475b16ca6fb321c6cbb819.png " className="h-[600px] w-[400px] p-[32px_0px_32px_32px] pr-0"/>
         </div>
      </div>
      <div className="md:col-start-2 md:col-end-3 border  border-gray-100  border-t-0 ">
         <div className="">
           <img src="../../../src/assets/00ae9c9b6a27a35ac41b5e53ec020741df2fdb29.png" className="h-[600px] w-[400px] p-[32px_0px_32px_32px] pr-0"/>
         </div>

      </div>
      <div className="md:col-start-3 border  border-gray-100  border-t-0">
       <div className="flex flex-col  ">
      <div className="mb-80">
       <div className="flex justify-between items-center md:flex-row md:justify-around py-8 ">

       <h3 className="font-bold text-2xl md:text-3xl  border-b-2 "> SHOCK </h3>

       <ArrowUpRight/>
       </div>
       <p className="w-[424px] px-16 text-left">
        The platform allows incredible flexibility via creation, distribution, and purchasing features for 
        the brands to stand out and create their own identity in the Metaverse.
       </p>
       </div>
       <div>
        <p className="font-bold px-16">
          INTERFACE & WEBSITE
        </p>
       </div>
      
         </div>
      </div>

      <div className="md:col-start-2 md:col-end-4  border  border-gray-100 border-b-0  border-t-0 ">
        <p className="text-xs tracking-widest text-gray-500 pt-20">SERVICES</p>

    <h2 className="text-3xl md:text-4xl px-20 font-semibold leading-relaxed">
      We combine human empathy and <br />
      intelligent data to provide the
       </h2>
      <br />
      <span className="py-0 text-3xl md:text-4xl  font-semibold leading-relaxed text-left">highest level of satisfaction for our <br />
      customers and their users.
      </span>
   

      </div>
      <div className="md:col-start-2 md:col-end-3 border  border-gray-100  border-t-0 mt-16 py-8 ">
      <div className="flex justify-around "> 
      <h3 className="font-bold text-2xl md:text-3xl px-8  border-b-2 py-8">

       Web <br/>
      Application

      </h3>
      <div className="py-8">
              <ArrowUpRight  />

      </div>

      </div>

      <div className="text-left mt-20 px-12">
      The platform allows incredible flexibility via creation, distribution, and purchasing features for the brands 
      to stand out and create their own identity in the Metaverse.

      </div>

       <div className="flex justify-around "> 
      <h3 className="font-bold text-2xl md:text-3xl px-8  border-b-2 py-8">

       Web <br/>
      Application

      </h3>
      <div className="py-8">
              <ArrowUpRight  />

      </div>

      </div>

      <div className="text-left mt-20 px-12">
      The platform allows incredible flexibility via creation, distribution, and purchasing features for the brands 
      to stand out and create their own identity in the Metaverse.

      </div>
      </div>
       <div className="md:col-start-3 border  border-gray-100  border-t-0 ">
         <div className="flex justify-around "> 
      <h3 className="font-bold text-2xl md:text-3xl px-8  border-b-2 py-8">

       Web <br/>
      Application

      </h3>
      <div className="py-8">
              <ArrowUpRight  />

      </div>

      </div>

      <div className="text-left mt-20 px-12">
      The platform allows incredible flexibility via creation, distribution, and purchasing features for the brands 
      to stand out and create their own identity in the Metaverse.

      </div>

       <div className="flex justify-around "> 
      <h3 className="font-bold text-2xl md:text-3xl px-8  border-b-2 py-8">

       Web <br/>
      Application

      </h3>
      <div className="py-8">
              <ArrowUpRight  />

      </div>

      </div>

      <div className="text-left mt-20 px-12">
      The platform allows incredible flexibility via creation, distribution, and purchasing features for the brands 
      to stand out and create their own identity in the Metaverse.

      </div>

       </div>
      </div>

    </>
  );
}