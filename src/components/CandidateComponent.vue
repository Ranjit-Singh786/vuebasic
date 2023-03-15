<template>
  <div>
        <!-- Button trigger modal -->


<!-- Modal -->
                  <div class="modal fade" id="exampleModal22" tabindex="-1" aria-labelledby="exampleModal22Label"
                    aria-hidden="true">
                    <div class="modal-dialog modal-fullscreen">
                      <div class="modal-content">
                        <div class="modal-header model-heading">
                          <h5 class="modal-title modal-head" id="exampleModal22Label">
                            Candidate Detail
                          </h5>
                          <button type="button" class="btn-close bg-light text-light" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        </div>
                        <div class="circle-1 d-none d-md-block">
                          <!-- <span><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 384 512"
                              style="fill: var(--navy-blue)">
                              <path
                                d="M336 0C362.5 0 384 21.49 384 48V464C384 490.5 362.5 512 336 512H240V432C240 405.5 218.5 384 192 384C165.5 384 144 405.5 144 432V512H48C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336zM64 272C64 280.8 71.16 288 80 288H112C120.8 288 128 280.8 128 272V240C128 231.2 120.8 224 112 224H80C71.16 224 64 231.2 64 240V272zM176 224C167.2 224 160 231.2 160 240V272C160 280.8 167.2 288 176 288H208C216.8 288 224 280.8 224 272V240C224 231.2 216.8 224 208 224H176zM256 272C256 280.8 263.2 288 272 288H304C312.8 288 320 280.8 320 272V240C320 231.2 312.8 224 304 224H272C263.2 224 256 231.2 256 240V272zM80 96C71.16 96 64 103.2 64 112V144C64 152.8 71.16 160 80 160H112C120.8 160 128 152.8 128 144V112C128 103.2 120.8 96 112 96H80zM160 144C160 152.8 167.2 160 176 160H208C216.8 160 224 152.8 224 144V112C224 103.2 216.8 96 208 96H176C167.2 96 160 103.2 160 112V144zM272 96C263.2 96 256 103.2 256 112V144C256 152.8 263.2 160 272 160H304C312.8 160 320 152.8 320 144V112C320 103.2 312.8 96 304 96H272z" />
                            </svg></span> -->
                        </div>
                        <div class="modal-body modal-form">
                          <form>

                           
                       <div class="row">
                        <h3 class="fw-bold mb-1">Basic Information</h3>
                        <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Full name</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{ candidatedata.full_name }}</p>
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Mobile</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{ candidatedata.mobile_number }}</p>
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Gender</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{ candidatedata.gender }}</p>
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Current location</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{ candidatedata.current_location }}</p>
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Email</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{ candidatedata.email }}</p>
                                </div>
                        </div>
                          </div>

                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Marital status</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{ candidatedata.marital_status }}</p>
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">DOB</h6>
                            <div class=" ">
                                <p class="m-0 text-start" v-if="candidatedata.date_of_birth">{{ candidatedata.date_of_birth }}</p>
                                <p class="m-0 text-start" v-else>-------------</p>
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Permanent address</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{ candidatedata.permanent_address }}</p>
                                </div>
                        </div>
                          </div>
                          </div>
                          <div class="row">
                            <h3 class="fw-bold mb-1">Queries</h3>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Do you smoke?</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{candidatedata.do_you_smoke}}</p>
                                </div>
                        </div>
                          </div><div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Do you consume alcohol?</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{ candidatedata.do_you_consume_alcohol }}</p>
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Do you have a police record</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{ candidatedata.do_you_have_a_police_record }}</p>
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Differently abled</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{ candidatedata.differently_abled }}</p>
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Have you been interviewed by us in last six month?</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{ candidatedata.have_you_been_interviewed_by_us_in_last_six_month }}</p>
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Do you have a history of any major illness?</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{ candidatedata.do_you_have_a_history_of_any_major_illness }}</p>
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">How did you learn about the opening?</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{ candidatedata.how_did_you_learn_about_the_opening }}</p>
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Current position</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{ candidatedata.current_position }}</p>
                                </div>
                        </div>
                          </div>
                          </div>
                          <div class="row" v-for="data,index in candidatedata.edu" :key="index">
                            <h3 class="fw-bold mb-1">Education Qualification</h3>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Class</h6>
                            <div class=" " >
                                <p class="m-0 text-start">{{ data.class }}</p>
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Degree</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{ data.degree }}</p>
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Board and university</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{ data.board_and_university }}</p>
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Month and passing year</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{ data.month_and_passing_year }}</p>
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Degree</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{ data.percentage_cgpa +'%'}}</p>
                                </div>
                        </div>
                          </div>
                       </div>
                       <div class="row" v-for="data,index in candidatedata.workTrainee" :key="index">
                        <div></div>
                        <h3 class="fw-bold mb-1">Work Experience</h3>
                         <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">From</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{data.from}}</p>
                                </div>
                        </div>
                          </div>
                           <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">To</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{data.to}}</p>
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Organisation</h6>
                            <div class=" ">
                                <p class="m-0 text-start" v-if="data.organisation">{{data.organisation}}</p>
                                <p class="m-0 text-start" v-else>-------------</p>
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Technologies</h6>
                            <div class=" ">
                                <p class="m-0 text-start" v-if="data.technologies">{{data.technologies}}</p>
                                <p class="m-0 text-start" v-else>-------------</p>
                                </div>
                        </div>
                          </div>
                       </div>
                      <div class="row">
                           <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Current organisation</h6>
                            <div class=" ">
                                <p class="m-0 text-start" v-if="candidatedata.current_organisation">{{candidatedata.current_organisation}}</p>
                                <p class="m-0 text-start" v-else>-------------</p>
                               
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start"> Current designation</h6>
                            <div class=" ">
                                <p class="m-0 text-start" v-if="candidatedata.current_designation">{{candidatedata.current_designation}}</p>
                                <p class="m-0 text-start" v-else>-------------</p>
                                
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Total experience</h6>
                            <div class=" ">
                                <p class="m-0 text-start" v-if="candidatedata.total_experience">{{candidatedata.total_experience}}</p>
                                <p class="m-0 text-start" v-else>-------------</p>
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Fixed salary</h6>
                            <div class=" ">
                                <p class="m-0 text-start" >{{candidatedata.fixed_salary}}</p>
                               
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Bonus incentive</h6>
                            <div class=" ">
                                <p class="m-0 text-start" >{{candidatedata.bonus_incentive}}</p>
                               
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Total salary</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{candidatedata.total_salary}}</p>
                                
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Expected salary</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{candidatedata.expected_salary}}</p>
                                
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Expected salary</h6>
                            <div class=" ">
                                <p class="m-0 text-start">{{candidatedata.status}}</p>
                                
                                </div>
                        </div>
                          </div>
                          <div class="col-md-2">
                           <div class="role mb-4">
                             <h6 class="mb-1 fw-bold text-start">Postion</h6>
                            <div class=" " v-for="data,index in candidatedata" :key="index">
                                <p class="m-0 text-start">{{data.position_name}}</p>
                                </div>
                        </div>
                          </div>
                        </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
  </div>
