import pic1 from './1.png';
import pic2 from './2.png';
import pic3 from './3.png';
import pic4 from './logo.png';
import { IoLogoFacebook, IoGlobeOutline } from "react-icons/io5";
import { HiOutlinePhone, } from "react-icons/hi";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import React from 'react';

function App() {
  return (
    <div className='container-fluid' style={{backgroundColor:'#fffbd2'}}>
      <div class="container-fluid p-2  text-white text-center">

        <img src={pic4}  className='rounded  img-fluid ' alt="Responsive image" style={{ height: '110px' }}></img>

      </div>
      <div className='mid-part container-fluid  d-flex' style={{ flex: 1 }}>
        <div className='image_box1 w-25 '>

          <img src={pic1} alt="Responsive image" className=' rounded  img-fluid'></img>
        </div>

        <div className='w-75 d-flex' style={{ flexDirection: 'column' }}>
          <p style={{fontFamily:'AmasisMTW01-Black',fontWeight:'bolder',fontStyle:'inherit'}}><b>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b></p>

          <ul>
            <li style={{fontFamily:'AmasisMTW01-Medium',fontStyle:'inherit'}}>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li style={{fontFamily:'AmasisMTW01-Medium',fontStyle:'inherit'}}>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
          </ul>

          {/* <img id='image' src={pic2}></img> */}
          <div className=' image d-flex h-50'>
            <img alt="Responsive image" src={pic2} className='rounded  img-fluid' ></img>

          </div>

          <p style={{fontFamily:'AmasisMTW01-Medium',fontStyle:'inherit'}}>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
            Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan,
            Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <div className='end-part container-fluid d-flex'>
        <p style={{fontFamily:'AmasisMTW01-Medium',fontStyle:'inherit'}}>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A
          CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
        </p>
        <div className=' d-flex ' style={{ justifyContent: 'center' }} >
          <img alt="Responsive image" className='image-pic3 w-75 rounded  img-fluid ' src={pic3}></img>
        </div>
        <p style={{fontFamily:'AmasisMTW01-Medium',fontStyle:'inherit'}}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>

      </div>
      <div className='end_part2 container-fluid d-flex'>
        <p style={{ textAlign: 'center',fontWeight:'bolder',fontFamily:'AmasisMTW01-Medium',fontStyle:'inherit' }}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
        <p style={{ textAlign: 'center',fontFamily:'AmasisMTW01-Medium',fontStyle:'inherit' }}>CHEMICALS & PROCESS <span style={{color:'#ec3237'}}>|</span> POWER <span style={{color:'#ec3237'}}>|</span> WATER & WASTE WATER <span style={{color:'#ec3237'}}>|</span> OILS & GAS <span style={{color:'#ec3237'}}>|</span> PHARMA <span style={{color:'#ec3237'}}>|</span> SUGARS & DISTILLERIES <span style={{color:'#ec3237'}}>|</span> PAPER & PULP <span style={{color:'#ec3237'}}>|</span> MARINE & DEFENCE <span style={{color:'#ec3237'}}>|</span> METAL & MINING <span style={{color:'#ec3237'}}>|</span> FOOD & BEVERAGE <span style={{color:'#ec3237'}}>|</span> PETROCHEMICAL & REFINERIES <span style={{color:'#ec3237'}}>|</span> SOLAR <span style={{color:'#ec3237'}}>|</span> BUILDING <span style={{color:'#ec3237'}}>|</span> HVAC <span style={{color:'#ec3237'}}>|</span> FIRE FIGHTING <span style={{color:'#ec3237'}}>|</span> AGRICULTURE & RESIDENTIAL</p>
       
        <div className='red_box d-flex w-100 ' style={{backgroundColor:'#ec3237'}} >
          <div className='  d-flex' style={{width:'33%',height:'60px',justifyContent:'center',alignItems:'center',fontStyle:'inherit'}}>
            <p className='d-inline' style={{ color: 'white',textAlign:'center' }}><HiOutlinePhone style={{ color: 'white', }} />Toll free 1800-200-1234</p>
          </div>
          <div className=' d-flex' style={{width:'33%',height:'60px',justifyContent:'center',alignItems:'center',fontStyle:'inherit'}}>
            <p className='d-inline' style={{ color: 'white',textAlign:'center' }}><IoLogoFacebook style={{ color: 'white', }} />www.facebook.com/cripumps</p>
          </div>
          <div className='  d-flex' style={{width:'33%',height:'60px',alignItems:'center',justifyContent:'center',fontStyle:'inherit'}}>
            <p className='d-inline' style={{ color: 'white',textAlign:'center' }}><IoGlobeOutline style={{ color: 'white', }} />www.cripumps.com</p>
          </div>
        </div>

      </div>



    {/* // <div className='body d-flex border border-gray'> //....................................................

    //   {/* <div className='logo'>
    //     <img src={pic4} style={{ height:'100%', }} ></img> */}
      

{/* 
    //   <div className='mid-part'>
    //     <div style={{ height: '100%', width: '25%', display: 'flex', justifyContent: 'center', flex: 0 }}>

    //       <img src={pic1} className='pic1'></img>
    //     </div>

    //     <div style={{ height: '100%', width: '75%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'space-between', flex: 1, backgroundColor: ' #fffbcc' }}>
    //       <p style={{ fontFamily: 'aldhabi', fontWeight: 'revert', fontSize: '14px' }}><b>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b></p>

    //       <ul>
    //         <li style={{ fontFamily: 'aldhabi', fontWeight: 'revert', fontSize: '14px' }}>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
    //         <li style={{ fontFamily: 'aldhabi', fontWeight: 'revert', fontSize: '14px' }}>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
    //       </ul>

    //       <img id='image' style={{ height: '70%', width: '60%', alignSelf: 'center' }} src={pic2}></img>
    //       <p style={{ fontFamily: 'aldhabi', fontWeight: 'revert', fontSize: '14px' }}>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj,
    //         Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan,
    //         Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
    //       </p>
    //     </div>
    //   </div>

    //   <div className='end-part'>
    //     <p style={{ textAlign: 'center', fontFamily: 'aldhabi', fontWeight: 'revert', fontSize: '14px', flex: 0 }}>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A
    //       CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
    //     </p>
    //     <div style={{ flex: 0, width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', backgroundColor: '#fffbcc' }}>
    //       <img id='image-pic3' src={pic3}></img>
    //       <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
    //     </div>
    //     <div className='end_part2'>
    //       <p style={{ textAlign: 'center' }}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
    //       <p style={{ textAlign: 'center' }}>CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL</p>
    //       <div style={{ display: 'flex', width: '99.5%', height: 'auto', backgroundColor: 'red', flex: 1, alignSelf: 'center', flexDirection: 'row' }}>
    //         <div style={{ width: '33%', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    //          <p style={{ color: 'white', }}><HiOutlinePhone style={{ color: 'white', }} />Toll free 1800 200 1234</p>
    //         </div>
    //         <div style={{ width: '33%', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    //           <p style={{ color: 'white', }}><IoLogoFacebook style={{ color: 'white', }} />www.facebook.com/cripumps</p>
    //         </div>
    //         <div style={{ width: '33%', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    //           <p style={{ color: 'white' }}><IoGlobeOutline style={{ color: 'white', }} />www.cripumps.com</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>



  } */}
     </div>
      );
}
      export default App;
