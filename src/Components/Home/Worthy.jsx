import { ArrowUpLeft, ArrowUpRight } from 'lucide-react';
import React from 'react';

export const Worthy = () => {


  return (
    <div className="bg-black text-white min-h-screen py-16 px-6 md:px-12 lg:px-20 font-panchang">
      {/* Header Section */}
      <div className="mb-16">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
          <div className="mb-6 md:mb-0">
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
            <p className="text-base md:text-lg text-gray-300">Born in Unix</p>
          </div>

          <div className="text-right">
            <p className="text-base md:text-lg text-white mb-1">Clients</p>
            <p className="text-sm md:text-base text-gray-300">all around the globe</p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 py-20 w-full   '>
        <div className=' col-start-2  border-l  border-l-gray-300 p-12  '>
          Active users on marketplaces we’ve created
        </div>
        <div className='col-start-3 col-end-4  border-l  border-l-gray-300 p-12'>
          Our clients raised owning to our design work

        </div>
        <div className=' col-start-2 font-bold text-5xl  border-l  border-l-gray-300 p-12 '>
          1M
        </div>
        <div className='col-start-3 col-end-4  font-bold text-5xl  border-l  border-l-gray-300 p-12'>
          $500M <br />
          <span className='text-base font-normal'>View your case</span>
        </div>
        <div className=' col-start-2 font-bold text-5xl  border-l border-t border-t-gray-300 border-l-gray-300 p-12 '>
          <span className='text-base font-normal'>Design awards</span>

          <br />  80+
        </div>
        <div className='col-start-3   font-bold text-5xl border-t border-t-gray-300  border-l  border-l-gray-300 p-12'>

          <span className='text-base font-normal'>Lazarev’s years of growth </span>

          <br />  7
        </div>
        <div className='col-start-4  font-bold text-5xl border-t border-t-gray-300  border-l  border-l-gray-300 p-12'>

          <span className='text-base font-normal py-12'>Successfully finished projects</span>
          <br />$500M
        </div>
        <div className='pt-20 px-8'>
          Get in touch
        </div>
        <div className='pt-20 px-8 border-l  border-l-gray-300 border-t border-t-gray-300'>
          Wanna fill this cell with your
          success story
        </div>
        <div className='col-start-3  border-t border-t-gray-300 font-bold text-5xl  border-l  border-l-gray-300 border-b  border-b-gray-300 p-12'>

          <span className='text-base font-normal'>Design awards</span>

          <br />  80+
        </div>
        <div className='  border-t border-t-gray-300 font-bold text-5xl  border-l  border-l-gray-300 p-12'>

          <span className='text-base font-normal'>Design awards</span>

          <br />  25m
        </div>
        <div className='col-start-1 col-end-3 border-t  border-t-gray-300 '>
          <div className='flex flex-col md:flex-row w-full md:justify-between md:items-end'>
            <div className='font-bold text-5xl md:text-7xl p-12'>
              OUR
              CLIENTS

            </div>
            <div className='p-12 '>
              ALL AROUND
              THE GLOBE
            </div>

          </div>

        </div>

        <div className='col-start-4 flex w-full justify-between items-center border-t  border-t-gray-300'>
          <div className='border-r border-gray-100 px-20'>
            <ArrowUpRight />
          </div>
          <div>
            <ArrowUpLeft />
          </div>
        </div>

      </div>
    </div>
  );
};