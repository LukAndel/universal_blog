import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Page/Lukas/navbar";
import BlogContext from "./context/BlogContext";
import Routing from "./Routing";




const Layout = () => {

    const [blogUser, setBlogUser] = useState(null);

    const fetchUser = async () => {
        const response = await axios.get(`/api/${blogUser}/user`);
        
            document.documentElement.style.setProperty(
                "--primary-color",
                response.data?.styleset?.colorset.color_1
            );
            document.documentElement.style.setProperty(
                "--secondary-color",
                response.data?.styleset?.colorset.color_2
            );
            document.documentElement.style.setProperty(
                "--tertiary-color",
                response.data?.styleset?.colorset.color_3
            );
            document.documentElement.style.setProperty(
                "--quaternary-color",
                response.data?.styleset?.colorset.color_4
            );

    };


    useEffect(() => {
        if (blogUser) {
            console.log('hey')
            fetchUser();
        }
    }, [blogUser]);


    return (
        <BlogContext.Provider value={{ blogUser, setBlogUser }}>

            <header>
                <Navbar />
            </header>
            
            <div className="main">
                
                <Routing />
            
                <footer>
                    <div className="footer"></div>
                </footer>
            </div>
        </BlogContext.Provider>
    )
}
export default Layout;