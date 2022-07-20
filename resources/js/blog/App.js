
import Articles from "./Articles";
import Navbar from "../Page/Lukas/Navbar";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Article from "./Article";

const App = () => {


    const [user, setUser] = useState("");

    const fetchUser = async () => {
        const response = await axios.get("/api/blog/user");
        setUser(response.data);
    };

    useEffect (() => {
        fetchUser();
    }, []);


    return (

        <>
        <Router>
            <header>
                <Navbar user={user}/>
            </header>
            
            <div className="main">
                <Routes>

                    <Route exact path={'/'+user.name} element={

                        <div className="articles">
                        <Articles user={user} />          
                        </div>
                    } />

                        <Route exact path={"/" + user.name + '/:article_id'} element={

                            <Article />
                        } />


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
