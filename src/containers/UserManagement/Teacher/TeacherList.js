import React from 'react';
import {openTab} from '../../../utils/helpers';
import { Link } from 'react-router-dom';

class TeacherList extends React.Component {

  componentDidMount() {

  }

  render() {

    return (

<div class="container-fluid">
<br /><br />
	<div class="page-header">
    <Link to="/Teacher_form" class="btn btn-primary"> Add Teacher </Link>&nbsp;
    <a href="#" class="btn btn-primary">Search Teacher</a>&nbsp;
    <Link to="/Teacher_list" class="btn btn-primary">All Teachers</Link>&nbsp;
	</div>
<br /><br />
    <div class="card">
     <div id="search">
      <div class="card" id="search_form">
       <form class ="form">
          <h3 class="tab_title">Search Teacher</h3>
          <div class="form-group row">
            <label class="col-2 col-form-label">Search By Name</label>
            <div class="col-10">
              <input class="form-control" type="text"  formControlName="name"/>
            </div>
          </div>
        <div class="form-group row">
            <label class="col-2 col-form-label">Search By Email</label>
            <div class="col-10">
              <input class="form-control" type="text" formControlName="email"/>
            </div>
          </div>
          <div class="sbt_btn">
            <button class="btn btn-primary" type="submit">Search</button>
          </div>
      </form>
    </div>
      </div>
     </div>
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
          <td>Marry</td>
          <td>marry@py.com</td>
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
}//TeacherList

export default TeacherList;
