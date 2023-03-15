<template>
  <div>
    <DashboardLayout>
      <!-- ***************************************dashbpoard-content************************************************** -->
      <div  class="dashbpoard-content px-0 px-md-5 py-4">
        <!-- **********dashboard-heading***** -->
        <div class="d-flex justify-content-between p-3">
          <div class="user-head">
            <h2 class="m-0">Users :</h2>
          </div>
          <div class="total-designation">
            <h5 class="mb-0">Total Users = {{this.recordData}}</h5>
          </div>
        </div>

        <!--************search-input************ -->
        <div class="row">
          <div class="col-md-12">
            <div class="list-content mt-4 mt-md-0">
              <div class="row align-items-center">
                <!-- ****************search-bar*** -->
                <div class="col-12 col-md-4">
                  <div class="input-group designation-input mb-3">
                    <span class="input-group-text py-2"
                      >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        style="fill: var(--navy-blue)"
                        
                      >
                        <path
                          d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
                        ></path></svg>
                        </span>
                    <input
                      type="text"
                      class="form-control py-2"
                      placeholder="Search"
                      v-model="filter_obj.name"
                      @keyup="processChange(get_user_data)"
                      :readonly="filter_icon"
                    />
                    
                  </div>
                 
                </div>
                <!-- **************filter*********** -->
                <div class="col-6 col-md-5">
                  <div class="filter-icon mb-3">
                    <div class="col-12 col-md-3">
                      <div class="">
                        <button
                          type="button"
                          class="border-0 bg-transparent"
                          data-bs-toggle="modal"
                         data-bs-target="#staticBackdropu0"
                          data-bs-whatever="@mdo"
                          @click="api_call(data=1)"
                        >
                          <svg
                            v-if="!filter_icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            style="fill: var(--navy-blue)"
                          >
                            <path
                              d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z"
                            ></path>
                          </svg>

                          <svg v-else xmlns="http://www.w3.org/2000/svg"  width="24"
                        height="24" style="fill: var(--navy-blue)" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
                        </button>
                      </div>
                      <div
                        class="modal fade"
                        id="staticBackdropu0" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header model-heading">
                              <h5
                                class="modal-title modal-head"
                                id="staticBackdropLabel"
                              >
                                Add Filter
                              </h5>
                              <button
                                type="button"
                                class="btn-close bg-light text-light"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                id="filterid"
                              ></button>
                            </div>
                            <div class="circle-1 d-none d-md-block">
                              <span
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="35"
                                  height="35"
                                  viewBox="0 0 24 24"
                                  style="fill: var(--navy-blue)"
                                >
                                  <path
                                    d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z"
                                  ></path></svg
                              ></span>
                            </div>
                            <div class="modal-body modal-form">
                              <form @submit.prevent="filter_datass">
                                <!-- <div class="mb-2 modal-input">
                                  <label
                                    for="recipient-name"
                                    class="col-form-label"
                                    >Users Name :</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="recipient-name"
                                    placeholder="Enter username"
                                    v-model="filter_obj.name"
                                  />
                                </div> -->
                                <!-- <div class="mb-2 modal-input">
                              <label for="recipient-name" class="col-form-label"
                                >Date of birth :</label
                              >
                              <input
                                type="date"
                                class="form-control"
                                id="recipient-name"
                                placeholder="dd/mm/yyyy"
                              />
                             
                            </div> -->
                                <div class="mb-2 modal-input">
                                  <label
                                    for="recipient-name"
                                    class="col-form-label"
                                    >Email :</label
                                  >
                                  <input
                                    type="Email"
                                    class="form-control"
                                    id="recipient-name"
                                    placeholder="Enter email"
                                    v-model="filter_obj.email"
                                  />
                                </div>
                                <div class="mb-2 modal-input">
                                  <label
                                    for="recipient-name"
                                    class="col-form-label"
                                    >Gender :</label
                                  >
                                  <select
                                    class="form-select"
                                    aria-label="Default select example"
                                    v-model="filter_obj.gender"
                                  >
                                    <option value selected>Please select gender</option>
                                   <option value="male">Male</option>
                                   <option value="female">Female</option>
                                  </select>
                                </div>
                                <div class="mb-2 modal-input">
                                  <label
                                    for="recipient-name"
                                    class="col-form-label"
                                    >Team :</label
                                  >
                                  <select
                                    class="form-select"
                                    aria-label="Default select example"
                                    v-model="filter_obj.team"
                                  >
                                    <option value selected>Please Select Team</option>
                                    <option :value="data.id"  v-for="data,index in team_data" :key="index">{{data.team_name}}</option>
                                    
                                  </select>
                                </div>
                                <div class="mb-3 modal-input">
                                  <label
                                    for="recipient-name"
                                    class="col-form-label"
                                    >Designation Name :</label
                                  >
                                  <select
                                    class="form-select"
                                    aria-label="Default select example"
                                    v-model="filter_obj.designation"
                                  >
                                    <option value selected>please select designation</option>
                                     <option :value="data.id" v-for="data,index in get_dep_data" :key="index">{{data.designation_name}}</option>
                                  </select>
                                </div>
                                <div class="d-flex justify-content-between">
                                  <div class="pb-3">
                                    <button
                                      type="submit"
                                      class="px-5 py-2 modal-btn"
                                    >
                                      Apply Filter
                                    </button>
                                  </div>
                                  <div class="pb-3">
                                    <button
                                      type="submit"
                                      class="px-5 py-2 modal-btn"
                                      @click="clear_filter"
                                    >
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
                <!-- ******Add button********** -->
                <div class="col-6 col-md-3">
                  <div class="logout-button pb-3 text-start text-md-end">
                    <button
                      type="button"
                      class="px-4 py-2"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop22"
                      data-bs-whatever="@mdo"
                      @click="api_call(data=2)"
                    >
                      Add New
                    </button>
                  </div>
                  <div
                    class="modal fade"
                    id="staticBackdrop22"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdrop22Label"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header model-heading">
                          <h5
                            class="modal-title modal-head"
                            id="staticBackdrop22Label"
                          >
                            Add Users
                          </h5>
                          <button
                            type="button"
                            @click="reset_validation"
                            class="btn-close bg-light text-light"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            ref="closeadduser"
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
                          <form @submit.prevent="add_user">
                            <div class="mb-2 modal-input">
                              <label for="recipient-name" class="col-form-label"
                                >Users Name :</label
                              >
                              <input
                                type="text"
                                v-model="add_user_data.name"
                                class="form-control"
                                id="recipient-name"
                                placeholder="Enter username"
                              />
                              <span class="text-danger" v-if="v$.add_user_data.name.$error">{{
                                v$.add_user_data.name.$errors[0].$message
                              }}</span>
                            </div>
                            <div class="mb-2 modal-input">
                              <label for="recipient-name" class="col-form-label"
                                >Date of birth :</label
                              >
                              <input
                                type="date"
                                v-model="add_user_data.dob"
                                class="form-control"
                                id="recipient-name"
                                placeholder="dd/mm/yyyy"
                                :max="
                        new Date(
                          new Date().setFullYear(new Date().getFullYear() - 15)
                        )
                          .toISOString()
                          .split('T')[0]
                      "
                              />
                              <span class="text-danger" v-if="v$.add_user_data.dob.$error">{{
                                v$.add_user_data.dob.$errors[0].$message
                              }}</span>
                            </div>
                            <div class="mb-2 modal-input">
                              <label for="recipient-name" class="col-form-label"
                                >Email :</label
                              >
                              <input
                                type="Email"
                               v-model="add_user_data.email"
                                class="form-control"
                                id="recipient-name"
                                placeholder="Enter email"
                              />
                              <span class="text-danger" v-if="v$.add_user_data.email.$error">{{
                                v$.add_user_data.email.$errors[0].$message
                              }}</span>
                            </div>


                            <div class="mb-2 modal-input">
                              <label for="recipient-name" class="col-form-label"
                                >Password :</label
                              >
                          
                             <div class=" input-group border">
                                <input type="text"  id="password"  v-model="add_user_data.password" class="form-control border-0" placeholder="Password">
                                <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" @click="genPassword()" width="24" height="24" style="fill: rgba(48, 62, 103, 1);transform: ;msFilter:;"><path d="M7 17a5.007 5.007 0 0 0 4.898-4H14v2h2v-2h2v3h2v-3h1v-2h-9.102A5.007 5.007 0 0 0 7 7c-2.757 0-5 2.243-5 5s2.243 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z"></path></svg></span>
          
                                </div>
                              <span class="text-danger" v-if="v$.add_user_data.password.$error">{{
                                v$.add_user_data.password.$errors[0].$message
                              }}</span>
                              <!-- <div class="d-flex align-items-center mt-3">
                                  <div id="button" class="btn btn_generate me-3" @click="genPassword()">Generate</div>
                                  <div id="button" class="btn btn_copy" @click="copyPassword()">Copy</div>
                                </div>    -->
                            </div>


                            <div class="mb-2 modal-input">
                              <label for="recipient-name" class="col-form-label"
                                >Gender :</label
                              >
                              <select
                                class="form-select"
                                v-model="add_user_data.gender"
                                aria-label="Default select example"
                              >
                                <option value selected>
                                  Please select gender
                                </option>
                                <option :value="data.value" v-for="data,index in gender" :key="index">{{data.value}}</option>
                              </select>
                              <span class="text-danger" v-if="v$.add_user_data.gender.$error">{{
                                v$.add_user_data.gender.$errors[0].$message
                              }}</span>
                            </div>
                            
                            <div class="mb-2 modal-input">
                              <label for="recipient-name" class="col-form-label"
                                >User Role :</label
                              >
                              <select
                                class="form-select"
                                v-model="add_user_data.roles"
                                aria-label="Default select example"
                              >
                                <option value selected>
                                  Please select user role
                                </option>
                                <option :value="data_role.id" v-for="data_role,index in role_data" :key="index">{{ data_role.role_name}}</option>
                                
                              </select>
                             <span class="text-danger" v-if="v$.add_user_data.roles.$error">{{
                                v$.add_user_data.roles.$errors[0].$message
                              }}</span>
                            </div>
                            <div class="mb-2 modal-input">
                              <label for="recipient-name" class="col-form-label"
                                >Team :</label
                              >
                              <select
                                class="form-select"
                                v-model="add_user_data.team"
                                aria-label="Default select example"
                              >
                                <option value selected>
                                  Please select Team
                                </option>
                                <option :value="data.id" v-for="data,index in team_data" :key="index">{{ data.team_name }}</option>
                                
                              </select>
                             <span class="text-danger" v-if="v$.add_user_data.team.$error">{{
                                v$.add_user_data.team.$errors[0].$message
                              }}</span>
                            </div>
                            <div class="mb-3 modal-input">
                              <label for="recipient-name" class="col-form-label"
                                >Designation Name :</label
                              >
                              <select
                                class="form-select"
                                v-model="add_user_data.designation"
                                aria-label="Default select example"
                              >
                                <option value selected>
                                  Please select designation
                                </option>
                                <option :value="datas.id" v-for="datas,index in get_dep_data" :key="index">{{ datas.designation_name }}</option>
                                
                              </select>
                             <span class="text-danger" v-if="v$.add_user_data.designation.$error">{{
                                v$.add_user_data.designation.$errors[0].$message
                              }}</span>
                            </div>
                            <div class="row bank-row justify-content-center">
                                    <div class="col-md-10 col-lg-4 col-xl-4">
                                        <div class="my-5 text-center">
                            
                              <button v-if="loading == false" type="submit" class="btn btn_save border w-100 py-2 shadow-none">
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
              <!-- ***********************************Designation-table*************************************** -->
              <div class="designation-table mt-2">
                <div class="row">
                  <div class="col-md-12">
                    <div class="table-responsive designation-table">
                      <table class="table align-middle">
                        <thead>
                          <tr class="table-head text-center">
                            <th>Sr.No.</th>
                            <th>Name</th>
                            <th>Date of birth</th>
                            <th>Gender</th>
                            <th>Team</th>
                            <th>Role</th>
                            <th>Designation Name</th>
                            <th>Email</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                            <tr v-if="user_data.length ==0">
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
                          <tr v-else
                            class="text-center designation-action"
                            v-for="(user, index) in user_data"
                            :key="index"
                          >
                            <td>{{ perPageData *(page-1)+ index+1}}</td>
                            <td>{{ user?.name }}</td>
                            <td>{{ user?.date_of_birth }}</td>
                            <td>{{ user?.gender }}</td>
                            <td >{{ user?.team?.team_name }}</td>
                            <td>{{ user.role?.role_name }}</td>
                            <td>{{ user?.designation?.designation_name}}</td>
                            <td>{{ user?.email }}</td>
                            
                            <td class="text-start">
                              <div class="d-flex align-items-center ">
                                <!-- <div class="edit-icon1">
                                  <button type="button" class="btn shadow-none p-0" @click="get_data(user)" data-bs-toggle="modal" data-bs-target="#exampleModal99">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"  width="22" height="22" style="fill: var(--navy-blue);"><path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"/></svg></span>
                                </button>
                                  </div> -->
                                <div class="edit-icon">
                                  <div class="">
                          
                                    <button
                                      type="button" @click="select_uuu(user)"
                                      class="border-0 bg-transparent"
                                      data-bs-toggle="modal"
                                      data-bs-target="#staticBackdrop33"
                                      
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
                                    id="staticBackdrop33" data-bs-backdrop="static" data-bs-keyboard="false"
                                    tabindex="-1"
                                    aria-labelledby="staticBackdrop33Label"
                                    aria-hidden="true"
                                  >
                                    <div
                                      class="modal-dialog modal-dialog-centered"
                                    >
                                      <div class="modal-content">
                                        <div class="modal-header model-heading">
                                          <h5
                                            class="modal-title modal-head"
                                            id="staticBackdrop33Label"
                                          >
                                           Update Users
                                          </h5>
                                          <button
                                            type="button"
                                            id="closeupdateuser"
                                            class="btn-close bg-light text-light"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                            ref="updateUser"
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
                                          <form @submit.prevent="update_data(update_user_data.id)">
                                            
                                           
                                            <div class="mb-2 modal-input">
                                              <label
                                                for="recipient-name"
                                                class="col-form-label"
                                                > Name :</label
                                              >
                                              
                                              <input
                                                type="text"
                                                class="form-control"
                                                id="recipient-name" 
                                               v-model="update_user_data.name"
                                              >
                                              <span class="text-danger" v-if="v$.update_user_data.name.$error">{{
                                                v$.update_user_data.name.$errors[0].$message
                                              }}</span>
                                            </div>
                                            <div class="mb-2 modal-input">
                              <label for="recipient-name" class="col-form-label"
                                >Date of birth :</label
                              >
                              <input
                                type="date"
                                v-model="update_user_data.dob"
                                class="form-control"
                                id="recipient-name"
                                :max="
                        new Date(
                          new Date().setFullYear(new Date().getFullYear() - 15)
                        )
                          .toISOString()
                          .split('T')[0]
                      "
                                placeholder="dd/mm/yyyy"
                              />
                             <span class="text-danger" v-if="v$.update_user_data.dob.$error">{{
                                                v$.update_user_data.dob.$errors[0].$message
                                              }}</span>
                              
                            </div>
                                           

                                            <!-- {{ editmodal }} -->
                                            <div class="mb-2 modal-input">
                                              <label
                                                for="recipient-name"
                                                class="col-form-label"
                                                >Email Address :</label
                                              >
                                              <input
                                                type="email"
                                                class="form-control"
                                                id="recipient-name"
                                                v-model="update_user_data.email"
                                              />
                                              <span class="text-danger" v-if="v$.update_user_data.email.$error">{{
                                                v$.update_user_data.email.$errors[0].$message
                                              }}</span>
                                            </div>
                                            <div class="mb-2 modal-input">
                                              <label
                                                for="recipient-name"
                                                class="col-form-label"
                                                >Gender :</label
                                              >
                                              <select
                                                class="form-select"
                                                aria-label="Default select example"
                                                v-model="update_user_data.selected_gender"

                                              >
                                                   <option :value="data.value" v-for="data,index in gender" :key="index">{{data.value}}</option>
                                                  <!-- <option  value="female">Female</option> -->
                                                
                                              </select>
                                               <span class="text-danger" v-if="v$.update_user_data.selected_gender.$error">{{
                                                v$.update_user_data.selected_gender.$errors[0].$message
                                              }}</span>
                                            </div>
                                                      <!-- <div class="mb-2 modal-input">
                                      <label for="recipient-name" class="col-form-label"
                                        >Password :</label -->
                                      <!-- > -->
                                  
                                    <!-- <div class=" input-group border">
                                        <input type="text"  id="password"  v-model="update_user_data.password" class="form-control border-0" placeholder="Password">
                                        <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" @click="updatePassword()" width="24" height="24" style="fill: rgba(48, 62, 103, 1);transform: ;msFilter:;"><path d="M7 17a5.007 5.007 0 0 0 4.898-4H14v2h2v-2h2v3h2v-3h1v-2h-9.102A5.007 5.007 0 0 0 7 7c-2.757 0-5 2.243-5 5s2.243 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z"></path></svg></span>
                  
                                        </div> -->
                            <!-- </div> -->
                                            <div class="mb-2 modal-input">
                                              <label
                                                for="recipient-name"
                                                class="col-form-label"
                                                >User Role :</label
                                              >
                                              <select
                                              class="form-select"
                                              id="validationCustom04"
                                              v-model="update_user_data.role"
                  >
                                              <option
                                                  :value="datas.id"
                                                  v-for="(datas, index) in role_data"
                                                  :key="index"
                                                  
                                                >
                                                  {{ datas.role_name }}
                                                </option>
                                                 </select>
                                                 <span class="text-danger" v-if="v$.update_user_data.role.$error">{{
                                                v$.update_user_data.role.$errors[0].$message
                                              }}</span>
                                            </div>
                                            <div class="mb-2 modal-input">
                                              <label
                                                for="recipient-name"
                                                class="col-form-label"
                                                >Team :</label
                                              >
                                               <select
                                              class="form-select"
                                              id="validationCustom04"
                                              v-model="update_user_data.team"
                  >
                                              <option
                                                  :value="datas.id"
                                                  v-for="(datas, index) in team_data"
                                                  :key="index"
                                                 
                                                >
                                                  {{ datas.team_name }}
                                                </option>
                                                 </select>
                                                 <span class="text-danger" v-if="v$.update_user_data.team.$error">{{
                                                v$.update_user_data.team.$errors[0].$message
                                              }}</span>
                                            </div>
                                            <div class="mb-3 modal-input">
                                              <label
                                                for="recipient-name"
                                                class="col-form-label"
                                                >Designation :</label
                                              >
                                            <select
                                              class="form-select"
                                              id="validationCustom04"
                                              v-model="update_user_data.designation"
                  >
                                              <option
                                                  v-for="(datass, index) in get_dep_data"
                                                  :key="index"
                                                  :value="datass.id"
                                                >
                                                  {{ datass.designation_name }}
                                                </option>
                                                 </select>
                                                 <span class="text-danger" v-if="v$.update_user_data.designation.$error">{{
                                                v$.update_user_data.designation.$errors[0].$message
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
                                    @click="delete_user_data(user.id)"
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
              <!-- ------------------pagination------------ -->
              <div class="d-flex justify-content-between">
                <div class="">
                  <div class="show-entry d-flex gap-2 align-items-center">
                    <label>Show</label>
                    <div class="select-entry">
                      <select class="form-select" v-model="perPageData" @change="get_user_data">
                        <option v-for="data,index in pagination" :key="index" >{{data}}</option>
                       
                      </select>
                    </div>
                    <span>Entries</span>
                  </div>
                </div>
                <!-- ---------page-nvigation -->
                <div class="">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item">
                              <div class="col-md-12 d-flex justify-content-end">
                    <div class="pagination_box" style="color: white">
                      <pagination v-model="current_page" :records="recordData" :per-page="perPageData" :options="options"
                        @paginate="get_user_data" />
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
const string = "abcdefghijklmnopqrstuvwxyz";
const numeric = "0123456789";
const punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
import DashboardLayout from "@/Layout/DashboardLayout";
import useVuelidate from "@vuelidate/core";
import Pagination from 'v-pagination-3';
import { required, email, helpers, minLength } from "@vuelidate/validators";
import ApiClass from "@/api/api";

export default {
  name: "UserView",
  components: {
    DashboardLayout,
     Pagination,
    
  },
  data() {
    return {
      loading:false,
      loadingloader:true,
      loadingupdate:false,
       page:1,
       recordData: 0,
       perPageData:10,
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
      search: "",
      user_data: [],
      // gender_data:[{
      //   id:"1",
      //   value:"Male",
      // },
      //   {
      //     id:"2",
      //     value:"Female"
      //   }
      // ],
      length:"",
      current_page:1,
      type:"text",
      filter_obj:{
        name:"",
        gender:"",
        email:"",
        team:"",
        designation:"",
      },
      gender:[{
           id:1,
           value:"Male"
      },
      {
           id:2,
           value:"Female"
      },    
      ],
      next_pgae:null,
      filter_icon:false,
      prevoius_page:null,
      per_page_item:5,
      password: "password",
      team_data:[],
      get_dep_data :[],
      role_data : [],
      update_user_data:{
         id:"",
         name:'',
         dob:'',
         email:'',
         selected_gender:'',
         role:'',
         team:'',
         designation:'',
         password:'',
      },
       add_user_data:{
         name:'',
         dob:'',
         email:'',
         password:"",
         gender:'',
         roles:'',
         team:'',
         designation:'',
      },
      editmodal:"",
      role:'',
      user_dat:'',
      length1: 10,
      password1:"",
      processChange:'',
      statusde:true,
      user_data_get:[],

     
      
    };
  },
  
  
  setup() {
        return {
            v$: useVuelidate(),
        };
    },
    computed: {
    formValid() {
      const { length1 } = this;
      return +length1 > 0;
    },
  },
    
  validations(){
        return {
          add_user_data:{
             name: {
          required: helpers.withMessage("Username is required", required),
        },
        dob: {
          required: helpers.withMessage("Dob is required", required),
        },
        email: {
          required: helpers.withMessage("Email is required", required),
          email: helpers.withMessage(
            "Email must be a valid email address",
            email
          ),
        },
        password: {
          required: helpers.withMessage("Password is required", required),
          minLength: helpers.withMessage(
            "Password must have atleast 8 letters",
            minLength(8)
          ),
          regex: helpers.withMessage(
            () =>
              "The password  an uppercase, lowercase, number and special character",
            (value) =>
              /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_+~`|}{:;?><,./-=])/.test(value)
              // !@#$%^&*()_+~`|}{[]:;?><,./-=
              
              
          ),
        },

        gender: {
          required: helpers.withMessage("Gender is required", required),
        },
        roles: {
          required: helpers.withMessage("Role is required", required),
        },
        team: {
          required: helpers.withMessage("Team is required", required),
        },
        designation: {
          required: helpers.withMessage(
            "Designation name is required",
            required
          ),
        },
          },
          update_user_data:{
        name: {
          required: helpers.withMessage("Username is required", required),
        },
         dob: {
          required: helpers.withMessage("Dob is required", required),
        },
        selected_gender: {
          required: helpers.withMessage("Dob is required", required),
        },
        email: {
          required: helpers.withMessage("Email is required", required),
          email: helpers.withMessage(
            "Email must be a valid email address",
            email
          ),
        },
        role: {
          required: helpers.withMessage("Role is required", required),
        },
        team: {
          required: helpers.withMessage("Team is required", required),
        },
        designation: {
          required: helpers.withMessage("designation is required", required),
        },
      }
        }
    },
  mounted() {
     
    this.processChange = this.debounce(() => this.get_user_data())
    // //console.log(this.filter_data);
    if(localStorage.getItem('token')){

    this.get_user_data();
   
    
    
    }else{
      this.$router?.push('/login')
    }
   
  },

  methods: {
    get_data(data){
     this.user_data_get = data;
     console.log(this.user_data_get);
     this.$router.push('/user/userdetails/'+data.id);
        //  this.$store.commit('set_route','/candidatelist/profile/'+data.id);
         this.$store.commit('set_candidate',data);
        //  this.$store.commit('setshowdata', true);
      

    },
    //api call after click
    api_call(data){
      if(data==1){
    
    this.get_department();
    this.get_team();
    }else{
      this.get_team();
       this.get_department();
    this.get_role();
    }
    },
     debounce(func, timeout = 300){
     
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { 
      
      func.apply(this, args);
     
     }, timeout);
  };
},
    //generate password
    genPassword(){
 const { length1, formValid } = this;
      if (!formValid) {
        return;
      }
      let character = "";
      let password = "";
      while (password.length < length1) {
        const entity1 = Math.ceil(
          string.length * Math.random() * Math.random()
        );
        const entity2 = Math.ceil(
          numeric.length * Math.random() * Math.random()
        );
        const entity3 = Math.ceil(
          punctuation.length * Math.random() * Math.random()
        );
        let hold = string.charAt(entity1);
        hold = password.length % 2 === 0 ? hold.toUpperCase() : hold;
        character += hold;
        character += numeric.charAt(entity2);
        character += punctuation.charAt(entity3);
        password = character;
      }
      password = password
        .split("")
        .sort(() => {
          return 0.5 - Math.random();
        })
        .join("");
      this.add_user_data.password = password.substr(0, length1);
    
  },
  check_search(){
    if(this.filter_obj.name.length === 0 ){
        setTimeout(() => {
          this.get_user_data();
        }, 1000);
        return;
  }else{
        this.get_user_data();
  }
    
  },
  // update password
      updatePassword(){
 const { length1, formValid } = this;
      if (!formValid) {
        return;
      }
      let character = "";
      let password = "";
      while (password.length < length1) {
        const entity1 = Math.ceil(
          string.length * Math.random() * Math.random()
        );
        const entity2 = Math.ceil(
          numeric.length * Math.random() * Math.random()
        );
        const entity3 = Math.ceil(
          punctuation.length * Math.random() * Math.random()
        );
        let hold = string.charAt(entity1);
        hold = password.length % 2 === 0 ? hold.toUpperCase() : hold;
        character += hold;
        character += numeric.charAt(entity2);
        character += punctuation.charAt(entity3);
        password = character;
      }
      password = password
        .split("")
        .sort(() => {
          return 0.5 - Math.random();
        })
        .join("");
      this.update_user_data.password = password.substr(0, length1);
    
  },
///filter data 
    filter_datass(){
        this.filter_icon = false;
       if(this.filter_obj.name =="" && this.filter_obj.gender =="" && this.filter_obj.email =="" && this.filter_obj.team =="" && this.filter_obj.designation ==""){
        return;
       }else{
        this.filter_icon = true;
        this.get_user_data();
        document.getElementById('filterid').click();
       }
    },
    //clear filter data 
   clear_filter(){
    if(this.filter_obj.name || this.filter_obj.gender || this.filter_obj.email ||this.filter_obj.team || this.filter_obj.designation){
      this.filter_icon = true;
      this.filter_obj.name =
     this.filter_obj.gender =
     this.filter_obj.email = 
     this.filter_obj.designation =
     this.filter_obj.team = "";
     this.get_user_data();
      document.getElementById('filterid').click();
     
     }else{
         return;
     }
     
   },

    //select data for update
    select_uuu(a){
      //console.log(a);
     this.api_call();
   this.update_user_data.id = a.id;
   this.update_user_data.name = a.name;
   this.update_user_data.dob = a.date_of_birth;
  //  //console.log(this.update_user_data.dob,'sdfsdhfk');
   this.update_user_data.email = a.email;
   this.update_user_data.selected_gender = a.gender;
   console.log( this.update_user_data.selected_gender,'selected gender');
   this.update_user_data.role = a.role_id;
    // console.log(this.update_user_data.role)
   this.update_user_data.team = a.team_id;
   this.update_user_data.designation = a.designation_id;
      // this.editmodal =a
      // //console.log(this.editmodal)
    },
    //reset validation
    reset_validation() {
      this.v$.add_user_data.$reset();
        this.add_user_data.name='';
         this.add_user_data.dob='';
         this.add_user_data.email='';
         this.add_user_data.password="";
         this.add_user_data.gender='';
         this.add_user_data.roles='';
         this.add_user_data.team='';
         this.add_user_data.designation='';
    },

    //get user api
    async get_user_data() {
      //  this.loadingloader = true;
      let response = await ApiClass.getNodeRequest("get?page="+this.current_page+"&limit="+this.perPageData +"&name="+this.filter_obj.name +"&gender="+this.filter_obj.gender +"&email="+this.filter_obj.email+"&team_id="+this.filter_obj.team+"&designation_id="+this.filter_obj.designation,true);
          //  //console.log(response.data.data.result,'resoponse here');
      if (response?.data) {
        //  //console.log(response);
        this.loadingloader = false;
        this.load = false;
        if (response.data.status_code == "1") {
            this.show = true;
            this.user_data = response.data.data.result?? [];
            
            this.length = response.data.data.result.length?? [];
            this.recordData = response.data.data.count;
            this.current_page = response.data.data.currentPage;
            //console.log(this.user_data,'user data is here');
          
        }
        if (response.data.status_code == "0") {
          this.show = false;
        }
      }
       
        
    },
 
    //add user api
    async add_user() {
      const result = await this.v$.add_user_data.$validate();
      if (!result) {
        return;
      }
      this.loading = true;
      let form_data = {
        name: this.add_user_data.name,
        date_of_birth: this.add_user_data.dob,
        email: this.add_user_data.email,
        password: this.add_user_data.password,
        gender: this.add_user_data.gender,
        role_id:this.add_user_data.roles,
        team_id: this.add_user_data.team,
        designation_id: this.add_user_data.designation,
      };
      // //console.log(form_data)
      let response = await ApiClass.postNodeRequest("create", true, form_data);
      //console.log(response,'user data');
      if (response.data.status_code == 1) {
        //console.log( "ranjit sir",this.$refs.closeadduser);
        this.loading = false;
        this.success(response.data.message);
        this.get_user_data();
        this.$refs.closeadduser.click();
        this.v$.$reset();
        this.reset_form();
           
      } else {
        this.loading = false;
        this.failed(response.data.message);
      }
    },
    reset_form() {
      this.add_user_data.name =
      this.add_user_data.dob =
        this.add_user_data.email =
        this.add_user_data.password =
        this.add_user_data.gender =
        this.add_user_data.roles =
        this.add_user_data.team =
        this.add_user_data.designation =
          "";
    },
    //get team
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
    //get designation api here
    // async get_designation() {
    //   let response = await ApiClass.getNodeRequest("designation-get", true);

    //   if (response?.data) {
    //     //  //console.log(response);
    //     this.load = false;
    //     if (response.data.status_code == "1") {
    //       //console.log(response.data);

         
    //         this.show = true;
    //         this.team_data = response.data.data ?? [];
    //         this.update_user_data.designation = response.data.message[0].id;
    //         // //console.log('this.select_data.category_id1',this.select_data.category_id1);
          
    //     }
    //     if (response.data.status_code == "0") {
    //       this.show = false;
    //     }
    //   }
    // },
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
     delete_user_data(id) {
      
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
                if (result?.isConfirmed) {
                   this.delete_user(id);
                } else {
                    return;
                }
            });
        },
          //update data 
         async update_data(id){
            //  alert(id)
             const result = await this.v$.update_user_data.$validate();
                if (!result) {
                  return;
                }
                this.loadingupdate = true;
            let data={
                 name: this.update_user_data.name,
                 date_of_birth: this.update_user_data.dob,
                email: this.update_user_data.email,
                gender: this.update_user_data.selected_gender,
                role_id:this.update_user_data.role,
                team_id:this.update_user_data.team,
                password: this.update_user_data.password,
                designation_id: this.update_user_data.designation,
              }
              // data.password==""? delete data.password:data.password;
              // //console.log(data);
              let response = await ApiClass.updateNodeRequest("update?id="+id , true, data);
              console.log(response);
               if (response ?.data) {
                this.loadingupdate = false;
                if (response.data.status_code == "1") {
                  // alert('dshfdskh')
                  this.success(response.data.message);  
                  document.getElementById("closeupdateuser").click();
                  this.get_user_data();
                  this.v$.$reset();
                  this.reset_form();
                }else
                 {
                    this.failed(response.data.message);
                }
            }

          },
        //delete user
   async delete_user(id){
          //  alert(id)
      let response = await ApiClass.deleteNodeRequest("delete?id="+id , true);
     //console.log(response);
      if (response ?.data) {
                if (response?.data?.status_code == "1") {
                    this.get_user_data();
                    this.success(response?.data?.message);
                    
                }else{
               
                    this.failed(response?.data?.message);
                }
            }
    }
  },
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
.total-designation h5 {
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
.designation-input span {
  background-color: var(--white);
  border: transparent;
}
.designation-input input {
  background-color: var(--white);
  border-right: transparent;
  border-top: transparent;
  border-bottom: transparent;
  font-size: var(--fs-3);
  border-color: var(--input-border);
}
.designation-input input:focus {
  box-shadow: none;
  border-color: var(--input-border);
}
.designation-input {
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
/******************************designation-table************************************ */
.table-head {
  background-color: var(--navy-blue);
}
.table-head th {
  color: var(--white);
}
.designation-action td {
  padding: 8px 20px;
  color: var(--navy-blue);
  font-size: var(--fs-3);
  font-weight: 600;
  background-color: var(--table-row);
}
.designation-action {
  transition: all 1s ease;
  background-color: var(--text-color);
}
.table-head th {
  padding: 15px 0px;
}
.edit-icon {
  transition: transform 0.2s;
}
.edit-icon svg:hover {
  -ms-transform: scale(1.5);
  -webkit-transform: scale(1.5);
  transform: scale(1.3);
  cursor: pointer;
} 
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
.modal-input select {
  border: 1px solid var(--input-border);
  font-size: var(--fs-3);
  color: var(--text-color);
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
.btn_save{
  background-color: var(--navy-blue);
  color:var(--white);
}
/****************************pagination-style*****************************/
.page-link {
  color: var(--text-box);
  font-size: var(--fs-3);
}
.page-link:focus {
  box-shadow: none;
}


/* generate button */
.btn_generate
{
  background-color: var(--navy-blue);
  color: var(--white);
  border: transparent;
  border-radius: 4px;
  font-weight: 600;
  border: 2px solid transparent;

}
.btn_copy{
  background-color: green;
  color: var(--white);
  border: transparent;
  border-radius: 4px;
  font-weight: 600;
  border: 2px solid transparent;

}
.input-group-text{
    background-color:var(--white);
    border: unset;
}
/************************************filter********************************/
.data_show{
  border-bottom:1px solid var(--text-box);
}
.data_show td{
  font-size:14px;
  color:var(--text-box);
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
    height: calc(100% - 152px);
  }
}

@media all and (min-width: 320px) and (max-width: 767px) {
  .dashbpoard-content {
    height: calc(100% - 160px);
  }
}
</style>