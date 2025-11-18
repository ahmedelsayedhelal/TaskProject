import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Components/Home/Home.jsx'; 
import { Layout } from './layouts/layout.jsx';
import { OurServices } from './Pages/OurServices.jsx';
import { Contact } from './Pages/Contact.jsx';
import { About } from './Pages/About.jsx';
import { News } from './Pages/News.jsx';
import { Cases } from './Pages/Cases.jsx';
import {NewsDetails} from './Pages/NewsDetails.jsx'
import { WebApp } from './Pages/WebApp.jsx';
const router = createBrowserRouter([
    {
        path: "/",
        element:<Layout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "ourservice",
                element:<OurServices/>
            },
            {
                path:"News",
                element:<News/>
            },
            {
                path:"about",
                element:<About/>
            },
             {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"cases",
                element:<Cases/>
            },
            {
                path:"Details",
                element:<NewsDetails/>
            },
            {
                path:"webapp",
                element :<WebApp/>
            }
        ],  
       
    },
   

 
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>

)
