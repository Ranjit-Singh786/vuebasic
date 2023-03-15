<template>
  <div>
    <SettingLayout :name="form.name" :valid="v$">
      <!-- ***************************************dashbpoard-content************************************************** -->

     
        <!-- candidates-form -->
        
              <div class="tabs-content m-3">
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade p-2 show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div class="reset-password p-3 p-md-0 py-5 py-lg-0 p-lg-2 ">
                            <div class="password-head">
                                <h5 class="m-0 mb-3">Profile :</h5>
                            </div>
                            <form>
                                  <div class="row">
                                    <div class="col-md-6">
                                      <div class="username mb-3">
                                        <label for="label" class="pb-2">User Name</label>
                                        <input type="text" v-model="userdata.name" class="form-control shadow-none" placeholder="Enter name" :readonly="!editis">
                                        <span class="text-danger" v-if="v$.form.name.$error && indatestatus">{{
                                v$.form.name.$errors[0].$message
                              }}</span>
                                      </div>
                                    </div>
                                    <div class="col-md-6">
                                      <div class="username mb-3">
                                        <label for="label" class="pb-2">Date of birth</label>
                                        <input type="date" v-model="userdata.date_of_birth" class="form-control shadow-none" placeholder="Sharma"  :readonly="!editis">
                                        <span class="text-danger" v-if="v$.form.date_of_birth.$error && indatestatus">{{
                                v$.form.date_of_birth.$errors[0].$message
                              }}</span>
                                      </div>
                                    </div>
                                    <div class="col-md-6">
                                      <div class="username mb-3">
                                        <label for="label" class="pb-2">Gender</label>
                                        <input type="email" v-model="userdata.gender" class="form-control shadow-none" placeholder="bhavna@gmail.com" :readonly="!editis">
                                  <!-- <select v-model="userdata.gender" class="form-select shadow-none border-0" aria-label="Default select example" :readonly="!editis">
                                  <option :value="userdata.gender" >{{userdata.gender}}</option>
                                </select> -->
                           <!-- <input type="text" v-model="form.gender" class="form-control shadow-none" placeholder="000-0000-000" :readonly="!editis"> -->
                                         <span class="text-danger" v-if="v$.form.gender.$error && indatestatus">{{
                                v$.form.gender.$errors[0].$message
                              }}</span>
                                      </div>
                                    </div>
                                    <!-- <div class="col-md-6">
                                      <div class="username mb-3">
                                        <label for="label" class="pb-2">Email Address</label>
                                        <input type="email" v-model="form.email" class="form-control shadow-none" placeholder="bhavna@gmail.com" :readonly="!editis">
                                           <span class="text-danger" v-if="v$.form.email.$error && indatestatus">{{
                                v$.form.email.$errors[0].$message
                              }}</span>
                                      </div>
                                    </div> -->
                                  </div>
                                  <!-- <div class="text-center">
                                    <button type="button" @click="this.editis=true" v-if="!editis" class="px-5 py-2 modal-btn" >
                                      Edit
                                    </button>
                                    <button v-else type="submit" class="px-5 py-2 modal-btn">
                                      Submit
                                    </button>
                                  </div> -->
                                  
                            </form>
                        </div>
                  </div>
                  <div
                    class="tab-pane fade p-2"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div class="reset-password  p-lg-2 ">
                            <div class="password-head">
                                <h5 class="m-0 mb-3">Reset Password :</h5>
                            </div>
                            <form @submit.prevent="reset_password">
                                  <div class="username1 mb-3">
                                    <label for="label" class="pb-2">Current Password</label>
                                    <input type="password" v-model="old_pass" class="form-control shadow-none" placeholder="Enter old password">
                                      <span class="text-danger" v-if="v$.old_pass.$error">{{
                                v$.old_pass.$errors[0].$message
                              }}</span>
                                  </div>
                                  <div class="username1 mb-3">
                                    <label for="label" class="pb-2">New Password</label>
                                    <input type="Password" v-model="new_pass" class="form-control shadow-none" placeholder="Enter new password">
                                    <span class="text-danger" v-if="v$.new_pass.$error">{{
                                v$.new_pass.$errors[0].$message
                              }}</span>
                                  </div>
                                  <div class="username1 mb-3">
                                    <label for="label" class="pb-2">Confirm Password</label>
                                    <input type="password" v-model="con_new_pass" class="form-control shadow-none" placeholder="Enter confirm new password">
                                    <span class="text-danger" v-if="v$.con_new_pass.$error">{{
                                v$.con_new_pass.$errors[0].$message
                              }}</span>
                                  </div> 
                                  <!-- <div class="">
                                    <button type="submit" class="px-5 py-2 modal-btn">
                                      Reset Password
                                    </button>
                                  </div> -->
                                  <div class="row bank-row justify-content-center">
                                    <div class="col-md-10 col-lg-4 col-xl-4">
                                        <div class="my-5 text-center">
                            
                              <button v-if="loadingadd == false" type="submit" class="px-5 py-2 modal-btn">
                                                Save
                                            </button>
                                            <button class="px-5 py-2 modal-btn" type="button" v-else>
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
           
          
        
      
    </SettingLayout>
  </div>
