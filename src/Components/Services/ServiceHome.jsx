import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router"

export const ServiceHome = () => {
    return (
        <div className="w-full min-h-screen mt-8 md:mt-100">

            <div className="grid grid-cols-1 md:grid-cols-2 mt-20">

                <div className="py-12 px-8 flex justify-between border-b border-b-gray-300 border-r border-r-gray-300 order-1 md:order-0">
                    Services
                </div>

                <div className="py-12 px-8 flex justify-between border-b border-b-gray-300 
                        order-6 md:order-0">
                    INDUSTRIES
                </div>
                <Link to="/webapp">
                <div className="py-12 px-8 flex justify-between items-center border-b border-b-gray-300 border-r border-r-gray-300
                        order-2 md:order-0">
                    <h3 className="font-bold px-4 text-2xl md:text-6xl grow">
                        WEB APPLICATION</h3>
                    <div className="mt-8"><ArrowUpRight /></div>
                </div> </Link>

                <div className="py-12 px-8 flex justify-between items-center border-b border-b-gray-300  
                        order-7 md:order-0">
                    <h3 className="font-bold px-4 text-2xl md:text-6xl grow">FINTECH</h3>
                    <ArrowUpRight />
                </div>

                <div className="py-12 px-8 flex justify-between items-center border-b border-b-gray-300 border-r border-r-gray-300
                        order-3 md:order-0">
                    <h3 className="font-bold px-4 text-2xl md:text-6xl grow">
                        SAAS
                    </h3>
                    <ArrowUpRight />
                </div>

                <div className="py-12 px-8 flex justify-between items-center border-b border-b-gray-300  
                        order-8 md:order-0">
                    <h3 className="font-bold px-4 text-2xl md:text-6xl grow">EDTECH</h3>
                    <ArrowUpRight />
                </div>

                <div className="py-12 px-8 flex justify-between items-center border-b border-b-gray-300 border-r border-r-gray-300
                        order-4 md:order-0">
                    <h3 className="font-bold px-4 text-2xl md:text-6xl grow">MOBILE</h3>
                    <ArrowUpRight />
                </div>

                <div className="py-12 px-8 flex justify-between items-center border-b border-b-gray-300  
                        order-9 md:order-0">
                    <h3 className="font-bold px-4 text-2xl md:text-6xl grow">REALSTATE</h3>
                    <ArrowUpRight />
                </div>

                <div className="py-12 px-8 flex justify-between items-center border-b border-b-gray-300 border-r border-r-gray-300
                        order-5 md:order-0">
                    <h3 className="font-bold px-4 text-2xl md:text-6xl grow">SOFTWARE</h3>
                    <ArrowUpRight />
                </div>

                <div className="py-12 px-8 flex justify-between items-center border-b border-b-gray-300  
                        order-10 md:order-0">
                    <h3 className="font-bold px-4 text-2xl md:text-6xl grow">BLOCKCHAIN</h3>
                    <ArrowUpRight />
                </div>

            </div>

            <h3 className="text-left font-bold text-4xl py-20 px-8 md:px-20">
                WAIT! <br />
                ARE YOU LOOKING <br />
                FOR FUNDING?

            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-8 w-full">

                <div className="col-start-2 col-end-4 py-8 border-l border-l-gray-200">

                    <div className="flex flex-col items-start">
                        <p className="text-left text-3xl md:text-4xl leading-snug px-6 md:px-10">
                            We connect exceptional start-ups in Web3, Fintech, and SaaS sectors with our trusted
                            network of Angel investors and Venture Capital.
                        </p>
                        <div className="mt-8  border-t border-t-gray-200 border-b border-b-gray-200 px-12 py-8 w-full text-left  text-4xl">

                            <span className="text-2xl">01</span> Web 3

                        </div>
                        <div className=" border-b border-b-gray-200 px-12 py-8 w-full text-left text-4xl">

                            <span className="text-2xl">02</span> FINTECH

                        </div>
                        <div className="  border-b border-b-gray-200 px-12 py-8 w-full text-left text-4xl">

                            <span className="text-2xl">03</span>  BLOCKCHAIN

                        </div>
                        <p className="text-left text-3xl md:text-4xl leading-snug py-20 px-6 md:px-10">
                            We connect exceptional start-ups in Web3, Fintech, and SaaS sectors with our trusted
                            network of Angel investors and Venture Capital.
                        </p>

                        <img className="w-[120px] p-8" src="../../../src/assets/Button Circle.png" />


                    </div>



                </div>

            </div>


        </div>
    )
}
