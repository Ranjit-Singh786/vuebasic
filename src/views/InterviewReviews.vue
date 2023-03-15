<template>
  <div>
    <DashboardLayout>
      <!-- ***************************************dashbpoard-content************************************************** -->

      <div class="dashbpoard-content px-0 px-md-5 py-4">
      <!-- *******team-heading******* -->
          <div class="d-flex justify-content-between align-items-center mb-3 px-3 px-md-0">
            <div class="user-head px-3 px-md-0">
              <h2 class="m-0 mb-md-3">Interview reviews:</h2>
            </div>
            </div>
          <!-- Interview-form -->
          <div class="interview-form py-4 px-3 px-lg-4">
          <form @submit.prevent="add_interview">
            <div class="interview-head">
              <h3 class="m-0 text-center mb-4">Form Completed By Interviewer</h3>
            </div>
            <div class="row">
                <div class="col-md-4">
                  <div class="username mb-3">     
                    <label >Select candidate</label>
                     <multiselect v-model="add_inter_obj.c_id" :custom-label="nameWithCan" :options="get_can_datas"  :close-on-select="true"  placeholder="Pick one" label="name" track-by="id"></multiselect>
                    
                    <span class="text-danger" v-if="v$.add_inter_obj.c_id.$error">{{
                                  v$.add_inter_obj.c_id.$errors[0].$message
                                }}</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="username mb-3">
                    <label >Select user</label>
                     <multiselect v-model="add_inter_obj.u_id" :options="get_user" :custom-label="nameWithEmail"  :close-on-select="true"  placeholder="Pick one" label="name" track-by="id"></multiselect>
                    <span class="text-danger" v-if="v$.add_inter_obj.u_id.$error">{{
                                  v$.add_inter_obj.u_id.$errors[0].$message
                                }}</span>
                  </div>
                </div>
                
                
                <div class="col-md-4">
                  <div class="username mb-3">
                    <label for="label">Salary</label>
                 
                    <input type="text" @keypress="onlyForCurrency" v-model="add_inter_obj.salary" class="form-control" placeholder="Enter salary">
                    <span class="text-danger" v-if="v$.add_inter_obj.salary.$error">{{
                                  v$.add_inter_obj.salary.$errors[0].$message
                                }}</span>
                  </div>
                </div>
                <div class="col-md-4" v-for="(data, index) in datacurr" :key="index">
                  <div class="username mb-3" >
                    <label for="label">{{ data.head }}</label>
                          <div @mouseleave="mouseOverRating = null" style="display:inline-block;">
                       <star-rating v-model="data.rating" @click="data.rating=mouseOverRating" :show-rating="false" @hover:rating="mouseOverRating = $event" :increment="0.5"></star-rating>
                      </div>
  <div style="margin-top:10px;font-weight:bold;"></div>
                    <div class="text-danger" v-if="isError && v$.datacurr?.$each.$response.$errors.length">
                          <div v-for="error in v$.datacurr.$each.$response.$errors[index].rating" :key="error">
                            {{ error.$message }}
                          </div>
                        </div>
                  </div>
                </div>
                
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
                                                <span class="spinner-border spinner-border-sm text-light" role="status" aria-hidden="true"></span>
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
import StarRating from 'vue-star-rating';
import { required, helpers } from "@vuelidate/validators";
 import multiselect from 'vue-multiselect'
