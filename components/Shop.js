/**@jsx h */
import { render, h } from 'preact';
import {motion} from 'framer-motion'
import { Link } from 'wouter';


export default ({})=>{
    var items = null
    return <div className="Shop">
        {items ? <div></div> : <span style={{position : 'absolute', top : '50%', left : '50%', transform : 'translate(-50%, -50%)', fontWeight : 800, fontSize : '1.6rem', textAlign : 'center', width : '100%'}}> No Items for Now. </span>}
    </div>
}