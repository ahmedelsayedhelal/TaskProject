export const WebAppHome = () => {
    const webDesign = [
        {
            id: 1,
            name: "Reduced  Training Costs",
            defenation: "Reduced Training Costs User-oriented design has proved to bring lucrative business benefits. From improving brand awareness to increasing customer acquisition"

        },
        {
            id: 2,
            name: "Reduced  Training Costs",
            defenation: "Reduced Training Costs User-oriented design has proved to bring lucrative business benefits. From improving brand awareness to increasing customer acquisition"

        },
        {
            id: 3,
            name: "Reduced  Training Costs",
            defenation: "Reduced Training Costs User-oriented design has proved to bring lucrative business benefits. From improving brand awareness to increasing customer acquisition"

        },

    ]

    return (

        <div className="w-full min-h-screen mt-8 md:mt-88">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-start-2 md:col-end-4 border-l-2 border-gray-300 py-20 px-6 md:px-12">
                    <div className="text-6xl md:text-8xl font-bold text-gray-300 mb-6">01</div>
                    <div className="space-y-4 text-lg md:text-xl leading-relaxed">
                        <p>
                            The widespread adoption of web apps, which aid communication with customers,
                            collaboration with employees, data storage, etc., is revamping how businesses
                            are run and clients are served.
                        </p>
                        <p>
                            The enterprise UX is all about the wants, needs, drivers, and pain points
                            of employees, thereby creating an effective, efficient, and pleasant experience.
                        </p>
                        <p className="font-semibold">
                            At Unix Studio, we design enterprise web applications that boost business
                            operations and deliver maximum value to end-users.
                        </p>
                    </div>
                </div>
            </div>
            <div
                className="w-full bg-cover h-auto"
                style={{ backgroundImage: "url('../../../src/assets/Graphic (1).jpg')" }}
            >
                <div className="relative flex flex-col items-center md:items-start z-10 px-4 md:px-20 py-20">
                    <img src="../../../src/assets/IMG.png" className="w-3/4 md:w-full md:h-[746px] mb-10 max-w-full" />

                    <div className="flex flex-col w-full items-center py-8">
                        <p className="text-gray-500 text-3xl md:text-4xl mb-2 py-8">
                            HOW DO WE <br /> MAKE IT WORK
                        </p>

                        <p className="text-white text-xl md:text-2xl py-8">
                            User-oriented design has proved to bring lucrative <br />
                            business benefits. From improving brand awareness <br />
                            to increasing customer acquisition
                        </p>
                    </div>

                </div >

            </div>
            {webDesign.map(web => (
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center bg-[#1A1A1A] text-white py-20 border-b-2 pl-20 ">

                    <div className="PX-16 ">
                        {web.id}
                    </div>
                    <div className="text-2xl font-bold">
                        {web.name}
                    </div>
                    <div>
                        {web.defenation}
                    </div>

                </div>


            ))}
            <h1 className="text-center m-auto md:text-8xl font-bold bg-black py-20 text-white w-full" >
             BOOST YOUR BUSINESS

            </h1>
        </div>
    )
}