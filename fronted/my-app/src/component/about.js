import React from 'react';

import './test.css'
import '../component/homecss.css';import { useMediaQuery } from 'react-responsive'

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

const About =()=> (
	<div>
	<Desktop>
  <div className='gridccontact'>
  <div className='griditemcontacy'>
    <h2>ecommece shop with wordpress</h2>
<a href='www.nikisale.com'>www.nikisle.com</a>
  </div>
  <div className='griditemcontacy'>
<h2>ecommece site like Amazone with Nodejs and React js </h2>
 <a href='www.mkhgu.com'>www.amazontest.com</a>
  </div>
  <div className='griditemcontacy'>
<h2>recome site with React js and Node js</h2>
 <a href='www.erfankaharkaboodi.ir'>www.erfankaharkaboodi.com</a>
  </div>
  <div className='griditemcontacy'>
    <h2>a realtime chatroom with node js and react js</h2>
 <a href='realtime.com'>www.hjfds.com</a>
  </div>
</div>
<p>jhglkjhgf</p>
  </Desktop>
	<Tablet><h1>tablet</h1></Tablet>
	<Mobile>
  <div className='gridccontacyM'>
  <div className='griditemcontacyM'>
    <h2>ecommece shop with wordpress</h2>
<a href='www.nikisale.com'>www.nikisle.com</a>
  </div>
  <div className='griditemcontacyM'>
<h2>ecommece site like Amazone with Nodejs and React js </h2>
 <a href='www.mkhgu.com'>www.amazontest.com</a>
  </div>
  <div className='griditemcontacyM'>
<h2>recome site with React js and Node js</h2>
 <a href='www.erfankaharkaboodi.ir'>www.erfankaharkaboodi.com</a>
  </div>
  <div className='griditemcontacyM'>
    <h2>a realtime chatroom with node js and react js</h2>
 <a href='realtime.com'>www.hjfds.com</a>
  </div>
</div> 
  </Mobile>
	</div>
)
export default About;