export default {
  name: "CandidateView",
  components: {
    DashboardLayout,
    StarRating,
    multiselect
  },
  data(){
    return {
      
        datacurr: [
        { rating: '', head: 'Education' },
        { rating: '', head: 'Culture Fitment' },
        { rating: '', head: 'Relevant Job Experience' },
        { rating: '', head: 'Supervisory Experience' },
        { rating: '', head: 'Technical Skills' },
        { rating: '', head: 'Interpersonal Skills' },
        { rating: '', head: 'Motivation' },
        { rating: '', head: 'Overall Ranking' },
      ],
    loadingadd:false,
    add_inter_obj:{
       c_id:"",
       u_id:"",
       p_id:"",
       salary:"",
       isError:false,
   },
   get_can_datas:[],
   get_user:[],
   get_post:[],
   rating: null,
      resetableRating: 2,
      currentRating: "No Rating",
      mouseOverRating: null
    }
    
   
  },
    computed: {
    currentRatingText() {
      return this.datacurr.rating
        ? "You have selected " + this.datacurr.rating + " stars"
        : "No rating selected";
    },
    mouseOverRatingText() {
      return this.mouseOverRating
        ? "Click to select " + this.mouseOverRating + " stars"
        : "No Rating";
    }
    },
    setup() {
    return {
      v$: useVuelidate(),
    };
  },
    validations() {
    return {
      add_inter_obj: {
        c_id: {
          required: helpers.withMessage("Candidate is required", required),
        },
        u_id: {
          required: helpers.withMessage("User  is required", required),
        },
        // p_id: {
        //   required: helpers.withMessage("Postion id is required", required),
        // },
        salary: {
          required: helpers.withMessage("Salary is required", required),
        },

       
      },
       datacurr:
      {
        $each:
          helpers.forEach({
            rating: {
              required: helpers.withMessage(
                "Reviews is required",
                required
              )
            }
          })
      },
      
    };
  },
  mounted(){
   
       this.get_candidate_id();
       this.get_user_id();
      
  },
  methods:{
        nameWithEmail({ name }) {
      return `${name}`
    },
     nameWithCan({ Candidates }) {
      return `${Candidates.name}`
    },
       showCurrentRating(rating) {
      this.currentSelectedRating =
        rating === 0
          ? this.currentSelectedRating
          : "Click to select " + rating + " stars";
    },
    setCurrentSelectedRating(rating) {
      this.currentSelectedRating = "You have Selected: " + rating + " stars";
    },
    reset_form(){
       this.v$.$reset();
      
       this.add_inter_obj.c_id=
       this.add_inter_obj.u_id=
       this.add_inter_obj.p_id=
       this.add_inter_obj.salary=
       this.add_inter_obj.education=
       this.add_inter_obj.culture=
       this.add_inter_obj.relevent_je=
       this.add_inter_obj.sup_exp=
       this.add_inter_obj.tech_skill=
       this.add_inter_obj.inter_skill=
       this.add_inter_obj.motivation=
       this.add_inter_obj.overall_ranking="";
   },
    
 async add_interview(){
        this.isError = true;
        const result = await this.v$.add_inter_obj.$validate();
        // const result1 = await this.v$.$validate();
      if (!result) {
        return;
      }
      this.isError = false;
      this.loadingadd = true;
       var formData ={
         candidate_id:this.add_inter_obj.c_id.id,
    salary:this.add_inter_obj.salary,
    education:this.datacurr[0].rating,
    culture_fitment:this.datacurr[1].rating,
    relevant_job_experience:this.datacurr[2].rating,
    supervisory_experience:this.datacurr[3].rating,
    technical_skills:this.datacurr[4].rating,
    interpersonal_skills:this.datacurr[5].rating,
    motivation:this.datacurr[6].rating,
    overall_ranking:this.datacurr[7].rating,
    // position_id:this.add_inter_obj.p_id,
     user_id:this.add_inter_obj.u_id.id,
       }
      //  console.log(formData);
      // console.log(response.data);
       let response = await ApiClass.postNodeRequest("interview-create", true, formData);
       console.log(response,'hsdkfgsdg')
       if(response?.data){
        this.loadingadd = false;
       if (response.data.status_code == 1) {
         this.reset_form();
        this.success(response.data.message);
        this.$router.push('/interviewlist')
       
     
      } else {
        this.failed(response.data.message);
      }
       }
    },
    //get candidate
   async get_candidate_id(){
      let response = await ApiClass.getNodeRequest("interview-getScheduled", true);

      if (response?.data) {
        this.load = false;
          console.log(response.data);
             this.get_can_datas = response?.data ?? [];
             console.log(this.get_can_datas,'sdhkfjdksgfksgd'); 
       
      }
      
    },
    //only curruncy
    onlyForCurrency () {
     // console.log($event.keyCode); //keyCodes value
     let keyCode = (event.keyCode ? event.keyCode : event.which);

     // only allow number and one dot
     if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46 || this.add_inter_obj.salary.indexOf('.') != -1)) { 
      event.preventDefault();
     }
     // restrict to 2 decimal places
     if(this.add_inter_obj.salary!=null && this.add_inter_obj.salary.indexOf(".")>-1 && (this.add_inter_obj.salary.split('.')[1].length > 1)){
     event.preventDefault();
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
             console.log(this.get_user,'sdhkfjdksgfksgd'); 
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
body {
  font-family: 'Raleway', sans-serif;
}
.multiselect__option--highlight {
    background: #32418b;
    outline: none;
    color: #fff;
}

.custom-text {
  font-weight: bold;
  font-size: 1.9em;
  border: 1px solid #cfcfcf;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  color: #999;
  background: #fff;
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