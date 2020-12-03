/**@jsx h */
import { render, h } from 'preact';
import {motion} from 'framer-motion'
import { Link } from 'wouter';


export default ({})=>{

    return <main>
        <span style={{fontSize : '2.4rem', fontWeight : 600, marginTop : 80}}>Linking Ideas</span>
        <p style={{marginTop : 16, width : '90%'}}>
            <span style={{fontWeight : 600, fontSize : '1.1rem'}}>What is that?</span>
            <p>
                This is the official website for rconn.<br/>
                rconn is a team that only contains me for now, i made it to put my small side projects out to the world.<br/>
                Some of this projects are open-source and other are for sale.
                If you wanna join the team <a href="mailto:rconn@hash.fyi">email</a> (rconn at hash dot fyi)  me.<br/>
                you can email me if you don't wanna join tho hh.
            </p>
            
        </p>
        <p style={{marginTop : 16}}>
            <a href="https://github.com/the-rconn" target="_blank"> 
                <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="30" height="30"><path d="M9.358 2.145a8.209 8.209 0 00-3.716 0c-.706-.433-1.245-.632-1.637-.716a2.17 2.17 0 00-.51-.053 1.258 1.258 0 00-.232.028l-.01.002-.004.002h-.003l.137.481-.137-.48a.5.5 0 00-.32.276 3.12 3.12 0 00-.159 2.101A3.354 3.354 0 002 5.93c0 1.553.458 2.597 1.239 3.268.547.47 1.211.72 1.877.863a2.34 2.34 0 00-.116.958v.598c-.407.085-.689.058-.89-.008-.251-.083-.444-.25-.629-.49a4.798 4.798 0 01-.27-.402l-.057-.093a9.216 9.216 0 00-.224-.354c-.19-.281-.472-.633-.928-.753l-.484-.127-.254.968.484.127c.08.02.184.095.355.346a7.2 7.2 0 01.19.302l.068.11c.094.152.202.32.327.484.253.33.598.663 1.11.832.35.116.748.144 1.202.074V14.5a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-3.563c0-.315-.014-.604-.103-.873.663-.14 1.322-.39 1.866-.86.78-.676 1.237-1.73 1.237-3.292v-.001a3.354 3.354 0 00-.768-2.125 3.12 3.12 0 00-.159-2.1.5.5 0 00-.319-.277l-.137.48c.137-.48.136-.48.135-.48l-.002-.001-.004-.002-.009-.002a.671.671 0 00-.075-.015 1.261 1.261 0 00-.158-.013 2.172 2.172 0 00-.51.053c-.391.084-.93.283-1.636.716z" fill="currentColor"></path></svg>
            </a>
        </p>
    </main>
}