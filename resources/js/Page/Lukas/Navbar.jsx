import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ user }) => {

    const [active, setActive] = useState(0);
    
    const [categories, setCategories] = useState([])

    const [openCategories, setOpenCategories] = useState(false)

    const links = [
        {
            label: 'Home', path:'/' + user.name, id: 0
        },
        {
            label: 'Categories', path: '/' + user.name + '/categories', id: 1
        },
        {
            label: 'Services', path:'/' + user.name + '/services', id: 2
        },
        {
            label: 'Portfolio', path:'/' + user.name + '/portfolio', id: 3
        },
        {
            label: 'Contact', path:'/' + user.name + '/contact', id: 4
        },
    ]


    const action = (async() => {

        const response = await axios.get("/api/blog/categories");

        const categoriesData = await response.data
        
        if (categoriesData === null) return

        console.log(categoriesData)
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

            console.log(uniqueArray);
        };
        
        setCategories(uniqueArray)

    })

    useEffect (() => {

        action();

    }, []);


    
  

    return (
        <nav role="navigation" id="access">
            <ul id="menu">
                {
                    links.map((element) => 
                    
                    <li style={{ position: 'relative'}} className={element.id === active ? "active" : ""} onClick={() => setActive(element.id)} key={element.id}>
                        
                        {
                            element.label === 'Categories' ? 
                                <Fragment>
                                    <span onClick={() => setOpenCategories(!openCategories)}>
                                        {element.label}
                                    </span>
    
                                    
                                        {
                                            openCategories && <ul id='nav-dropdown'>{categories.map((element) => <li key={element}><Link to={'/' + user.name + '/categories/' + element}>{element}</Link></li>)}</ul>
                                        }
                                </Fragment>
                            :
                                <Link to={element.path}>{element.label}</Link>
                        }
                        
                        
                    </li>)
                }
            </ul>
            
            
            
        </nav>
    )
}

export default Navbar;