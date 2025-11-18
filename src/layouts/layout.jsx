import { Navbar } from "../Components/Home/Nav";
import { Outlet,useLocation } from "react-router-dom";
import Footer from "../Components/Home/Footer";
import { RevalonScroll } from "../Components/Relevanscroll";


export const Layout =()=>{
      const location = useLocation();
        const showFooter = location.pathname !== "/contact";


    return(
        <div className="">
        <Navbar/>
         <Outlet/>

          {showFooter && <Footer/> }  
        </div>
    );  
}