import React, {useState} from 'react'

import { Link } from 'react-router-dom'

const Navbar = ({user}) => {

    const [active, setActive] = useState(0)

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

    return (
        <nav role="navigation" id="access">
            <ul id="menu">
                {
                    links.map((element) => <li className={element.id === active ? "active" : ""} onClick={() => setActive(element.id)} key={element.id}><Link to={element.path}>{element.label}</Link></li>)
                }
            </ul>
        </nav>
    )
}

export default Navbar;