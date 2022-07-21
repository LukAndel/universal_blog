import React, {useState, useEffect, Fragment, useContext} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import BlogContext from '../../blog/context/BlogContext';

const Navbar = () => {

    const [active, setActive] = useState(0);
    
    const [categories, setCategories] = useState([])

    const [openCategories, setOpenCategories] = useState(false)

    const [sections, setSections] = useState([]);

    const { blogUser } = useContext(BlogContext)

    const fetchSections = async () => {
        const response = await axios.get(`/api/${blogUser}/sections`);
        setSections(response.data);
    };

    const action = (async() => {

        const response = await axios.get(`/api/${blogUser}/categories`);

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
        if (blogUser) {
            fetchSections();
            action();
        }

    }, [blogUser]);

    return (
        <nav role="navigation" id="access">
            <ul id="menu">
                {
                    sections.map((section) => 
                    
                    <li className={section.id === active ? "active" : ""} onClick={() => setActive(section.id)} key={section.id}>
                        
                        {   
                            section.name === 'Home' ? <Link to={'/' + blogUser}>{section.name}</Link> :
                                section.name === 'Categories' ? 
                                    <Fragment>
                                        <span onClick={() => setOpenCategories(!openCategories)}>
                                            {section.name}
                                        </span>
        
                                        
                                        {
                                            openCategories && <ul id='nav-dropdown'>{categories.map((element) => <li key={element}><Link to={'/' + blogUser + '/categories/' + element}>{element}</Link></li>)}</ul>
                                        }
                                    </Fragment>
                                :
                                    <Link to={'/' + blogUser + '/' + section.name}>{section.name}</Link>
                        }
                        
                        
                    </li>)
                }
            </ul>
            
            
            
        </nav>
    )
}

export default Navbar;