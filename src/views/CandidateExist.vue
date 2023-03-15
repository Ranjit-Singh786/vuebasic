<template>
  <div>
    <DashboardLayout>
      <!-- ***************************************dashbpoard-content************************************************** -->
<!-- <router-view /> -->
      <div class="dashbpoard-content px-0 px-md-5 py-4">
      <!-- *******team-heading******* -->
          <div class="d-flex justify-content-between align-items-center mb-3 px-3 px-md-0">
            <div class="user-head px-3 px-md-0">
              <h2 class="m-0 mb-md-3">Candidate details :</h2>
            </div>
            </div>
          <!-- Interview-form -->
          <div class="interview-form py-4 px-3 px-lg-4">
          <form @submit.prevent="get_can_fetch">
            <div class="interview-head">
              <h3 class="m-0 text-center mb-4">Fill the details</h3>
            </div>
            <div class="row justify-content-center">
               
                <div class="col-md-4">
                  <div class="username mb-3">
                    <label for="label">Email:</label>
                  <input type="text" v-model="email" class="form-control" placeholder="Enter email">
                     <span class="text-danger" v-if="v$.email.$error">{{
                                  v$.email.$errors[0].$message
                                }}</span>
                  </div>
                </div>
            </div>
            <div class="row justify-content-center">
                  <div class="col-md-4">
                  <p class="text-center mt-3 fw-bold">or</p>
                  <div class="username mb-3">
                    <label for="label">Mobile:</label>
                  <input type="tel" onkeypress="return (event.charCode !=8 && ((event.charCode >= 48 && event.charCode <= 57) || (event.charCode == 46 && this.value.indexOf('.') == -1)))" v-model="mobile"  class="form-control" placeholder="Enter mobile">
                     <span class="text-danger" v-if="v$.mobile.$error">{{
                                  v$.mobile.$errors[0].$message
                                }}</span>
                  </div>
                </div>
              </div>
             
                <div class="row bank-row justify-content-center">
                                    <div class="col-md-10 col-lg-4 col-xl-4">
                                        <div class="my-5 text-center">
                            
                              <button v-if="loadingadd == false" type="submit" class="px-5 py-2 modal-btn">
                                                Save
                                            </button>
                                            <button class="px-5 py-2 modal-btn" type="button" v-else>
                                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            </button>
                           
                            </div>
                            </div>
                            </div>
            
            </form>
          </div>
          <div v-if="load">
            <div class="department-table mt-2" >
                <div class="row">
                  <div class="col-md-12">
                    <div class="table-responsive department-table">
                      <table class="table align-middle">
                        <thead>
                          <tr class="table-head text-center">
                            <th>Sr.No.</th>
                            <th>name</th>
                            <th>email</th>
                            <th>mobile</th>
                          </tr>
                        </thead>
                        <tbody>
                           <tr v-if="data.length ==0">
                                    <td colspan="10">
                                        <div v-if="loadingloader">
                                            <div v-for="(index) in 5" :key="index" class="my-4">
                                            <Skeletor height="15" pill :shimmer="true"/>
                                            </div>
                                        </div>
                                        <span v-else class=" text-light text-center mb-3 p-2">
                                            <h5 class="mb-0 text-success"> No Data Available</h5>
                                        
                    <div class="candidate-btn-11 mt-3">
                    <div class=" text-center "><button @click="candidate_route(mobile,email)" class="px-5 py-2 modal-btn">Add candidate</button></div>
                  
                  </div>
                                        </span>
                                    </td>
                                </tr>
                          <tr class="text-center department-action" v-for="(can,index) in data" :key="index">
                            <td>{{index+1}}</td>
                            <td>{{can.name}}</td>
                            <td>{{can.email}}</td>
                            <td>{{can.mobile_number}}</td>
                            <td> <div class="edit-icon1">
                                  <button type="button" class="btn shadow-none p-0" @click="can_details(data)" >
                                  <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"  width="22" height="22" style="fill: var(--navy-blue);"><path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"/></svg></span>
                                </button>
                                  </div></td>
                            
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                
              </div>
          </div>
      </div>
    </DashboardLayout>
  </div>
</template>

