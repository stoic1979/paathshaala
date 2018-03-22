import React from 'react';

import {openTab} from '../../../utils/helpers';
import { Link } from 'react-router-dom';

class StudentList extends React.Component {


  componentDidMount() {
    //openTab('student_tab');
  }


  render() {

    return (
        <div>
          <div class="container-fluid">
          <br />
    <div class="page-header">
        <Link to="/Student_form" class="btn btn-primary"> Add New Student </Link>&nbsp;
        <a href="#" class="btn btn-primary" >Search Student</a>&nbsp;
        <Link to="/Student_list" class="btn btn-primary"> All Students </Link>&nbsp;
    </div>
    <br /><br />
    <div class="card">
        <div id="search">
            <div class="card" id="search_form">
                <form>
                    <h3 class="tab_title">Search Student</h3>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Search By Name</label>
                        <div class="col-10">
                            <input class="form-control" type="text" value="name" formControlName="name" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Search By Roll No.</label>
                        <div class="col-10">
                            <input class="form-control" type="text" value="name" formControlName="roll_no" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Search BY Standard</label>
                        <div class="col-10">
                            <select class="form-control" formControlName="standard" placeholder="Standard" >
                                <option value="nursery" selected>Nursery</option>
                                <option value="lkg">LKG</option>
                                <option value="ukg">UKG</option>
                                <option value="1st">1st</option>
                                <option value="2nd">2nd</option>
                                <option value="3rd">3rd</option>
                                <option value="4th">4th</option>
                                <option value="5th">5th</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Search By Section</label>
                        <div class="col-10">
                            <select class="form-control" formControlName="section" placeholder="Standard" >
                                <option value="a" selected>A</option>
                                <option value="b">B</option>
                                <option value="c">C</option>
                                <option value="d">D</option>
                                <option value="e">E</option>
                                <option value="f">F</option>
                            </select>
                        </div>
                    </div>
                    <div class="sbt_btn">
                        <button class="btn btn-primary" type="submit">Search</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="table">          
            <table class="table table-responsive">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Lib No.</th>
                        <th>Standard</th>
                        <th>Section</th>
                        <th>DOB</th>
                        <th>DOJ</th>
                        <th>Prev School</th>
                        <th>Aadhar Id</th>
                        <th>Mother Name</th>
                        <th>Mother's Email</th>
                        <th>Mother's Mob No.</th>
                        <th>Mother's Tel No.</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td>1</td>
                        <td>Kevin Singh</td>
                        <td>Male</td>
                        <td>LB-1779</td>
                        <td>1</td>
                        <td>A</td>
                        <td>2012-08-22</td>
                        <td>2016-03-04</td>
                        <td>Gillco International School</td>
                        <td>AID9898</td>
                        <td>Roohi Verma</td>
                        <td>rv@gmail.com</td>
                        <td>1234567890</td>
                        <td>1234567890</td>
                        <td><i class="fa fa-pencil" href="#"></i></td>
                        <td><i class="fa fa-trash" href="#"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
        </div>

      );
    }
}

export default StudentList;