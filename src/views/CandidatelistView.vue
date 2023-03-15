<template>
  <div>
    <DashboardLayout >
      <router-view />
      <!-- ***************************************dashbpoard-content************************************************** -->
      
      <div  class="dashbpoard-content px-0 px-md-5 py-4" v-if="!$store.getters.get_showdata">
        <!-- **********dashboard-heading***** -->
        <div class="d-flex justify-content-between p-3">
          <div class="user-head ">
            <h2 class="m-0">Candidate List :</h2>
          </div>
          <div class="total-department">
            <h5 class="mb-0">Total Candidates = {{recordData}}</h5>
          </div>
        </div>
        <!--************search-input************ -->
        <div class="row">
          <div class="col-md-12">
            <div class="list-content mt-4 mt-md-0">
              <div class="row align-items-center">
                <!-- *************************searchbar********** -->
                <div class="col-12 col-md-4">
                  <div class="input-group department-input mb-3">
                    <span class="input-group-text py-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" style="fill: var(--navy-blue)">
                        <path
                          d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z">
                        </path>
                      </svg></span>
                    <input type="text" class="form-control py-2" placeholder="Search by name" v-model="search"
                      @keyup="processChange(apiHit)"/>
                  </div>
                </div>
                <!-- **************filter*********** -->
                <div class="col-6 col-md-5">
                  <div class="filter-icon mb-3">
                    <div class="col-12 col-md-3">
                      <div class="">
                        <button type="button" class=" border-0 bg-transparent" data-bs-toggle="modal"
                          data-bs-target="#exampleModal" data-bs-whatever="@mdo" @click="get_position">
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
                               <form @submit.prevent="filter_dataa()">
                              <!-- <div class="mb-2 modal-input">
                                <label for="recipient-name" class="col-form-label">Users Name :</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="name" />
                              </div> -->

                              <div class="mb-2 modal-input">
                                <label for="recipient-name" class="col-form-label">For Position :</label>
                                <select class="form-select" aria-label="Default select example" v-model="position">
                                  <option value selected>Please select</option>
                                  <option :value="data.id" v-for="(data,index) in getPositions" :key="index">
                                    {{data.designation_name}}</option>
                                </select>
                              </div>
                              <div class="mb-2 modal-input">
                                <label for="recipient-name" class="col-form-label">Mobile Number:</label>
                                <input type="tel" onkeypress="return (event.charCode !=8 && ((event.charCode >= 48 && event.charCode <= 57) || (event.charCode == 46 && this.value.indexOf('.') == -1)))" placeholder="Enter mobile number" class="form-control" id="recipient-name" v-model="mob" />
                                <span class="text-danger" v-if="isError && v$.mob.$error">
                                  {{
                                  v$.mob.$errors[0].$message
                                  }}
                                </span>
                              </div>
                              <div class="mb-3 modal-input">
                                <label for="recipient-name" class="col-form-label">Email:</label>
                                <input type="email" placeholder="Enter email address" class="form-control" id="recipient-name" v-model="email" />
                                <span class="text-danger" v-if="isError && v$.email.$error ">
                                  {{
                                  v$.email.$errors[0].$message
                                  }}
                                </span>
                              </div>
                              <div class="d-flex justify-content-between">
                                <div class="pb-3">
                                  <button type="submit" class="px-5 py-2 modal-btn">
                                    Apply Filter
                                  </button>
                                </div>
                                <div class=" pb-3">
                                  <button type="button" class="px-5 py-2 modal-btn"
                                    @click="clear_filter" >
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
                            <th>Name</th>
                            <th>For position</th>
                            <th>Mobile Number</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>

                          </tr>
                        </thead>
                        <tbody>
                           <tr v-if="CandidatelistData.length ==0">
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
                          <tr class="text-center department-action" v-for="(data,index) in CandidatelistData"
                            :key="index">
                            <td>{{perPageData *(page-1)+ index+1}}</td>
                            <td>{{ data.name }}</td>
                            <td>{{ data?.designation?.designation_name }}</td>
                            <td>{{ data.mobile_number }}</td>
                            <td>{{data.email}}</td>
                            <td>{{data.status}}</td>
                            <td>
                              <div class="d-flex gap-3 justify-content-center">
                              <div class="edit-icon1">
                                  <button type="button" class="btn shadow-none p-0" @click="can_data(data)" >
                                  <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"  width="22" height="22" style="fill: var(--navy-blue);"><path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"/></svg></span>
                                </button>
                                  </div>
                                  <div class="edit-icon">
                                  <div class="">
                                    <button
                                      type="button"
                                      class="bg-transparent border-0"
                                      data-bs-toggle="modal"
                                     data-bs-target="#staticBackdroptest"
                                      data-bs-whatever="@mdo"
                                      
                                    >
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
                                    </button>
                                  </div>
                                  <div
                                    class="modal fade"
                                     id="staticBackdroptest" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel1"
                                    aria-hidden="true"
                                  >
                                    <div
                                      class="modal-dialog modal-dialog-centered"
                                    >
                                      <div class="modal-content">
                                        <div class="modal-header model-heading">
                                          <h5
                                            class="modal-title modal-head"
                                            id="staticBackdropLabel1"
                                          >
                                            Status
                                          </h5>
                                          <button
                                            type="button"
                                            class="
                                              btn-close
                                              bg-light
                                              text-light
                                            "
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                            id="datasssss"
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
                                          <form @submit.prevent="add_status(data.id)">
                                             <div class="mb-2 modal-input">
                              <label for="recipient-name" class="col-form-label"
                                >Status :</label
                              >
                              <select
                                class="form-select"
                               
                                aria-label="Default select example"
                                v-model="datas"
                              >
                                <option value selected>
                                  Please select Status
                                </option>
                                <option :value="data.status" v-for="data,index in status_data" :key="index">{{ data?.status }}</option>
                                
                              </select>
                             <span class="text-danger" v-if="v$?.datas?.$error">{{
                                v$?.datas?.$errors[0]?.$message
                              }}</span>
                            </div>
                                            
                                              <div class="row bank-row justify-content-center">
                                    <div class="col-md-10 col-lg-4 col-xl-4">
                                        <div class="my-5 text-center">
                            
                              <button v-if="loadingupdate == false" type="submit" class="btn btn_save border w-100 py-2 shadow-none">
                                                Update
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
                                  </td>
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
                     <select class="form-select" v-model="perPageData" @change="apiHit">
                        <option v-for="data,index in pagination" :key="index" >{{data}}</option>
                       
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
                        @paginate="apiHit" />
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
    </DashboardLayout>
  </div>
