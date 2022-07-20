import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {

    const [active, setActive] = useState(0);
    

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

    const [categoriesData, setCategoriesData] = useState(null);

    const fetchCategories = async () => {
        const response = await axios.get("/api/blog/categories");
        setCategoriesData(response.data);
    };

    useEffect (() => {
        fetchCategories();
    }, []);

    const action = (() => {
        if (categoriesData !== null) {
        const categories = categoriesData?.map((article) => article.categories?.map((category) => category.name));

        const categoryMap = Object.values(categories)
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

    
    return (uniqueArray)
    }})

    useEffect (() => {
        action();
    }, [categoriesData]);

    console.log(action())

    
  

    return (
        <nav role="navigation" id="access">
            <ul id="menu">
                {
                    links.map((element) => <li className={element.id === active ? "active" + " " + element.label : element.label} onClick={() => setActive(element.id)} key={element.id}><Link to={element.path}>{element.label}</Link></li>)
                }
            </ul>
        </nav>
    )
}

export default Navbar;