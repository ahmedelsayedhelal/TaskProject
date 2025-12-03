import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export const DetailHome = () => {
    return (
        <section className="w-full min-h-screen py-20 mt-32">
            <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-2 mb-8 w-full  md:px-12">

                <div className="flex items-center gap-2 md:gap-6 col-span-2">
                    <img
                        src="/public/assets/News.png"
                        className="w-20 h-20 rounded-full ml-10"
                    />
                    <p className="text-xl font-semibold">
                        PETER VISSER <br />
                        <span className="text-sm font-normal">Head of Project Management</span>
                    </p>
                </div>


                <div className="text-sm text-gray-600 px-10 md:px-0">
                    STRATEGY
                </div>

                <div className="text-sm text-gray-500 px-10 md:px-0">
                    5 min read
                </div>

                <div className="text-lg font-medium px-10 md:px-0">
                    October 3, 2022
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-4 md:mt-12 px-8 md:pl-20">
                <div className="font-bold text-4xl mb-12 uppercase">
                    Overview
                </div>
                <div className="col-span-2 text-4xl md:px-24 ">
                    This article focuses on people’s emotional reactions
                    as they happen in the digital world, helping designers
                    create better user experience and form long-lasting bonds with the audience.

                </div>

            </div>
            <div className="h-px bg-black w-3/4 mx-auto my-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-4 md:mt-12 px-8 md:px-20">
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

                <div className="col-span-2 text-4xl pt-8 px-2 md:px-0 w-full ">
                <p className="text-xl w-75 md:w-150 pb-4 md:pl-32">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lorem enim, convallis ac enim eu, malesuada pulvinar metus. Suspendisse eu mollis risus. Proin vel nisl ligula. Etiam vulputate dolor et odio accumsan maximus. Proin ac quam sed turpis tincidunt volutpat vitae maximus tellus. Sed aliquet gravida orci, non venenatis enim consectetur quis. Donec quis dui eu neque rutrum pulvinar.
                    Curabitur nec faucibus odio. Praesent non ligula quis turpis imperdiet accumsan ut in metus. In facilisis metus vitae efficitur convallis. Phasellus libero nisi, ullamcorper vel tristique non, pellentesque non nibh. Suspendisse non semper eros, ac tempus lacus. Aenean ac nisl vel magna maximus sodales. Praesent nec diam purus. Praesent vitae efficitur enim, eget porta risus. Sed enim diam, iaculis vitae feugiat sit amet, faucibus quis lorem.
                </p>
                
                <p className="text-xl  w-75 md:w-150 pb-4  md:pl-32">
                        Donec tempor pellentesque leo, sit amet euismod mauris vehicula eu. Proin nec lacus tristique, ullamcorper erat quis, sollicitudin ipsum. Ut nibh orci, laoreet vel facilisis viverra, congue vel mauris. Aenean congue, tortor at suscipit suscipit, tellus purus sodales neque, sed sagittis orci odio ac justo. 
               </p>

               <p className="text-xl  w-75 md:w-150 pb-4 md:pl-32">
                Despite the tremendous impact emotions have on our decision-making mechanism, there are still two kinds of things going on in the brain — cognitive and emotional. And the former is always alert, trying to understand the world and weighing all pros and cons.
               </p>
               <p className="text-xl  w-75 md:w-150 pb-4 md:pl-32">
                But this article focuses on people’s emotional reactions as they happen in the digital world, helping designers create better user experience and form long-lasting bonds with the audience. From the material below, you’ll learn how to master designs that evoke emotions; how certain digital products make users feel; and how to use emotions to drive customers to action. So, buckle up, and let’s get going!
               </p>
               <h3 className="text-3xl  w-75 md:w-150 font-panchang font-bold mb-8 md:pl-32 uppercase">
                Emotional design in UX/UI: How to nail
                </h3>
                   <p className="text-xl  w-75 md:w-150 pb-4 md:pl-32">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lorem enim, convallis ac enim eu, malesuada pulvinar metus. Suspendisse eu mollis risus. Proin vel nisl ligula. Etiam vulputate dolor et odio accumsan maximus. Proin ac quam sed turpis tincidunt volutpat vitae maximus tellus. Sed aliquet gravida orci, non venenatis enim consectetur quis. Donec quis dui eu neque rutrum pulvinar.
                    Curabitur nec faucibus odio. Praesent non ligula quis turpis imperdiet accumsan ut in metus. In facilisis metus vitae efficitur convallis. Phasellus libero nisi, ullamcorper vel tristique non, pellentesque non nibh. Suspendisse non semper eros, ac tempus lacus. Aenean ac nisl vel magna maximus sodales. Praesent nec diam purus. Praesent vitae efficitur enim, eget porta risus. Sed enim diam, 
                </p>
                  <h3 className="text-3xl w-75 md:w-150 font-panchang font-bold mb-8 md:pl-32 uppercase">
                A bit funny never killed nobody
                </h3>
                    <p className="text-xl  w-75 md:w-150 pb-4 md:pl-32">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lorem enim, convallis ac enim eu, malesuada pulvinar metus. Suspendisse eu mollis risus. Proin vel nisl ligula. Etiam vulputate dolor et odio accumsan maximus. Proin ac quam sed turpis tincidunt volutpat vitae maximus tellus. Sed aliquet gravida orci, non venenatis enim consectetur quis. Donec quis dui eu neque rutrum pulvinar.
                    Curabitur nec faucibus odio. Praesent non ligula quis turpis imperdiet accumsan ut in metus. In facilisis metus vitae efficitur convallis. Phasellus libero nisi, ullamcorper vel tristique non, pellentesque non nibh. Suspendisse non semper eros, ac tempus lacus. Aenean ac nisl vel magna maximus
                </p>
                <div>
                    <img src="/public/assets/detail1.svg" className="w-[830px] "/>
                </div>
                <h3 className="text-3xl  w-75 md:w-150 font-panchang font-bold  my-8 md:pl-32 uppercase">
                Close cooperation: why it’s important
                </h3>
                              <p className="text-xl  w-75 md:w-150 pb-4 md:pl-32">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lorem enim, convallis ac enim eu, malesuada pulvinar metus. Suspendisse eu mollis risus. Proin vel nisl ligula. Etiam vulputate dolor et odio accumsan maximus. Proin ac quam sed turpis tincidunt volutpat vitae maximus tellus. Sed aliquet gravida orci, non venenatis enim consectetur quis. Donec quis dui eu neque rutrum pulvinar.
                    Curabitur nec faucibus odio. Praesent non ligula quis turpis imperdiet accumsan ut in metus. In facilisis metus vitae efficitur convallis. Phasellus libero nisi, ullamcorper vel tristique non, pellentesque non nibh. Suspendisse non semper eros, ac tempus lacus. Aenean ac nisl vel magna maximus
                </p>
                  <div>
                    <img src="/public/assets/detail2.svg" className="w-[830px] "/>
                </div>

                

                </div>

            </div>

        </section>
    )
}