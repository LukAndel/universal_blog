import Articles from "./Articles";
import Navbar from "../Page/Lukas/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Article from "./Article";
import Categories from "./Categories";

const App = () => {
    const [user, setUser] = useState("");

    const fetchUser = async () => {
        const response = await axios.get("/api/blog/user");
        setUser(response.data);
        console.log(response.data.styleset.colorset.color_1);
    };

    document.documentElement.style.setProperty(
        "--primary-color",
        user.styleset?.colorset.color_1
    );
    document.documentElement.style.setProperty(
        "--secondary-color",
        user.styleset?.colorset.color_2
    );
    document.documentElement.style.setProperty(
        "--tertiary-color",
        user.styleset?.colorset.color_3
    );
    document.documentElement.style.setProperty(
        "--quaternary-color",
        user.styleset?.colorset.color_4
    );

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <>
            <Router>
                <header>
                    <Navbar user={user} />
                </header>

                <div className="main">
                    <Routes>
                        <Route
                            exact
                            path={"/" + user.name}
                            element={
                                <div className="articles">
                                    <Articles user={user} />
                                </div>
                            }
                        />

                        <Route
                            exact
                            path={"/" + user.name + "/:article_id"}
                            element={<Article />}
                        />

                        <Route
                            exact
                            path={"/" + user.name + "/categories"}
                            element={<Categories />}
                        />
                    </Routes>
                    <footer>
                        <div className="footer"></div>
                    </footer>
                </div>
            </Router>
        </>
    );
};

export default App;
