/*import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import container1 from './Container1';
import Footer from './Footer';

import container2 from './Container2';

ReactDOM.render(
    <Router>
       <Switch>
		      <Route exact path="/" component={App}/>
				<Route exact path="/home" component={App}/>

        <Route exact path="/services" component={container2}/>
				
        <Route exact path="/about" component={container1}/>
				<Route exact path="/contact" component={Footer}/>
        
	    </Switch>
    </Router>,
    document.getElementById('root')
);