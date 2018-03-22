import React from 'react';

import {openTab} from '../utils/helpers';

class Student extends React.Component {


  componentDidMount() {
    openTab('student_tab');
  }


  render() {

    return (
        <div class="container-fluid">
    <br />
    <div class="page-header">
        <a href="/users/student/list" class="btn btn-primary">View All Students</a>
    </div>
    <br />
    <div class="card">
        <br />
        <div class="tab">
            <button class="tablinks active" id="btn_student_tab" onClick={ () => openTab('student_tab')}>Student Details</button>
            <button class="tablinks" id="btn_parent_tab"  onClick={ () => openTab('parent_tab')}>Parents Details</button>
        </div>

        <div id="logbox">
            <form >

                <div id="student_tab" class="tabcontent">
                    <br /><h3 class="tab_title">Fill Student Details</h3>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Name</label>
                        <div class="col-10">
                            <input class="form-control" type="text" value="name" formControlName="name" required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Library Number</label>
                        <div class="col-10">
                            <input class="form-control" type="text" value="name" formControlName="lib_no" required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Gender</label>
                        <div class="col-10">
                            <div class="radio">
                                <label>
                                    <input type="radio" value="MALE" name="gender" formControlName="gender" required /> Male
                                </label>
                            </div>
                            <div class="radio">
                                <label>
                                    <input type="radio" value="FEMALE" name="gender" formControlName="gender" /> Female
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Standard</label>
                        <div class="col-10">
                            <select class="form-control" formControlName="standard" placeholder="Standard" required>
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
                        <label class="col-2 col-form-label">Section</label>
                        <div class="col-10">
                            <select class="form-control" formControlName="section" placeholder="Standard" required>
                                <option value="a" selected>A</option>
                                <option value="b">B</option>
                                <option value="c">C</option>
                                <option value="d">D</option>
                                <option value="e">E</option>
                                <option value="f">F</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Aadhar ID</label>
                        <div class="col-10">
                            <input class="form-control" type="text" value="aadhar_id" formControlName="aadhar_id" required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Date of Birth</label>
                        <div class="col-10">
                            <input class="form-control" type="text" onfocus="(this.type='date')" formControlName="dob" required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Date of Joining</label>
                        <div class="col-10">
                            <input class="form-control" type="text" onfocus="(this.type='date')" formControlName="doj" required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Previous School</label>
                        <div class="col-10">
                            <input class="form-control" type="text" value="previous_school" formControlName="previous_school" required />
                        </div>
                    </div>
                     <button class="btn btn-primary" onClick={ () => openTab('parent_tab')}>Next Step - Parent Details ></button>
                </div>

                <div id="parent_tab" class="tabcontent">
                    <br /><h3 class="tab_title">Fill Parents Details</h3>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Mother Name</label>
                        <div class="col-10">
                            <input class="form-control" type="text"  formControlName="mother_name" required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Mother Email</label>
                        <div class="col-10">
                            <input class="form-control" type="text" formControlName="mother_email" required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Mother Mobile No.</label>
                        <div class="col-10">
                            <input class="form-control" type="text" formControlName="mother_mob_no" required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Mother Telephone No.</label>
                        <div class="col-10">
                            <input class="form-control" type="text" formControlName="mother_tel_no" required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Father Name</label>
                        <div class="col-10">
                            <input class="form-control" type="text" value="father_name" formControlName="father_name" required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Father Email</label>
                        <div class="col-10">
                            <input class="form-control" type="text" formControlName="father_email" required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Father Mobile No.</label>
                        <div class="col-10">
                            <input class="form-control"  formControlName="father_mob_no" required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Father Telephone No.</label>
                        <div class="col-10">
                            <input class="form-control" formControlName="father_tel_no" required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Password</label>
                        <div class="col-10">
                            <input class="form-control" type="text" formControlName="password" required />
                        </div>
                    </div>
                    <button class="btn btn-primary" onClick={ () => openTab('student_tab')}>Previous Step Go To Student Details </button>
                    <div class="sbt_btn">
                        <button class="btn btn-primary" type="submit">Save Student Data</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

      );
    }
}

export default Student;