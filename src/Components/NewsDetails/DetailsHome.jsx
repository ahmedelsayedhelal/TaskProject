import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export const DetailHome = () => {
    return (
        <section className="w-full min-h-screen py-20 mt-32">
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


                <div className="text-sm text-gray-600">
                    STRATEGY
                </div>

                <div className="text-sm text-gray-500">
                    5 min read
                </div>

                <div className="text-lg font-medium">
                    October 3, 2022
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-4 md:mt-12 px-12">
                <div className="font-bold text-4xl mb-12">
                    Overview
                </div>
                <div className="col-span-2 text-4xl ">
                    This article focuses on people’s emotional reactions
                    as they happen in the digital world, helping designers
                    create better user experience and form long-lasting bonds with the audience.

                </div>

            </div>
            <div className="h-px bg-black w-3/4 mx-auto my-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-4 md:mt-12 px-12">
                <div className="flex flex-col py-8 items-start">
                    <div className="font-bold text-4xl mb-12">
                        Table of contents
                    </div>
                    <p className="mb-4">
                        Synopisis
                    </p>
                    <p className="mb-4">
                        What is emotional design
                    </p>
                    <p className="mb-4">
                        Aenean
                    </p>
                    <p className="mb-4">
                        Donec quis dui eu
                    </p>
                    <div className="h-px bg-black w-3/4  my-12"></div>
                    <p className="mb-4">
                        share : <Instagram className="inline mx-4 hover:transition-all" /> <Linkedin className="inline mx-4" /> <Twitter className="inline " />
                    </p>


                </div>

                <div className="col-span-2 text-4xl ">
                    <img src="/public/assets/Details.png " />

                </div>

            </div>

        </section>
    )
}