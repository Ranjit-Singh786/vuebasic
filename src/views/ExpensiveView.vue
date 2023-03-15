<template>
  <div>
    <DashboardLayout>
      <!-- ***************************************dashbpoard-content************************************************** -->   
      <div class="dashbpoard-content px-0 px-md-5 py-4">
        <!-- *******team-heading******* -->
        <div class="d-flex justify-content-between p-3">
          <div class="user-head">
            <h2 class="m-0">Expenses :</h2>
          </div>
          <div class="total-department">
            <h5 class="mb-0">Total Expenses = {{ recordData }}</h5>
          </div>
        </div>
        <!-- *******team-content******* -->
        <div class="row">
          <div class="col-md-12">
            <div class="list-content mt-4 mt-md-0">
              <div class="row align-items-center">
                <!-- *************search bar********* -->
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
                    >
                    </span>
                    
                    <input
                      type="text"
                      v-model="filter_obj.expenses_name"
                      class="form-control py-2"
                      placeholder="Search"
                      @keyup="processChange(get_expensive)"
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
                          data-bs-target="#staticBackdrop"
                          data-bs-whatever="@mdo"
                        >
                          <svg v-if="!filter_icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            style="fill: var(--navy-blue)"
                          >
                            <path
                              d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z"
                            ></path>
                          </svg>
                           <svg  xmlns="http://www.w3.org/2000/svg" v-else width="24"
                        height="24" style="fill: var(--navy-blue)" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
                        </button>
                      </div>
                      <div
                        class="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
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
                                id="closefilter"
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
                              <form @submit.prevent="apply_filter">
                                <!-- <div class="mb-2 modal-input">
                                  <label
                                    for="recipient-name"
                                    class="col-form-label"
                                    >Expenses Name :</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="recipient-name"
                                    v-model="filter_obj.expenses_name"
                                  />
                                </div> -->

                                <div class="mb-2 modal-input">
                                  <label
                                    for="recipient-name"
                                    class="col-form-label"
                                    >Expenses Type :</label
                                  >
                                  <select
                                    class="form-select"
                                    aria-label="Default select example"
                                    v-model="filter_obj.expenses_type"
                                    

                                  >
                                    <option value selected>
                                      Please selected expenses type
                                    </option>
                                    <option
                                      :value="data.id"
                                      v-for="(
                                        data, index
                                      ) in expensive_data_type"
                                      :key="index"
                                    >
                                      {{ data.expenses_type }}
                                    </option>
                                  </select>
                                </div>
                                <div class="mb-3 modal-input">
                                  <label
                                    for="recipient-name"
                                    class="col-form-label"
                                    >Amount :</label
                                  >
                                  <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Amount"
                                v-model="filter_obj.amount"
                                @keypress="onlyForCurrency"
                              />
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
                <!-- *******add-btn******** -->
                <div class="col-6 col-md-3">
                  <div class="logout-button pb-3 text-start text-md-end">
                    <button
                      type="button"
                      class="px-4 py-2"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrope"
                      data-bs-whatever="@mdo"
                      @click="api_call"
                    >
                      Add New
                    </button>
                  </div>
                  <div
                    class="modal fade"
                    id="staticBackdrope"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header model-heading">
                          <h5
                            class="modal-title modal-head"
                            id="staticBackdropLabel"
                          >
                            Add Expenses
                          </h5>
                          <button
                            type="button"
                            class="btn-close bg-light text-light"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            ref="addexpense"
                            @click="resetForm"
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
                          <form @submit.prevent="add_expenses">
                            <div class="mb-2 modal-input">
                              <label for="" class="col-form-label">Type</label>
                              <select
                                class="form-select"
                                aria-label="Default select example"
                                v-model="add_expensive_data.type"
                              >
                                <option value selected>
                                  Please select type
                                </option>

                                 <option
                                                v-for="(
                                                  data, index
                                                ) in expensive_data_type"
                                                :key="index"
                                                :value="data.id"
                                              >
                                                {{ data.expenses_type }}
                                              </option>
                              </select>
                              <span
                                class="text-danger"
                                v-if="v$.add_expensive_data.type.$error"
                                >{{
                                  v$.add_expensive_data.type.$errors[0].$message
                                }}</span
                              >
                            </div>
                            <div class="mb-2 modal-input">
                              <label for="" class="col-form-label"
                                >Amount</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Amount"
                                v-model="add_expensive_data.amount"
                                @keypress="onlyForCurrency"
                              />
                              <span
                                class="text-danger"
                                v-if="v$.add_expensive_data.amount.$error"
                                >{{
                                  v$.add_expensive_data.amount.$errors[0]
                                    .$message
                                }}</span
                              >
                            </div>
                            <div class="mb-2 modal-input">
                              <label for="" class="col-form-label"
                                >Expenses Name</label
                              >
                              <input
                                type="name"
                                class="form-control"
                                placeholder="Expenses Name"
                                v-model="add_expensive_data.expenses_name"
                              />
                              <span
                                class="text-danger"
                                v-if="
                                  v$.add_expensive_data.expenses_name.$error
                                "
                                >{{
                                  v$.add_expensive_data.expenses_name.$errors[0]
                                    .$message
                                }}</span
                              >
                            </div>
                            <div class="mb-3 modal-input text-center">
                              <img
                                id="img_url3"
                                src="@/assets/images/Capture.png"
                                v-if="first_image == null"
                                class="
                                  img-fluid
                                  image_file
                                  filter_img
                                  img-thumbnail
                                "
                                style="height: 60%px; width: 30%"
                                @click="check('document_type_pan3', 'img_url3')"
                              />
                              <img
                                id="img_url3"
                                src="@/assets/images/Capture.png"
                                v-else-if="first_image == 'clr'"
                                class="
                                  img-fluid
                                  image_file
                                  filter_img
                                  img-thumbnail
                                "
                                style="height: 60%px; width: 30%"
                                @click="check('document_type_pan3', 'img_url3')"
                              />
                              <img
                                id="img_url3"
                                v-else-if="first_image_name==='.jpg' || first_image_name==='.png'"
                                src="@/assets/images/Capture.png"
                                class="
                                  img-fluid
                                  image_file
                                  filter_img
                                  img-thumbnail
                                "
                                style="height: 60%px; width: 30%"
                                @click="check('document_type_pan3', 'img_url3')"
                              />
                              <!-- svg -->
                               <svg  xmlns="http://www.w3.org/2000/svg" v-else
                                   @click="check('document_type_pan3', 'img_url3')"
                                   id="img_url3" viewBox="0 0 24 24" width="80" class="border bg-white" height="80" style="fill: var(--navy-blue);"><path d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023.479 0 .774-.242.774-.651 0-.366-.254-.586-.704-.586zm3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018.817.006 1.349-.444 1.349-1.396.006-.83-.479-1.268-1.255-1.268z"></path><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.498 16.19c-.309.29-.765.42-1.296.42a2.23 2.23 0 0 1-.308-.018v1.426H7v-3.936A7.558 7.558 0 0 1 8.219 14c.557 0 .953.106 1.22.319.254.202.426.533.426.923-.001.392-.131.723-.367.948zm3.807 1.355c-.42.349-1.059.515-1.84.515-.468 0-.799-.03-1.024-.06v-3.917A7.947 7.947 0 0 1 11.66 14c.757 0 1.249.136 1.633.426.415.308.675.799.675 1.504 0 .763-.279 1.29-.663 1.615zM17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17v.74zM14 9h-1V4l5 5h-4z"></path></svg>
                                  

                              <input
                                type="file"
                                accept="image/*,.pdf,.doc"
                                ref="imagereset"
                                id="document_type_pan3"
                                hidden
                                v-on:change="first($event, 'third_image')"
                              />
                            </div>
                            <div
                              v-if="hasSubmitted && first_image == null"
                              class="text-danger"
                            >
                              Image is required
                            </div>
                            <div v-else-if="first_image == 'clr'"></div>
                                    <div class="row bank-row justify-content-center">
                                    <div class="col-md-10 col-lg-4 col-xl-4">
                                        <div class="my-5 text-center">
                            
                              <button v-if="loading == false" type="submit" class="btn btn_save border w-100 py-2 shadow-none btn ">
                                                Save
                                            </button>
                                            <button class="btn  btn_save w-100 py-2 " type="button" v-else>
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
                            <th>Name</th>
                            <th>Expenses Type</th>
                            <th>Amount</th>
                            <th>Billing Image</th>

                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-if="expensive_data.length ==0">
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
                          <tr
                            class="text-center department-action"
                            v-for="(expenses, index) in expensive_data"
                            :key="index"
                          >
                            <td>{{ perPageData *(page-1)+ index+1 }}</td>
                            <td>{{ expenses.name }}</td>
                            <td>{{ expenses.expenses_type.expenses_type }}</td>
                            <td>{{ '₹'+expenses.amount }}</td>
                            <td class="billing-icon">
                              <img
                               v-if="expenses.billing_image.substring(expenses.billing_image.length-4)==='.jpg'|| expenses.billing_image.substring(expenses.billing_image.length-4)==='.png'"
                                v-bind:src="expenses.billing_image"
                                 @click.prevent="
                                      downloadItem({
                                        url:expenses.billing_image,
                                          
                                        label: expenses.billing_image.slice(15),
                                      })
                                    "
                                height="80"
                                width="80"
                                
                              />
                              <svg v-else xmlns="http://www.w3.org/2000/svg"  @click.prevent="
                                      downloadItem({
                                        url:expenses.billing_image,
                                        label: expenses.billing_image.slice(15),
                                      })
                                    " v-bind:src="expenses.billing_image" viewBox="0 0 24 24" width="80" class="border bg-white" height="80" style="fill: var(--navy-blue);"><path d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023.479 0 .774-.242.774-.651 0-.366-.254-.586-.704-.586zm3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018.817.006 1.349-.444 1.349-1.396.006-.83-.479-1.268-1.255-1.268z"></path><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.498 16.19c-.309.29-.765.42-1.296.42a2.23 2.23 0 0 1-.308-.018v1.426H7v-3.936A7.558 7.558 0 0 1 8.219 14c.557 0 .953.106 1.22.319.254.202.426.533.426.923-.001.392-.131.723-.367.948zm3.807 1.355c-.42.349-1.059.515-1.84.515-.468 0-.799-.03-1.024-.06v-3.917A7.947 7.947 0 0 1 11.66 14c.757 0 1.249.136 1.633.426.415.308.675.799.675 1.504 0 .763-.279 1.29-.663 1.615zM17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17v.74zM14 9h-1V4l5 5h-4z"></path></svg>
                            </td>
                            <td>
                              <div class="d-flex gap-3 justify-content-center">
                                <div class="text-start text-md-end">
                                  <button
                                    type="button"
                                    class="border-0 bg-transparent"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop1"
                                    data-bs-whatever="@mdo"
                                    @click="select_update_exp(expenses)"
                                  >
                                    <div class="edit-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
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
                                  </button>
                                </div>
                                <div
                                  class="modal fade"
                                  id="staticBackdrop1"
                                  data-bs-backdrop="static"
                                  data-bs-keyboard="false"
                                  tabindex="-1"
                                  aria-labelledby="staticBackdropLabel"
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
                                          Update Expenses
                                        </h5>
                                        <button
                                          type="button"
                                          class="btn-close bg-light text-light"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                          id="updateexpense"
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
                                        <form
                                          @submit.prevent="
                                            update_exp(update_expensive_dat.id)
                                          "
                                        >
                                          <div class="mb-3 modal-input">
                                            <label for="" class="col-form-label"
                                              >Type</label
                                            >
                                            <select
                                              class="form-select"
                                              aria-label="Default select example"
                                              v-model="
                                                update_expensive_dat.types
                                              "
                                            >
                                              <option
                                                v-for="(
                                                  data, index
                                                ) in expensive_data_type"
                                                :key="index"
                                                :value="data.id"
                                              >
                                                {{ data.expenses_type }}
                                              </option>
                                            </select>
                                            <span
                                              class="text-danger"
                                              v-if="
                                                v$.update_expensive_dat.types
                                                  .$error
                                              "
                                              >{{
                                                v$.update_expensive_dat.types
                                                  .$errors[0].$message
                                              }}</span
                                            >
                                          </div>
                                          <div class="mb-3 modal-input">
                                            <label for="" class="col-form-label"
                                              >Amount</label
                                            >
                                            <input
                                              type="text"
                                              class="form-control"
                                              placeholder="Enter Amount"
                                              v-model="
                                                update_expensive_dat.amount
                                              "
                                              @keypress="updateForCurrency"
                                            />
                                            <span
                                              class="text-danger"
                                              v-if="
                                                v$.update_expensive_dat.amount
                                                  .$error
                                              "
                                              >{{
                                                v$.update_expensive_dat.amount
                                                  .$errors[0].$message
                                              }}</span
                                            >
                                          </div>
                                          <div class="mb-3 modal-input">
                                            <label for="" class="col-form-label"
                                              >Expenses Name</label
                                            >
                                            <input
                                              type="name"
                                              class="form-control"
                                              placeholder="Expenses Name"
                                              v-model="
                                                update_expensive_dat.expenses_name
                                              "
                                            />
                                            <span
                                              class="text-danger"
                                              v-if="
                                                v$.update_expensive_dat
                                                  .expenses_name.$error
                                              "
                                              >{{
                                                v$.update_expensive_dat
                                                  .expenses_name.$errors[0]
                                                  .$message
                                              }}</span
                                            >
                                          </div>
                                          <div
                                            class="mb-3 modal-input text-center"
                                          > 
                                          <span   v-if="
                                                update_expensive_dat.first_image_update ==
                                                null
                                              ">
                                            <img
                                              id="img_url4"
                                              src="@/assets/images/Capture.png"
                                            
                                              class="
                                                img-fluid
                                                image_file
                                                filter_img
                                                img-thumbnail
                                              "
                                              style="height: 60%px; width: 30%"
                                              @click="
                                                check(
                                                  'document_type_pan4',
                                                  'img_url4'
                                                )
                                              "
                                            />
                                            </span>
                                            <span v-else-if="update_expensive_dat.name ==='.jpg' || update_expensive_dat.name==='.png'">
                                            <img
                                              id="img_url4"
                                              :src="
                                              update_expensive_dat.first_image_update
                                              "
                                              class="
                                                img-fluid
                                                image_file
                                                filter_img
                                                img-thumbnail
                                              "
                                              style="height: 60%px; width: 30%"
                                              @click="
                                                check(
                                                  'document_type_pan4',
                                                  'img_url4'
                                                )
                                              "
                                            />
                                            </span>
                                            <span v-else>
                                             <svg  xmlns="http://www.w3.org/2000/svg"
                                      v-bind:src="update_expensive_dat.first_image_update" @click="
                                                check(
                                                  'document_type_pan4',
                                                  'img_url4'
                                                )
                                              " id="img_url4" viewBox="0 0 24 24" width="80" class="border bg-white" height="80" style="fill: var(--navy-blue);"><path d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023.479 0 .774-.242.774-.651 0-.366-.254-.586-.704-.586zm3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018.817.006 1.349-.444 1.349-1.396.006-.83-.479-1.268-1.255-1.268z"></path><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.498 16.19c-.309.29-.765.42-1.296.42a2.23 2.23 0 0 1-.308-.018v1.426H7v-3.936A7.558 7.558 0 0 1 8.219 14c.557 0 .953.106 1.22.319.254.202.426.533.426.923-.001.392-.131.723-.367.948zm3.807 1.355c-.42.349-1.059.515-1.84.515-.468 0-.799-.03-1.024-.06v-3.917A7.947 7.947 0 0 1 11.66 14c.757 0 1.249.136 1.633.426.415.308.675.799.675 1.504 0 .763-.279 1.29-.663 1.615zM17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17v.74zM14 9h-1V4l5 5h-4z"></path></svg>
                                              </span>
                                            <input
                                              type="file"
                                              accept="image/*,.pdf,.doc"
                                              ref="imagereset"
                                              id="document_type_pan4"
                                              hidden
                                              v-on:change="
                                                first(
                                                  $event,
                                                  'third_image_update'
                                                )
                                              "
                                            />
                                          </div>
                                                  <div class="row bank-row justify-content-center">
                                    <div class="col-md-10 col-lg-4 col-xl-4">
                                        <div class="my-5 text-center">
                            
                              <button v-if="loadingupdate == false" type="submit" class="btn btn_save border w-100 py-2 shadow-none btn">
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
                                <div class="edit-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    style="fill: var(--red)"
                                    @click="delete_expen_data(expenses.id)"
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
              <!--*******************- modal image ******************-->
              <!-- Button trigger modal -->
              <!-- Modal -->

              <!-- ********************modal image show***************** -->
              <!-- ********************select_entry********** -->
              <div class="d-flex justify-content-between">
                <div class="">
                  <div class="show-entry d-flex gap-2 align-items-center">
                    <label>Show</label>
                    <div class="select-entry">
                      <select
                        class="form-select"
                        v-model="perPageData"
                        @change="get_expensive"
                      >
                        <option
                          v-for="(data, index) in pagination"
                          :key="index"
                        >
                          {{ data }}
                        </option>
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
                            <pagination
                              v-model="page"
                              :records="recordData"
                              :per-page="perPageData"
                              :options="options"
                              @paginate="get_expensive"
                            />
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
import { required, helpers } from "@vuelidate/validators";
import Pagination from "v-pagination-3";
import axios from "axios";
export default {
  name: "FilterView",
  components: {
    DashboardLayout,
    Pagination,
  },
  computed: {
    // filter_data() {
    //     console.log("expensive data", this.expensive_data);
    //     if (this.search) {
    //         return this.expensive_data.filter((p) => {
    //             // console.log(p);
    //             return p.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
    //         });
    //     } else {
    //         // console.log(this.user_data);
    //         return this.expensive_data;
    //     }
    // },
  },

  data() {
    return {
      page: 1,
      recordData: 0,
      perPageData: 10,
      loadingloader:true,
      first_image_name:'',
      filter_obj: {
        expenses_name: "",
        expenses_type: "",
        amount:"",
      },
      pagination: {
        val: 10,
        val1: 20,
        val2: 30,
      },
      options: {
        edgeNavigation: false,
        chunksNavigation: false,
        chunk: 4,
        texts: false,
        format: false,
      },
      loading:false,
      loadingupdate:false,
      search: "",
      expensive_data: "",
      expensive_data_type: [],
      assets_all_data:[],
      first_image: null,
      hasSubmitted: false,
      add_expensive_data: {
        type: "",
        amount: "",
        expenses_name: "",
        billing_image: "",
      },
      update_expensive_dat: {
        id: "",
        types: "",
        amount: "",
        expenses_name: "",
        first_image_update: "",
        name:"",
      },
    };
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },

  validations() {
    return {
      add_expensive_data: {
        type: {
          required: helpers.withMessage("Type is required", required),
        },
        amount: {
          required: helpers.withMessage("Amount is required", required),
        },

        expenses_name: {
          required: helpers.withMessage("Expenses name is required", required),
        },
      },
      update_expensive_dat: {
        types: {
          required: helpers.withMessage("Type is required", required),
        },
        amount: {
          required: helpers.withMessage("Amount is required", required),
        },
        expenses_name: {
          required: helpers.withMessage("Expenses name is required", required),
        },
      },
    };
  },
  mounted() {
    this.processChange = this.debounce(() => this.get_expensive());
    if (localStorage.getItem("token")) {
      this.get_expensive();
      
    } else {
      this.$router?.push("/login");
    }
    //  this.first(this.first_image=null)
  },
  methods: {
    //api hit here
    api_call(){
       this.get_expensive_types();
      this.get_allassets();
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
    //downloading image
async downloadItem({ url, label }) {
      const response = await axios.get(url, { responseType: "blob" });
      const blob = new Blob([response.data], { type: "application/jpg" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = label;
      link.click();
      URL.revokeObjectURL(link.href);
    },
    // amount format method
    onlyForCurrency() {
      // console.log($event.keyCode); //keyCodes value
      let keyCode = event.keyCode ? event.keyCode : event.which;

      // only allow number and one dot
      if (
        (keyCode < 48 || keyCode > 57) &&
        (keyCode !== 46 || this.add_expensive_data.amount.indexOf(".") != -1)
      ) {
        event.preventDefault();
      }
      // restrict to 2 decimal places
      if (
        this.add_expensive_data.amount != null &&
        this.add_expensive_data.amount.indexOf(".") > -1 &&
        this.add_expensive_data.amount.split(".")[1].length > 1
      ) {
        event.preventDefault();
      }
    },
    // update  format method
    updateForCurrency() {
      // console.log($event.keyCode); //keyCodes value
      let keyCode = event.keyCode ? event.keyCode : event.which;

      // only allow number and one dot
      if (
        (keyCode < 48 || keyCode > 57) &&
        (keyCode !== 46 || this.update_expensive_dat.amount.indexOf(".") != -1)
      ) {
        event.preventDefault();
      }
      // restrict to 2 decimal places
      if (
        this.update_expensive_dat.amount != null &&
        this.update_expensive_dat.amount.indexOf(".") > -1 &&
        this.update_expensive_dat.amount.split(".")[1].length > 1
      ) {
        event.preventDefault();
      }
    },
    //filter
    apply_filter() {
      this.filter_icon = false;
      if (!this.filter_obj.expenses_name && !this.filter_obj.expenses_type && !this.filter_obj.amount) {
        return;
      } else {
        this.get_expensive();
        this.filter_icon = true;
        document.getElementById('closefilter').click();
      }
    },
    clear_filter() {
      console.log('chekckdsfj');
      if (this.filter_obj.expenses_type || this.filter_obj.amount) {
        this.filter_icon = true;
        // console.log('check')
        this.filter_obj.expenses_type = this.filter_obj.amount = ""; 
        this.get_expensive();
        document.getElementById('closefilter').click();
      } else {
        return;
      }
    },
    //select update data
    select_update_exp(data) {
      console.log(data);
      this.api_call();
      this.update_expensive_dat.id = data.id;
      this.update_expensive_dat.types = data.expenses_type_id;

      this.update_expensive_dat.amount = data.amount;
      this.update_expensive_dat.expenses_name = data.name;
      this.update_expensive_dat.first_image_update = data.billing_image;
      this.update_expensive_dat.name = this.update_expensive_dat.first_image_update;
      this.update_data_name(this.update_expensive_dat.name);  
      // console.log(this.update_expensive_dat.first_image_update,'sdfhsdkf');
      
    },
    //check last 
    update_data_name(updatename){
      //  console.log(updatename.slice(27),'before update')
      this.update_expensive_dat.name = updatename.substring(updatename.length-4);
        // console.log(this.update_expensive_dat.name,'after update data is here');
    },
    update_firstname(updatename){
          this.first_image_name  = updatename.substring(updatename.length-4);
          console.log(this.first_image_name);
    },
    // get get_expensive
    async get_expensive() {   
        let response = await ApiClass.getNodeRequest(
          "expenses-get?limit=" +
            this.perPageData +
            "&page=" +
            this.page +
            "&expenses_type_id="+
            this.filter_obj.expenses_type +
            "&name=" +
            this.filter_obj.expenses_name +
            "&amount=" +
            this.filter_obj.amount,
          true
        );
        console.log(response ?? []);
        if (response?.data) {
          //  console.log(response);
            this.loadingloader = false;
          this.load = false;
          if (response.data.status_code == "1") {
            console.log(response.data);

            this.show = true;
            this.expensive_data = response.data.data.result ?? [];
            this.length = response.data.data.result.length ?? [];
            this.recordData = response.data.data.count ?? [];
            // console.log( this.recordData ,'record data here');
            // this.update_user_data.role = response.data.message[0].id;
            console.log("expensive datga data", this.expensive_data);
          } else {
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
    check(id, img) {
      console.log(img,"image id here")
      document.getElementById(id).click();
      var x = document.getElementById(id);
      x.onchange = () => {
        var a = document.getElementById(id);
        const [file] = a.files;
        if (file) {
          var b = document.getElementById(img);
          console.log(b,'b is here');
          b.src = URL.createObjectURL(file);
        }
      };
    },
    first(event, var_name) {
      if (var_name == "third_image") {
        this.first_image = event.target.files[0];
         
         this.first_image_name = event.target.files[0].name;
        //  console.log(this.first_image_name,'dshfkhsdk');
         this.update_firstname(this.first_image_name);
        //  this.pdf = this.first_image.name;
      } else if (var_name == "third_image_update") {
        this.update_expensive_dat.first_image_update = event.target.files[0];
        this.update_expensive_dat.name = this.update_expensive_dat.first_image_update.name;
         this.update_data_name(this.update_expensive_dat.name);  
      
      } else {
        console.log(event);
      }
    },
    async get_expensive_types() {
      let response = await ApiClass.getNodeRequest("expenses-type-get", true);
      console.log(response ?? []);
      if (response?.data) {
        //  console.log(response);
        this.load = false;
        if (response.data.status_code == "1") {
          console.log(response.data);

          this.show = true;
          this.expensive_data_type = response.data.data ?? [];
          console.log(this.expensive_data_type,'dhfjhsd');
          // this.length = response.data.data ?? [];
          // this.update_user_data.role = response.data.message[0].id;
          console.log(
            "expensive type data datga data",
            this.expensive_data_type
          );
        } else {
          this.show = false;
        }
      }
    },
    async add_expenses(){
      const result = await this.v$.add_expensive_data.$validate();
      if (!result) {
        this.first_image =  null;
        this.hasSubmitted = true;
        return;
      }
      this.first_image == "clr" ? (this.first_image = null) : "";
      if (this.first_image != null) {
         this.loading = true;
        var formData = new FormData();
        formData.append("expenses_type_id", this.add_expensive_data.type);
        formData.append("amount", this.add_expensive_data.amount);
        formData.append("name", this.add_expensive_data.expenses_name);
        formData.append("billing_image", this.first_image);

        // If Fileds are Valid
        // this.loading = true;
        // Submit Form In Backend
        var header = {
          "Content-Type": "multipart/form-data",
        };

        let response = await ApiClass.postNodeRequest(
          "expenses-create",
          true,
          formData,
          header
        );
        console.log(response, "api expen create");
        if (response?.data) {
          this.loading = false
          // console.log(response);
          this.hasSubmitted = false;
          // this.loading = false;
          // console.log(response.data.status_code,'statusfhkjsdgfkg');
          if (response.data.status_code == "1") {
            this.success(response.data.message);
            this.get_expensive();
            this.$refs.addexpense.click();
            this.resetForm();
            return;
          } else {
            this.failed(response.data.message);
            return;
          }
        }
      }
    },
    resetForm() {
      this.add_expensive_data.type =
        this.add_expensive_data.amount =
        this.add_expensive_data.expenses_name =
          "";
      this.first_image = null;
      this.first_image == null ? (this.first_image = "clr") : this.first_image;

      this.v$.$reset(); // reset validation
    },
    delete_expen_data(id) {
      //  alert(id)
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
          this.delete_expen(id);
        } else {
          return;
        }
      });
    },
    //delete dept
    async delete_expen(id) {
      // alert(id)
      let response = await ApiClass.deleteNodeRequest(
        "expenses-delete?id=" + id,
        true
      );
      console.log(response.data.message);
      if (response?.data) {
        if (response.data.status_code == "1") {
          this.success(response.data.message);
          this.get_expensive();
        }
        if (response.data.status_code == "0") {
          this.failed(response.data.message);
        }
      }
    },
    slice_image(imageupdate){
      this.update_expensive_dat.first_image_update =  imageupdate.slice(27);
      // console.log( this.update_expensive_dat.first_image_update);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    },
    //update data here
    async update_exp(id) {
      //  alert(id)
      // console.log(id);
      const result = await this.v$.update_expensive_dat.$validate();
      if (!result) {
        return;
      }
      if(this.update_expensive_dat.first_image_update.name===undefined){
        console.log('this is file');
        return;
      }      
      if (this.update_expensive_dat.first_image_update != null) {
        this.loadingupdate = true;
        // console.log("hihihi");
        var formData = new FormData();
        formData.append("expenses_type_id", this.update_expensive_dat.types);
        formData.append("amount", this.update_expensive_dat.amount);
        formData.append("name", this.update_expensive_dat.expenses_name);
        formData.append(
          "billing_image",
            this.update_expensive_dat.first_image_update
        );

        // If Fileds are Valid
        // this.loading = true;
        // Submit Form In Backend
        var headers = {
          "Content-Type": "multipart/form-data",
        };
        let response = await ApiClass.updateNodeRequest(
          "expenses-update?id=" + id,
          true,
          formData,
          headers
        );
        if (response?.data) {
          this.loadingupdate = false;
          this.success(response.data.message);
          this.get_expensive();
          document.getElementById('updateexpense').click();
          // console.log(response.data.message);
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

.total-department h5 {
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
  background-color: var(--icon-bg);
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
  /* IE 9 */
  -webkit-transform: scale(1.5);
  /* Safari 3-8 */
  transform: scale(1.3);
}

/* td.billing-icon svg {
  transition: all 1s ease;
} */

/* td.billing-icon svg:hover {
  transform: scale(1.5);
  transition: all 1s ease;
  cursor: pointer;
} */

/* ***************************modal-head****************************** */
.modal-head {
  font-size: var(--fs-5);
  color: var(--white);
}

.modal-input input {
  border: 1px solid var(--input-border);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-size: var(--fs-3);
  color: var(--input-box);
}

.modal-input input:focus {
  box-shadow: none;
}

.modal-input select:focus {
  box-shadow: none;
  border: 1px solid var(--input-border);
}

.modal-input select {
  box-shadow: none;
  font-size: var(--fs-3);
  color: var(--text-box);
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