</template>

<script>
import DashboardLayout from "@/Layout/DashboardLayout";
import ApiClass from "@/api/api";
import { required,  helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
 import Pagination from 'v-pagination-3';
//  import CandidateComponent from "@/components/CandidateComponent.vue";
export default {
  name: "CandidatelistList",
  components: {
    DashboardLayout,
    Pagination,
    // CandidateComponent
  },
  data(){
    return{
      page:1,
       recordData: 0,
       perPageData:10,
        pagination:{
           val:10,
           val1:20,
           val2:30
       },
       status_data:[
        {
              id:1,
              status:"selected",
       },
        {
              id:2,
              status:"transfered",
       }
       ],
       options: {
          edgeNavigation: false,
          chunksNavigation: false,
          chunk: 4,
          texts: false,
          format: false,
        },
      CandidatelistData: [],
      getPositions: [],
      name:'',
      position:'',
      loadingupdate:false,
      mob: '',
      email: '',
      filter_icon:false,
      loadingloader:true,
      search: '',
      isError:false,
      processChange:'',
      candidatedatas:[],
      showdata:false,
      routecheck:"",
      datas:"",
      id:"",
      
    }
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
   watch: {
    // Note: only simple paths. Expressions are not supported.
    '$route.fullPath': function(data) {

      if(data =='/candidatelist'){
        this.$store.commit('setshowdata',this.showdata = false);
      }else{
        this.$store.commit('setshowdata',this.showdata = true);
      }
    // console.log(data,'data is here');
  } 
   },
 mounted()
 {
  
     
    //  this.can_data(data);
  this.processChange = this.debounce(() => this.apiHit());
   this.apiHit();
   
    console.log(this.$route.fullPath);
   if(this.$route.fullPath==='/candidatelist'){
       this.$store.commit('setshowdata',this.showdata = false);
   }
   
    // this.$store.commit('set_route','/candidatelist/');
  //  this.$store.commit('setshowdata',this.showdata = false);
  
   
  //  this.get_position(); 
  },
  validations()
  {
    return {
      datas: {
        required: helpers.withMessage("Status is required", required),
        },
    }
  },
  methods:
  {
    can_data(data){
         this.candidatedatas = data;
        //  this.$router.push('/candidatelist/profile/'+data.id);
         this.$router.push('/candidatelist/profile/'+data.id);
         this.$store.commit('set_route','/candidatelist/profile/'+data.id);
         this.$store.commit('set_candidate',data);
         this.$store.commit('setshowdata',this.showdata = true);
        //  this.routecheck = this.$store.getters.get_route;
        // console.log(this.$route.fullPath)
         
          //  console.log(this.$route.find(data=>data.fullpath==='/candidatelist/profile/'+data.id),'route')
        //  this.showdata = true;

// candidatedatasconsole.log(data);
    },
             //debounce method here
    debounce(func, timeout = 300) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, timeout);
      };
    },
        //filter dat
      filter_dataa(){
        this.filter_icon = false;
        if(!this.name && !this.email  && !this.position  && !this.mob){
         return;
      }else{
         this.apiHit();
        this.filter_icon = true;
        document.getElementById('closefilter').click();
      }
    },
    //clear filter
      clear_filter(){
      if(this.name || this.email  || this.position  || this.mob){
            this.name = this.email  = this.position  = this.mob = "";
            this.apiHit();
            this.filter_icon = false;
            document.getElementById('closefilter').click();
    }else{
      return;
    }
  },
    async get_position() {
      let response = await ApiClass.getNodeRequest("position-get", true);

      if (response?.data) {
        console.log(response.data);
        if (response.data.status_code == "1") {
          this.getPositions = response.data.data ?? [];        
        }
       
      }
    },
    async add_status(id){
       const result = await this.v$.$validate();
      if (!result) {
        return;
      }
      this.loadingupdate = true;
      let form_data = {
        candidate_id:id,
        status:this.datas,
      };
       console.log(form_data)
      let response = await ApiClass.updateNodeRequest("candidate-update", true, form_data);
      console.log(response.data);
      this.loading = false;
        this.loadingupdate = false;
      if (response.data.status_code == 1) {
         
         this.apiHit();
         console.log(response.data.message);
         document.getElementById('datasssss').click();
        this.success(response.data.message);
        // this.reset_validaton();
        // this.$refs.Close.click();
      
     
      } else {
        this.failed(response.data.message);
      }
    
        
    },
   async apiHit()
   {
   
     this.name = (this.search) ?  this.search : '';
     console.log(this.name);
     let res = await ApiClass.getNodeRequest('candidate-get?limit='+this.perPageData+'&page='+this.page+'&name='+this.name +'&email='+this.email+'&position_id='+this.position+'&mobile_number='+this.mob, true)
     console.log(res);
          if(res?.data){
            this.loadingloader = false;
      if (res.data.status_code == 1) {
        this.CandidatelistData = res?.data.data.result;
         this.recordData = res?.data.data.count;
         console.log(this.recordData,'rec data');
         this.page = res?.data.data.currentPage;
         console.log(this.page,'page here');
        //  this.recordData = res?.data.message.pages;
        

      }
          }

    },
    update_select(){
       console.log('check  it');
    },
    async validateForm()
    {
      if (this.email) {
        this.isError = true;
        this.v$.email.$touch()  //it will validate all fields
        let result = await this.v$.email.$invalid;
        if (result) {
          return;
        }
      }

      if (this.mob) {
        this.isError = true;
        this.v$.mob.$touch()   //it will validate all fields
        let result = await this.v$.mob.$invalid;
        if (result) {
          return;
        }
      }
      this.isError = false;

      this.apiHit();

    }
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
 .btn_save{
    background-color: var(--navy-blue) !important;
    color: var(--white) !important;;
    border: 2px solid transparent !important;;
    border-radius: 4px !important;;
    font-weight: 600 !important;;
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
  border: transparent;
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
.table-head {
  background-color: var(--navy-blue);
}
.table-head th {
  color: var(--white);
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
/* .edit-icon:hover {
  -ms-transform: scale(1.5);
  -webkit-transform: scale(1.5);
  transform: scale(1.3);
} */
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
  border: 2px solid transparent;
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
}
@media all and (min-width: 1025px) and (max-width: 1199px) {
  .dashbpoard-content {
    height: calc(100% - 142px);
  }
}
@media all and (min-width: 992px) and (max-width: 1024px) {
  .dashbpoard-content {
    height: calc(100% - 142px);
  }
}
@media all and (min-width: 768px) and (max-width: 991px) {
  .dashbpoard-content {
    height: calc(100% - 142px);
  }
}
@media all and (min-width: 320px) and (max-width: 767px) {
  .dashbpoard-content {
    height: calc(100% - 142px);
  }
}
</style>


