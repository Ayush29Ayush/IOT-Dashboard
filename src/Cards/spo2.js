import * as React from 'react';
import { useState } from 'react';

import './spo2.css'


function SpO2(props){
    // state = {
    //     loading: true,
    //     person: null
    // };
    const [state, setState] = useState({data:{latitude:"",longitude:""}, loading: true})
    
    async function getLoc (){
        const url = "https://api.thingspeak.com/channels/1578852/feeds.json?api_key=BD82H142AZQEE3LP&results=2";
        const response =  await fetch(url);
        const d = await response.json();
        setState({data: d.feeds[0], loading:false});
    }
    // const changeState = () => {
    //     setstate({data1: props.latitude, data2: props.longitude})
    // };
    
    return (
        <div className="loc"> 
        <div className="headerloc">
            <h1 className="loctitle">SpO2 readings</h1>
            {/* <img className="imgloc" src="spo2.png" alt=""/> */}
            <iframe width="425" height="260" title='spo2' src="https://thingspeak.com/channels/1578852/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=SpO2&type=line"></iframe>
            <p className="p" >Know your vitals at the comfort of your home.</p>
            
  
            <button className="locbutton" onClick={getLoc}>Click here to get the SpO2</button>

           {state.data.field2?(<div style={{fontFamily:"Readex Pro, sans-serif", color:"white",margin:"10px"}}> {state.data.field2?(<>{"SpO2: "+state.data.field2}</>):(<></>)}</div>):(<></>)}
            
            </div>
        </div>
    );
}


export default SpO2