</template>

<script>
// import DashboardLayout from "@/Layout/DashboardLayout";
import SettingLayout from "@/Layout/SettingLayout";
import ApiClass from "@/api/api";
import useVuelidate from "@vuelidate/core";
import { required, helpers,sameAs,minLength,requiredIf } from "@vuelidate/validators";
export default {
  name: "SettingsView",
  components: {
    // DashboardLayout,
    SettingLayout,
  },
  data(){
     return{
        userdata:[],
        form:{
        name:"",
        date_of_birth:"",
        gender:'',
        email:"",
        },
        editis:false,
        id:"",
        old_pass:'',
        new_pass:'',
        con_new_pass:'',
        loadingadd:false,
        
        role:"",
        team:"",
        department:"",
        indatestatus:false,
            performance:[{
          
        id:"1",
        value:"Male",
      },
        {
          id:"2",
          value:"Female",
        },
     
    ],

     }
  },
  mounted(){
    this.get_user();
    // this.user  = JSON.parse(localStorage.getItem('user'));
    // this.form.name = this.user.name;
    // this.form.email = this.user.email;
    // this.form.gender = this.user.gender;
    // this.id = this.user.id;
    // this.form.date_of_birth = this.user.date_of_birth;
    // this.role = this.user.role_id;
    // this.team = this.user.team_id;
    // this.department = this.user.department_id;
    // console.log(this.user);
  },
  setup() {
        return {
            v$: useVuelidate(),
        };
    },
      validations(){
         return {
        
             old_pass: {
          required: helpers.withMessage("Old password is required", required),
        },
         new_pass: {
                    required:       helpers.withMessage( "Password is required", required ),
                    minLength:      helpers.withMessage( "Password must have atleast 8 letters", minLength(8) ),
                    regex:          helpers.withMessage(() => "The password  an uppercase, lowercase, number and special character",
                                               (value) => /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(value)),
                },
          con_new_pass:{
          required: helpers.withMessage("Confirm new password is required", required),
          sameAsnew_pass: helpers.withMessage(
                    "Confirm new password should be match new password",
                    sameAs(this.new_pass)
                ),
              },
              form:{
                  name: { required: helpers.withMessage("In time is required", requiredIf(this.indatestatus)) },
                  gender: { required: helpers.withMessage("In time is required", requiredIf(this.indatestatus)) },
                  date_of_birth: { required: helpers.withMessage("In time is required", requiredIf(this.indatestatus)) },
                  email: { required: helpers.withMessage("In time is required", requiredIf(this.indatestatus)) },
              }
                
            }
      },
          

  methods:{
    async get_user(){
     
      let response = await ApiClass.getNodeRequest("profile-get",true);
             console.log(response,'resoponse here');
             if (response.status == "200") {
             if (response?.data) {
              console.log(response);
                this.load = false;
        
              console.log(response.data);
            this.show = true;
            this.userdata = response.data.data.user_info?? [];
            console.log(this.userdata,'user data is here');
          }else{
            this.failed('dsfgsd')
          }
        
        
      }
      
  
     },
    async reset_password(){
         

       const result = await this.v$.$validate();
      if (!result) {
        return;
      }
      this.loadingadd = true;
      this.loading = true;
      let form_data = {
        user_id:this.id,
        old_password:this.old_pass,
        new_password:this.new_pass,
        confirm_password:this.con_new_pass,
      };
       console.log(form_data)
      let response = await ApiClass.updateNodeRequest("change-password?id="+this.id, true, form_data);
      console.log(response);
      this.loading = false;
      if(response?.data){
        this.loadingadd = false;
      if (response.data.status_code == 1) {
        this.success(response.data.message);
        this.$router.push({ path: '/' })
        this.reset_validaton();
        // this.$refs.Close.click();
      } else {
        this.failed(response.data.message);
      }
      }
    },
  // async  update_profile(){
  //          console.log(JSON.parse(JSON.stringify(this.v$)));
  //            const result = await this.v$.form.$validate();
  //            this.indatestatus=true;
  //               if (!result) {
  //                 return;
  //               }
  //               if(this.form.name !="" && this.form.date_of_birth!=""&& this.form.email!="" && this.form.gender!=""){
  //               this.loadingupdate = true;
  //           let data={
  //               name: this.form.name,
  //               date_of_birth: this.form.date_of_birth,
  //               email: this.form.email,
  //               gender: this.form.gender,
  //               role_id:this.role,
  //               team_id:this.team,
  //               department_id: this.department,

                
  //             }
  //             console.log(data);
  //             let response = await ApiClass.updateNodeRequest("update?id="+this.id , true, data);
  //             console.log(response.data.data);
  //              if (response ?.data) {
  //               this.loadingupdate = false;
  //               if (response.data.status_code == "1") {
  //                 // alert('dshfdskh')
  //                 this.success(response.data.message);
  //                 localStorage.setItem('user',JSON.stringify(response.data.data));
  //                 // document.getElementById("closeupdateuser").click();
  //                 // this.get_user_data();
  //                 this.v$.$reset();
  //                 this.reset_form();
  //               }else
  //                {
  //                   this.failed(response.data.message);
  //               }
  //           }
  //               }
          
  //   }
     }
  
};
</script>

