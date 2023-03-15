<template>
  <div>
    <router-view />
    <div class="user-detail my-4" v-if="!$store.getters.getshow_doc && !$store.getters.get_interview_detail">
      <div class="container-fluid">
        <div class="user">
          <div class="row">
            <div class="col-md-12">
              <div class="d-flex justify-content-between align-items-center">
                    <div class="user-head mb-3">
                <h2 class="m-0 mt-5 px-3">Candidate Detail:</h2>
              </div>
              <div class=" d-flex align-items-center gap-3">
                <div class="upload-btn upload-document">
                <router-link to="" @click="uploaddoc('upload')" class="text-decoration-none py-2 px-4 ">Upload Document</router-link>
              </div>
               <div class="upload-btn upload-document">
                <router-link to="" @click="uploaddoc('interview')" class="text-decoration-none py-2 px-4 ">Interview Details</router-link>
              </div>
              <div class="upload-btn mt-5">
                  <div class="logout-button pb-3 text-start text-md-end">
                    <button
                      type="button"
                      class="px-4 py-1 switch-user"
                      data-bs-toggle="modal"
                       data-bs-target="#staticBackdropfirst"
                      data-bs-whatever="@mdo"
                    >
                     Switch To user
                    </button>
                  </div>
                  <div
                    class="modal fade"
                    id="staticBackdropfirst" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header model-heading">
                          <h5
                            class="modal-title modal-head"
                            id="staticBackdropLabel"
                          >
                            Switch to User
                          </h5>
                          <button
                            type="button"
                            class="btn-close bg-light text-light"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            ref="addrolemodel"
                            @click="reset_validaton"
                          ></button>
                        </div>
                        <div class="circle-1">
                          <span
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="35"
                              height="35"
                              viewBox="0 0 384 512"
                              style="fill: var(--navy-blue)"
                            >
                              <path
                                d="M336 0C362.5 0 384 21.49 384 48V464C384 490.5 362.5 512 336 512H240V432C240 405.5 218.5 384 192 384C165.5 384 144 405.5 144 432V512H48C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336zM64 272C64 280.8 71.16 288 80 288H112C120.8 288 128 280.8 128 272V240C128 231.2 120.8 224 112 224H80C71.16 224 64 231.2 64 240V272zM176 224C167.2 224 160 231.2 160 240V272C160 280.8 167.2 288 176 288H208C216.8 288 224 280.8 224 272V240C224 231.2 216.8 224 208 224H176zM256 272C256 280.8 263.2 288 272 288H304C312.8 288 320 280.8 320 272V240C320 231.2 312.8 224 304 224H272C263.2 224 256 231.2 256 240V272zM80 96C71.16 96 64 103.2 64 112V144C64 152.8 71.16 160 80 160H112C120.8 160 128 152.8 128 144V112C128 103.2 120.8 96 112 96H80zM160 144C160 152.8 167.2 160 176 160H208C216.8 160 224 152.8 224 144V112C224 103.2 216.8 96 208 96H176C167.2 96 160 103.2 160 112V144zM272 96C263.2 96 256 103.2 256 112V144C256 152.8 263.2 160 272 160H304C312.8 160 320 152.8 320 144V112C320 103.2 312.8 96 304 96H272z"
                              /></svg
                          ></span>
                        </div>
                        <div class="modal-body modal-form">
                          <form @submit.prevent="add_role">
                          <div class="mb-2 modal-input">
                              <label for="recipient-name" class="col-form-label"
                                >Candidate Profile :</label
                              >
                              <select
                                class="form-select"
                                v-model="role_name"
                                aria-label="Default select example"
                              >
                                <option value selected>
                                  Please select user role
                                </option>
                                <option :value="data_role.id" v-for="data_role,index in role_data" :key="index">{{ data_role.role_name}}</option>
                                
                              </select>
                             <span class="text-danger" v-if="v$.role_name.$error">{{
                                v$.role_name.$errors[0].$message
                              }}</span>
                            </div>
                             <div class="mb-3 modal-input">
                              <label for="recipient-name" class="col-form-label"
                                >Designation Name :</label
                              >
                              <select
                                class="form-select"
                                v-model="designation"
                                aria-label="Default select example"
                              >
                                <option value selected>
                                  Please select designation
                                </option>
                                <option :value="datas.id" v-for="datas,index in get_dep_data" :key="index">{{ datas.designation_name }}</option>
                                
                              </select>
                             <span class="text-danger" v-if="v$.designation.$error">{{
                                v$.designation.$errors[0].$message
                              }}</span>
                            </div>
                             <div class="mb-2 modal-input">
                              <label for="recipient-name" class="col-form-label"
                                >Team :</label
                              >
                              <select
                                class="form-select"
                                v-model="team"
                                aria-label="Default select example"
                              >
                                <option value selected>
                                  Please select Team
                                </option>
                                <option :value="data.id" v-for="data,index in team_data" :key="index">{{ data.team_name }}</option>
                                
                              </select>
                             <span class="text-danger" v-if="v$.team.$error">{{
                                v$.team.$errors[0].$message
                              }}</span>
                            </div>
                            
                              <div class="row bank-row justify-content-center">
                                    <div class="col-md-10 col-lg-4 col-xl-4">
                                        <div class="my-5 text-center">
                            
                              <button v-if="loadingadd == false" type="submit" class="btn btn_save border w-100 py-2 shadow-none">
                                                Save
                                            </button>
                                            <button class="btn  btn_save w-100 py-2" type="button" v-else>
                                                <span class="spinner-border spinner-border-sm text-light" role="status" aria-hidden="true"></span>
                                            </button>
                           
                            </div>
                            </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                </div>
              <div class="outer-box my-3">
                <div class="inner-box ">
                  <div class="row">
                    <div class="col-md-4 profile">
                      <div class="profile-1 p-3">
                        <div class="user-head pt-3">
                          <h2 class="m-0 mb-3">Basic Information:</h2>
                        </div>

                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Name:</h5>
                          </div>
                          <div class="name-info">
                            <p class="m-0">{{ candata.name }}</p>
                          </div>
                        </div>
                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Gender:</h5>
                          </div>
                          <div class="name-info">
                            <p class="m-0">{{ candata.gender }}</p>
                          </div>
                        </div>
                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Marital status:</h5>
                          </div>
                          <div class="name-info">
                            <p class="m-0">{{ candata.marital_status }}</p>
                          </div>
                        </div>
                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Date of birth:</h5>
                          </div>
                          <div class="name-info">
                            <p class="m-0">{{ candata.date_of_birth }}</p>
                          </div>
                        </div>
                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Email:</h5>
                          </div>
                          <div class="name-info">
                            <p class="m-0">{{ candata.email }}</p>
                          </div>
                        </div>
                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Mobile number:</h5>
                          </div>
                          <div class="name-info">
                            <p class="m-0">{{ candata.mobile_number }}</p>
                          </div>
                        </div>
                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Position Applied:</h5>
                          </div>
                          <div
                            class="name-info"
                          >
                            <p class="m-0">{{ candata.designation?.designation_name }}</p>
                          </div>
                        </div>
                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Current Location:</h5>
                          </div>
                          <div class="name-info">
                            <p class="m-0">{{ candata.current_location }}</p>
                          </div>
                        </div>
                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Permanent Address:</h5>
                          </div>
                          <div class="name-info">
                            <p class="m-0">{{ candata.permanent_address }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="profile-1 p-3">
                        <div class="user-head pt-3">
                          <h2 class="m-0 mb-3">Basic Quaries:</h2>
                        </div>
                        <div class="row">
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Do you smoke:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ candata.do_you_smoke }}</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Do you consume alcohol:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ candata.do_you_consume_alcohol }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">
                                  Do you have a police record :
                                </h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ candata.do_you_have_a_police_record }}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Differently Abled :</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ candata.differently_abled }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">
                                  How did you learn about the opening ?
                                </h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{
                                    candata.how_did_you_learn_about_the_opening
                                  }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Current position :</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ candata.current_position }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">
                                  Have you been Interviewed by us in last six
                                  month ?
                                </h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{
                                    candata.have_you_been_interviewed_by_us_in_last_six_month
                                  }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">
                                  Do you have been a history of any major
                                  illness ?
                                </h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{
                                    candata.do_you_have_a_history_of_any_major_illness
                                  }}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div class="user-head mt-3" >
                          <h2 class="m-0 mb-3">Woork Experience:</h2>
                        </div>
                        <div 
                          class="row"
                          v-for="(data, index) in candata.workTrainee"
                          :key="index"
                        >
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">From:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ data.from }}</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">To:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ data.to }}</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Organisation:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ data.organisation }}</p>  
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Reason of leaving:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ data.reason_of_leaving }}</p>  
                              </div>
                            </div>
                          </div>
                          <!-- <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Technologies :</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ data.technologies }}</p>
                              </div>
                            </div>
                          </div> -->
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Current Organisation:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ candata.current_organisation }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Current Designation:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ candata.current_designation }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Total Experience:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ candata.total_experience }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Fixed Salery :</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ candata.fixed_salary }}</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Bonus | incentive:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ candata.bonus_incentive }}</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Total Salery :</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ candata.total_salary }}</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Expected Salery :</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ candata.expected_salary }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="user-head mt-3">
                          <h2 class="m-0 mb-3">Educational Qualification:</h2>
                        </div>
                        <div
                          class="row"
                          v-for="(data, index) in candata.edu"
                          :key="index"
                        >
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Class:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ data.class }}</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Degree:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ data.degree }}</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Board and University :</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ data.board_and_university }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Month and Passing year :</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ data.month_and_passing_year }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Marks:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ data.percentage_cgpa + "%" }}
                                </p>
                              </div>
                            </div>
                          </div>
                           <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Status:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ candata.status }}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiClass from "@/api/api";
