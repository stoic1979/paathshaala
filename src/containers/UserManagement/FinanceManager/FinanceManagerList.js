import React from 'react';
import {openTab} from '../../../utils/helpers';
import { Link } from 'react-router-dom';

class FinanceManagerList extends React.Component {

  componentDidMount() {

  }

  render() {

    return (

<div class="container-fluid">
<br /><br />
	<div class="page-header">
    <Link to="/FinanceManager_form" class="btn btn-primary"> Add FinanceManager </Link>&nbsp;
    <a href="#" class="btn btn-primary">Search FinanceManager</a>&nbsp;
    <Link to="/FinanceManager_list" class="btn btn-primary">All FinanceManager</Link>&nbsp;
	</div>
<br /><br />
    
       <div class="table">        
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Aadhar ID</th>
          <th>Details</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Tim Lee</td>
          <td>tim@paathshaala.com</td>
          <td>98563451982</td>
          <td><a href="#" >Details</a></td> 
          <td><i class="fa fa-pencil" routerLink="#"></i></td>
          <td><i class="fa fa-trash" routerLink="#"></i></td>
        </tr>
      </tbody>
    </table>
    
  </div>
 	</div>//main

    );//return
  }//render
}//FinanceManagerList

export default FinanceManagerList;
