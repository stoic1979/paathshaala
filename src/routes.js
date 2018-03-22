import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from "./containers/Dashboard"
import Student from "./containers/Student"



class Routes extends Component {
   render() {
      return (
         <Router>
            <div>
              <Switch>
                  <Route exact path='/'                component={Dashboard} />
                  <Route exact path='/Student'         component={Student} />
              </Switch>
            </div>
         </Router>
      );
   }
}//Routes

export default Routes;