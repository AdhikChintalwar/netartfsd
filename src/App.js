import pic1 from './1.png';
import pic2 from './2.png';
import pic3 from './3.png';
import pic4 from './logo.png';
import { IoLogoFacebook,IoGlobeOutline } from "react-icons/io5";
import { HiOutlinePhone, } from "react-icons/hi";

import './App.css';
import React from 'react';

function App() {
  return (
    <div className='body'>

      <div className='logo'>
        <img src={pic4} style={{ height:'100%', }} ></img>
      </div>


      <div className='mid-part'>
        <div style={{ height: '100%', width: '25%', display: 'flex', justifyContent: 'center', flex: 0 }}>

          <img src={pic1} className='pic1'></img>
        </div>

        <div style={{ height: '100%', width: '75%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'space-between',flex:1,backgroundColor:' #fffbcc' }}>
          <p style={{ fontFamily: 'aldhabi', fontWeight: 'revert', fontSize: '14px' }}><b>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b></p>

          <ul>
            <li style={{ fontFamily: 'aldhabi', fontWeight: 'revert', fontSize: '14px' }}>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li style={{ fontFamily: 'aldhabi', fontWeight: 'revert', fontSize: '14px' }}>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
          </ul>

          <img id='image' style={{ height: '70%', width: '60%', alignSelf: 'center' }} src={pic2}></img>
          <p style={{ fontFamily: 'aldhabi', fontWeight: 'revert', fontSize: '14px' }}>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj,
            Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan,
            Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>

      <div className='end-part'>
        <p style={{ textAlign: 'center', fontFamily: 'aldhabi', fontWeight: 'revert', fontSize: '14px', flex: 0 }}>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A
          CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
        </p>
        <div style={{ flex: 0, width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column',backgroundColor:'#fffbcc' }}>
          <img id='image-pic3' src={pic3}></img>
          <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
        </div>
        <div className='end_part2'>
          <p style={{ textAlign: 'center' }}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
          <p style={{ textAlign: 'center' }}>CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL</p>
          <div style={{ display: 'flex', width: '99.5%',height:'auto', backgroundColor: 'red', flex: 1, alignSelf: 'center',flexDirection:'row' }}>
            <div style={{width:'33%',height:'60px',display:'flex',alignItems:'center',justifyContent:'center'}}>
             <p style={{color:'white',}}><HiOutlinePhone style={{color:'white',}} />Toll free 1800 200 1234</p>
            </div>
            <div style={{width:'33%',height:'60px',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <p style={{color:'white',}}><IoLogoFacebook style={{color:'white',}} />www.facebook.com/cripumps</p>
            </div>
            <div style={{width:'33%',height:'60px',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <p style={{color:'white'}}><IoGlobeOutline style={{color:'white',}} />www.cripumps.com</p>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}

export default App;
