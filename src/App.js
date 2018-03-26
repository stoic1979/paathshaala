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
import TeacherList from "./containers/UserManagement/Teacher/TeacherList"
import TeacherForm from "./containers/UserManagement/Teacher/TeacherForm"
import PrincipalForm from "./containers/UserManagement/Principal/PrincipalForm"
import PrincipalList from "./containers/UserManagement/Principal/PrincipalList"
import CounsellorList from "./containers/UserManagement/Counsellor/CounsellorList"
import CounsellorForm from "./containers/UserManagement/Counsellor/CounsellorForm"
import FinanceManagerList from "./containers/UserManagement/FinanceManager/FinanceManagerList"
import FinanceManagerForm from "./containers/UserManagement/FinanceManager/FinanceManagerForm"
import TransportManagerList from "./containers/UserManagement/TransportManager/TransportManagerList"
import TransportManagerForm from "./containers/UserManagement/TransportManager/TransportManagerForm"

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
                <Route exact path='/'                       component={Dashboard} />
                <Route exact path='/Student_list'           component={StudentList} />
                <Route exact path='/Student_form'           component={StudentForm} />
                <Route exact path='/Teacher_list'           component={TeacherList} />
                <Route exact path='/Teacher_form'           component={TeacherForm} />
                <Route exact path='/Principal_list'         component={PrincipalList} />
                <Route exact path='/Principal_form'         component={PrincipalForm} />
                <Route exact path='/Counsellor_list'        component={CounsellorList} />
                <Route exact path='/Counsellor_form'        component={CounsellorForm} />
                <Route exact path='/FinanceManager_list'    component={FinanceManagerList} />
                <Route exact path='/FinanceManager_form'    component={FinanceManagerForm} />
                <Route exact path='/TransportManager_list'  component={TransportManagerList} />
                <Route exact path='/TransportManager_form'  component={TransportManagerForm} />
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
