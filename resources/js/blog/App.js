
import Articles from "./Articles";
import Navbar from "../Page/Lukas/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {


    const [user, setUser] = useState("");

    const fetchUser = async () => {
        const response = await axios.get("api/blog/user");
        setUser(response.data);
    };

    useEffect (() => {
        fetchUser();
    }, []);

    return (

        <>
        <Router>
            <header>
                <Navbar />
            </header>
            
            <div className="main">

                <Routes>

                    <Route exact path={user.name} element={

                        <div className="articles">
                        <Articles />          
                        </div>
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
