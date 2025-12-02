

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export const CasesHome = () => {
  const [active, setActive] = useState("all");


  const buttons = [
    { id: "all", label: "ALL (9)" },
    { id: "design", label: "DESIGN (2)" },
    { id: "business", label: "BUSINESS (2)" },
    { id: "strategy", label: "STRATEGY (1)" },
    { id: "culture", label: "WORK CULTURE (1)" },
    { id: "updates", label: "UPDATES (3)" },
  ];
  return (
    <section className="w-full min-h-screen md:mt-26 bg-black py-20 px-4 md:px-6 ">
      <div className="flex flex-col m-auto md:flex-row gap-4 w-full md:justify-around px-4 md:px-0">

        {buttons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setActive(btn.id)}
            className={`px-4 py-2 rounded-full text-sm border
              ${active === btn.id
                ? "bg-white text-black"
                : "hover:bg-white hover:text-black text-white bg-[#1a1a1a]"
              }`}
          >
            {btn.label}
          </button>
        ))}

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  w-full mt-12 py-12  md:px-10 border-b border-b-[#383838]  border-t border-t-[#383838]">
        <div className="md:border-r border-r-[#383838] px-4 mb-12 order-1 md:order-0">
        <div className="flex flex-col">
          <h1 className="text-white text-2xl pb-8 font-bold font-panchang">
            Featured
          </h1>
          <p className="text-[#B8B8B8]">
            We build engaging user experience forearly-stage startups by connecting thedots between users’ needs and theclient’s business model.
          </p>
        </div>

        </div>

        <div className="md:border-r border-r-[#383838] px-4 mb-12 order-3 md:order-0">
          <div className="flex flex-col">
          <div className="flex items-center justify-between gap-2 md:gap-6 mb-4 ">
          <h1 className="text-white text-2xl pb-8 font-bold font-panchang">
            Metastaq <span className="text-lg font-normal hubot-sans">/2023</span>
          </h1>
          <ArrowUpRight size={30} className="text-white mb-4 text-3xl"/>
          </div>
          <p className="text-[#B8B8B8]">
          This Web3 SaaS platform serves as a marketplace where brands, both experts in blockchain and newcomers, 
          can create and distribute non-fungible token collections. It allows users to create non-code NFTs with an automatically
           generated smart contract.
          </p>
          <div className="relative mt-8 
      after:content-[''] after:block after:w-full 
      after:border-b after:border-dotted after:border-white md:after:mt-12 after:mt-4
       ">
      <img src="/public/assets/cases/IMG.svg" className="w-full" />
      </div>
        </div>
        </div>
        <div className="md:border-r px-4 mb-12 order-4 md:order-0 ">
         <div className="flex flex-col">
          <div className="flex items-center justify-between gap-6 mb-4">
          <h1 className="text-white text-2xl pb-8 font-bold font-panchang">
             Boel IT <span className="text-lg font-normal hubot-sans">/2023</span>
          </h1>
          <ArrowUpRight size={30} className="text-white mb-4 text-3xl"/>
          </div>
          <p className="text-[#B8B8B8]">
          The blockchain-powered platform introduces a unique system of E-learning. It unites students who strive to level up their skills, contributors who share knowledge and get paid for it,
           as well as sponsors who invest in learners' education and get dividends.
          </p>
               <div className="relative mt-8 
      after:content-[''] after:block after:w-full 
      after:border-b after:border-dotted after:border-white md:after:mt-12 after:mt-4
       ">
      <img src="/public/assets/cases/IMG4.svg" className="w-full" />
      </div>
        </div>
          
        </div>

        <div className="md:  pl-20 order-2 md:order-0 mb-4 md:mb-20 xl:mb-24 3xl:mb-32 self-end  ">
          <div className="w-[246px] h-[246px] rounded-full bg-black text-white border border-white flex flex-col items-center justify-center text-center cursor-pointer hover:opacity-80 transition">
            <ArrowUpRight className="mb-2" />
             <span className="text-sm  font-semibold">START YOUR<br />CAREER</span>
            </div>

        </div>
        <div className="md:border-r border-r-[#383838] md:border-l border-l-[#383838] px-4 mb-12 order-5 md:order-0">
          <div className="flex flex-col">
          <div className="flex items-center justify-between gap-6 mb-4">
          <h1 className="text-white text-2xl pb-8 font-bold font-panchang">
            Boel IT <span className="text-lg font-normal hubot-sans">/2023</span>
          </h1>
          <ArrowUpRight size={30} className="text-white mb-4 text-3xl"/>
          </div>
          <p className="text-[#B8B8B8]">
           It’s a B2B highly specialized and complex software for chemical, oil, gas, and bulk carriers in the maritime industry. 
           It encompasses financial analysis and modeling of ship investments, helps manage risks and provide adjusted results.
          </p>
               <div className="relative mt-8 
      after:content-[''] after:block after:w-full 
      after:border-b after:border-dotted after:border-white md:after:mt-12 after:mt-4
       ">
      <img src="/public/assets/cases/IMG (1).svg" className="w-full" />
      </div>
        </div>
        </div>
        <div className="md:border-r px-4 mb-12 order-6 md:order-0 ">
          <div className="flex flex-col">
          <div className="flex items-center justify-between gap-6 mb-4">
          <h1 className="text-white text-2xl pb-8 font-bold font-panchang">
            11Sight <span className="text-lg font-normal hubot-sans">/2023</span>
          </h1>
          <ArrowUpRight size={30} className="text-white mb-4 text-3xl"/>
          </div>
          <p className="text-[#B8B8B8]">
          The SaaS Inbound Video Calls & Customer Engagement Platform is a leader in the space of one-click video technology.
           The innovative tool empowers customers and companies with the fastest and simplest way to connect from any.
          </p>
               <div className="relative mt-8 
      after:content-[''] after:block after:w-full 
      after:border-b after:border-dotted after:border-white md:after:mt-12 after:mt-4
       ">
      <img src="/public/assets/cases/IMG (2).svg" className="w-full" />
      </div>
        </div>
        </div>

      </div>




         <div className="grid grid-cols-1 md:grid-cols-3  w-full  py-12 md:px-10 border-b border-b-[#383838]  ">
        <div className="md:border-r border-r-[#383838] px-4 mb-12 order-1 md:order-0">
        <div className="flex flex-col">
          <h1 className="text-white text-2xl pb-8 font-bold font-panchang">
            SAAS
          </h1>
          <p className="text-[#B8B8B8]">
          We enter the arena when a SaaS product scales up and problems tend to multiply.
           We think out each design element and meet the scalability changes that could appear in thelong tun.
          </p>
        </div>

        </div>

        <div className="md:border-r border-r-[#383838] px-4 mb-12 order-3 md:order-0">
          <div className="flex flex-col">
          <div className="flex items-center justify-between gap-2 md:gap-6 mb-4 ">
          <h1 className="text-white text-2xl pb-8 font-bold font-panchang">
            Qore8 <span className="text-lg font-normal hubot-sans">/2023</span>
          </h1>
          <ArrowUpRight size={30} className="text-white mb-4 text-3xl"/>
          </div>
          <p className="text-[#B8B8B8]">
          This Web3 SaaS platform serves as a marketplace where brands, both experts in blockchain and newcomers, 
          can create and distribute non-fungible token collections. It allows users to create non-code NFTs with an automatically
           generated smart contract.
          </p>
          <div className="relative mt-8 
      after:content-[''] after:block after:w-full 
      after:border-b after:border-dotted after:border-white md:after:mt-12 after:mt-4
       ">
      <img src="/public/assets/cases/5.svg" className="w-full" />
      </div>
        </div>
        </div>
        <div className="md:border-r px-4 mb-12 order-4 md:order-0 ">
         <div className="flex flex-col">
          <div className="flex items-center justify-between gap-6 mb-4">
          <h1 className="text-white text-2xl pb-8 font-bold font-panchang">
            Field Stream <span className="text-lg font-normal hubot-sans">/2023</span>
          </h1>
          <ArrowUpRight size={30} className="text-white mb-4 text-3xl"/>
          </div>
          <p className="text-[#B8B8B8]">
          The blockchain-powered platform introduces a unique system of E-learning. It unites students who strive to level up their skills, contributors who share knowledge and get paid for it,
           as well as sponsors who invest in learners' education and get dividends.
          </p>
               <div className="relative mt-8 
      after:content-[''] after:block after:w-full 
      after:border-b after:border-dotted after:border-white md:after:mt-12 after:mt-4
       ">
      <img src="/public/assets/cases/6.svg" className="w-full" />
      </div>
        </div>
          
        </div>

        <div className="md:  pl-20 order-2 md:order-0 mb-4 lg:mb-24 2xl:mb-32 self-end ">
          <div className="w-[246px] h-[246px] rounded-full bg-black text-white border border-white flex flex-col items-center justify-center text-center cursor-pointer hover:opacity-80 transition">
            <ArrowUpRight className="mb-2" />
             <span className="text-sm tracking-wide font-semibold">START YOUR<br />CAREER</span>
            </div>

        </div>
        <div className="md:border-r border-r-[#383838] md:border-l border-l-[#383838] px-4 mb-12 order-5 md:order-0">
          <div className="flex flex-col">
          <div className="flex items-center justify-between gap-6 mb-4">
          <h1 className="text-white text-2xl pb-8 font-bold font-panchang">
            Boel IT <span className="text-lg font-normal hubot-sans">/2023</span>
          </h1>
          <ArrowUpRight size={30} className="text-white mb-4 text-3xl"/>
          </div>
          <p className="text-[#B8B8B8]">
           It’s a B2B highly specialized and complex software for chemical, oil, gas, and bulk carriers in the maritime industry. 
           It encompasses financial analysis and modeling of ship investments, helps manage risks and provide adjusted results.
          </p>
               <div className="relative mt-8 
      after:content-[''] after:block after:w-full 
      after:border-b after:border-dotted after:border-white md:after:mt-12 after:mt-4
       ">
      <img src="/public/assets/cases/7.svg" className="w-full" />
      </div>
        </div>
        </div>
                <div className="md:border-r border-r-[#383838] md:border-l border-l-[#383838] px-4 mb-12 order-5 md:order-0">
          <div className="flex flex-col">
          <div className="flex items-center justify-between gap-6 mb-4">
          <h1 className="text-white text-2xl pb-8 font-bold font-panchang">
            Panorama <span className="text-lg font-normal hubot-sans">/2023</span>
          </h1>
          <ArrowUpRight size={30} className="text-white mb-4 text-3xl"/>
          </div>
          <p className="text-[#B8B8B8]">
           It’s a B2B highly specialized and complex software for chemical, oil, gas, and bulk carriers in the maritime industry. 
           It encompasses financial analysis and modeling of ship investments, helps manage risks and provide adjusted results.
          </p>
               <div className="relative mt-8 
      after:content-[''] after:block after:w-full 
      after:border-b after:border-dotted after:border-white md:after:mt-12 after:mt-4
       ">
      <img src="/public/assets/cases/8.svg" className="w-full" />
      </div>
        </div>
        </div>
       
       
     

      </div>

      <div className="text-white mt-8  text-2xl font-panchang border-b boreder-b-white pb-4 w-max m-auto cursor-pointer hover:opacity-80 transition">
      VIEW ALL CASE

      </div>



    </section>
  )
}