import React from 'react';
import './homecss.css';

import { useMediaQuery } from 'react-responsive';
import './test.css';

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



const Contact =()=>(
<h1 style={{color:'red',fontSize:'200%',margin:'15%'}}>WE COME SOON<br></br>WE come soon<br></br>WE come soon
<br></br>WE come soon<br></br>WE come soon<br></br>WE come soon<br></br>WE come soon
</h1>
)
export default Contact;