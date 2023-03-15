<template>
    <div>
        <router-view />
        <div class="outer-box my-3" v-if="$store.getters.get_interview_detail">
                <div class="department-table mt-2">
                <div class="row">
                  <div class="col-md-12">
                    <div class="table-responsive department-table">
                      <table class="table align-middle">
                        <thead>
                          <tr class="table-head text-center">
                            <th>Sr.No.</th>
                             <th>Interviewed by</th>
                             <th>Candidate Name</th>
                            <th>Interview Type</th>
                            <th>Interview Timing</th>
                            <th>Interview Date</th>
                            <th>Interview Round</th>
                            <th>Reason</th>
                            <th>Status</th>
                            
                            
                            <!-- <th>Status</th> -->
                            
                          </tr>
                        </thead>
                        <tbody >
                           <tr v-if="get_inter_data.length== 0">
                                    <td colspan="10">
                                        <div v-if="loadingloader">
                                            <div v-for="(index) in 5" :key="index" class="my-4">
                                            <Skeletor height="15" pill :shimmer="true"/>
                                            </div>
                                        </div>
                                        <span v-else class="d-flex justify-content-center text-light p-2">
                                            <h5 class="mb-0 text-success"> No Data Available</h5>
                                        </span>
                                    </td>
                                </tr>
                          <tr class="text-center department-action" v-for="(interviewlist,index) in get_inter_data.interview_schedule
" :key="index">
                            <td>{{index+1}}</td>
                             <td>{{interviewlist.Users?.name}}</td>
                             <td>{{interviewlist.Candidates?.name}}</td>
                            <td>{{interviewlist.interview_type}}</td>
                            <td>{{interviewlist.interview_timing}}</td>
                            <td> {{interviewlist.interview_date}}</td>
                            <td>{{interviewlist?.interview_round?.interview_round}}</td>
                            <td>{{interviewlist.resion}}</td>
                            <td> {{interviewlist.status}}</td> 
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              </div>
    </div>
</template>
<script>
import ApiClass from "@/api/api";

export default {
    name:'InterviewDetails',
    data(){
         return {
          id:"",
          get_inter_data:"",
         }
    },
    mounted(){
      this.$store.commit('show_interviewdetail',true);
      this.id = this.$route.params.id;
      this.get_interview_detail();
    },
    methods:{
       async get_interview_detail() {
      let response = await ApiClass.getNodeRequest("interview-interviewDetail/"+this.id, true);

      if (response?.data) {
        console.log(response,'respnse is here');
        this.load = false;
            this.show = true;
            this.get_inter_data = response.data ?? [];

            // console.log(this.get_inter_data,'inter data');
      }
    },
    }
    
    
}
</script>
