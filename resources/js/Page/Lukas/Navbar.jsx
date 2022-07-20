import React, {useState} from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {

    const [active, setAcive] = useState(0)

    const links = [
        {
            label: 'Home', path:'/blog/', id: 0
        },
        {
            label: 'Categories', path:'/blog/categories', id: 1
        },
        {
            label: 'Services', path:'/blog/services', id: 2
        },
        {
            label: 'Portfolio', path:'/blog/services', id: 3
        },
        {
            label: 'Contact', path:'/blog/contact', id: 4
        },
    ]

    return (
        <nav role="navigation" id="access">
            <ul id="menu">
                {
                    links.map((element) => <li className={element.id === active ? "active" : ""} onClick={() => setAcive(element.id)} key={element.id}><Link to={element.path}>{element.label}</Link></li>)
                }
            </ul>
        </nav>
    )
}

export default Navbar;