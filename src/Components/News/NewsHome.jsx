import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export const NewsHome = () => {
    const [active, setActive] = useState("all");


    const buttons = [
        { id: "all", label: "ALL (9)" },
        { id: "design", label: "DESIGN (2)" },
        { id: "business", label: "BUSINESS (2)" },
        { id: "strategy", label: "STRATEGY (1)" },
        { id: "culture", label: "WORK CULTURE (1)" },
        { id: "updates", label: "UPDATES (3)" },
    ];
    const navigate = useNavigate();

    const handleClick = (btn) => {
        setActive(btn.id);

        if (btn.id === "all") {
            navigate("/Details");
        }
    };

    return (
        <section className="min-h-screen flex-col items-center justify-around   w-full m-auto mt-20 md:mt-48 py-12">
            <div className="flex flex-col px-8 md:flex-row  w-full justify-between md:px-20 ">

                {buttons.map((btn) => (
                    <button
                        key={btn.id}
                        onClick={() => handleClick(btn)}
                        className={`px-4 py-2 rounded-full text-sm border
              ${active === btn.id
                                ? "bg-black text-white"
                                : "hover:bg-black hover:text-white"
                            }`}
                    >
                        {btn.label}
                    </button>
                ))}

            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 w-full justify-between    h-20 mt-16 md:mt-40">

                <div className="flex h-20 md:mt-6    gap-6 order-1 md:order-1 px-2">
                    <img
                        src="/public/assets/News.png"
                        className="w-20 h-20 md:ml-20 rounded-full"
                    />
                    <p className="text-xl">
                        PETER VISSER <br />
                        Head of Project Management
                    </p>
                </div>
               

                <div className="flex h-[440px] py-8 items-center justify-center order-2  md:order-3">
                    <ArrowLeft className="md:ml-20 ml-12 mb-80" />

                    <ArrowRight className="md:ml-20 ml-12 mb-80" />

                </div>  
                <div className="hidden md:block text-xl md:text-2xl mx-16 font-bold text-center font-panchang  col-span-2 order-3 md:order-2 md:col-span-1 md:mt-8 ">
                    Unix Studio got 2 <br />  CSS Design Awards
                </div>



               

            </div>

            <div className="flex flex-col w-full items-center  mt-12   ">


            <div className="hidden md:flex w-full justify-between px-20 h-20 ">
                <p className="font-extrabold outline-text- text-4xl p-4 ">
                    NEW/1

                </p>
                <p className=" hidden md:block text-2xl p-4 ">
                    STRATEGY

                </p>
                <p className="text-3xl p-4 ">
                    5 min read

                </p>
                <p className="hidden md:block text-2xl p-4 ">
                    October 3, 2022

                </p>

            </div>

            <div className=" hidden md:block min-w-full px-8 ">
                <img src="/public/assets/News1.svg" className="px-12  w-full" />

            </div>
            </div>

    <div className="flex flex-col md:flex-row w-full justify-between mt-8 py-4 md:px-12 ">
           
        <div className="max-w-xl w-full  rounded-3xl   p-8 space-y-6">
  <div className="flex items-center gap-4">
    <img
      src="/assets/News.png"
      alt="Author avatar"
      className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-200"
    />
    <div className="leading-tight">
      <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gray-700">
        Peter Visser
      </p>
      <p className="text-xs text-gray-500 mt-1">Head of Project Management</p>
    </div>
  </div>

  <h3 className="text-2xl font-semibold leading-snug text-gray-900">
    Web3 website redesign: 2x increase in website traffic
  </h3>

  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-[0.2em]">
    <span className="px-3 py-1 rounded-full border border-gray-300">
      Strategy
    </span>
    <span className="text-gray-400">October 3, 2022</span>
    <span className="text-gray-400">5 min read</span>
  </div>

  {/* Thumbnail */}
  <div className="overflow-hidden rounded-2xl border border-gray-200">
    <img
      src="/assets/card1.svg"
      alt="Article cover"
      className="w-full  object-cover hover:scale-105 transition-transform duration-500 ease-out"
    />
  </div>
       </div>
      <div className="max-w-xl w-full  rounded-3xl   p-8 space-y-6">
  <div className="flex items-center gap-4">
    <img
      src="/assets/News.png"
      alt="Author avatar"
      className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-200"
    />
    <div className="leading-tight">
      <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gray-700">
        Peter Visser
      </p>
      <p className="text-xs text-gray-500 mt-1">Head of Project Management</p>
    </div>
  </div>

 <h3 className="text-2xl font-semibold leading-snug text-gray-900">
    Web3 website redesign: 2x increase in website traffic
  </h3>

 <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-[0.2em]">
    <span className="px-3 py-1 rounded-full border border-gray-300">
      Strategy
    </span>
    <span className="text-gray-400">October 3, 2022</span>
    <span className="text-gray-400">5 min read</span>
  </div>

 <div className="overflow-hidden rounded-2xl border border-gray-200">
    <img
      src="/assets/card3.svg"
      alt="Article cover"
      className="w-full  object-cover hover:scale-105 transition-transform duration-500 ease-out"
    />
  </div>
      </div>
      <div className="max-w-xl w-full  rounded-3xl   p-8 space-y-6">
  <div className="flex items-center gap-4">
    <img
      src="/assets/News.png"
      alt="Author avatar"
      className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-200"
    />
    <div className="leading-tight">
      <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gray-700">
        Peter Visser
      </p>
      <p className="text-xs text-gray-500 mt-1">Head of Project Management</p>
    </div>
  </div>

  <h3 className="text-2xl font-semibold leading-snug text-gray-900">
    Web3 website redesign: 2x increase in website traffic
  </h3>

 <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-[0.2em]">
    <span className="px-3 py-1 rounded-full border border-gray-300">
      Strategy
    </span>
    <span className="text-gray-400">October 3, 2022</span>
    <span className="text-gray-400">5 min read</span>
  </div>

  <div className="overflow-hidden rounded-2xl border border-gray-200">
    <img
      src="/assets/card2.svg"
      alt="Article cover"
      className="w-full  object-cover hover:scale-105 transition-transform duration-500 ease-out"
    />
  </div>
      </div>

            </div>
                        
                        

          
            <div className="w-3/4  m-auto h-px bg-black  mt-20 "></div>

            <h3 className="font-bold text-5xl md:text-9xl w-full h-[180] mt-20 text-center font-panchang ">
                BEST
            </h3>
            <div className="grid gap-4 w-full mt-20 items-center justify-center px-8 md:px-20">

                <div className="grid grid-cols-1 md:grid-cols-5 justify-center items-center gap-4 md:gap-52 mb-8 w-full">

                    <div className="flex items-center gap-6 col-span-2">
                        <img
                            src="/public/assets/News.png"
                            className="w-20 h-20 rounded-full "
                        />
                        <p className="text-xl font-semibold">
                            PETER VISSER <br />
                            <span className="text-sm font-normal">Head of Project Management</span>
                        </p>
                    </div>

                    <div className="text-lg font-medium">
                        16 witty tips to get six-figure clients on Dribbble
                    </div>

                    <div className="text-sm text-gray-600">
                        STRATEGY
                    </div>

                    <div className="text-sm text-gray-500">
                        5 min read
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 items-center  gap-4 md:gap-52 mb-8 w-full">

                    <div className="flex items-center gap-6 col-span-2">
                        <img
                            src="/public/assets/News.png"
                            className="w-20 h-20 rounded-full "
                        />
                        <p className="text-xl font-semibold">
                            PETER VISSER <br />
                            <span className="text-sm font-normal">Head of Project Management</span>
                        </p>
                    </div>

                    <div className="text-lg font-medium">
                        16 witty tips to get six-figure clients on Dribbble
                    </div>

                    <div className="text-sm text-gray-600">
                        STRATEGY
                    </div>

                    <div className="text-sm text-gray-500">
                        5 min read
                    </div>
                </div> <div className="grid grid-cols-1 md:grid-cols-5 items-center  gap-4 md:gap-52 mb-8 w-full">

                    <div className="flex items-center gap-6 col-span-2">
                        <img
                            src="/public/assets/News.png"
                            className="w-20 h-20 rounded-full "
                        />
                        <p className="text-xl font-semibold">
                            PETER VISSER <br />
                            <span className="text-sm font-normal">Head of Project Management</span>
                        </p>
                    </div>

                    <div className="text-lg font-medium">
                        16 witty tips to get six-figure clients on Dribbble
                    </div>

                    <div className="text-sm text-gray-600">
                        STRATEGY
                    </div>

                    <div className="text-sm text-gray-500">
                        5 min read
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 items-center  gap-4 md:gap-52 mb-8 w-full">

                    <div className="flex items-center gap-6 col-span-2">
                        <img
                            src="/public/assets/News.png"
                            className="w-20 h-20 rounded-full "
                        />
                        <p className="text-xl font-semibold">
                            PETER VISSER <br />
                            <span className="text-sm font-normal">Head of Project Management</span>
                        </p>
                    </div>

                    <div className="text-lg font-medium">
                        16 witty tips to get six-figure clients on Dribbble
                    </div>

                    <div className="text-sm text-gray-600">
                        STRATEGY
                    </div>

                    <div className="text-sm text-gray-500">
                        5 min read
                    </div>
                </div>

            </div>


            
    <div className="flex flex-col md:flex-row w-full justify-between mt-8 py-4 md:px-12 ">
           
<div className="max-w-xl w-full  rounded-3xl   p-8 space-y-6">
  <div className="flex items-center gap-4">
    <img
      src="/assets/News.png"
      alt="Author avatar"
      className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-200"
    />
    <div className="leading-tight">
      <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gray-700">
        Peter Visser
      </p>
      <p className="text-xs text-gray-500 mt-1">Head of Project Management</p>
    </div>
  </div>

  <h3 className="text-2xl font-semibold leading-snug text-gray-900">
    Web3 website redesign: 2x increase in website traffic
  </h3>

  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-[0.2em]">
    <span className="px-3 py-1 rounded-full border border-gray-300">
      Strategy
    </span>
    <span className="text-gray-400">October 3, 2022</span>
    <span className="text-gray-400">5 min read</span>
  </div>

  {/* Thumbnail */}
  <div className="overflow-hidden rounded-2xl border border-gray-200">
    <img
      src="/assets/card1.svg"
      alt="Article cover"
      className="w-full  object-cover hover:scale-105 transition-transform duration-500 ease-out"
    />
  </div>
</div>
<div className="max-w-xl w-full  rounded-3xl   p-8 space-y-6">
  <div className="flex items-center gap-4">
    <img
      src="/assets/News.png"
      alt="Author avatar"
      className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-200"
    />
    <div className="leading-tight">
      <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gray-700">
        Peter Visser
      </p>
      <p className="text-xs text-gray-500 mt-1">Head of Project Management</p>
    </div>
  </div>

 <h3 className="text-2xl font-semibold leading-snug text-gray-900">
    Web3 website redesign: 2x increase in website traffic
  </h3>

 <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-[0.2em]">
    <span className="px-3 py-1 rounded-full border border-gray-300">
      Strategy
    </span>
    <span className="text-gray-400">October 3, 2022</span>
    <span className="text-gray-400">5 min read</span>
  </div>

 <div className="overflow-hidden rounded-2xl border border-gray-200">
    <img
      src="/assets/card3.svg"
      alt="Article cover"
      className="w-full  object-cover hover:scale-105 transition-transform duration-500 ease-out"
    />
  </div>
</div>
<div className="max-w-xl w-full  rounded-3xl   p-8 space-y-6">
  <div className="flex items-center gap-4">
    <img
      src="/assets/News.png"
      alt="Author avatar"
      className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-200"
    />
    <div className="leading-tight">
      <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gray-700">
        Peter Visser
      </p>
      <p className="text-xs text-gray-500 mt-1">Head of Project Management</p>
    </div>
  </div>

  <h3 className="text-2xl font-semibold leading-snug text-gray-900">
    Web3 website redesign: 2x increase in website traffic
  </h3>

 <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-[0.2em]">
    <span className="px-3 py-1 rounded-full border border-gray-300">
      Strategy
    </span>
    <span className="text-gray-400">October 3, 2022</span>
    <span className="text-gray-400">5 min read</span>
  </div>

  <div className="overflow-hidden rounded-2xl border border-gray-200">
    <img
      src="/assets/card2.svg"
      alt="Article cover"
      className="w-full  object-cover hover:scale-105 transition-transform duration-500 ease-out"
    />
  </div>
</div>

            </div>




        </section>
    );
};
