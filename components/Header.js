/**@jsx h */
import { render, h } from 'preact';
import {motion} from 'framer-motion'
import { Link } from 'wouter';


export default ({})=>{

    return <header>
        <span className="brand">RCONN</span>
        <nav>
            <Link to="/">
                <span>HOME</span>
            </Link>
            
            <Link to="/shop">
                <span>SHOP</span>
            </Link>
            
            <Link to="/things">
                <span>THINGS</span>
            </Link>
        </nav>
    </header>
}