<template>
  <div>
    <DashboardLayout>
      <!-- ***************************************dashbpoard-content************************************************** -->

      <div class="dashbpoard-content px-0 px-md-5 py-4">
      <!-- *******team-heading******* -->
          <div class="d-flex justify-content-between align-items-center mb-3 px-3 px-md-0">
            <div class="user-head px-3 px-md-0">
              <h2 class="m-0 mb-md-3">Interview :</h2>
            </div>
            </div>
          <!-- Interview-form -->
          <div class="interview-form py-4 px-3 px-lg-4">
          <form @submit.prevent="add_interview_sch">
            <div class="interview-head">
              <h3 class="m-0 text-center mb-4">Interview Schdule</h3>
            </div>
            <div class="row">
                
                <div class="col-md-4 typo__label">
                  <div class="username mb-3">
                   <label >Select user</label>
                     <multiselect v-model="user" :options="get_user" :custom-label="nameWithEmail"  :close-on-select="true"  placeholder="Pick one" label="name" track-by="id"></multiselect>
                    <span class="text-danger" v-if="v$.user.$error">{{
                                  v$.user.$errors[0].$message
                                }}</span>
                  </div>
                </div>
                 <div class="col-md-4">
                  <div class="username mb-3">
                    <label >Select candidate</label>
                     <multiselect v-model="candidate" :options="get_can_datas" :custom-label="nameWithEmail"  :close-on-select="true"  placeholder="Pick one" label="name" track-by="id"></multiselect>
                    <span class="text-danger" v-if="v$.candidate.$error">{{
                                  v$.candidate.$errors[0].$message
                                }}</span>
                   
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="username mb-3">
                     <label >Select interview type</label>
                     <multiselect v-model="interviewtype" :options="r_data" :searchable="false"  :close-on-select="true"  placeholder="Pick one" label="val" track-by="id"></multiselect>
                     <span class="text-danger" v-if="v$.interviewtype.$error">{{
                                  v$.interviewtype.$errors[0].$message
                                }}</span>
                   
                  </div>
                </div>
                
                <div class="col-md-4">
                  <div class="username mb-3">
                     <label >Single round</label>
                     <multiselect v-model="round" :options="get_round" :searchable="false" :close-on-select="true"  placeholder="Pick one" label="interview_round" track-by="id"></multiselect>
                    <span class="text-danger" v-if="v$.round.$error">{{
                                  v$.round.$errors[0].$message
                                }}</span>
                    
                  </div>
                </div>
               
                <div class="col-md-4">
                  <div class="username mb-3">
                    <label for="label">Interview timing</label>
                  <input type="time" v-model="interview_timing" class="form-control" placeholder="Enter salary">
                     <span class="text-danger" v-if="v$.interview_timing.$error">{{
                                  v$.interview_timing.$errors[0].$message
                                }}</span>
                  </div>
                </div>
                  <div class="col-md-4">
                  <div class="username mb-3">
                    <label for="label">Interview Date</label>
                  <input type="date" v-model="interview_date" class="form-control" placeholder="Enter salary">
                     <span class="text-danger" v-if="v$.interview_date.$error">{{
                                  v$.interview_date.$errors[0].$message
                                }}</span>
                  </div>
                </div>
                <!-- <div class="col-md-4">
                  <div class="username mb-3">
                    <label for="label">Status</label>
                    <select class="form-select"  aria-label="Default select example">
                      <option  value selected>Please select status</option>
                       <option >Pending</option>
                       <option >Assigned</option>
                    </select>
                  
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="username mb-3">
                    <label for="label">Reshedule</label>
                    <select class="form-select" aria-label="Default select example">
                      <option  value selected>Please select Reshedule</option>
                       <option :value="data.id" v-for="(data,index) in get_user" :key="index">{{data.name}}</option>
                    </select>
                   
                  </div>
                </div> -->
                 <!-- <div class="col-md-4">
                  <div class="username mb-3">
                    <label for="label">resume</label>
                    <ChooseImage v-model="resume" />
                   
                  </div>
                </div> -->
              </div>
              <!-- <div class="row">
                <div class="text-center">
                <button type="submit" class="px-5 py-2 modal-btn">
                  Submit
                </button>
              </div>
              </div> -->
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
      </div>
    </DashboardLayout>
  </div>
</template>

