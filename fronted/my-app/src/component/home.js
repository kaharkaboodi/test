import React from 'react';
import love from '../images/love.jpeg';
import love1 from '../images/love1.jpg'
import '../component/homecss.css';
import '../component/test.css'


import { useMediaQuery } from 'react-responsive';
import CountUp from 'react-countup';
   const Desktop = ({ children }) => {
      const isDesktop = useMediaQuery({ minWidth: 992 })
      return isDesktop ? children : null
    }
    const Tablet = ({ children }) => {
      const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
      return isTablet ? children : null
    }
    const Mobile = ({ children }) => {
      const isMobile = useMediaQuery({ maxWidth: 767 })
      return isMobile ? children : null
    };
    


const Home =()=>(
	 
<div>
	<Desktop>	
    <div className="gridc">
      <div className="griditem1">
    <img src={love} alt={'Erfan'} className='G'></img>
 </div>
 <div className="griditem"> 
 <h1 style={{textAlign:'left',color:'black',fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>My ability</h1>
 <h2 style={{textAlign:'left',color:'bLack',fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Html :</h2>
 
<div class="progress">
   <div class="progress"><div style={{color:"wheat", fontWeight:'bold', fontFamily:'cursive'}}>
<CountUp end={100}  suffix="%"  duration={3.75}/> </div>
 </div><div className="griditem">
  <h2 style={{textAlign:'left',color:'black',fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>CSS :</h2>  <div class="progress"><div style={{color:"wheat", fontWeight:'bold', fontFamily:'cursive'}}>
<CountUp end={100} suffix="%"   duration={3.75} /> </div>
  </div>
  <div className="griditem">
  <h2 style={{textAlign:'left',color:'black',fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Javascript :</h2>  <div class="progress"><div style={{color:"wheat", fontWeight:'bold', fontFamily:'cursive'}}>
<CountUp end={100} suffix="%"  duration={3.75} /> </div>
<div className="griditem">
  <h2 style={{textAlign:'left',color:'black',fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>React :</h2>  <div class="progress"><div style={{color:"wheat", fontWeight:'bold', fontFamily:'cursive'}}>
<CountUp end={100} suffix="%"  duration={3.75}/> </div>
  </div>
  <div className="griditem">
  <h2 style={{textAlign:'left',color:'black',fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Node js :</h2>  <div class="progress"><div style={{color:"wheat", fontWeight:'bold', fontFamily:'cursive'}}>
<CountUp end={100} suffix="%"  duration={3.75}/> </div>
  </div>
  </div>
 </div>
 </div>
 </div>
 </div>
</div>
</div>
</div>
  </Desktop>
	<Tablet>    <div className="gridc">
      <div className="griditem1">
    <img src={love} alt={'Erfan'} className='G'></img>
 </div>
 <div className="griditem"> 
 <h1 style={{textAlign:'left',color:'black',fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>My ability</h1>
 <h2 style={{textAlign:'left',color:'bLack',fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Html :</h2>
 
<div class="progress">
   <div class="progress"><div style={{color:"wheat", fontWeight:'bold', fontFamily:'cursive'}}>
<CountUp end={100}  suffix="%"  duration={3.75}/> </div>
 </div><div className="griditem">
  <h2 style={{textAlign:'left',color:'black',fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>CSS :</h2>  <div class="progress"><div style={{color:"wheat", fontWeight:'bold', fontFamily:'cursive'}}>
<CountUp end={100} suffix="%"   duration={3.75} /> </div>
  </div>
  <div className="griditem">
  <h2 style={{textAlign:'left',color:'black',fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Javascript :</h2>  <div class="progress"><div style={{color:"wheat", fontWeight:'bold', fontFamily:'cursive'}}>
<CountUp end={100} suffix="%"  duration={3.75} /> </div>
<div className="griditem">
  <h2 style={{textAlign:'left',color:'black',fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>React :</h2>  <div class="progress"><div style={{color:"wheat", fontWeight:'bold', fontFamily:'cursive'}}>
<CountUp end={100} suffix="%"  duration={3.75}/> </div>
  </div>
  <div className="griditem">
  <h2 style={{textAlign:'left',color:'black',fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Node js :</h2>  <div class="progress"><div style={{color:"wheat", fontWeight:'bold', fontFamily:'cursive'}}>
<CountUp end={100} suffix="%"  duration={3.75}/> </div>
  </div>
  </div>
 </div>
 </div>
 </div>
 </div>
</div>
</div>
</div></Tablet>
	<Mobile>
    
    <img src={love1} alt={'erfan'} className='lM1'></img>
<main style={{color:'black', fontFamily:'cursive',fontWeight:'bolder'}}>
<section style={{textAlign:'left'}}>

    <h2>Html : </h2>
 <div className='progress2'><CountUp end={100} suffix="%"  duration={3.75}/></div>
 </section>
  <section style={{textAlign:"left"}}>
    <h2>css</h2>
    <div className='progress2' ><CountUp end={100} suffix="%"  duration={3.75}/></div></section>
 <section style={{textAlign:"left"}}>
    <h2>Javascript</h2>
 <div className='progress2'><CountUp end={100} suffix="%"  duration={3.75}/></div></section>
 <section style={{textAlign:"left"}}>
    <h2>Reactjs</h2>
 <div className='progress2'><CountUp end={100} suffix="%"  duration={3.75}/></div></section>
 <section style={{textAlign:"left", marginBottom:'30px'}}>
    <h2>Elixr</h2>
 <div className='progress2'><CountUp end={100} suffix="%"  duration={3.75}/></div></section>
 </main>
 
  </Mobile>
  
</div>
	)

export default Home