</template>

<script>
export default {
    name: 'ModalComponent',
    props:JSON.parse(JSON.stringify(["candidatedata"])),
  
}
</script>

<style scoped>
  /* ***************************modal-head****************************** */
  .modal-head {
    font-size: var(--fs-5);
    color: var(--white);
  }
  .modal-input input,
  .modal-input select {
    padding: 3px 20px;
    border: 1px solid var(--input-border);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    color: var(--text-box);
    font-size: var(--fs-3);
  }
  .modal-input input,
  .modal-input select:focus {
    box-shadow: none;
  }
  .modal-input label {
    font-size: var(--fs-3);
    color: var(--navy-blue);
    font-weight: 600;
  }
  .model-heading {
    background-color: var(--navy-blue);
    border-bottom: transparent;
  }
  .modal-form {
    background-color: var(--hr-bg);
  }
  .modal dialog {
    position: relative;
  }
.circle-1 span {
    padding: 30px;
    border-radius: 50px;
    left: 42%;
    position: absolute;
    top: -48px;
    background-color: var(--white);
  }
  .modal-input select{
  border:1px solid var(--input-border);
  font-size:var(--fs-3);
  color:var(--text-color);
}
  /**********************************modal-btn************************************/
  .modal-btn {
    background-color: var(--navy-blue);
    color: var(--white);
    border: transparent;
    border-radius: 4px;
    font-weight: 600;
    border: 2px solid transparent;
  }
  .modal-btn:hover {
    background-color: transparent;
    color: var(--navy-blue);
    border: 2px solid var(--navy-blue);
    border-radius: 4px;
  }

  .role p{
    color:var(--list-color);
    font-weight: 400;
  }
</style>