import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <nav>
            <ul className="list-link">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post-сreated">Created post</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header