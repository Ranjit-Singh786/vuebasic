<template>
  <div>
    <DashboardLayout>
       <router-view />
      <div class="dashbpoard-content px-0 px-md-5 py-4">
        <!-- *******team-heading******* -->
        <div class="
            d-flex
            justify-content-between
            align-items-center
            mb-3
            px-3 px-md-0
          ">
          <div class="user-head">
            <h2 class="m-0">Candidate :</h2>
          </div>
        </div>
        <!-- candidates-form -->
        <div class="interview-form py-2 px-3 px-lg-4">
          <form>
            <div class="interview-head py-3">
              <h3 class="m-0 text-center">Interview Application Form</h3>
            </div>
            <!-- ********************nav-tabs******************** : (isError) ?  'nav-link candidate-link disabled' -->
            <ul class="nav nav-pills nav-fill candidate-pills my-3" id="pills-tab" role="tablist">
              <li class="nav-item candidate-item" role="presentation">
                <button v-for="(data, index) in tabs" :key="index" class="nav-link candidate-link" ref="tabRef"
                  :id="data.id" data-bs-toggle="pill" :data-bs-target="`#` + data.bsTarget" type="button" role="tab"
                  :aria-controls="data.bsTarget" aria-selected="true" @click="nextTab"
                  :class="(tabNum == data.code) ? 'active' : ''">
                  {{(mobOn) ? data.code :
                  data.name}}</button>
                <!--(isError01  || isError02  || isError03  || isError04 ) ? 'disabled' :
                :disabled="(isError01  || isError02  || isError03  || isError04 )"-->
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <!--  ***************Basic information**********************  : (isError01) ? 'disabled'-->
              <div class="tab-pane fade show active" id="pill-tab1" role="tabpanel" aria-labelledby="pills-home1-tab">
                <div class="row mt-4">
                  <div class="col-md-4">
                    <div class="username mb-4">
                      <label for="label">Full Name</label>
                      <input type="text" class="form-control" placeholder="Enter full name" v-model="basic.name" />
                      <span class="text-danger" v-if="v$.basic.name.$error && isError01">
                        {{
                        v$.basic.name.$errors[0].$message
                        }}
                      </span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="username mb-4">
                      <label for="label">Gender</label>
                      <select class="form-select" aria-label="Default select example" v-model="basic.gender">
                        <option selected value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      <span class="text-danger" v-if="v$.basic.gender.$error && isError01">
                        {{
                        v$.basic.gender.$errors[0].$message
                        }}
                      </span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="username mb-4">
                      <label for="label">Marital Status</label>
                      <select class="form-select" v-model="basic.maritalStatus" aria-label="Default select example">
                        <option selected value="married">Married</option>
                        <option value="unmarried">Unmarried</option>
                      </select>
                      <span class="text-danger" v-if="v$.basic.maritalStatus.$error && isError01">
                        {{
                        v$.basic.maritalStatus.$errors[0].$message
                        }}
                      </span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="username mb-4">
                      <label for="label">Date of Birth</label>
                      <input type="date" class="form-control" placeholder="dd/mm/yyyy" v-model="basic.dob"
                        :max="new Date(new Date().setFullYear(new Date().getFullYear() - 15)).toISOString().split('T')[0]" />
                      <span class="text-danger" v-if="v$.basic.dob.$error && isError01">
                        {{
                        v$.basic.dob.$errors[0].$message
                        }}
                      </span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="username mb-4">
                      <label for="label">Email</label>
                      <input type="email" class="form-control" placeholder="Enter email address"
                        v-model="basic.email" />
                      <span class="text-danger" v-if="v$.basic.email.$error && isError01">
                        {{
                        v$.basic.email.$errors[0].$message
                        }}
                      </span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="username mb-4">
                      <label for="label">Mobile Number</label>
                      <input type="text" class="form-control" placeholder="Enter mobile number" v-model="basic.mobile"
                        onkeypress="return (event.charCode !=8 && ((event.charCode >= 48 && event.charCode <= 57) || (event.charCode == 46 && this.value.indexOf('.') == -1)))" />

                      <span class="text-danger" v-if="v$.basic.mobile.$error && isError01">
                        {{
                        v$.basic.mobile.$errors[0].$message
                        }}
                      </span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="username">
                      <label for="label">Designation Applied</label>
                      <select class="form-select" aria-label="Default select example" v-model="basic.designation">
                        <option :value="data.id" v-for="(data,index) in getPositions" :key="index">
                          {{data.designation_name}}</option>
                      </select>
                      <span class="text-danger" v-if="v$.basic.designation.$error && isError01">
                        {{
                        v$.basic.designation.$errors[0].$message
                        }}
                      </span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="username">
                      <label for="label">Current Location</label>
                      <div class="form-floating">
                        <textarea class="form-control shadow-none p-2" placeholder="Leave a comment here"
                          id="floatingTextarea" v-model="basic.location"></textarea>
                        <span class="text-danger" v-if="v$.basic.location.$error && isError01">
                          {{
                          v$.basic.location.$errors[0].$message
                          }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="username mb-4">
                      <label for="label">Permanent Address</label>
                      <div class="form-floating">
                        <textarea class="form-control shadow-none p-2" placeholder="Leave a comment here"
                          id="floatingTextarea" v-model="basic.address"></textarea>
                        <span class="text-danger" v-if="v$.basic.address.$error && isError01">
                          {{
                          v$.basic.address.$errors[0].$message
                          }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="text-end my-2">
                      <button type="button" @click="validateFirst(1)" class="px-5 py-2 modal-btn shadow-none">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!--  ***************Query**********************-->
              <div class="tab-pane fade my-3" id="pill-tab2" role="tabpanel" aria-labelledby="pills-home2-tab">

                <div class="mt-4">
                  <div class="row">
                    <div class="col-md-4" v-for="(data, index) in queries" :key="index">
                      <div class="username mb-4 ">
                        <label for="label">
                          {{ data.ques }}
                        </label>
                        <select class="form-select" aria-label="Default select example" v-model.trim="data.modelVal">

                          <option selected value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                        <div class="text-danger" v-if="isError02 && v$.queries?.$each.$response.$errors.length">
                          <div v-for="error in v$.queries.$each.$response.$errors[index].modelVal" :key="error">
                            {{ error.$message }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="username mb-4">
                        <label for="label">How did you learn about the opening?</label>
                        <select class="form-select" aria-label="Default select example" v-model="optOpen">
                          <option selected :value="data.val" v-for="(data, index) in optOpening" :key="index">
                            {{
                            data.op
                            }}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div class="col-md-8">
                      <div class="username">
                        <label for="label">What is your current designation?</label>
                      </div>
                      <div class=" mb-4 d-flex gap-4">
                        <div class="d-flex gap-2" v-for="(data, index) in empType" :key="index">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" :id="data.num"
                            :value="data.num" v-model="canType" @input="canType = data.num,tabName()">
                          <label class="form-check-label" :for="data.num">
                            {{ data.val }}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="next-previous d-flex justify-content-end gap-3">
                  <div class="my-2">
                    <button type="button" @click="back(0)" class="px-5 py-2 modal-btn shadow-none">
                      Previous
                    </button>
                  </div>
                  <div class="my-2">
                    <button type="button" @click="validateFirst(2)" class="px-5 py-2 modal-btn shadow-none">
                      Next
                    </button>
                  </div>
                </div>
              </div>
              <!-- ***********************Educational Qualificational**************** -->
              <div class="tab-pane fade" id="pill-tab3" role="tabpanel" aria-labelledby="pills-profile2-tab">
                <div class="mt-4">
                  <div class="mobile" v-if="mobOn">
                    <div class="form-box">
                      <div>
                        <button type="button" id="btn" class="btn shadow-none p-0 ps-1" @click="addRow(1)">
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--navy-blue)"
                              viewBox="0 0 448 512">
                              <path
                                d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                            </svg>
                          </span>
                        </button>
                      </div>

                      <div v-for="(user, index) in candidates" :key="index">
                        <div class="col-12 mb-3">
                          <label class="fw-bold" for="" style="color:var(--navy-blue)">Class</label>
                          <select class="form-select shadow-none" aria-label="Default select example"
                            v-model="user.class">
                            <option selected v-for="(data, index) in classes" :key="index" :value="data.val">
                              {{ data.class }}</option>
                          </select>
                        </div>

                        <div class="col-12 mb-3">
                          <label class="fw-bold" style="color:var(--navy-blue)">Degree</label>
                          <input class="form-control shadow-none m-0" type="text" v-model="user.degree" />
                          <div class="text-danger" v-if="isError03 && v$.candidates?.$each.$response.$errors.length">
                            <div v-for="error in v$.candidates.$each.$response.$errors[index].degree" :key="error">
                              {{ error.$message }}
                            </div>
                          </div>

                        </div>

                        <div class="col-12 mb-3">
                          <label class="fw-bold" style="color:var(--navy-blue)">School/College</label>
                          <input class="form-control shadow-none m-0" type="text" v-model="user.school" />
                          <div class="text-danger" v-if="isError03 && v$.candidates?.$each.$response.$errors.length">
                            <div v-for="error in v$.candidates.$each.$response.$errors[index].school" :key="error">
                              {{ error.$message }}
                            </div>
                          </div>

                        </div>

                        <div class="col-12 mb-3">
                          <label class="fw-bold" style="color:var(--navy-blue)">Board/University</label>
                          <input class="form-control shadow-none m-0" type="text" v-model="user.board_and_university" />
                          <div class="text-danger" v-if="isError03 && v$.candidates?.$each.$response.$errors.length">
                            <div v-for="error in v$.candidates.$each.$response.$errors[index].board_and_university"
                              :key="error">
                              {{ error.$message }}
                            </div>
                          </div>

                        </div>

                        <div class="col-12 mb-3">
                          <label class="fw-bold" style="color:var(--navy-blue)">Month and Passing Year</label>
                          <input name="angka" id="bdaymonth" class="form-control shadow-none" placeholder="mm"
                            type="text"
                            onkeypress="return (event.charCode !=8 && ((event.charCode >= 48 && event.charCode <= 57) || (event.charCode == 46 && this.value.indexOf('.') == -1)))"
                            v-model="user.month" />
                          <div class="text-danger" v-if="isError03 && v$.candidates?.$each.$response.$errors.length">
                            <div v-for="error in v$.candidates.$each.$response.$errors[index].month" :key="error">
                              {{ error.$message }}
                            </div>
                          </div>
                          <input name="angka" id="bdaymonth" class="form-control shadow-none" placeholder="yyyy"
                            type="text"
                            onkeypress="return (event.charCode !=8 && ((event.charCode >= 48 && event.charCode <= 57) || (event.charCode == 46 && this.value.indexOf('.') == -1)))"
                            v-model="user.year" />
                          <div class="text-danger" v-if="isError03 && v$.candidates?.$each.$response.$errors.length">
                            <div v-for="error in v$.candidates.$each.$response.$errors[index].year" :key="error">
                              {{ error.$message }}
                            </div>
                          </div>
                        </div>

                        <div class="col-12 mb-3">
                          <label class="fw-bold" style="color:var(--navy-blue)">No of Attempts</label>
                          <select class="form-select shadow-none" aria-label="Default select example"
                            v-model="user.attempts">
                            <option selected value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                          </select>
                        </div>

                        <div class="col-12">
                          <label class="fw-bold" style="color:var(--navy-blue)">% or (cgpa)</label>
                          <input class="form-control shadow-none m-0" type="text"
                            onkeypress="return (event.charCode !=8 && ((event.charCode >= 48 && event.charCode <= 57) || (event.charCode == 46 && this.value.indexOf('.') == -1)))"
                            v-model="user.percentage_cgpa" />
                          <div class="text-danger" v-if="isError03 && v$.candidates?.$each.$response.$errors.length">
                            <div v-for="error in v$.candidates.$each.$response.$errors[index].percentage_cgpa"
                              :key="error">
                              {{ error.$message }}
                            </div>
                          </div>
                        </div>

                        <div class="col-12">
                          <button type="button" id="btn" class="btn shadow-none" style="
                                font-size: 25px;
                                color: red;
                                cursor: pointer;
                              " @click="deleteRow(index,this)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--navy-blue)"
                              viewBox="0 0 320 512">
                              <path
                                d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                            </svg>
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                  <!--mobile-->
                  <div class="table-responsive" v-else>
                    <table class="table table-bordered">
                      <thead class="text">
                        <tr class="table-heading">
                          <th class="p-0 ps-2 py-1 table-heading">Class</th>
                          <th class="p-0 ps-2 py-1 table-heading">Degree</th>
                          <th class="p-0 ps-2 py-1 table-heading">
                            School | College
                          </th>
                          <th class="p-0 ps-2 py-1 table-heading">
                            Board | University
                          </th>
                          <th class="p-0 ps-2 py-1 table-heading">
                            Month and passing year
                          </th>
                          <th class="p-0 ps-2 py-1 table-heading">
                            No. of attempts
                          </th>
                          <th class="p-0 ps-2 py-1 table-heading">
                            % or (cgpa)
                          </th>
                          <th class="text-center table-heading">
                            <button type="button" id="btn" class="btn shadow-none p-0 ps-1" @click="addRow(1)">
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--navy-blue)"
                                  viewBox="0 0 448 512">
                                  <path
                                    d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                                </svg>
                              </span>
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="table-data" v-for="(user, index) in candidates" :key="index">
                          <td>
                            <div class="username-1">
                              <select class="form-select shadow-none" aria-label="Default select example">
                                <option selected v-for="(data, index) in classes" :key="index" :value="data.val">
                                  {{ data.class }}</option>
                              </select>
                            </div>
                          </td>
                          <td>
                            <input v-model="user.degree" class="form-control shadow-none m-0" type="text" />
                            <div class="text-danger" v-if="isError03 && v$.candidates?.$each.$response.$errors.length">
                              <div v-for="error in v$.candidates.$each.$response.$errors[index].degree" :key="error">
                                {{ error.$message }}
                              </div>
                            </div>

                          </td>
                          <td>
                            <input v-model="user.school" class="form-control shadow-none m-0" type="text" />
                            <div class="text-danger" v-if="isError03 && v$.candidates?.$each.$response.$errors.length">
                              <div v-for="error in v$.candidates.$each.$response.$errors[index].school" :key="error">
                                {{ error.$message }}
                              </div>
                            </div>
                          </td>
                          <td>
                            <input v-model="user.board_and_university" class="form-control shadow-none m-0"
                              type="text" />
                              <div class="text-danger" v-if="isError03 && v$.candidates?.$each.$response.$errors.length">
                              <div v-for="error in v$.candidates.$each.$response.$errors[index].board_and_university" :key="error">
                                {{ error.$message }}
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="input_group  d-flex justify-content-center align-items-center">
                           <div class="me-2">
                               <input type="text" name="angka" aria-label="First name" class="form-control shadow-none mb-1"
                                placeholder="mm"
                                onkeypress="return (event.charCode !=8 && ((event.charCode >= 48 && event.charCode <= 57) || (event.charCode == 46 && this.value.indexOf('.') == -1)))"
                                v-model="user.month" />
                              <div class="text-danger" v-if="isError03 && v$.candidates?.$each.$response.$errors.length">
                                <div v-for="error in v$.candidates.$each.$response.$errors[index].month" :key="error">
                                  {{ error.$message }}
                                </div>
                              </div>
                           </div>
                          <div>
                                <input type="text" name="angka" aria-label="Last name" class="form-control shadow-none mb-1"
                                placeholder="yyyy"
                                onkeypress="return (event.charCode !=8 && ((event.charCode >= 48 && event.charCode <= 57) || (event.charCode == 46 && this.value.indexOf('.') == -1)))"
                                v-model="user.year" />
                              <div class="text-danger" v-if="isError03 && v$.candidates?.$each.$response.$errors.length">
                                <div v-for="error in v$.candidates.$each.$response.$errors[index].year" :key="error">
                                  {{ error.$message }}
                                </div>
                              </div>
                          </div>
                            </div>
                          </td>
                          <td>
                            <div class="username-1">
                              <select class="form-select shadow-none" aria-label="Default select example"
                                v-model="user.attempts">
                                <option selected value="1">01</option>
                                <option value="2">02</option>
                                <option value="3">03</option>
                              </select>
                            </div>
                          </td>
                          <td>
                            <input
                              onkeypress="return (event.charCode !=8 && ((event.charCode >= 48 && event.charCode <= 57) || (event.charCode == 46 && this.value.indexOf('.') == -1)))"
                              v-model="user.percentage_cgpa" class="form-control shadow-none m-0" type="text" />
                            <div class="text-danger" v-if="isError03 && v$.candidates?.$each.$response.$errors.length">
                              <div v-for="error in v$.candidates.$each.$response.$errors[index].percentage_cgpa"
                                :key="error">
                                {{ error.$message }}
                              </div>
                            </div>
                          </td>

                          <td>
                            <button type="button" id="btn" class="btn shadow-none" style="
                                font-size: 25px;
                                color: red;
                                cursor: pointer;
                              " @click="deleteRow(index,this)">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--navy-blue)"
                                viewBox="0 0 320 512">
                                <path
                                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- *********************Next-previous btn********************** -->
                <div class="next-previous d-flex justify-content-end gap-3 mt-3">
                  <div class="my-2">
                    <button type="button" @click="back(1)" class="px-5 py-2 modal-btn shadow-none">
                      Previous
                    </button>
                  </div>
                  <div class="my-2">
                    <button type="button" class="px-5 py-2 modal-btn shadow-none" @click="validateFirst(3)">
                      {{ ( this.canType == 0) ?'Submit' : 'Next'}}
                    </button>
                  </div>
                </div>
              </div>
              <!-- *****************Work Experience******************** -->
              <div class="tab-pane fade" id="pill-tab4" role="tabpanel" aria-labelledby="pills-contact3-tab">
                <div class="row" v-if="canType==1">
                  <div class="col-md-4">
                    <div class="username mb-4">
                      <label for="label">Current Organisation</label>
                      <input type="text" class="form-control" placeholder="Current Organisation"
                        v-model="workOrTrain.isOrganization" />
                      <span class="text-danger" v-if="v$.workOrTrain.isOrganization.$error && isError04">
                        {{
                        v$.workOrTrain.isOrganization.$errors[0].$message
                        }}
                      </span>

                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="username mb-4">
                      <label for="label">Current Designation</label>
                      <input type="text" class="form-control" placeholder="Current Designation"
                        v-model="workOrTrain.isDesignation" />
                      <span class="text-danger" v-if="v$.workOrTrain.isDesignation.$error && isError04">
                        {{
                        v$.workOrTrain.isDesignation.$errors[0].$message
                        }}
                      </span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="username mb-4">
                      <label for="label">Total Experience</label>
                      <input type="text" class="form-control" placeholder="Total Experience"
                        v-model="workOrTrain.isExperienced" />
                      <span class="text-danger" v-if="v$.workOrTrain.isExperienced.$error && isError04">
                        {{
                        v$.workOrTrain.isExperienced.$errors[0].$message
                        }}
                      </span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="username mb-4">
                      <label for="label">Fixed Salary</label>
                      <input type="text" class="form-control" placeholder="Fixed Salary"
                        v-model="workOrTrain.isFixedSal" />
                      <span class="text-danger" v-if="v$.workOrTrain.isFixedSal.$error && isError04">
                        {{
                        v$.workOrTrain.isFixedSal.$errors[0].$message
                        }}
                      </span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="username mb-4">
                      <label for="label">Bonus | Incentive</label>
                      <input type="text" class="form-control" placeholder="Bonus | Incentive"
                        v-model="workOrTrain.bonus" />
                      <span class="text-danger" v-if="v$.workOrTrain.bonus.$error && isError04">
                        {{
                        v$.workOrTrain.bonus.$errors[0].$message
                        }}
                      </span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="username mb-4">
                      <label for="label">Total Salary</label>
                      <input type="text" class="form-control" placeholder="Total Salary"
                        v-model="workOrTrain.totalSal" />
                      <span class="text-danger" v-if="v$.workOrTrain.totalSal.$error && isError04">
                        {{
                        v$.workOrTrain.totalSal.$errors[0].$message
                        }}
                      </span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="username mb-4">
                      <label for="label">Expected Salary</label>
                      <input type="text" class="form-control" placeholder="Expected Salary"
                        v-model="workOrTrain.expecSal" />
                      <span class="text-danger" v-if="v$.workOrTrain.expecSal.$error && isError04">
                        {{
                        v$.workOrTrain.expecSal.$errors[0].$message
                        }}
                      </span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="username mb-4">
                      <label for="label">Notice Period</label>
                      <input type="text" class="form-control" placeholder="Notice Period"
                        v-model="workOrTrain.noticePeriod" />
                      <span class="text-danger" v-if="v$.workOrTrain.noticePeriod.$error && isError04">
                        {{
                        v$.workOrTrain.noticePeriod.$errors[0].$message
                        }}
                      </span>
                    </div>
                  </div>
                </div>
                <!-- **********************tablew******************* -->
                <div class="basic-detail mt-2">
                  <h5 class="m-0">Add More Details :</h5>
                </div>

                <div class="mobile" v-if="mobOn">
                  <div class="form-box">
                    <div>
                      <button type="button" id="btn" class="btn shadow-none p-0 ps-1" @click="addRow(2)">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--navy-blue)"
                            viewBox="0 0 448 512">
                            <path
                              d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                          </svg>
                        </span>
                      </button>
                    </div>

                    <div v-for="(number, index) in workOrTrain.workTrain" :key="index">
                      <div class="col-12 mb-3">
                        <label class="fw-bold" for="" style="color:var(--navy-blue)">From</label>
                        <div class="input-group">

                          <input type="text" name="angka" aria-label="First name" class="form-control shadow-none"
                            placeholder="mm" v-model="number.fmonth" />
                          <div class="text-danger" v-if="isError04 && v$.workOrTrain.workTrain?.$each.$response.$errors.length">
                            <div v-for="error in v$.workOrTrain.workTrain.$each.$response.$errors[index].fmonth"
                              :key="error">
                              {{ error.$message }}
                            </div>
                          </div>

                          <input type="text" name="angka" aria-label="Last name" class="form-control shadow-none"
                            placeholder="yyyy" v-model="number.fyear" />
                          <div class="text-danger" v-if="isError04 && v$.workOrTrain.workTrain?.$each.$response.$errors.length">
                            <div v-for="error in v$.workOrTrain.workTrain.$each.$response.$errors[index].fyear"
                              :key="error">
                              {{ error.$message }}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 mb-3">
                        <label class="fw-bold" for="" style="color:var(--navy-blue)">To</label>

                        <div class="input-group">
                          <input type="text" name="angka" aria-label="First name" class="form-control shadow-none"
                            placeholder="mm" v-model="number.tmonth" />
                          <div class="text-danger" v-if="isError04 && v$.workOrTrain.workTrain?.$each.$response.$errors.length">
                            <div v-for="error in v$.workOrTrain.workTrain.$each.$response.$errors[index].tmonth"
                              :key="error">
                              {{ error.$message }}
                            </div>
                          </div>
                          <input type="text" name="angka" aria-label="Last name" class="form-control shadow-none"
                            placeholder="yyyy" v-model="number.tyear" />
                          <div class="text-danger" v-if="isError04 && v$.workOrTrain.workTrain?.$each.$response.$errors.length">
                            <div v-for="error in v$.workOrTrain.workTrain.$each.$response.$errors[index].tyear"
                              :key="error">
                              {{ error.$message }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 mb-3">
                        <label class="fw-bold" for="" style="color:var(--navy-blue)">Organization</label>

                        <div class="input-group">
                          <input v-model="number.organisation" class="form-control shadow-none m-0" type="text" />
                          <div class="text-danger" v-if="isError04 && v$.workOrTrain.workTrain?.$each.$response.$errors.length">
                            <div v-for="error in v$.workOrTrain.workTrain.$each.$response.$errors[index].organisation"
                              :key="error">
                              {{ error.$message }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 mb-3" v-if="canType==2">
                        <label class="fw-bold" for="" style="color:var(--navy-blue)">Designation</label>

                        <div class="input-group">
                          <input v-model="number.designation" class="form-control shadow-none m-0" type="text" />
                          <div class="text-danger" v-if="isError04 && v$.workOrTrain.workTrain?.$each.$response.$errors.length">
                            <div v-for="error in v$.workOrTrain.workTrain.$each.$response.$errors[index].designation"
                              :key="error">
                              {{ error.$message }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 mb-3" v-if="canType==2">
                        <label class="fw-bold" for="" style="color:var(--navy-blue)">Reason Of Leaving</label>

                        <div class="input-group">
                          <input v-model="number.reason_of_leaving" class="form-control shadow-none m-0" type="text" />
                          <div class="text-danger" v-if="isError04 && v$.workOrTrain.workTrain?.$each.$response.$errors.length">
                            <div
                              v-for="error in v$.workOrTrain.workTrain.$each.$response.$errors[index].reason_of_leaving"
                              :key="error">
                              {{ error.$message }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 mb-3" v-else>
                        <label class="fw-bold" for="" style="color:var(--navy-blue)">Technologies</label>

                        <div class="input-group">
                          <input v-model="number.technologies" class="form-control shadow-none m-0" type="text" />
                          <div class="text-danger" v-if="isError04 && v$.workOrTrain.workTrain?.$each.$response.$errors.length">
                            <div v-for="error in v$.workOrTrain.workTrain.$each.$response.$errors[index].technologies"
                              :key="error">
                              {{ error.$message }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <button type="button" id="btn" class="btn shadow-none" style="
                                font-size: 25px;
                                color: red;
                                cursor: pointer;
                              " @click="deleteRow(index,this)">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--navy-blue)"
                            viewBox="0 0 320 512">
                            <path
                              d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                          </svg>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="table-responsive mt-3" v-else>
                  <table class="table table-bordered">
                    <thead class="text">
                      <tr class="table-heading">
                        <th class="p-0 py-1 ps-2 table-heading1">
                          From (Month,Year)
                        </th>
                        <th class="p-0 py-1 ps-2 table-heading1">
                          To (Month,Year)
                        </th>
                        <th class="p-0 py-1 ps-2 table-heading1">
                          Organisation
                        </th>
                        <th class="p-0 py-1 ps-2 table-heading" v-if="canType==1">
                          Designation</th>
                        <th class="p-0 py-1 ps-2 table-heading1" v-if="canType==1">
                          Reason of Leaving
                        </th>
                        <th class="p-0 py-1 ps-2 table-heading1" v-else>
                          Technologies
                        </th>
                        <th class="text-center table-heading1">
                          <button type="button" id="btn" class="btn shadow-none p-0" @click="addRow(2)">
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--navy-blue)"
                                viewBox="0 0 448 512">
                                <path
                                  d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                              </svg>
                            </span>
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="table-data" v-for="(number, index) in workOrTrain.workTrain" :key="index">
                        <td>
                          <div class="input_group d-flex justify-content-center align-items-center" >
                         <div class="me-2">
                             <input type="text" name="angka" aria-label="First name" class="form-control shadow-none mb-1"
                              placeholder="mm" v-model="number.fmonth" />
                            <div class="text-danger" v-if="isError04 && v$.workOrTrain.workTrain?.$each.$response.$errors.length">
                              <div v-for="error in v$.workOrTrain.workTrain?.$each.$response.$errors[index].fmonth"
                                :key="error">
                                {{ error.$message }}
                              </div>
                            </div>
                         </div>
                         <div>
                             <input type="text" name="angka" aria-label="Last name" class="form-control shadow-none mb-1"
                              placeholder="yyyy" v-model="number.fyear" />
                            <div class="text-danger" v-if="isError04 && v$.workOrTrain.workTrain?.$each.$response.$errors.length">
                              <div v-for="error in v$.workOrTrain.workTrain?.$each.$response.$errors[index].fyear"
                                :key="error">
                                {{ error.$message }}
                              </div>
                            </div>
                         </div>
                          </div>
                        </td>
                        <td>
                          <div class="input_group d-flex justify-content-center align-items-center">
                      <div class="me-2">
                              <input type="text" name="angka" aria-label="First name" class="form-control shadow-none mb-1"
                              placeholder="mm" v-model="number.tmonth" />
                            <div class="text-danger" v-if="isError04 && v$.workOrTrain.workTrain?.$each.$response.$errors.length">
                              <div v-for="error in v$.workOrTrain.workTrain?.$each.$response.$errors[index].tmonth"
                                :key="error">
                                {{ error.$message }}
                              </div>
                            </div>
                      </div>
                          <div>
                              <input type="text" name="angka" aria-label="Last name" class="form-control shadow-none mb-1"
                              placeholder="yyyy" v-model="number.tyear" />
                            <div class="text-danger" v-if="isError04 && v$.workOrTrain.workTrain?.$each.$response.$errors.length">
                              <div v-for="error in v$.workOrTrain.workTrain?.$each.$response.$errors[index].tyear"
                                :key="error">
                                {{ error.$message }}
                              </div>
                            </div>
                          </div>
                          </div>
                        </td>
                        <td>
                          <input v-model="number.organisation" class="form-control shadow-none m-0" type="text" />
                          <div class="text-danger" v-if="isError04 && v$.workOrTrain.workTrain?.$each.$response.$errors.length">
                            <div v-for="error in v$.workOrTrain.workTrain.$each.$response.$errors[index].organisation"
                              :key="error">
                              {{ error.$message }}
                            </div>
                          </div>
                        </td>
                        <td v-if="canType==1">
                          <input v-model="number.designation" class="form-control shadow-none m-0" type="text" />
                          <div class="text-danger" v-if="isError04 && v$.workOrTrain.workTrain?.$each.$response.$errors.length">
                            <div v-for="error in v$.workOrTrain.workTrain.$each.$response.$errors[index].designation"
                              :key="error">
                              {{ error.$message }}
                            </div>
                          </div>
                        </td>
                        <td v-if="canType==1">
                          <input v-model="number.reason_of_leaving" class="form-control shadow-none m-0" type="text" />
                          <div class="text-danger" v-if="isError04 && v$.workOrTrain.workTrain?.$each.$response.$errors.length">
                            <div
                              v-for="error in v$.workOrTrain.workTrain.$each.$response.$errors[index].reason_of_leaving"
                              :key="error">
                              {{ error.$message }}
                            </div>
                          </div>
                        </td>
                        <td v-else>
                          <input v-model="number.technologies" class="form-control shadow-none m-0" type="text" />
                          <div class="text-danger" v-if="isError04 && v$.workOrTrain.workTrain?.$each.$response.$errors.length">
                            <div v-for="error in v$.workOrTrain.workTrain.$each.$response.$errors[index].technologies"
                              :key="error">
                              {{ error.$message }}
                            </div>
                          </div>
                        </td>
                        <td class="text-center">
                          <button type="button" id="btn" class="btn shadow-none"
                            style="font-size: 25px; color: red; cursor: pointer" @click="deleteRow(index,this)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--navy-blue)"
                              viewBox="0 0 320 512">
                              <path
                                d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- ************************Previous or next button************************* -->
                <div class="next-previous d-flex justify-content-end gap-3 mt-3">
                  <div class="my-2">
                    <button type="button" @click="back(2)" class="px-5 py-2 modal-btn shadow-none">
                      Previous
                    </button>
                  </div>
                  <!-- <div class="my-2">
                    <button type="button" class="px-5 py-2 modal-btn shadow-none" @click="validateFirst(4)">
                      Submit
                    </button>
                  </div> -->
                          <div class="row bank-row ">
                                    <div class="col-md-10 col-lg-4 col-xl-4">
                                        <div class="my-2">
                            
                              <button v-if="loadingdata == false" @click.prevent="validateFirst(4),v$.basic.$reset();" type="submit" class="px-5 py-2 modal-btn shadow-none">
                                                Save
                                            </button>
                                            <button class="px-5 py-2 modal-btn shadow-none" type="button" v-else>
                                                <span class="spinner-border spinner-border-sm text-light" role="status" aria-hidden="true"></span>
                                            </button>
                           
                            </div>
                            </div>
                            </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  </div>
</template>

<script>
import DashboardLayout from "@/Layout/DashboardLayout";
// import CandidateModelCompenent from "@/components/CandidateModelCompenent";
import { required, minLength, maxLength, helpers, email, requiredIf, between } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import ApiClass from '@/api/api.js';
import _ from "lodash";
// import ChooseImage from "@/components/Chooseimage.vue"

export default {
  name: "CandidateViews",
  components: {
    DashboardLayout,
    // CandidateModelCompenent
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      
       loadmodal : true,
       loadingdata : false,
      //own var
      mobOn: false,
      tabs: [
        { name: 'Basic Information', code: 1, id: 'pilltab1', bsTarget: 'pill-tab1' },
        { name: 'Queries', code: 2, id: 'pilltab2', bsTarget: 'pill-tab2' },
        { name: 'Educational Qualification', code: 3, id: 'pilltab3', bsTarget: 'pill-tab3' },
        // { name: 'Work Experience', code: 4, id: 'pilltab4', bsTarget: 'pill-tab4' }
      ],
      optOpening: [
        { op: 'Newspaper Advertisement', val: 'news' },
        { op: 'Company Website', val: 'website' },
        { op: 'Friend or Relative', val: 'person' },
        { op: 'Job Portal', val: 'job_portal' },
        { op: 'Social Media', val: 'social_media' }],
      optOpen: "news",
      queries: [
        { modelVal: '', ques: 'Have you been interviewed by us in last sixmonth?' },
        { modelVal: '', ques: 'Do you have a history of any major illness?' },
        { modelVal: '', ques: 'Do you consume alcohol?' },
        { modelVal: '', ques: 'Do you smoke?' },
        { modelVal: '', ques: 'Differently abled' },
        { modelVal: '', ques: 'Do you have any police record?' },
      ],
      canType: 0,
      tabNum: 1,
      showActive: false,
      isError01: false,
      isError02: false,
      isError03: false,
      isError04: false,
      currentTab: 'basic',
      basic: {
        name: "",
        dob: "",
        gender: "",
        mobile: "",
        designation: "",
        maritalStatus: "",
        location: "",
        address: "",
        email: "",
        image:""
      },
      empType: [
        { num: 0, val: 'Fresher' },
        { num: 1, val: 'Experienced' },
        { num: 2, val: 'Traniee' }
      ],
      classes: [{ class: '10th', val: '10th' },
      { class: '12th', val: '12th' },
      { class: 'Graduation', val: 'graduation' },
      { class: 'Post Graduation', val: 'post_graduation' },
      { class: 'Diploma', val: 'diploma' },
      { class: 'Other', val: 'other' }],
      candidates: [
        {
          class: '10th',
          degree: null,
          school: null,
          board_and_university: null,
          month: null,
          year: null,
          month_and_passing_year:'eg',
          percentage_cgpa: null,
          attempts: '1',

        },
      ],
      workOrTrain: {
        isOrganization: "",
        isDesignation: "",
        isExperienced: "",
        isFixedSal: "",
        bonus: "",
        totalSal: "",
        expecSal: "",
        noticePeriod: "",
        // jobType: "",
        workTrain: [
          {
            organisation: "",
            designation: "",
            fmonth:"",
            fyear: "",
            tmonth: "",
            tyear: "",
            reason_of_leaving: "",
            technologies: "",
            from:"eg",
            to:"eg",

          },
        ],
      },
      getPositions:[]
    };
  },
  
  mounted() {
    // if(!this.$route.params.state){
    //   this.$router.push('/cadidatecheck')
    // }
    this.basic.email = this.$route.params.email;
    this.basic.mobile = this.$route.params.mobile;
    this.setMobDiv();
    this.get_position();
    window.addEventListener('resize', this.setMobDiv);
      document.getElementById('pilltab2').disabled = true;
      document.getElementById('pilltab3').disabled = true;
      
  },
  validations() {
    return {
      basic: {
        name: {
          required: helpers.withMessage("Full Name is required", required),
        },
        dob: {
          required: helpers.withMessage("DOB is required", required),          
        },
        gender: {
          required: helpers.withMessage("Gender is required", required),
        },
        mobile: {
          required: helpers.withMessage("Mobile number is required", required),
          regex: helpers.withMessage(() => `Invalid Phone number`,
            (value) => /^[0-9]*$/.test(value)),
          minLength: minLength(10),
          maxLength: maxLength(10)
        },
        designation: {
          required: helpers.withMessage("Designation is required", required),
        },
        maritalStatus: {
          required: helpers.withMessage("Marital Status is required", required),
        },
        email: {
          required: helpers.withMessage("Email is required", required),
          email: helpers.withMessage(
            "Email must be a valid email address",
            email
          ),
        },
        location: {
          required: helpers.withMessage(
            "Location is required",
            required
          ),
        },
        address: {
          required: helpers.withMessage(
            "Address is required",
            required
          )
        }
      },
      queries:
      {
        $each:
          helpers.forEach({
            modelVal: {
              required: helpers.withMessage(
                "Field is required",
                required
              )
            }
          })
      },
      candidates:
      {
        $each:
          helpers.forEach({
            degree: {
              required: helpers.withMessage(
                "Field is required",
                required
              )
            },
            school: {
              required: helpers.withMessage(
                "Field is required",
                required
              )
            },
            board_and_university: {
              required: helpers.withMessage(
                "Field is required",
                required
              )
            },
            month: {
              required: helpers.withMessage(
                "Field is required",
                required
              ),
              betweenValue: helpers.withMessage(
                "Value should be a valid month",
                between(0,12)
              )
            },
            year: {
              required: helpers.withMessage(
                "Field is required",
                required
              ),
              betweenValue: helpers.withMessage(
                "Value should be a valid year",
                between(new Date().getFullYear() - 50, new Date().getFullYear())
              ),
            },
            percentage_cgpa: {
              required: helpers.withMessage(
                "Field is required",
                required,
              ),
              regex: helpers.withMessage("Invalid Format",
             (value) => /^(?:\d{1,2}(?:\.\d{1,2})?|99.9(?:\.0?0)?)$/.test(value)),
            },

          })
      },
      workOrTrain:
      {
        isOrganization: {
          required: helpers.withMessage("Organization is required", requiredIf(() => { return this.canType == 1 })),
        },
        isDesignation: {
          required: helpers.withMessage("Designation is required", requiredIf(() => { return this.canType == 1 })),
        },
        isExperienced: {
          required: helpers.withMessage("Experienced is required", requiredIf(() => { return this.canType == 1 })),
          regex: helpers.withMessage("Invalid Format",
             (value) => /^\d{0,2}(\.\d{1,2})?$/.test(value)),
          
        },
        isFixedSal: {
          required: helpers.withMessage("Fixed Salary is required", requiredIf(() => { return this.canType == 1 })),
           regex: helpers.withMessage("Invalid Format",
             (value) => /^\d{0,15}(\.\d{1,2})?$/.test(value)),
        },
        totalSal: {
          required: helpers.withMessage("Total Salary is required", requiredIf(() => { return this.canType == 1 })),
          regex: helpers.withMessage("Invalid Format",
             (value) => /^\d{0,15}(\.\d{1,2})?$/.test(value)),
        },
        bonus: {
          required: helpers.withMessage("Bonus is required", requiredIf(() => { return this.canType == 1 })),
          regex: helpers.withMessage("Invalid Format",
             (value) => /^\d{0,15}(\.\d{1,2})?$/.test(value)),
        },
        expecSal: {
          required: helpers.withMessage("Expected Salary is required", requiredIf(() => { return this.canType == 1 })),
          regex: helpers.withMessage("Invalid Format",
             (value) => /^\d{0,15}(\.\d{1,2})?$/.test(value)),
        },
        noticePeriod: {
          required: helpers.withMessage("Notice Period is required", requiredIf(() => { return this.canType == 1 })),
          regex: helpers.withMessage("Invalid Format",
             (value) => /^\d{0,15}?$/.test(value)),
        },
        // d_jobType: {
        //   required: helpers.withMessage("Role is required", required),
        // },
        workTrain:
        {
          $each:
            helpers.forEach({
              organisation: {
                required: helpers.withMessage(
                  "Field is required",
                  required
                )
              },
              designation: {
                required: helpers.withMessage(
                  "Field is required",
                  requiredIf(() => { return this.canType == 1 })
                )
              },
              fmonth: {
                required: helpers.withMessage(
                  "Field is required",
                  required
                ),
                betweenValue: helpers.withMessage(
                  "Value should be a valid month",
                  between(0, 12)
                )
              },
              fyear: {
                required: helpers.withMessage(
                  "Field is required",
                  required
                ),
                betweenValue: helpers.withMessage(
                  "Value should be a valid year",
                  between(new Date().getFullYear() - 50,new Date().getFullYear())
                ),
                // regexYear:
                //   helpers.withMessage('Vlaue must be a valid year', alpha)
              },
                tmonth: {
                required: helpers.withMessage(
                  "Field is required",
                  required
                  ),
                  betweenValue: helpers.withMessage(
                    "Value should be a valid month",
                    between(0, 12)
                  )
              },
              tyear: {
                required: helpers.withMessage(
                  "Field is required",
                  required
                ),
                betweenValue: helpers.withMessage(
                  "Value should be a valid year",
                  between(new Date().getFullYear() - 50, new Date().getFullYear())
                ),
              },      
              reason_of_leaving: {
                required: helpers.withMessage(
                  "Field is required",
                  requiredIf(() => { return this.canType == 1 })
                )
              },
              technologies: {
                 required: helpers.withMessage(
                     "Field is required",
                   requiredIf(() => { return this.canType == 2})
                 )
               },
            })
        }
      }
    }
  },
  methods: {
    setMobDiv() {
      this.mobOn = window.innerWidth < 992 ? true : false;
    },
    next(num) {
      alert('hi');
      (num == 1) ? this.$refs.tabRef[1].click() : (num == 2) ? this.$refs.tabRef[2].click() : this.$refs.tabRef[3].click();
      alert(this.$refs.tabRef[1]);
      this.currentTab = 'query';
    },
    back(num) {
      (num == 0) ? this.$refs.tabRef[0].click() : (num == 1) ? this.$refs.tabRef[1].click() : this.$refs.tabRef[2].click();
    },
    addRow(num) {
      if (num == 1) {
        this.candidates.push({
          class: '10th',
          degree: null,
          school: null,
          board_and_university: null,
          month: null,
          year: null,
          month_and_passing_year: 'eg',
          percentage_cgpa: null,
          attempts: '1',
        });
      }
      else {
        this.workOrTrain.workTrain.push(
          {
            organisation: "",
            designation: "",
            fmonth: "",
            fyear: "",
            tmonth: "",
            tyear: "",
            reason_of_leaving: "",
            technologies: "",
            from: "eg",
            to: "eg",

          },
        );
      }
    },
    deleteRow(index) { 
      if (this.candidates.length>1 || this.workOrTrain.workTrain.length>1)
      {
         this.candidates.splice(index, 1);
          this.workOrTrain.workTrain.splice(index, 1);
      }
    },
    async validateFirst(num) {
      this.isError01 = this.isError02 = this.isError03 = this.isError04 = false;
      console.log(this.v$);
      if (num == 1) {

        this.isError01 = true;
        this.v$.basic.$touch()         //it will validate all fields
      
        if (this.v$.basic.$errors.length == 0) {
          
          this.isError01 = false;
          document.getElementById('pilltab2').disabled = false;
          return this.$refs.tabRef[1].click();
        } 
          return;
       
      } else if (num == 2) {
        this.isError02 = true;
        this.v$.queries.$touch() //it will validate all fields
        let result = await this.v$.queries.$invalid;
        if (result) {
          return;
        }
        this.isError02 = false;
        //this.next(num);
        document.getElementById('pilltab3').disabled = false;
        this.$refs.tabRef[2].click()
      }
      else if (num == 3) {       
      
        this.isError03 = true;
        this.v$.candidates.$touch() //it will validate all fields
        let result = await this.v$.candidates.$invalid;
        if (result) {
          return;
        }
        this.v$.$reset();
        this.isError03 = false;
        //this.next(num);
        _.map(this.candidates, (item) => { item.month_and_passing_year = item.month + '/' + item.year });

        if (this.canType == 0)
        {
          this.apiHit();
          return;
        }
        this.$refs.tabRef[3].click()

        //fresher api hit button-next canType == 0 submit else next
      }
      else {
        this.isError04 = true;
        this.v$.workOrTrain.$touch() //it will validate all fields
        let result = await this.v$.workOrTrain.$invalid;
        if (result) {
          return;
        }
        this.v$.$reset();
        this.isError04 = false;
        this.loadingdata = true;
        console.log('ready to hit api')
        _.map(this.workOrTrain.workTrain, (item) => {
          item.from = item.fmonth + '/' + item.fyear;
          item.to = item.tmonth + '/' + item.tyear
         });

        // console.log(this.workOrTrain.workTrain);
         this.apiHit();
      }

    },
    async apiHit() {
      
      // : this.eduInfo[0].month + this.eduInfo[0].year,


      let form =
      {
        //basic
        name: this.basic.name,
        date_of_birth: this.basic.dob,
        gender: this.basic.gender,
        mobile_number : this.basic.mobile,
        designation_id: this.basic.designation,
        marital_status: this.basic.maritalStatus,
        current_location : this.basic.location,
        permanent_address : this.basic.address,
        email : this.basic.email,

        //query
        have_you_been_interviewed_by_us_in_last_six_month: this.queries[0].modelVal,
        do_you_have_a_history_of_any_major_illness: this.queries[1].modelVal,
        do_you_consume_alcohol: this.queries[2].modelVal,
        do_you_smoke: this.queries[3].modelVal,
        differently_abled: this.queries[4].modelVal,
        do_you_have_a_police_record: this.queries[5].modelVal,

        how_did_you_learn_about_the_opening: this.optOpen,

        current_position: this.canType,


        //work experience         
        current_organisation: this.workOrTrain.isOrganization,
        current_designation: this.workOrTrain.isDesignation,
        total_experience: this.workOrTrain.isExperienced,
        fixed_salary: this.workOrTrain.isFixedSal,
        bonus_incentive: this.workOrTrain.bonus,
        total_salary: this.workOrTrain.totalSal,
        expected_salary: this.workOrTrain.expecSal,
        notice_period: this.workOrTrain.noticePeriod,

        //education
        edu: this.candidates,
       

        //work
        workTrainee : this.workOrTrain.workTrain

      }
      if(form.current_position==0){
        form.current_position = 'Fresher';
      }else if(form.current_position==1){
         form.current_position = 'Experienced';
      }else{
        form.current_position = 'Trainee';
      }
      console.log(form);
      let response = await ApiClass.postNodeRequest(
        "candidate-create",
        true,
        form,
      );
      console.log(response, "api expen create");
      if (response?.data) {
        this.loadingdata = false;
        if (response.data.status_code == "0") {
          return this.failed(response.data.message);
        }
        this.success(response.data.message);
        this.$router.push('/candidatelist');
         
        this.basic.name=
        this.basic.dob=
        this.basic.gender=
        this.basic.mobile=
        this.basic.designation=
        this.basic.maritalStatus=
        this.basic.location=
        this.basic.address=
        this.basic.email=
        //query
        this.queries[0].modelVal=
        this.queries[1].modelVal=
        this.queries[2].modelVal=
        this.queries[3].modelVal=
        this.queries[4].modelVal=
        this.queries[5].modelVal=
        this.optOpen=
        this.canType=
        //work experience         
         this.workOrTrain.isOrganization=
        this.workOrTrain.isDesignation=
         this.workOrTrain.isExperienced=
         this.workOrTrain.isFixedSal=
         this.workOrTrain.bonus=
         this.workOrTrain.totalSal=
         this.workOrTrain.expecSal=
         this.workOrTrain.noticePeriod=

        //work
      this.workOrTrain.workTrain = "";
        this.candidates= [
        {
          class: '10th',
          degree: null,
          school: null,
          board_and_university: null,
          month: null,
          year: null,
          month_and_passing_year:'eg',
          percentage_cgpa: null,
          attempts: '1',

        },
      ],
      document.getElementById('pilltab2').disabled = true;
      document.getElementById('pilltab3').disabled = true;
      
      }
    },
    tabName() {
       if (this.canType == 0) { 
         this.tabs.splice(3, 1)
       console.log(this.tabs);
      } else
      {
        let name1 =  (this.canType == 1) ? 'Work Experience' : 'Training Information';
        // document.getElementById('pilltab4').classList.add('disabled')
          this.tabs[3] = { name: name1, code: 4, id: 'pilltab4', bsTarget: 'pill-tab4' };

      }

      
         
    },
    
    async get_position() {
      let response = await ApiClass.getNodeRequest("designation-get", true);

      if (response?.data) {
        console.log(response.data);
        if (response.data.status_code == "1") {
          this.getPositions = response.data.data ?? [];
        }
       
      }
    },
   
  },
};
</script>

<style scoped>
.dashbpoard-content {
  background-color: var(--hr-bg);
  min-height: calc(100vh - 126px);
}
 .btn_save{
    background-color: var(--navy-blue) !important;
    color: var(--white) !important;;
    border: 2px solid transparent !important;;
    border-radius: 4px !important;;
    font-weight: 600 !important;;
}

.interview-form {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 4px;
  background-color: var(--white);
}

.interview-head h3 {
  font-size: var(--fs-5);
  font-weight: 600;
  color: var(--navy-blue);
  text-decoration: 2px solid underline;
}

.username label {
  font-size: 14px;
  color: var(--navy-blue);
  padding-bottom: 8px;
  font-weight: bolder;
}

.username select,
.username input {
  color: var(--text-box);
  font-size: var(--fs-3);
  padding: 3px 8px;
  width: 100%;
}

.username input,
.username select:focus {
  box-shadow: none;
}

.user-head h2 {
  font-size: var(--fs-4);
  font-weight: 600;
  color: var(--navy-blue);
}

/**********************************submit-btn************************************/
.modal-btn {
  background-color: var(--navy-blue);
  color: var(--white);
  border: transparent;
  border-radius: 4px;
  font-weight: 500;
  border: 2px solid transparent;
}

.modal-btn:hover {
  background-color: transparent;
  color: var(--navy-blue);
  border: 2px solid var(--navy-blue);
  border-radius: 4px;
}

/* **************************************nav tabs******************* */
.candidate-pills {
  width: 100%;
}

.candidate-item {
  width: 25%;
  display: flex;
  justify-content: center;
}

.candidate-item button {
  color: var(--navy-blue);
  font-weight: 600;
  font-size: var(--fs-3);
}

.candidate-pills {
  background-color: var(--hr-bg);
}

.candidate-link {
  padding: 8px 10px;
}

.candidate-pills .candidate-link.active,
.candidate-pills .show>.candidate-link {
  color: #fff;
  background-color: var(--navy-blue);
  color: var(--white);
}

/*****************table***********************/
table {
  border-color: transparent;
  border: 1px solid var(--input-border);
}

button {
  padding: 6px 10px;
}

#submit {
  font-weight: 700;
}

.form-select:focus {
  border-color: var(--input-border);
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
}

.form-control:focus {
  border-color: var(--input-border);
}

.table-heading {
  color: var(--navy-blue);
  font-size: var(--fs-3);
}

.username-1 select,
.username-1 input {
  color: var(--text-box);
  font-size: var(--fs-3);
  padding: 8px 3px;
  width: 100%;
}

.table-heading {
  vertical-align: middle;
}

.table-data {
  vertical-align: middle;
}

.basic-detail h5 {
  font-size: var(--fs-4);
  color: var(--navy-blue);
  font-weight: 600;
  text-decoration: 2px solid underline;
  text-decoration-color: var(--navy-blue);
}

th.table-heading {
  width: 15%;
}

th.table-heading1 {
  width: 20%;
}

/***********responsive 320**************/
.input-heading p {
  color: var(--navy-blue);
  font-weight: bolder;
  font-size: var(--fs-3);
}

.username select {
  color: var(--text-box);
  font-size: var(--fs-3);
  padding: 3px 8px;
  width: 100%;
}

.input-feilds input {
  border: 1px solid var(--input-border);
  padding: 1px 8px;
  border-radius: 4px;
}

.input-feilds input:focus {
  outline: none;
}

.add-btn {
  background-color: var(--navy-blue);
  color: var(--white);
  border: transparent;
  border-radius: 4px;
  font-weight: 500;
  border: 2px solid transparent;
}

.table-data td input {
  color: var(--text-box);
  font-size: var(--fs-3);
}

.input-feilds input {
  color: var(--text-box);
  font-size: var(--fs-3);
}

.mediun-shadow {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 4px;
  margin: 15px 0;
}

.nav-pills>li {
  text-align: center;
  margin: 0px auto;
  display: inline-flex !important;
  float: none !important;
}

.nav {
  text-align: center;
}

.queryClass {
  overflow: visible;
  white-space: nowrap;
}

/***************************media responsive**********************************/
@media all and (min-width: 1200px) and (max-width: 1400px) {
  .dashbpoard-content {
    height: calc(100% - 126px);
  }
}

@media all and (min-width: 1025px) and (max-width: 1199px) {
  .dashbpoard-content {
    height: calc(100% - 126px);
  }

  .table-data td {
    min-width: 200px;
    text-align: center;
  }
}

@media all and (min-width: 992px) and (max-width: 1024px) {
  .dashbpoard-content {
    height: calc(100% - 126px);
  }

  .table-data td {
    min-width: 200px;
    text-align: center;
  }
}

@media all and (min-width: 768px) and (max-width: 991px) {
  .dashbpoard-content {
    height: calc(100% - 128px);
  }

  .table-data td {
    min-width: 200px;
    text-align: center;
  }
}

@media all and (min-width: 320px) and (max-width: 767px) {
  .dashbpoard-content {
    height: calc(100% - 108px);
  }

  .candidate-pills .candidate-link.active,
  .candidate-pills .show>.candidate-link {
    padding: 0 15px;
  }

  /*.nav-pills .nav-link {
            background: 0 0;
            border: 0;
            padding: 10px 15px;
            border-radius: 100%;
        }*/
}
</style>
