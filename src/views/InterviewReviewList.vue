<template>
<DashboardLayout>
  <div>
      <!-- ***************************************dashbpoard-content************************************************** --->
    
      <div  class="dashbpoard-content px-0 px-md-5 py-4">
        <!-- **********dashboard-heading***** -->
          <div class="d-flex justify-content-between p-3">
          <div class="user-head ">
          <h2 class="m-0">Interview List :</h2>
        </div>
        <div class="total-department">
          <h5 class="mb-0 ">Total Interview = {{ recordData }}</h5>
        </div>
        </div>
        <!--************search-input************ -->
        <div class="row">
          <div class="col-md-12">
            <div class="list-content mt-4 mt-md-0">
              <div class="row align-items-center">
              <!-- **********searchbar************ -->
                <div class="col-12 col-md-4">
                  <div class="input-group department-input mb-3">
                    <span class="input-group-text py-2"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        style="fill: var(--navy-blue)"
                      >
                        <path
                          d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
                        ></path></svg
                    ></span>
                    <input
                      type="text"
                      class="form-control py-2"
                      placeholder="Search"
                      v-model="username"
                      @keyup="processChange(get_interview_list)"
                      :readonly="filter_icon"
                    />
                  </div>
                </div>
                <!-- **************filter*********** -->
                <div class="col-6 col-md-5">
                  <div class="filter-icon mb-3">
                    <div class="col-12 col-md-3">
                      <div class="">
                        <button type="button" class=" border-0 bg-transparent" data-bs-toggle="modal"
                          data-bs-target="#exampleModal" data-bs-whatever="@mdo" @click="api_call">
                          <svg xmlns="http://www.w3.org/2000/svg" v-if="!filter_icon" width="35" height="35" viewBox="0 0 24 24"
                            style="fill: var(--navy-blue);">
                            <path
                              d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z">
                            </path>
                          </svg>
                          <svg  xmlns="http://www.w3.org/2000/svg" v-else  width="24"
                        height="24" style="fill: var(--navy-blue)" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
                        </button>
                      </div>
                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header model-heading">
                              <h5 class="modal-title modal-head" id="exampleModalLabel">
                                Add Filter
                              </h5>
                              <button type="button" class="btn-close bg-light text-light" data-bs-dismiss="modal"
                                aria-label="Close" id="closefilter"></button>
                            </div>
                            <div class="circle-1 d-none d-md-block">
                              <span><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"
                                  style="fill: var(--navy-blue);">
                                  <path
                                    d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z">
                                  </path>
                                </svg></span>
                            </div>
                            <div class="modal-body modal-form">
                              <form @submit.prevent="filter_dataa">
                                <!-- <div class="mb-2 modal-input">
                                  <label for="recipient-name" class="col-form-label">Users Name :</label>
                                  <input type="text" class="form-control" id="recipient-name" />
                                </div> -->
                                <div class="mb-2 modal-input">
                                  <label for="recipient-name" class="col-form-label">For Position :</label>
                                   <select class="form-select shadow-none" v-model="postion" aria-label="Default select example">
                                    <option value selected>Please select</option>
                                    <option :value="data.id" v-for="data,index in get_post" :key="index">{{data.position_name}}</option>
                                  
                                  </select>
                                </div>
                                <!-- <div class="mb-2 modal-input">
                                  <label for="recipient-name" class="col-form-label">Schedule :</label>
                                  <input type="text" class="form-control" id="recipient-name" />
                                </div> -->
                                <div class="mb-3 modal-input">
                                  <label for="recipient-name" class="col-form-label">Candidate Name :</label>
                                  <select class="form-select shadow-none" v-model="candidate" aria-label="Default select example">
                                    <option  value selected>Please select</option>
                                     <option :value="data.id" v-for="data,index in CandidatelistData" :key="index">{{data.full_name}}</option>
                                  </select>
                                </div>
                                <div class="d-flex justify-content-between">
                                  <div class="pb-3">
                                    <button type="submit" class="px-5 py-2 modal-btn">
                                      Apply Filter
                                    </button>
                                  </div>
                                  <div class="pb-3">
                                    <button type="button" @click="clear_filter" class="px-5 py-2 modal-btn">
                                      Clear Filter
                                    </button>
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
                <!-- *****************add btn -->
                <!-- <div class="col-6 col-md-3">
                  <div class="logout-button pb-3 text-start text-md-end">
                     <button
                      type="button"
                      class="px-4 py-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo"
                    >
                      Add New
                    </button>
                  </div> 
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header model-heading">
                          <h5
                            class="modal-title modal-head"
                            id="exampleModalLabel"
                          >
                            Interview List
                          </h5>
                          <button
                            type="button"
                            class="btn-close bg-light text-light"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="circle-1 d-none d-md-block">
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
                          <form>
                            <div class="mb-2 modal-input">
                              <label for="recipient-name" class="col-form-label"
                                >Name of candidate:</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="recipient-name"
                              />
                            </div>
                            <div class="mb-2 modal-input">
                              <label for="recipient-name" class="col-form-label"
                                >For Position:</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="recipient-name"
                              />
                            </div>
                            <div class="pb-3">
                              <button type="submit" class="px-5 py-2 modal-btn">
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> -->
              </div>
              <!-- ***********************************Department-table*************************************** -->
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
                            <th>Culture Fitment</th>
                            <th>Technical Skills</th>
                            <th>Overall Ranking</th>
                            <th>Salary</th>
                            <th>Relevant Experience</th>
                            <th>Interpersonal Skills</th>
                            <th>Supervisory Experience</th>
                            <th>Motivation</th>
                            
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
                          <tr class="text-center department-action" v-for="(interviewlist,index) in get_inter_data" :key="index">
                            <td>{{perPageData *(page-1)+ index+1}}</td>
                             <td>{{interviewlist.Users?.name}}</td>
                             <td>{{interviewlist.candidate?.name}}</td>
                            <td><star-rating :rating="interviewlist.culture_fitment" :read-only="true"  :star-size="25" :show-rating="false" :increment="0.5"></star-rating></td>
                            <td><star-rating :rating="interviewlist.technical_skills" :read-only="true" :star-size="25" :show-rating="false" :increment="0.5"></star-rating></td>
                            <td><star-rating :rating="interviewlist.overall_ranking" :read-only="true" :star-size="25" :show-rating="false" :increment="0.5"></star-rating></td>
                            <td>{{'₹'+interviewlist?.salary}}</td>
                            <td><star-rating :rating="interviewlist.relevant_job_experience" :star-size="25" :read-only="true" :show-rating="false" :increment="0.5"></star-rating></td>
                            <td><star-rating :rating="interviewlist.interpersonal_skills" :star-size="25" :read-only="true" :show-rating="false" :increment="0.5"></star-rating></td>
                            <td><star-rating :rating="interviewlist.supervisory_experience" :star-size="25" :read-only="true" :show-rating="false" :increment="0.5"></star-rating></td>
                            <td><star-rating :rating="interviewlist.motivation" :star-size="25" :read-only="true" :show-rating="false" :increment="0.5"></star-rating></td>
                           
                            
                            
                            <!-- <td>{{interviewlist}}</td> -->
                            <!-- <td>
                              <div class="d-flex gap-3 justify-content-center">
                                <div class="edit-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    style="fill: var(--blue)"
                                  >
                                    <path
                                      d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"
                                    ></path>
                                    <path
                                      d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"
                                    ></path>
                                  </svg>
                                </div>
                                <div class="edit-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    style="fill: var(--red)"
                                  >
                                    <path
                                      d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"
                                    ></path>
                                    <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                                  </svg>
                                </div>
                              </div>
                            </td> -->
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="">
                  <div class="show-entry d-flex gap-2 align-items-center">
                    <label>Show</label>
                    <div class="select-entry">
                      <select class="form-select" v-model="perPageData" @change="get_interview_list">
                        <option v-for="data,index in Pagination" :key="index" >{{data}}</option>
                      </select>
                    </div>
                    <span>Entries</span>
                  </div>
                </div>
                <div class="">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item">
                         <div class="col-md-12 d-flex justify-content-end">
                    <div class="pagination_box" style="color: white">
                      <pagination v-model="page" :records="recordData" :per-page="perPageData" :options="options"
                        @paginate="get_interview_list" />
                    </div>
                  </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  </DashboardLayout>
  