<script>
import DashboardLayout from "@/Layout/DashboardLayout";
import useVuelidate from "@vuelidate/core";
import ApiClass from "@/api/api";
import { required, helpers } from "@vuelidate/validators";
 import multiselect from 'vue-multiselect'
// import ChooseImage from '../components/ChooseImage.vue';


export default {
  name: "InterviewSchduleView",
  components: {
    DashboardLayout,
    multiselect
    // ChooseImage
  },
  data(){
    return {
    loadingadd:false,
    user:"",
    candidate:'',
    interviewtype:'',
    round:'',
    interview_timing:'',
     interview_date:"",
    status:'pending',
     r_data: [
        { id: 1 ,val:'Online'},
        { id: 2, val:'Offline' },
      ],
    reshedule:'',
   get_can_datas:[],
   get_user:[],
   get_post:[],
   get_round:[],
  
    }
    
   
  },
    setup() {
    return {
      v$: useVuelidate(),
    };
  },
    validations() {
    return {
     
        user: {
          required: helpers.withMessage("User is required", required),
        },
        candidate: {
          required: helpers.withMessage("Candidate  is required", required),
        },
        interviewtype: {
          required: helpers.withMessage("Interview type  is required", required),
        },
        round: {
          required: helpers.withMessage("Round is required", required),
        },

        interview_timing: {
          required: helpers.withMessage("Interview timing is required", required),
        },
        interview_date: {
          required: helpers.withMessage("Interview timing is required", required),
        },
           
      
    };
  },
  mounted(){
    if(localStorage.getItem('token')){
       this.get_candidate_id();
       this.get_user_id();
       this.get_inter_round();
    }else{
      this.$router.push('/');
    }
      
  },
  methods:{
       nameWithEmail({ name }) {
      return `${name}`
    },
    reset_form(){
       this.v$.$reset();
       this.user=
    this.candidate=
    this.interviewtype=
    this.round=
    this.interview_date=
    this.interview_timing="";
      
   },
    
 async add_interview_sch(){
        const result = await this.v$.$validate();
      if (!result) {
        return;
      }
      this.loadingadd = true;
       var formData ={
    user_id:this.user.id,
    candidate_id:this.candidate.id,
    interview_type:this.interviewtype.val,
    interview_round_id:this.round.id,
    interview_timing:this.interview_timing+':00',
    interview_date:this.interview_date,
       }
      //  formData.user_id?formData.user_id.id :"";
      //  console.log(formData);
      // console.log(response.data);
       let response = await ApiClass.postNodeRequest("interview-schedule-create", true, formData);
       console.log(response,'hsdkfgsdg')
       if(response?.data){
        this.loadingadd = false;
        console.log(response.data.message,'messgae is here');
       if (response.data.status_code == 1) {
         this.reset_form();
        this.success(response.data.message);
       
     
      } else {
        this.failed(response.data.message);
      }
       }
    },
    //get candidate
   async get_candidate_id(){
      let response = await ApiClass.getNodeRequest("candidate-get", true);

      if (response?.data) {
        this.load = false;
        if (response?.data?.status_code == "1") {
        
          console.log(response.data);
             this.get_can_datas = response?.data?.data ?? [];
             console.log(this.get_can_datas,'sdhkfjdksgfksgd'); 
        }
        if (response.data.status_code == "0") {
          this.show = false;
        }
      }
      
    },
    //get user
      async get_user_id(){
      let response = await ApiClass.getNodeRequest("get", true);

      if (response?.data) {
        this.load = false;
        if (response?.data?.status_code == "1") {
        
          console.log(response.data);
             this.get_user = response?.data?.data ?? [];
            //  console.log(this.get_user_name,'get_user_name'); 
        }
        if (response.data.status_code == "0") {
          this.show = false;
        }
      }
      
    },
    //get get_inter_round
      async get_inter_round(){
      let response = await ApiClass.getNodeRequest("interview-round-get", true);

      if (response?.data) {
        this.load = false;
        if (response?.data?.status_code == "1") {
        
          console.log(response.data);
             this.get_round = response?.data?.data ?? [];
             console.log(this.get_round,'round');
        }
        if (response.data.status_code == "0") {
          this.show = false;
        }
      }
      
    },
  }
};
</script>


<style src="vue-multiselect/dist/vue-multiselect.css"></style>
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