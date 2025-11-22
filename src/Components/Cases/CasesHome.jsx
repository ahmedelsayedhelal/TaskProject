

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
    <section className="w-full min-h-screen md:mt-26 bg-black py-20">
      <div className="flex flex-col m-auto md:flex-row gap-4 w-full md:justify-around px-12">

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

      <div className="grid grid-cols-1 md:grid-cols-3  w-full mt-12 py-12 px-12 border-b border-b-[#383838] border-t border-t-[#383838]">
        <div className="md:border-r border-r-[#383838] px-12 mb-12 order-1 md:order-0">
          <img src="/public/assets/cases/Text.png" />
        </div>

        <div className="md:border-r border-r-[#383838] px-12 mb-12 order-3 md:order-0">
          <img src="/public/assets/cases/1.png" />
        </div>
        <div className="md:border-r px-12 mb-12 order-4 md:order-0 ">
          <img src="/public/assets/cases/2.png" />
        </div>

        <div className="md:border-r border-r-[#383838]  px-12 order-2 md:order-0 mb-12 ">
          <img src="/public/assets/cases/Desktop3.png" />
        </div>
        <div className="md:border-r border-r-[#383838] px-12 mb-12 order-5 md:order-0">
          <img src="/public/assets/cases/3.png" />
        </div>
        <div className="md:border-r px-12 mb-12 order-6 md:order-0 ">
          <img src="/public/assets/cases/4.png" />
        </div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  w-full  py-12 px-12 border-b border-b-[#383838] border-t border-t-[#383838]">
        <div className="md:border-r border-r-[#383838] px-12 mb-12 order-1 md:order-0">
          <img src="/public/assets/cases/Text2.png" />
        </div>

        <div className="md:border-r border-r-[#383838] px-12 mb-12 order-3 md:order-0">
          <img src="/public/assets/cases/5.png" />
        </div>
        <div className="md:border-r px-12 mb-12 order-4 md:order-0 ">
          <img src="/public/assets/cases/9.png" />
        </div>


        <div className="md:border-r border-r-[#383838] border-l border-l-[#383838] px-12 mb-12 order-5 md:order-0 col-start-2">
          <img src="/public/assets/cases/3.png " />
        </div>
        <div className="  px-12 mb-12 order-6 md:order-0 col-start-3">
          <img src="/public/assets/cases/4.png" />
        </div>
        <div className="md:border-r border-r-[#383838]  px-12 order-2 md:order-0 mb-12 ">
          <img src="/public/assets/cases/Desktop3.png" />
        </div>
        <div className="md:border-r border-r-[#383838] border-l border-l-[#383838] px-12 mb-12 order-5 md:order-0 col-start-2">
          <img src="/public/assets/cases/3.png " />
        </div>

      </div>


    </section>
  )
}