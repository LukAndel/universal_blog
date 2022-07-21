import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ user }) => {

    const [active, setActive] = useState(0);
    
    const [categories, setCategories] = useState([])

    const [openCategories, setOpenCategories] = useState(false)

    const [sections, setSections] = useState([]);

    const fetchSections = async () => {
        const response = await axios.get(`/api/blog/sections`);
        setSections(response.data);
    };

    const action = (async() => {

        const response = await axios.get("/api/blog/categories");

        const categoriesData = await response.data
        
        if (categoriesData === null) return

        const categories = await categoriesData?.map((article) => article.categories?.map((category) => category.name));

        const categoryMap = await Object.values(categories)
            .reduce((concatedArr, item) => concatedArr.concat(Object.entries(item)), [])
            .reduce((result, [category, values]) => {
            result[category] = result[category] || [];
            result[category] = result[category].concat(values);
            return result;
        }, {});



        let uniqueArray = [];

        for (let i = 0; i < categoryMap[0].length; i++) {
            if (!uniqueArray.includes(categoryMap[0][i])) {
                uniqueArray.push(categoryMap[0][i]);
            }
        };
        
        setCategories(uniqueArray)

    })

    useEffect (() => {
        fetchSections();
        action();

    }, []);


    console.log(sections)
  

    return (
        <nav role="navigation" id="access">
            <ul id="menu">
                {
                    sections.map((section) => 
                    
                    <li className={section.id === active ? "active" : ""} onClick={() => setActive(section.id)} key={section.id}>
                        
                        {   section.name === 'Home' ? <Link to={'/' + user.name}>{section.name}</Link> :
                            section.name === 'Categories' ? 
                                <Fragment>
                                    <span onClick={() => setOpenCategories(!openCategories)}>
                                        {section.name}
                                    </span>
    
                                    
                                        {
                                            openCategories && <ul id='nav-dropdown'>{categories.map((element) => <li key={element}><Link to={'/' + user.name + '/categories/' + element}>{element}</Link></li>)}</ul>
                                        }
                                </Fragment>
                            :
                                <Link to={'/' + user.name + '/' + section.name}>{section.name}</Link>
                        }
                        
                        
                    </li>)
                }
            </ul>
            
            
            
        </nav>
    )
}

export default Navbar;