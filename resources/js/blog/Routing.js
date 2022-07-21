







import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Article from "./Article";
import Articles from "./Articles";
import Calendar from "./Calendar";
import Categories from "./Categories";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Portfolio from "./Portfolio";




const Routing = () => {





    return (
        <Routes>
            <Route
                exact
                path={"/:name"}
                element={<Articles />}
            />

            <Route
                exact
                path={"/:name/:article_id"}
                element={<Article />}
            />

            <Route
                exact
                path={"/:name/categories"}
                element={<Categories />}
            />

            <Route
                exact
                path={"/:name/portfolio"}
                element={<Portfolio />}
            />

            <Route
                exact
                path={"/:name/gallery"}
                element={<Gallery />}
            />

            <Route
                exact
                path={"/:name/calendar"}
                element={<Calendar />}
            />
            
            <Route
                exact
                path={"/:name/about"}
                element={<About />}
            />

            <Route
                exact
                path={"/:name/contact"}
                element={<Contact />}
            />
            
        </Routes>
    )
}
export default Routing;