<style scoped>
.dashbpoard-content {
  background-color: var(--hr-bg);
  min-height: calc(100vh - 126px);
}
.interview-form {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 4px;
  background-color: var(--white);
}
.username,  .username1 label {
  font-size: var(--fs-3);
  color: var(--navy-blue);
  padding-bottom: 4px;
  font-weight: bolder;
}
.username label{
  color:var(--navy-blue);
}
.username select,
.username, .username1 input {
  color: var(--text-box);
  font-size: var(--fs-3);

}

.username input,.username1 input
.username select,.username1 select:focus {
  box-shadow: none;
  border: 1px solid var(--hr-border);
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
  font-size: var(--fs-3);
}
.modal-btn:hover {
  background-color: transparent;
  color: var(--navy-blue);
  border: 2px solid var(--navy-blue);
  border-radius: 4px;
}
/* *********************************************************** */

.setting-list {
  min-height: 40vh;
  background-color: var(--icon-bg);
}
.setting-list li {
  color: var(--navy-blue);
  background-color: none;
  padding: 3px 10px;
}

.profile-icon {
  width: 50px;
  height: 50px;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
}
.password-head h5 {
  font-size: var(--fs-5);
  font-weight: 600;
  color: var(--navy-blue);
  text-decoration-thickness: 2px;
  text-decoration-line: underline;

}
 

/***************************css***********************************/
.setting-bar{
  background-color:#3d4a72;
  border-radius: 4px;
}
.setting-pills{
  color:var(--navy-blue)
}
.setting-link{
  color:var(--navy-blue);
  font-weight:600;
}
.nav-focus:focus, .nav-link:hover {
    color: var(--navy-blue);
}
.setting-pills .setting-link.active {
    color: var(--navy-blue);
    text-decoration: 2px solid underline;
    background-color: transparent;
}

.setting-tabs {
  background-color: var(--icon-bg);
  min-height:370px;
}
.profile-name p{
  color: var(--white);
  font-weight: 600;
}
.username1 input {
    width: 40%;
}
.username input{
  border: 1px solid var(--hr-border);
}
/* ************************************ */
.form-select{
  background-color: #e9ecef;
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
     .username1 input {
    width: 90%;
}
}
@media all and (min-width: 992px) and (max-width: 1024px) {
  .dashbpoard-content {
    height: calc(100% - 126px);
  }
   .username1 input {
    width: 90%;
}
}
@media all and (min-width: 768px) and (max-width: 991px) {
  .dashbpoard-content {
    height: calc(100% - 128px);
  }
   .username1 input {
    width: 90%;
}
}
@media all and (min-width: 320px) and (max-width: 767px) {
  .dashbpoard-content {
    height: calc(100% - 108px);
  }
  .username1 input {
    width: 100%;
}
}
</style>