</template>

<script>
import DashboardLayout from "@/Layout/DashboardLayout";
import ApiClass from "@/api/api";
import Pagination from 'v-pagination-3';
import StarRating from 'vue-star-rating';
export default {
  name: "InterviewList",
  components: {
    DashboardLayout,
    Pagination,
    StarRating
  },
  data(){
    return{
        search:'',
        get_inter_data:[],
        username:"",
          page:1,
       recordData: 0,
       current_page:1,
       filter_icon:false,
       postion:'',
       candidate:'',
       get_post:[],
       CandidatelistData:[],

       salary:'',
       loadingloader:true,
       perPageData:10,
       depart_data_fil:"",
       Pagination:{
           val:10,
           val1:20,
           val2:30
       },
       options: {
          edgeNavigation: false,
          chunksNavigation: false,
          chunk: 4,
          texts: false,
          format: false,
          processChange:"",
        },
        starFill:2
    }
  },
   mounted(){
    this.processChange = this.debounce(() => this.get_interview_list());
    // this.apiHit();
    this.get_interview_list();
  },
  methods:{
    api_call(){
      // this.get_interview_list();
      this.apiHit();
    
    this.get_pos_id();
    },
     //debounce method here
    debounce(func, timeout = 300) {
      let timer;
      return (...args) => {
        // console.log(...args);
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, timeout);
      };
    },
      filter_dataa(){
        this.filter_icon = false;
        if(!this.postion && !this.candidate  && !this.salary ){
         return;
      }else{
         this.get_interview_list();
        this.filter_icon = true;
        document.getElementById('closefilter').click();
      }
    },
    //clear filter
      clear_filter(){
      if(this.postion || this.candidate  || this.salary){
            this.postion = this.candidate  = this.salary = "";
            this.get_interview_list();
            this.filter_icon = false;
            document.getElementById('closefilter').click();
    }else{
      return;
    }
  },
       //get interview list
      async get_interview_list(){
        // console.log();
      let response = await ApiClass.getNodeRequest("interview-get?limit="+this.perPageData+"&page="+this.page+"&position_id="+this.postion+"&candidate_id="+this.candidate+"&name="+this.username,true);
      if (response?.data) {
        //  console.log(response.data.status_code,'indejfhdfjhfjdhfjdh');
        this.loadingloader = false;
        this.load = false;
        if (response.data.status_code == "1") { 
          console.log(response,'indejfhdfjhfjdhfjdh');
             this.get_inter_data = response?.data.data.result ?? [];
              console.log(this.get_inter_data,'chek data');
             this.page = response?.data?.data.currentPage ?? [];
             console.log(this.page,'page is here');
             this.recordData = response.data.data.count ?? [];

              console.log(this.get_inter_data,'interview data'); 
        }
        if (response.data.status_code == "0") {
          this.show = false;
        }
      }
      
    },
      async apiHit()
   {
   
     this.name = (this.search) ?  this.search : '';
     let res = await ApiClass.getNodeRequest('candidate-get', true)
     console.log(res.data.data,'candidate');
      if (res.data.status_code == 1) {
        // this.loadingloader = false;
        this.CandidatelistData = res?.data.data;
      
        //  this.recordData = res?.data.message.pages;
        

      }

    },
    //get Postion id
      async get_pos_id(){
      let response = await ApiClass.getNodeRequest("position-get", true);

      if (response?.data) {
        this.load = false;
        if (response?.data?.status_code == "1") {
        
          console.log(response.data);
             this.get_post = response?.data?.data ?? [];
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

<style scoped>
/**********************************************dashbpoard-content************************************************/
.dashbpoard-content {
  background-color: var(--hr-bg);
  min-height: calc(100vh - 142px);
}
.user-head h2 {
  font-size: var(--fs-4);
  font-weight: 600;
  color: var(--navy-blue);
}
.list-content {
  background-color: var(--white);
  border-radius: 5px;
  transition: all 1s ease;
  padding: 23px 20px 0px 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55),
    -webkit-transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.total-department h5{
  font-size: var(--fs-4);
  font-weight: 600;
  color: var(--navy-blue);
}
/*********************add new btn***********************/
.logout-button button {
  border-radius: 4px;
  background-color: var(--white);

  font-size: var(--fs-3);
  color: var(--navy-blue);
  border: 2px solid var(--navy-blue);
}
.logout-button button:hover {
  border-radius: 4px;
  background-color: var(--navy-blue);

  font-size: var(--fs-3);
  color: var(--white);
  border: 2px solid transparent;
}
.department-input span {
  background-color: var(--white);
  border: 2px solid transparent;
}
.department-input input {
  background-color: var(--white);
  border-right: transparent;
  border-top: transparent;
  border-bottom: transparent;
  font-size: var(--fs-3);
  border-color: var(--input-border);
}
.department-input input:focus {
  box-shadow: none;
  border-color: var(--input-border);
}
.department-input {
  border-radius: 5px;
  border: 1px solid rgb(237, 237, 237);
}
.select-entry {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.select-entry select {
  border: transparent;
  border-radius: 5px;
  font-size: var(--fs-3);
}
.select-entry select:focus {
  box-shadow: none;
}
.show-entry label,
span {
  font-size: var(--fs-3);
  color: var(--text-box);
}
/******************************department-table************************************ */



  ::-webkit-scrollbar-track {
        background: var(--table-row);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: var(--input-border);
    }

    ::-webkit-scrollbar {
        width: 3px;
    }
    .table-head  {
    overflow-x: scroll;
     overflow-y: hidden;
}



.table-head {
  background-color: var(--navy-blue);
}
.table-head th {
  color: var(--white);
  /* min-width:200px; */
}

.department-action td {
  padding: 8px 20px;
  color: var(--navy-blue);
  font-size: var(--fs-3);
  font-weight: 600;
  background-color: var(--table-row);
}
.department-action {
  transition: all 1s ease;
  background-color: var(--text-color);
}
.department-line td {
  background-color:  var(--table-row);
  padding: 8px 20px;
  color: var(--navy-blue);
  font-size: var(--fs-3);
  font-weight: 600;
}
.department-line {
  background-color: var(--icon-bg);
  padding: 15px 0px;
}
.table-head th {
  padding: 15px 0px;
}
table tbody tr:hover {
  background-color: var(--white);
  cursor: pointer;
}
.edit-icon {
  transition: transform 0.2s;
}
.edit-icon:hover {
  -ms-transform: scale(1.5);
  -webkit-transform: scale(1.5);
  transform: scale(1.3);
}
/* ***************************modal-head****************************** */
.modal-head {
  font-size: var(--fs-5);
  color: var(--white);
}
.modal-input input {
  padding: 3px 20px;
  border: 1px solid var(--input-border);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: var(--text-box);
}
.modal-input input:focus {
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
/**********************************modal-btn************************************/
.modal-btn {
  background-color: var(--navy-blue);
  color: var(--white);
  border: 2px solid var(--navy-blue);
  border-radius: 4px;
  font-weight: 600;
}
.modal-btn:hover {
  background-color: transparent;
  color: var(--navy-blue);
  border: 2px solid var(--navy-blue);
  border-radius: 4px;
}
.modal-input select{
  border:1px solid var(--input-border);
  font-size:var(--fs-3);
  color:var(--text-color);
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
@media all and (min-width: 1200px) and (max-width: 1400px) {
  .dashbpoard-content {
    height: calc(100% - 142px);
  }
    .table-head th {
  min-width:200px;
}
}
@media all and (min-width: 1025px) and (max-width: 1199px) {
  .dashbpoard-content {
    height: calc(100% - 142px);
  }
    .table-head th {
  min-width:200px;
}
}
@media all and (min-width: 992px) and (max-width: 1024px) {
  .dashbpoard-content {
    height: calc(100% - 142px);
  }
    .table-head th {
  min-width:200px;
}
}
@media all and (min-width: 768px) and (max-width: 991px) {
  .dashbpoard-content {
    height: calc(100% - 142px);
  }
  .table-head th {
  min-width:200px;
}
}
@media all and (min-width: 320px) and (max-width: 767px) {
  .dashbpoard-content {
    height: calc(100% - 142px);
  }
}
</style>