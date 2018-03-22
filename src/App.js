import React, { Component } from 'react';
import './App.css';

import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Footer from "./components/Footer"

//import Routes from "./routes"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from "./containers/Dashboard"
import StudentForm from "./containers/UserManagement/Student/StudentForm"
import StudentList from "./containers/UserManagement/Student/StudentList"

class App extends Component {
  render() {
    return (

      <Router>
      
        <div>
          <Sidebar />
          <div class="page">
            <Header />
            <div>
              <Switch>
                <Route exact path='/'                component={Dashboard} />
                <Route exact path='/Student_list'    component={StudentList} />
                <Route exact path='/Student_form'    component={StudentForm} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      
      </Router>




    );
  }
}

export default App;
