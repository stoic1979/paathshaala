import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from "./containers/Dashboard"
import StudentForm from "./containers/UserManagement/Student/StudentForm"
import StudentList from "./containers/UserManagement/Student/StudentList"




class Routes extends Component {
   render() {
      return (
         <Router>
            <div>
              <Switch>
                  <Route exact path='/'                component={Dashboard} />
                  <Route exact path='/Student_list'         component={StudentList} />
                  <Route exact path='/Student_form'         component={StudentForm} />
              </Switch>
            </div>
         </Router>
      );
   }
}//Routes

export default Routes;