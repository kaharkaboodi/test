import Reacta from 'react';
import './component/test.css'
import '../src/App.css'

import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';
import About from './component/about';
import Contact from './component/contact';
import Home from './component/home';


import { useMediaQuery } from 'react-responsive'


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
    
function App() {
  
    return (
<div>
 <Desktop>
  <div className='a'>
    <Router>
    <div>
     <div>
	<Link to="/">
	  <button className="b1">
		Home
	  </button>
	</Link>
	<Link to="/about">
		<button className="b1">
			My Products
		</button>
	</Link>
	<Link to="/contact">
     <button className="b1">
	   blog
     </button>
    </Link>
	
	
	<switch>
		<Route exact path='/' component={Home}></Route>
		<Route exact path='/about' component={About}></Route>
		<Route exact path='/Contact' component={Contact}></Route>
	</switch>
</div>
  </div>
    </Router>

	
</div>
</Desktop>
<Tablet>
<div className='root'>
	
    <Router>
    
     <div className='sortlistt'>
	<Link to="/">
	  <button>
		Home
	  </button>
	</Link>
	<Link to="/about">
		<button>
		my proroduct
		</button>
	</Link>
	<Link to="/contact">
     <button>
	   blog
     </button>
    </Link>
	
	<switch>
		<Route exact path='/' component={Home}></Route>
		<Route exact path='/about' component={About}></Route>
		<Route exact path='/Contact' component={Contact}></Route>
	</switch>

</div>
    </Router>

	
</div>
</Tablet>
<Mobile>
<div>
	
    <Router>

  <div className='sortlistf'>
	<Link to="/">
	  <button>
		Home
	  </button>
	</Link>
	<Link to="/about">
		<button>
		My product
		</button>
	</Link>
	<Link to="/contact">
     <button>
	   blog
     </button>
    </Link>
	
	<switch>
		<Route exact path='/' component={Home}></Route>
		<Route exact path='/about' component={About}></Route>
		<Route exact path='/Contact' component={Contact}></Route>
	</switch>
</div>
  
    </Router>

</div>
	
</Mobile>
</div>
  );
  }
  




export default App;
