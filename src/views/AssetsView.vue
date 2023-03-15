<template>
  <div>
    <DashboardLayout>
      <!-- ***************************************dashbpoard-content************************************************** -->
      
      <div  class="dashbpoard-content px-0 px-md-5 py-4">
        <!-- *******team-heading******* -->
         <div class="d-flex justify-content-between p-3">
          <div class="user-head ">
          <h2 class="m-0">Assets :</h2>
        </div>
        <div class="total-department">
          <h5 class="mb-0">Total Assets = {{recordData}}</h5>
        </div>
        </div>
        <!-- *******team-content******* -->
        <div class="row">
          <div class="col-md-12">
            <div class="list-content mt-4 mt-md-0">
              <div class="row align-items-center">
              <!-- ***************searchbar************* -->
                <div class="col-12 col-md-4">
                  <form @submit.prevent="get_assets">
                    <div class="input-group department-input mb-3">
                      <span class="input-group-text py-2"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          style="fill: var(--navy-blue)"
                          @click="get_assets"
                        >
                          <path
                            d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
                          ></path></svg
                      ></span>
                      
                      <input
                        type="number"
                        class="form-control py-2"
                        placeholder="Search"
                        v-model="filter_obj.amount"
                        @keyup="processChange(get_assets)"
                        :readonly="filter_icon"
                      />
                    </div>
                      </form>
                  </div>
                  <!-- **************filter*********** -->
                <div class="col-6 col-md-5">
                  <div class="filter-icon mb-3">
                    <div class="col-12 col-md-3">
                      <div class="">
                        <button type="button" class=" border-0 bg-transparent" data-bs-toggle="modal"
                         data-bs-target="#staticBackdropa0" data-bs-whatever="@mdo" @click="api_call(data=1)">
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
                      <div class="modal fade" id="staticBackdropa0" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
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
                              <span><svg xmlns="http://www.w3.org/2000/svg"  width="35" height="35" viewBox="0 0 24 24"
                                  style="fill: var(--navy-blue);">
                                  <path
                                    d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z">
                                  </path>
                                </svg>
                               
                                </span>
                            </div>
                            <div class="modal-body modal-form">
                              <form @submit.prevent="filter_dataa">
                                <!-- <div class="mb-2 modal-input">
                                  <label for="recipient-name" class="col-form-label">Amount:</label>
                                  <input type="number" class="form-control" v-model="filter_obj.amount" id="recipient-name" />
                                </div> -->
                                <div class="mb-2 modal-input">
                                  <label for="recipient-name" class="col-form-label">Paid For</label>
                                   <select class="form-select shadow-none" v-model="filter_obj.paid_for" aria-label="Default select example">
                                                <option value selected>Please select paid for</option>
                                                <option v-for="data,index in assets_all_data" :key="index">{{data.paid_for}}</option>
                                   
                                              </select>
                                </div>
                                <!-- <div class="mb-2 modal-input">
                                  <label for="recipient-name" class="col-form-label">From</label>
                                  <input type="text" class="form-control" v-model="filter_obj.paid_from" id="recipient-name" />
                                </div> -->
                                <div class="mb-2 modal-input">
                                  <label for="recipient-name" class="col-form-label">Paid To</label>
                                      <select class="form-select shadow-none"  v-model="filter_obj.paid_to" aria-label="Default select example">
                                                <option value selected>Please select Paid to</option>
                                                <option v-for="data,index in user_data" :key="index">{{data.name}}</option>
                                   
                                  </select>
                                </div>
                                <div class="d-flex justify-content-between">
                                  <div class="pb-3">
                                    <button type="submit" class="px-5 py-2 modal-btn">
                                      Apply Filter
                                    </button>
                                  </div>
                                  <div class="pb-3">
                                    <button type="submit" @click="clear_filter" class="px-5 py-2 modal-btn">
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
                  <!-- **************add-btn************* -->
                  <div class="col-6 col-md-3">
                    <div class="logout-button pb-3 text-start text-md-end">
                  <button
                    type="button"
                    class="px-4 py-2"
                    data-bs-toggle="modal"
                   data-bs-target="#staticBackdrop"
                    data-bs-whatever="@mdo"
                     @click="api_call(data=2)"
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
                          Add Assets
                        </h5>
                        <button
                          type="button"
                          class="btn-close bg-light text-light"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          ref="closeadduser"
                          @click="reset_validation"
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
                        <form @submit.prevent="add_assets">
                                            <div class="mb-2 modal-input">
                                              <label
                                                for=""
                                                class="col-form-label"
                                                >Amount</label
                                              >
                                              <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Add amount"
                                                v-model="add_asset.amount"
                                                @keypress="onlyForCurrency"
                                              />
                                               <span class="text-danger" v-if="v$.add_asset.amount.$error">{{
                                                  v$.add_asset.amount.$errors[0].$message
                                                }}</span>
                                            </div>
                                            <div class="mb-2 modal-input">
                                              <label
                                                for=""
                                                class="col-form-label"
                                                >Paid To</label
                                              >
                                                  <select class="form-select shadow-none"  v-model="add_asset.paid_to" aria-label="Default select example">
                                                <option value selected>Please select Paid to</option>
                                                <option v-for="data,index in user_data" :key="index">{{data.name}}</option>
                                   
                                  </select>
                                              <span class="text-danger" v-if="v$.add_asset.paid_to.$error">{{
                                                  v$.add_asset.paid_to.$errors[0].$message
                                                }}</span>
                                            </div>
                                            <!-- <div class="mb-2 modal-input">
                                              <label
                                                for=""
                                                class="col-form-label"
                                                >Paid For</label
                                              >
                                               <select class="form-select shadow-none" v-model="add_asset.paid_for" aria-label="Default select example">
                                                <option value selected>Please select paid for</option>
                                                <option v-for="data,index in assets_all_data" :key="index">{{data.paid_for}}</option>
                                   
                                              </select>
                                              <span class="text-danger" v-if="v$.add_asset.paid_for.$error">{{
                                                  v$.add_asset.paid_for.$errors[0].$message
                                                }}</span>
                                            </div> -->
                                            <div class="mb-2 modal-input">
                                              <label
                                                for=""
                                                class="col-form-label"
                                                >Paid for</label
                                              >
                                              <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Paid for"
                                               v-model="add_asset.paid_for"
                                               
                                              />
                                               <span class="text-danger" v-if="v$.add_asset.paid_for.$error">{{
                                                  v$.add_asset.paid_for.$errors[0].$message
                                                }}</span>
                                            </div>
                                                  <div class="row bank-row justify-content-center">
                                    <div class="col-md-10 col-lg-4 col-xl-4">
                                        <div class="my-5 text-center">
                            
                              <button v-if="loading == false" type="submit" class="btn btn_save border w-100 py-2 shadow-none btn ">
                                                Save
                                            </button>
                                            <button class="btn  btn_save w-100 py-2 btn " type="button" v-else>
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
                        <thead>
                          <tr class="table-head text-center">
                            <th>Sr.No.</th>
                            <th>Amount</th>
                            <th>Paid For</th>
                            <!-- <th>From</th> -->
                            <th>Paid To</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody >
                            <tr v-if="assets_data.length ==0">
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
                          <tr class="text-center department-action" v-for="(assets,index) in assets_data" :key="index">
                            <td>{{perPageData *(page-1)+ index+1}}</td>
                            <td>{{'₹'+assets.amount}}</td>
                            <td>{{assets.paid_for}}</td>
                            <!-- <td>{{assets.from}}</td> -->
                            <td>{{assets.paid_to}}</td>
                            <td class="text-start">
                              <div class="d-flex gap-3 justify-content-center">
                                <div class="edit-icon">
                                  <div class="">
                                    <button
                                      type="button"
                                      class="bg-transparent border-0"
                                      data-bs-toggle="modal"
                                      data-bs-target="#staticBackdropa2"
                                      data-bs-whatever="@mdo"
                                     @click="update_select(assets)"
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
                                    id="staticBackdropa2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
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
                                            Update Assets
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
                                            id="assetupdate"
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
                                          <form @submit.prevent="update_assets(update_asset.id)">
                                            <div class="mb-2 modal-input">
                                              <label
                                                for=""
                                                class="col-form-label"
                                                >Amount</label
                                              >
                                              <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Enter amount"
                                                v-model="update_asset.amount"
                                                @keypress="updateForCurrency"
                                              />
                                              <span class="text-danger" v-if="v$.update_asset.amount.$error">{{
                                                  v$.update_asset.amount.$errors[0].$message
                                                }}</span>
                                            </div>
                                            <div class="mb-2 modal-input">
                                              <label
                                                for=""
                                                class="col-form-label"
                                                >Paid To</label
                                              >
                                                  <select class="form-select shadow-none"  v-model="update_asset.paid_to" aria-label="Default select example">
                                                <option :value="data.name" v-for="data,index in user_data" :key="index">{{data.name}}</option>
                                   
                                                    </select>
                                              <!-- <span class="text-danger" v-if="v$.v$.update_asset.paid_to.$error">{{
                                                  v$.v$.update_asset.paid_to.$errors[0].$message
                                                }}</span> -->
                                            </div>
                                             <div class="mb-2 modal-input">
                                              <label
                                                for=""
                                                class="col-form-label"
                                                >Paid for</label
                                              >
                                              <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Paid for"
                                              v-model="update_asset.paid_for"
                                               
                                              />
                                               <span class="text-danger" v-if="v$.add_asset.paid_for.$error">{{
                                                  v$.add_asset.paid_for.$errors[0].$message
                                                }}</span> 
                                            </div>
                                            <!-- <div class="mb-2 modal-input">
                                              <label
                                                for=""
                                                class="col-form-label"
                                                >Paid For</label
                                              >
                                              <input
                                                type="name"
                                                class="form-control"
                                                placeholder="Enter paid for"
                                                v-model="update_asset.paid_for"
                                              />
                                            </div> -->
                                           
                                            
                                            <!-- <div class="mb-3 modal-input">
                                              <label
                                                for=""
                                                class="col-form-label"
                                                >Paid From</label
                                              >
                                              <input
                                                type="name"
                                                class="form-control"
                                                placeholder="Enter paid from"
                                                v-model="update_asset.paid_from"
                                              />
                                            </div> -->
                                                    <div class="row bank-row justify-content-center">
                                    <div class="col-md-10 col-lg-4 col-xl-4">
                                        <div class="my-5 text-center">
                            
                              <button v-if="loadingupdate == false" type="submit" class="btn btn_save border w-100 py-2 shadow-none btn ">
                                                Update
                                            </button>
                                            <button class="btn  btn_save w-100 py-2 btn " type="button" v-else>
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
                                    @click="delete_asset(assets.id)"
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
                      <select class="form-select" v-model="perPageData" @change="get_assets">
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
                           <div class="col-md-12 d-flex justify-content-end">
                    <div class="pagination_box" style="color: white">
                      <pagination v-model="page" :records="recordData" :per-page="perPageData" :options="options"
                        @paginate="get_assets" />
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
import useVuelidate from "@vuelidate/core";
import Pagination from 'v-pagination-3';
import { required, helpers } from "@vuelidate/validators";
export default {
  name: "AssetsView",
  components: {
    DashboardLayout,
    Pagination,
  },
  data(){
    return{
           page:1,
       recordData: 0,
       perPageData:10,
       user_data:[],
       loadingloader:true,
       search:"",
       assets_data:[],
       filter_icon:false,
       filter_obj:{
              amount:'',
              paid_to:'',
              paid_from:'',
              paid_for:'',
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
          add_asset:{
              amount:'',
              paid_to:'',
              paid_from:'',
              paid_for:'',
      },
        update_asset:{
              id:'',
              amount:'',
              paid_to:'',
              paid_for:'',
      },
      loading:false,
      loadingupdate:false,
      assets_all_data:[],
    }
  },
   setup() {
        return {
            v$: useVuelidate(),
        };
    },
      validations(){
        return {
          add_asset:{
             amount: {
          required: helpers.withMessage("Amount is required", required),
        },
        paid_to: {
          required: helpers.withMessage("Paid to is required", required),
        },
        paid_for: {
          required: helpers.withMessage("Paid for is required", required),
        },
          },
          update_asset:{
        amount: {
          required: helpers.withMessage("Amount is required", required),
        },
         paid_to: {
          required: helpers.withMessage("Paid to is required", required),
        },
        paid_for: {
          required: helpers.withMessage("Paid for is required", required),
        },
        // paid_from: {
        //   required: helpers.withMessage("Paid from is required", required),
          
        // },
      }
        }
    },
   computed: {
  
    // filter_data() {
    //   // console.log("asset filter data", this.assets_data);

    //   if (this.search) {
    //     return this.assets_data.filter((p) => {
    //       // console.log(p);
    //       return p.from.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
    //     });
    //   } else {
    //     //  console.log('sdfhsdfkh',this.assets_data);
    //     return this.assets_data;
    //   }
    // },
  },
  mounted(){
    this.processChange = this.debounce(() => this.get_assets());
    if(localStorage.getItem('token')){
      this.get_assets();
      
    }else{
      this.$router?.push('/login')
    }
  },
  methods:{
    api_call(data){
      if(data==1){
      this.get_user_data();
      this.get_allassets();
      }else{
        this.get_user_data();
       
      }
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
    //filter dat
      filter_dataa(){
        this.filter_icon = false;
        if(!this.filter_obj.paid_to && !this.filter_obj.paid_from && !this.filter_obj.amount && !this.filter_obj.paid_for){
         return;
      }else{
         this.get_assets();
        this.filter_icon = true;
        document.getElementById('closefilter').click();
      }
    },
    //clear filter
      clear_filter(){
      if(this.filter_obj.paid_to || this.filter_obj.paid_from || this.filter_obj.amount || this.filter_obj.paid_for){
            this.filter_obj.paid_to =this.filter_obj.paid_from=this.filter_obj.amount=this.filter_obj.paid_for="";
            this.get_assets();
            document.getElementById('closefilter').click();
    }else{
      return;
    }
  },
    //select update keys
    update_select(assets){
      this.get_user_data();
      // console.log(assets,'here assess set');
      this.update_asset.id = assets.id;
      this.update_asset.amount = assets.amount;
      // this.update_asset.paid_from = assets.from;
      this.update_asset.paid_for = assets.paid_for;
      this.update_asset.paid_to = assets.paid_to;
    },
    //update data
    async update_assets(id){
       //  alert(id)
             const result = await this.v$.update_asset.$validate();
                if (!result) {
                  return;
                }
                this.loadingupdate = true;
            let data={
                 amount: this.update_asset.amount,
                 paid_to: this.update_asset.paid_to,
                paid_for: this.update_asset.paid_for,
                from: this.update_asset.paid_from,
               

                
              }
              // console.log(data);
              let response = await ApiClass.updateNodeRequest("assets-update?id="+id , true, data);
              console.log(response);
               if (response?.data) {
                this.loadingupdate = false;
                if (response?.data?.status_code == "1") {
                  // alert('dshfdskh')
                  this.success(response?.data?.message);
                  this.get_assets(); 
                 document.getElementById('assetupdate').click();
                }else
                 {
                    this.failed(response?.data?.message);
                }
            }
    },
    //reset validaton
    reset_validation(){
       this.add_asset.paid_to =this.add_asset.amount =this.add_asset.paid_for = "";
     this.v$.add_asset.$reset();
    },
    // amount format method
    onlyForCurrency () {
     // console.log($event.keyCode); //keyCodes value
     let keyCode = (event.keyCode ? event.keyCode : event.which);

     // only allow number and one dot
     if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46 || this.add_asset.amount.indexOf('.') != -1)) { 
      event.preventDefault();
     }
     // restrict to 2 decimal places
     if(this.add_asset.amount!=null && this.add_asset.amount.indexOf(".")>-1 && (this.add_asset.amount.split('.')[1].length > 1)){
     event.preventDefault();
     }
   },
    // update asset format method
    updateForCurrency () {
     // console.log($event.keyCode); //keyCodes value
     let keyCode = (event.keyCode ? event.keyCode : event.which);

     // only allow number and one dot
     if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46 || this.update_asset.amount.indexOf('.') != -1)) { 
      event.preventDefault();
     }
     // restrict to 2 decimal places
     if(this.update_asset.amount!=null && this.update_asset.amount.indexOf(".")>-1 && (this.update_asset.amount.split('.')[1].length > 1)){
     event.preventDefault();
     }
   },
    async add_assets(){
            const result = await this.v$.add_asset.$validate();
      if (!result) {
        return;
      }
      this.loading = true;
      let form_data = {
        amount: this.add_asset.amount,
        paid_for: this.add_asset.paid_for,
        paid_to: this.add_asset.paid_to,
        from: "",
       
      };
      // console.log(form_data)
      let response = await ApiClass.postNodeRequest("assets-create", true, form_data);
      // console.log(response,'user data');
      if(response?.data){
        this.loading = false;
      if (response.data.status_code == 1) {
        this.success(response.data.message);
        this.$refs.closeadduser.click();
        this.get_assets();
        this.v$.$reset();
        this.reset_form();
           
      } else {
        this.failed(response.data.message);
      }
      }
    },
    async get_assets(){
     
      let response = await ApiClass.getNodeRequest("assets-get?limit="+this.perPageData+"&page="+this.page+"&amount="+this.filter_obj.amount +"&paid_for="+this.filter_obj.paid_for +"&paid_to="+this.filter_obj.paid_to,true);
          //  console.log(response.data,'resoponse here');
      if (response?.data) {
        //  console.log(response);
          this.loadingloader = false;
        this.load = false;
        if (response.data.status_code == "1") {
          console.log(response.data);
          if (response.data) {
            this.show = true;
            this.assets_data = response.data.data.result?? [];
            // console.log(this.assets_data,'asset data here');
            this.length = response.data.data.result.length?? [];
            this.recordData = response.data.data.count;
            this.current_page = response.data.data.currentPage;
            // console.log(this.user_data,'user data is here');
          }
        }
        if (response.data.status_code == "0") {
          this.show = false;
        }
      }
      
    },
       async get_allassets(){
     
      let response = await ApiClass.getNodeRequest("assets-get",true);
          //  console.log(response.data,'resoponse here');
      if (response?.data) {
        //  console.log(response);
        this.load = false;
        if (response.data.status_code == "1") {
          console.log(response.data);

          if (response.data) {
            this.show = true;
            this.assets_all_data = response.data.data?? [];
            
          }
        }
        if (response.data.status_code == "0") {
          this.show = false;
        }
      }
      
    },
    delete_asset(id){
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
                    this.delete_asset_(id);
                } else {
                    return;
                }
            });
    },
   async delete_asset_(id){
         let response = await ApiClass.deleteNodeRequest("assets-delete?id="+id , true);
       console.log(response);
      if (response ?.data) {
                if (response.data.status_code == "1") {
                    this.get_assets();
                    this.success(response.data.message);
                    
                }
                if (response.data.status_code == "0") {
                    this.failed(response.data.message);
                }
            
    }
    },
    //get user data 
        //get user api
    async get_user_data() {
      let response = await ApiClass.getNodeRequest("get",true);
          //  //console.log(response.data.data.result,'resoponse here');
      if (response?.data) {
        //  //console.log(response);
        this.load = false;
        if (response.data.status_code == "1") {
          //console.log(response.data);

          if (response.data) {
            this.show = true;
            this.user_data = response.data.data?? [];
            console.log(this.user_data,'data is here');
            
            // this.length = response.data.data.result.length?? [];
            // this.recordData = response.data.data.count;
            // this.current_page = response.data.data.currentPage;
            //console.log(this.user_data,'user data is here');
          }
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
.edit-icon svg {
  transition: transform 0.2s;
}
.edit-icon svg:hover {
  -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.3);
}
/* ***************************modal-head****************************** */
.modal-head {
  font-size: var(--fs-5);
  color: var(--white);
}
.modal-input input {
  border: 1px solid var(--input-border);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-size: var(--fs-3);
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
.modal-input select{
  border:1px solid var(--input-border);
  font-size:var(--fs-3);
  color:var(--text-color);
}
/**********************************modal-btn************************************/
.modal-btn,
.btn_save {
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
    height: calc(100% - 140px);
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