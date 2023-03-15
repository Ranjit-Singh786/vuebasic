<template>
  <div>
    <DashboardLayout>
      <!-- ***************************************dashbpoard-content************************************************** -->
      

      <div  class="dashbpoard-content px-0 px-md-5 py-4">
        <!-- *******team-heading******* -->
          <div class="d-flex justify-content-between p-3">
          <div class="user-head ">
          <h2 class="m-0">Rounds :</h2>
        </div>
        <div class="total-department">
          <h5 class="mb-0">Total Rounds = {{round_obj.length}}</h5>
        </div>
        </div>
        <!-- *******team-content******* -->
        <div class="row">
          <div class="col-md-12">
            <div class="list-content mt-4 mt-md-0">
              <div class="row align-items-center">
              <!-- ***********searchbar*********** -->
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
                      v-model="role_name_filter"
                      @keyup="processChange(get_rounds)"
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
                          data-bs-target="#staticBackdrop1" data-bs-whatever="@mdo" @click="get_role_filter">
                          <svg xmlns="http://www.w3.org/2000/svg" v-if="!filter_icon" width="28" height="28" viewBox="0 0 24 24"
                            style="fill: var(--navy-blue);">
                            <path
                              d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z">
                            </path>
                          </svg>
                           <svg  xmlns="http://www.w3.org/2000/svg" v-else  width="24"
                        height="24" style="fill: var(--navy-blue)" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
                        </button>
                      </div>
                      <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header model-heading">
                              <h5 class="modal-title modal-head" id="staticBackdropLabel">
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
                              <form @submit.prevent="apply_filter_g">
                                <div class="mb-3 modal-input">
                                  <label for="recipient-name" class="col-form-label">Rounds :</label>
                                  <select class="form-select shadow-none" v-model="role_name_filter" aria-label="Default select example">
                                    <option value selected>Please select role</option>
                                    <option v-for="data,index in round_obj" :key="index">{{data.role_name}}</option>
                                   
                                  </select>
                                </div>
                                <div class="d-flex justify-content-between">
                                  <div class="pb-3">
                                    <button type="submit" class="px-5 py-2 modal-btn">
                                      Apply Filter
                                    </button>
                                  </div>
                                  <div class="pb-3">
                                    <button type="submit"  @click="clear_filter_data" class="px-5 py-2 modal-btn">
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
                <!-- **********add btn*********** -->
                <div class="col-6 col-md-3">
                  <div class="logout-button pb-3 text-start text-md-end">
                    <button
                      type="button"
                      class="px-4 py-2"
                      data-bs-toggle="modal"
                       data-bs-target="#staticBackdrop"
                      data-bs-whatever="@mdo"
                    >
                      Add New
                    </button>
                  </div>
                  <div
                    class="modal fade"
                    id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header model-heading">
                          <h5
                            class="modal-title modal-head"
                            id="staticBackdropLabel"
                          >
                            Add Interview Round
                          </h5>
                          <button
                            type="button"
                            class="btn-close bg-light text-light"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            ref="addinterviewmodel"
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
                          <form @submit.prevent="add_round">
                            <div class="mb-3 modal-input">
                              <label for="recipient-name" class="col-form-label"
                                >Round :</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                id="recipient-name"
                                v-model="add_rounds.round"
                                placeholder="Round name is required"
                              />
                               <span class="text-danger" v-if="v$.add_rounds.round.$error">{{
                                v$.add_rounds.round.$errors[0].$message
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
              <!-- ***********************************Team-table*************************************** -->
              <div class="department-table mt-2">
                <div class="row">
                  <div class="col-md-12">
                    <div class="table-responsive department-table">
                      <table class="table align-middle">
                        
                        <thead >
                          <tr class="table-head text-center">
                            <th>Sr.No.</th>
                            <th>Rounds</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody> 
                          <tr v-if="round_obj.length ==0">
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
                          <tr class="text-center department-action" v-for="(round,index) in round_obj" :key="index">
                            <td>{{perPageData *(page-1)+ index+1}}</td>
                            <td>{{round.interview_round}}</td>
                            <td class="text-start">
                              <div class="d-flex gap-3 justify-content-center">
                                <div class="edit-icon">
                                  <div class="">
                                    <button
                                      type="button"
                                      class="bg-transparent border-0"
                                      data-bs-toggle="modal"
                                     data-bs-target="#staticBackdrop2"
                                      data-bs-whatever="@mdo"
                                      @click="update_select(round)"
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
                                     id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                    aria-hidden="true"
                                  >
                                    <div
                                      class="modal-dialog modal-dialog-centered"
                                    >
                                      <div class="modal-content">
                                        <div class="modal-header model-heading">
                                          <h5
                                            class="modal-title modal-head"
                                            id="staticBackdropLabel"
                                          >
                                            Update Rounds
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
                                            id="updaterole"
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
                                          <form @submit.prevent="update_round(update_r.id)">
                                            <div class="mb-3 modal-input">
                                              <label
                                                for="recipient-name"
                                                class="col-form-label"
                                                >Rounds :</label
                                              >
                                              <input
                                                type="text"
                                                class="form-control"
                                                id="recipient-name"
                                                v-model="update_r.round"
                                              />
                                        <span class="text-danger" v-if="v$.update_r.round.$error">{{
                                          v$.update_r.round.$errors[0].$message
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
                                <div class="edit-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    style="fill: var(--red)"
                                    @click="delete_round_data(round.id)"
                                  >
                                    <path
                                      d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"
                                    ></path>
                                    <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                                  </svg>
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
              <!-- ********************select_entry********** -->
              <div class="d-flex justify-content-between">
                <div class="">
                  <div class="show-entry d-flex gap-2 align-items-center">
                    <label>Show</label>
                    <div class="select-entry">
                      <select class="form-select" v-model="perPageData" @change="get_role">
                        <option v-for="data,index in pagination" :key="index" >{{data}}</option>
                      </select>
                    </div>
                    <span>Entries</span>
                  </div>
                </div>
                <!-- **************pagination************** -->
                <div class="">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item">
                          <div class="pagination_box" style="color: white">
                      <pagination v-model="page" :records="recordData" :per-page="perPageData" :options="options"
                        @paginate="get_role" />
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
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import Pagination from 'v-pagination-3';
export default {
  name: "RoleView",
  components: {
    DashboardLayout,
    Pagination
  },
  data(){
    return{
      loading:false,
      page:1,
       recordData: 0,
       loadingadd:"",
       loadingloader:true,
       perPageData:10,
       filter_icon:false,
       loadingupdate:false,
       search:"",
       filter_obj:{
        role:"",
        
       },
       pagination:{
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
        },
       role_datas:[],
       add_rounds:{
        round:'',
       },
        update_r:{
          id:'',
        round:'',
        
       },
       round_obj:[],
       role_name_filter:"",
       processChange:"",
    }
  },
   setup() {
        return {
            v$: useVuelidate(),
        };
    },
      validations(){
         return {
          add_rounds:{
             round: {
          required: helpers.withMessage("Round name is required", required),
        },
          },
          update_r:{
              round:{
                required: helpers.withMessage("Round name is required", required),
              },
          }
          }
          
     },
  mounted(){
    this.processChange = this.debounce(() => this.get_rounds());
      if (localStorage.getItem("token")) {
     this.get_rounds();
    //  this.get_role_filter();
    }else{
      this.$router?.push('/login');
    }
    
  },
    computed: {
    // filter_data() {
    //   console.log("role data", this.role_datas);

    //   if (this.search) {
    //     return this.role_datas.filter((p) => {
    //       // console.log(p);
    //       return p.role_name.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
    //     });
    //   } else {
    //     // console.log(this.user_data);
    //     return this.role_datas;
    //   }
    // },
  },

  methods:{
    
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
     //clear filter
    clear_filter_data(){
      // console.log('sdhfk')
      if(this.role_name_filter){
         this.role_name_filter="";
        this.get_role();
        this.filter_icon=false;
         document.getElementById('closefilter').click();
      }else{
        return;
      }
       
    },
    //apply filter g
    apply_filter_g(){
      this.filter_icon=false;
      // console.log('sdhfkjsdf');
          if(this.role_name_filter==""){
            return;
          }else{
            this.get_role();
            this.filter_icon=true;
             document.getElementById('closefilter').click();
          }
    },
    //update select
    update_select(round){
           console.log(round);
           this.update_r.id = round.id;
           this.update_r.round = round.interview_round;
    },
    //update data 
   async update_round(id){
          const result = await this.v$.update_r.$validate();
      if (!result) {
        return;
      }
             this.loadingupdate = true;
              let data={
                interview_round:this.update_r.round,

              }
               console.log(data);
                let response = await ApiClass.updateNodeRequest("interview-round-update?id="+id , true, data);
              console.log(response);
               if (response ?.data) {
                this.loadingupdate = false;
                if (response.data.status_code == "1") {
                  // alert('dshfdskh')
                    this.success(response.data.message);
                    this.get_rounds();
                   document.getElementById('updaterole').click();
                    
                    
                    
                }else
                 {
                    this.failed(response.data.message);
                }
               }
    },
    //reset validation
    reset_validaton(){
           this.v$.add_rounds.$reset();
      this.add_round.role= "";
    },
      // get role 
      async get_role() {
        this.loading = true;
      let response = await ApiClass.getNodeRequest("role-get?page="+this.page+"&limit="+this.perPageData+"&role_name="+this.role_name_filter, true);

      if (response?.data) {
        //  console.log(response);
          this.loadingloader = false;
        this.loading = false;
        if (response?.data?.status_code == "1") {
          console.log(response.data);

         
            this.show = true;
            this.role_datas = response?.data?.data?.result ?? [];
            this.recordData = response?.data?.data?.count ?? [];
            console.log('role data',this.role_datas);
          
        }
        else {
          this.show = false;
        }
      }
    },
    //for filter get all role
      async get_rounds() {
      let response = await ApiClass.getNodeRequest("interview-round-get", true);

      if (response?.data) {
        this.loadingloader = false;
        //  console.log(response);
        this.load = false;
        if (response?.data?.status_code == "1") {
          console.log(response.data,'rounds data is here');

            this.round_obj = response?.data?.data ?? [];
            // console.log(this.role_obj,'role obj data');
            // this.recordData = response?.data?.data?.count ?? [];
            // console.log('role data',this.role_datas);
          
        }
        else {
          this.show = false;
        }
      }
    },
    //add role
     // add role api
    async add_round(){

       const result = await this.v$.add_rounds.$validate();
      if (!result) {
        return;
      }
      this.loadingadd = true;
      this.loading = true;
      let form_data = {
        
        interview_round:this.add_rounds.round,
      };
       console.log(form_data)
      let response = await ApiClass.postNodeRequest("interview-round-create", true, form_data);
    //   console.log(response.data);
      this.loading = false;
        this.loadingadd = false;
      if (response.data.status_code == 1) {
         
         this.get_rounds();
         this.$refs.addinterviewmodel.click();
        this.success(response.data.message);
        this.reset_validaton();
        // this.$refs.Close.click();
      
     
      } else {
        this.failed(response.data.message);
      }
    },
    //delete api 
     delete_round_data(id) {
        // alert(id)
            // Use sweetalert2
            this.$swal({
                title: "Please Confirm..",
                text: "Are you sure you want to remove  ?",
                icon: "warning",
                iconColor: "#CF0404",
                showCancelButton: true,
                confirmButtonColor: "#CF0404",
                cancelButtonColor: "#CF0404",
                confirmButtonText: "Remove",
                cancelButtonText: "Cancel",
                showLoaderOnConfirm: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.delete_round(id);
                } else {
                    return;
                }
            });
        },
          async delete_round(id){
            // alert(id)
          let response = await ApiClass.deleteNodeRequest("interview-round-delete?id="+id , true);
      console.log(response,'delete data');
      if (response?.data) {
                if (response?.data?.status_code == "1") {
                    this.success(response.data.message);
                     this.get_rounds();
                   
                }
                if (response.data.status_code == "0") {
                    this.failed(response.data.message);
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
 .btn_save{
    background-color: var(--navy-blue) !important;
    color: var(--white) !important;;
    border: 2px solid transparent !important;;
    border-radius: 4px !important;;
    font-weight: 600 !important;;
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
.edit-icon svg{
  transition: transform 0.2s;
}
.edit-icon svg:hover {
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
    height: calc(100% - 145px);
  }
}
@media all and (min-width: 992px) and (max-width: 1024px) {
  .dashbpoard-content {
    height: calc(100% - 145px);
  }
}
@media all and (min-width: 768px) and (max-width: 991px) {
  .dashbpoard-content {
    height: calc(100% - 145px);
  }
}
@media all and (min-width: 320px) and (max-width: 767px) {
  .dashbpoard-content {
    height: calc(100% - 142px);
  }
}
</style>