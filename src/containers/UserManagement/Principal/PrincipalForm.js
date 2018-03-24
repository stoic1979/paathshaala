import React from 'react';

import {openTab} from '../../../utils/helpers';
import { Link } from 'react-router-dom';


class PrincipalForm extends React.Component {


  componentDidMount() {
  	openTab('principal_tab');
  }

  render() {
  	return (
  <div class="container-fluid">
  <br />
    <div class="page-header">
     <Link to="/Principal_list" class="btn btn-primary"> View Principal Data </Link>
    </div>
     <div class="card">
        <br />
        <div class="tab">
            <button class="tablinks active" id="btn_principal_tab" onClick={ () => openTab('principal_tab')}>PERSONAL DETAILS</button>
            <button class="tablinks" id="btn_edu_tab"  onClick={ () => openTab('edu_tab')}>EDUCATIONAL DETAILS</button>
        </div>

        <div id="logbox">
            <form >
                <div id="principal_tab" class="tabcontent">
                    <h3 class="tab_title">Fill Personal Details</h3>
                    <br />
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Name</label>
                        <div class="col-10">
                            <input class="form-control" type="text" value="name" formControlName="name" required />
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
                        <label class="col-2 col-form-label">Marital Status</label>
                        <div class="col-10">
                            <select class="form-control" formControlName="marital_status" placeholder="Marital Status" required>
                                <option value="married" selected>Married</option>
                                <option value="unmarried">Unmarried</option>
                                <option value="widowed">Widowed</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Father Name</label>
                        <div class="col-10">
                            <input class="form-control" type="text" minlength="2" title="Please fill only characters" formControlName="father_name" required/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Telephone No</label>
                        <div class="col-10">
                            <input class="form-control" type="tel" title="Please fill your number with code" formControlName="tel_no" required/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Mobile No</label>
                        <div class="col-10">
                            <input class="form-control" type="tel" title="Please fill your 10 digit number" formControlName="mob_no" required/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Upload Photo</label>
                        <div class="col-10">
                            <input class="form-control" type="photo"  title="Please upload your picture" formControlName="img" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Email</label>
                        <div class="col-10">
                            <input class="form-control" type="email"  formControlName="email" required/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Password</label>
                        <div class="col-10">
                            <input class="form-control" type="password" formControlName="password" required/>
                        </div>
                    </div>
                     <button class="btn btn-primary" onClick={ () => openTab('edu_tab')}>Next Step - Fill Educational Details ></button>
                </div>

                <div id="edu_tab" class="tabcontent">
                    <br /><h3 class="tab_title">Fill Educations and Bank Details</h3>
                    <br />
                     <div class="form-group row">
                        <label class="col-2 col-form-label">Education</label>
                        <div class="col-10">
                            <input class="form-control" type="text"  formControlName="education" required/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Working Exp</label>
                        <div class="col-10">
                            <input class="form-control" type="text" formControlName="work_exp" required/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Bank Name</label>
                        <div class="col-10">
                            <input class="form-control" type="text" formControlName="bank_name" required/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2 col-form-label">Bank Account No</label>
                        <div class="col-10">
                            <input class="form-control" type="text" formControlName="bank_acc_no" required/>
                        </div>
                    </div>
                    <button class="btn btn-primary" onClick={ () => openTab('principal_tab')}> Previous Step - Fill Personal Details </button>
                    <div class="sbt_btn">
                        <button class="btn btn-primary" type="submit">Save Principal Data</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    </div>
  	 );//return
  }//render

}//PrincipalForm
export default PrincipalForm;