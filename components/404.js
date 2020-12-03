/**@jsx h */
import { render, h } from 'preact';
import { Link } from 'wouter';


export default ({})=>{
    var items = null
    return <div className="NotFound">
        <span style={{position : 'absolute', top : '50%', left : '50%', transform : 'translate(-50%, -50%)', fontWeight : 800, fontSize : '1.6rem', textAlign : 'center', width : '100%'}}> 
        Are You Lost?
        <br/>
        <Link to="/" style={{fontSize : '70%'}}>
            Back to home
        </Link>
        </span>
    </div>
}