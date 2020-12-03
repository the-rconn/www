/**@jsx h */
import { render, h } from 'preact';
import { Link } from 'wouter';


export default ({})=>{

    return <header>
        <span className="brand">RCONN</span>
        <nav>
            <Link to="/">
                <span>HOME</span>
            </Link>
            
            <Link to="/projects">
                <span>PROJECTS</span>
            </Link>
            
            <Link to="/things">
                <span>THINGS</span>
            </Link>
        </nav>
    </header>
}