<script>
import DashboardLayout from "@/Layout/DashboardLayout";
import useVuelidate from "@vuelidate/core";
import {email,  helpers ,requiredIf,minLength,maxLength} from "@vuelidate/validators";
import ApiClass from '@/api/api.js';
export default {
  name: "CandidateExists",
  components: {
    DashboardLayout,

  },
  data(){
    return{
    loadingadd:false,
    email:'',
    mobile:'',
    load:false,
    indatestatus:true,
    mobilestatus:true,
    data:""
    }
  },
  computed:{

  },
  validations(){
    return{
   email: { required: helpers.withMessage("Email is required",
    requiredIf(!this.mobile)),
     email: helpers.withMessage(
            "Email must be a valid email address",
            email
          ), },
  
   mobile: { required: helpers.withMessage("Mobile is required", requiredIf(!this.email)),
          regex: helpers.withMessage(() => `Invalid Phone number`,
            (value) => /^[0-9]*$/.test(value)),
          minLength: minLength(10),
          maxLength: maxLength(10)
   },
   
    }
  },
   setup() {
        return {
            v$: useVuelidate(),
        };
    },
  methods:{
    candidate_route(mobile,email){
          this.$router.push({ name: 'CandidateViews', params: { state: true,mobile,email }});
    },
    can_details(dataas){
           let ids = dataas[0].id;
          this.$router.push({ name: 'TestingComponent', params: { id:ids, data:JSON.stringify(dataas)}});
    },
     async get_can_fetch() {
       
       const result = await this.v$.$validate();
            if (!result) {
                return;
            }
            this.load = true;
            this.loadingloader = true;
      let response = await ApiClass.getNodeRequest("candidate-fetch?email="+this.email+ "&mobile_number=" + this.mobile, true);

      if (response?.data) {
        //  this.load = true;
        this.loadingloader = false;
        // console.log(response);
          
          this.data = response.data ?? [];
          // console.log(this.data.length);
          // // this.data.length!=0? :this.laod = false;
          // console.log(this.data);
      
       
      }
    },
  }
  
   
  
 
  
};
</script>
<style scoped>

.dashbpoard-content{
    background-color: var(--hr-bg);
    min-height:calc(100vh - 142px);
}
.interview-form{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 4px;
    background-color: var(--white);
}
.interview-head h3{
  font-size: var(--fs-5);
  font-weight: 600;
  color:var(--navy-blue);
}
.username label{
    font-size: var(--fs-3);
    color:var(--navy-blue);
    padding-bottom: 4px;
    font-weight: bolder;
}
.username select, .username input{
  color:var(--text-box);
  font-size: var(--fs-3);
  padding: 4px 8px;
}
.username input, .username select:focus{
  box-shadow: none;
  border:1px solid var(--hr-border);
}
  .user-head h2 {
    font-size: var(--fs-4);
    font-weight: 600;
    color: var(--navy-blue);
  }
/**********************************submit-btn************************************/
.modal-btn{
    background-color: var(--navy-blue);
    color: var(--white);
    border:transparent;
    border-radius: 4px;
    font-weight: 500;
    border:2px solid transparent;
}
.modal-btn:hover{
    background-color: transparent;
    color: var(--navy-blue);
    border:2px solid var(--navy-blue);
    border-radius: 4px;
}
.candidates-header{
  background-color: var(--navy-blue);
  color:var(--white)
}
  /****************************pagination-style*****************************/
  .page-link {
      color: var(--text-box);
      font-size: var(--fs-3);
  }
  .page-link:focus {
      box-shadow: none;
  }
  .candidate-btn{
    background-color: var(--navy-blue);
  }
 /***************************media responsive**********************************/
@media all and (min-width:1200px) and (max-width:1400px){
.dashbpoard-content {
  height:calc(100% - 143px);
}
}
@media all and (min-width:1025px) and (max-width:1199px){
.dashbpoard-content {
  height:calc(100% - 143px);
}
}
@media all and (min-width:992px) and (max-width:1024px){
.dashbpoard-content {
  height:calc(100% - 143px);
}
}
@media all and (min-width:768px) and (max-width:991px){
.dashbpoard-content {
  height:calc(100% - 160px);
}
}
@media all and (min-width:320px) and (max-width:767px){
.dashbpoard-content {
  height:calc(100% - 160px);
}
}
</style>