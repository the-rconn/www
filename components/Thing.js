import {h} from 'preact'
import {useEffect, useState} from 'preact/hooks'
import {motion} from "framer-motion"


export default ({})=>{
    console.log();
    const [c, setC] = useState([0, 0])
    useEffect(()=>{
        window.onmousemove = (ev)=>{
            setC([ev.clientX, ev.clientY])
        }
    }, [])
    return <div className="Thing" >
        <motion.div
            initial={{
                position : 'fixed',
                top : '50%',
                left : '50%',
                width : '400vw',
                height : '400vw',
                translateX : '-50%',
                translateY : '-50%',
                zIndex : -1,
                rotateZ : 20,
                //wordWrap : 'break-word',
            }}
        >
            {'THING '.repeat(9999).split(' ').map(n=><h1 style={{display : 'inline-block', color : 'white', margin : 4, textShadow : '0 0 10px #fff, 0 0 20px #fff, 0 0 30px white, 0 0 40px white, 0 0 50px white, 0 0 60px white, 0 0 70px white'}}>{n}</h1>)}
        </motion.div>
        <motion.div animate={{
            translateX : c[0] / 48,
            translateY : c[1] / 48
        }}>
            <svg className="animation" width="450" height="450" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="blue" d="M29.3244 8.8541C30.0254 8.34481 30.9746 8.34481 31.6756 8.8541L50.7232 22.693C51.4242 23.2023 51.7175 24.105 51.4497 24.9291L44.1742 47.3209C43.9064 48.145 43.1385 48.7029 42.2721 48.7029H18.7279C17.8615 48.7029 17.0936 48.145 16.8258 47.3209L9.55026 24.9291C9.28251 24.105 9.57582 23.2023 10.2768 22.693L29.3244 8.8541Z" fill="#00FFFF"/>
                <path className="red" d="M28.9122 8.42705C29.2627 8.17241 29.7373 8.17241 30.0878 8.42705L50.311 23.1201C50.6615 23.3747 50.8081 23.8261 50.6743 24.2381L42.9497 48.0119C42.8158 48.4239 42.4319 48.7029 41.9986 48.7029H17.0014C16.5681 48.7029 16.1842 48.4239 16.0503 48.0119L8.32574 24.2381C8.19187 23.8261 8.33853 23.3747 8.68901 23.1201L28.9122 8.42705Z" fill="#FF0000" fill-opacity="0.8"/>
            </svg>
        </motion.div>

    </div>
}