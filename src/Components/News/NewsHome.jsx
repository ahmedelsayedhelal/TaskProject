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
        setActive(btn.id); // نحافظ على الـ active

        if (btn.id === "all") {
            navigate("/Details");
        }
    };

    return (
        <section className="min-h-screen flex-col items-center justify-around  w-full m-auto mt-20 md:mt-48 py-12">
            <div className="flex flex-col m-auto md:flex-row  w-full justify-around flex-wrap">

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

            <div className="grid grid-cols-2 md:grid-cols-3 w-full justify-start  h-20 mt-16 md:mt-40">

                <div className="flex h-20 md:mt-6  justify-start gap-6 order-1 md:order-1">
                    <img
                        src="/public/assets/News.png"
                        className="w-20 h-20 ml-20 rounded-full"
                    />
                    <p className="text-xl">
                        PETER VISSER <br />
                        Head of Project Management
                    </p>
                </div>

                <div className="flex h-[440px] py-8 items-center justify-center order-2 md:order-3">
                    <ArrowRight className="mx-2 mb-80" />
                    <ArrowLeft className="mx-2 mb-80" />
                </div>

                <p className="text-xl md:text-xl font-bold text-center py-4 col-span-2 order-3 md:order-2 md:col-span-1 mt-8 ">
                    Unix Studio got 2 <br />  CSS Design Awards
                </p>

            </div>

            <div className="flex w-full h-[60px] justify-around items-center mt-12   ">


            </div>
            <div className="hidden md:flex w-full justify-around h-20 ">
                <p className="font-extrabold outline-text- text-4xl p-4 ">
                    NEW/1

                </p>
                <p className=" hidden md:block text-3xl p-4 ">
                    STRATEGY

                </p>
                <p className="text-3xl p-4 ">
                    5 min read

                </p>
                <p className="hidden md:text-3xl p-4 ">
                    October 3, 2022

                </p>

            </div>
            <div className="h-[700px] hidden md:block ">
                <img src="/public/assets/hidden.png" className="m-auto" />

            </div>
            <div className="flex flex-col md:flex-row w-full justify-around ">
                <img src="/public/assets/11.png" className="mt-8" />
                <img src="/public/assets/12.png" className="mt-8" />

                <img src="/public/assets/13.png " className="mt-8" />
            </div>
            <div className="w-3/4  m-auto h-px bg-black  mt-20 "></div>

            <h3 className="font-bold text-9xl w-full h-[180] mt-20 text-center">
                BEST
            </h3>
            <div className="grid gap-4 w-full mt-20">

                <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-2 mb-8 w-full">

                    <div className="flex items-center gap-6 col-span-2">
                        <img
                            src="/public/assets/News.png"
                            className="w-20 h-20 rounded-full ml-10"
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
                <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-2 mb-8 w-full">

                    <div className="flex items-center gap-6 col-span-2">
                        <img
                            src="/public/assets/News.png"
                            className="w-20 h-20 rounded-full ml-10"
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
                </div> <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-2 mb-8 w-full">

                    <div className="flex items-center gap-6 col-span-2">
                        <img
                            src="/public/assets/News.png"
                            className="w-20 h-20 rounded-full ml-10"
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
                <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-2 mb-8 w-full">

                    <div className="flex items-center gap-6 col-span-2">
                        <img
                            src="/public/assets/News.png"
                            className="w-20 h-20 rounded-full ml-10"
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


            <div className="flex flex-col md:flex-row w-full justify-around mt-8 py-4 ">
                <img src="/public/assets/14.png" className="mt-8" />
                <img src="/public/assets/15.png" className="mt-8" />

                <img src="/public/assets/16.png " className="mt-8" />
            </div>




        </section>
    );
};
