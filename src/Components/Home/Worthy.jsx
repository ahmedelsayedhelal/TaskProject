import { ArrowDownLeft, ArrowUpLeft, ArrowUpRight } from 'lucide-react';
import React from 'react';

export const Worthy = () => {


  return (
    <div className="bg-black text-white min-h-screen py-16 px-8 md:px-12 lg:px-20 ">
      <div className="mb-16">
        <div className="flex flex-col  md:flex-row md:items-start md:justify-between mb-8">
          <div className="mb-6 md:mb-0 font-panchang">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight mb-4">
              WE ARE{' '}
              <span className="inline-flex items-center">
                W
                <img
                  className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-2 object-contain'
                  src='/public/assets/Circle Button (Desktop).png'
                  alt="Get in Touch"
                />
                RTHY
              </span>
            </h1>
            <p className="text-base md:text-lg px-2 text-gray-300">Born in Unix</p>
          </div>

          <div className="text-left md:text-right px-4">
            <p className="text-base md:text-lg text-white mb-1">Clients</p>
            <p className="text-sm md:text-base text-gray-300">all around the globe</p>
          </div>
        </div>
      </div>
       <div className="grid grid-cols-2 md:grid-cols-4 py-12 w-full md:divide-x divide-[#383838] border-t border-[#383838]">
  
  <div className="md:col-start-2 md:border-l border-[#383838] p-12">
    Active users on marketplaces we’ve created
  </div>

  <div className="md:col-start-3 md:col-span-2 w-full py-12 md:p-12">
    Our clients raised owning to 
  </div>

  <div className="md:col-start-2 font-bold text-5xl border-b border-[#383838] md:border-l p-12">
    1M
  </div>

  <div className="md:col-start-3 md:col-span-2 font-bold text-5xl border-b border-[#383838] p-12">
    $500M <br />
    <span className="text-base font-normal">View your case</span>
  </div>

  <div className="md:col-start-2 font-bold text-5xl md:border-l border-b border-[#383838]  p-12">
    <span className="text-base font-normal">Design awards</span>
    <br /> 80+
  </div>

  <div className="md:col-start-3 font-bold text-5xl border-b border-[#383838] p-12">
    <span className="text-base font-normal">Lazarev’s years of growth </span>
    <br /> 7
  </div>

  <div className="md:col-start-4 font-bold text-5xl p-12 border-b border-[#383838]">
    <span className="text-base font-normal">Successfully finished projects</span>
    <br /> $500M
  </div>

  <div className="pt-20 px-8 border-b border-[#383838]">
    Get in touch
  </div>

  <div className="pt-20 px-8 border-b border-[#383838]">
    Wanna fill this cell with your success story
  </div>

  <div className="md:col-start-3 border-b border-[#383838] font-bold text-5xl p-12">
    <span className="text-base font-normal">Design awards</span>
    <br /> 80+
  </div>

  <div className="md:border-b border-[#383838] font-bold text-5xl p-12">
    <span className="text-base font-normal">Design awards</span>
    <br /> 25m
  </div>

  <div className="md:col-start-1 md:col-end-3 ">
    <div className="flex flex-col md:flex-row w-full md:justify-between md:items-end">
      <div className="font-bold text-5xl md:text-7xl p-4">
        OUR<br/>CLIENTS
      </div>
      <div className="p-12">
        ALL AROUND<br/>THE GLOBE
      </div>
    </div>
  </div>

  <div className="md:col-start-3 flex w-full justify-between items-center">
    <div className="px-20">
      <ArrowUpRight size={60} />
    </div>
    </div>

    <div className="md:col-start-4 flex w-full justify-between items-center md:border-r border-[#383838]">
    <div className="px-20">
      <ArrowDownLeft size={60} />
    </div>
    </div>

    
  </div>



    </div>
  );
};