import useVuelidate from "@vuelidate/core";
import { required,helpers } from "@vuelidate/validators";
export default {
  
  name: "UserDetailComponent",
  data() {
    return {
      candata: [],
      id:"",
      showdata:false,
      role_data:[],
      role_name:"",
      get_dep_data:[],
      designation:"",
      team:"",
      team_data:[],
      loadingadd:false,
    };
  },
    watch: {
    // Note: only simple paths. Expressions are not supported.
    '$route.fullPath': function(data) {
      // data.search('')
       if(data.includes('upload')==true){
         this.$store.commit('setshow_doc',true);
          this.$store.commit('show_interviewdetail',false);
         }else{
           
           this.$store.commit('setshow_doc',false);
            this.$store.commit('show_interviewdetail',false);
       }
  } 
   },
    validations(){
        return {
       
             role_name: {
          required: helpers.withMessage("Role name is required", required),
       
          },
            designation: {
          required: helpers.withMessage("Designation is required", required),
       
          },
            team: {
          required: helpers.withMessage("Team name is required", required),
       
          }
        }
    },
    setup() {
        return {
            v$: useVuelidate(),
        };
    },

  mounted() {
    // this.$store.commit('show_interviewdetail',false);
    this.candata = this.$store.getters.get_candidate;
    if(this.$route.params.data){
       let datasss = this.$route.params.data;
       let data = JSON.parse(datasss);
        this.$store.commit('set_candidate',data[0]);
        this.candata = this.$store.getters.get_candidate;
  }
  console.log(this.candata);
    this.id = this.candata.id;
    if(this.$route.fullPath.includes('profile')){
        this.$store.commit('setshowdata',this.showdata = true);
    }
    this.get_role();
    this.get_department();
    this.get_team();
  },
  methods: {
    reset_validaton() {
      this.v$.$reset();
      this.role_name =
      this.designation =
      this.team = "";
    },
       uploaddoc(data){
           if(data=="upload"){
           this.$router.push('/candidatelist/profile/'+this.id+'/upload');
           this.$store.commit('setshow_doc',true);
           }else{
           this.$router.push('/candidatelist/profile/'+this.id+'/interviewdetails');
           this.$store.commit('show_interviewdetail',true);
           }   
       },
       // get role 
      async get_role() {
      let response = await ApiClass.getNodeRequest("role-get", true);
        //console.log('Role data',response);
      if (response?.data) {
        //  //console.log(response);
        this.load = false;
        if (response.data.status_code == "1") {
            this.show = true;
            this.role_data =response.data.data ?? [];
          
        }
        else {
          this.show = false;
        }
      }
    },
     //get designation api
    async get_department() {
      let response = await ApiClass.getNodeRequest("designation-get", true);

      if (response?.data) {
        //  //console.log(response);
        this.load = false;
        if (response.data.status_code == "1") {
          //console.log(response.data);

         
            this.show = true;
            this.get_dep_data = response.data.data ?? [];
            //console.log(this.get_dep_data,'depdta');
            // this.update_user_data.designation = response.data.message[0].id;
            // //console.log('this.this.select_data.category_id2',this.select_data.category_id2);
          
        }
        if (response.data.status_code == "0") {
          this.show = false;
        }
      }
    },
    // get team 
      async get_team() {
      let response = await ApiClass.getNodeRequest("team-get", true);
       console.log(response ?? []);
      if (response?.data) {
        //  console.log(response);
        this.load = false;
        if (response.data.status_code == "1") {
          console.log(response.data);

         
            this.show = true;
             this.team_data  = response.data.data ?? [];
            // this.recordData = response.data.data.count ?? [];
            // this.update_user_data.role = response.data.message[0].id;
            console.log('team datadfdgdf',this.team_data);
          
        }
        else {
          this.show = false;
        }
      }
    },
   async add_role(){
       //add user ap
      const result = await this.v$.$validate();
      if (!result) {
        return;
      }
      this.loadingadd = true;
      let form_data = {
       candidate_id:this.$store.getters.get_candidate.id,
       role_id:this.role_name,
       designation_id:this.designation,
       team_id:this.team


      };
      // //console.log(form_data)
      let response = await ApiClass.postNodeRequest("candidate-transfer", true, form_data);
      //console.log(response,'user data');
      if (response.data.status_code == 1) {
        //console.log( "ranjit sir",this.$refs.closeadduser);
        this.loadingadd = false;
        this.success(response.data.message);
        this.$router.push('/user');
        this.get_user_data();
        this.$refs.closeadduser.click();
        this.reset_validation();
           
      } else {
        this.loadingadd = false;
        this.failed(response.data.message);
      }
  
    }
  },
};
</script>

<style scoped>
.user-head h2 {
  font-size: var(--fs-4);
  font-weight: 600;
  color: var(--navy-blue);
  text-decoration: 2px double underline;
  text-decoration-color: var(--navy-blue);
}

.outer-box {
  background-color: var(--white);
  border-radius: 5px;
  transition: all 1s ease;
 box-shadow:rgb(179 169 169 / 35%) 0px 5px 15px;
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.inner-box {
  background-color: var(--white);
}

.name h5 {
  color: var;
  color: var(--navy-blue);
  font-size: 14px;
  font-weight: 700;
}

.name-info p {
  color: var(--text-box);
  font-size: var(--fs-3);
  font-weight: 600;
}

.profile {
  border-right: 1px solid var(--text-box);
}
.upload-btn a{
    background-color: var(--navy-blue);
    color:var(--white);
    font-weight: 600;
    font-size: var(--fs-4);
    border-radius: 5px;
}
.switch-user{
  background-color: var(--navy-blue);
  border-radius:5px;
  color: var(--white);
  font-weight: 600;
    font-size: var(--fs-4);
}
.upload-document{
  margin-top:35px;
}
</style>
