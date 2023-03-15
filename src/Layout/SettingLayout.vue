<template>
  <div>
    <DashboardLayout>
      <!-- ***************************************dashbpoard-content************************************************** -->

      <div class="dashbpoard-content px-0 px-md-5 py-4">
        <!-- *******team-heading******* -->
        <div
          class="
            d-flex
            justify-content-between
            align-items-center
            mb-3
            px-3 px-md-0
          "
        >
          <div class="user-head px-3 px-md-0">
            <h2 class="m-0 mb-md-3">Settings :</h2>
          </div>
        </div>
        <!-- candidates-form -->
        <div class="interview-form ">
          <div class="row">
            <div class="col-12 col-md-5 col-xl-4 ">
              <div class="setting-tabs m-3">
              <div class="setting-bar p-2 d-flex align-items-center gap-3">
                <div class="profile-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: var(--navy-blue);"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
                </div>
                <div class="profile-name">
                    <p class=" m-0">{{name}}</p>
                </div>
              </div>
                <ul class="nav nav-pills setting-pills d-block" id="pills-tab" role="tablist">
                  <li class="nav-item setting-item" role="presentation">
                    <button
                      class="nav-link setting-link active pt-3"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                       @click="valid.$reset();"
                     
                    >
                      Profile
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link setting-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                       @click="valid.form.$reset();"
                    >
                      Reset Password
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-md-7 col-xl-8  px-0">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  </div>
</template>

<script>
import DashboardLayout from './DashboardLayout.vue';
export default {
  name: "SettingsView",
  components:{
        DashboardLayout,
  },
  props:['name','valid']
};
</script>

<style scoped>
.dashbpoard-content {
  background-color: var(--hr-bg);
  min-height: calc(100vh - 142px);
}
.interview-form {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 4px;
  background-color: var(--white);
}
.username,  .username1 label {
  font-size: var(--fs-3);
  color: var(--navy-blue);
  padding-bottom: 4px;
  font-weight: bolder;
}
.username label{
  color:var(--navy-blue);
}
.username select,
.username, .username1 input {
  color: var(--text-box);
  font-size: var(--fs-3);

}
.username{
  padding:4px 8px;
}
.username input,.username1 input
.username select,.username1 select:focus {
  box-shadow: none;
  border: 1px solid var(--hr-border);
}
.user-head h2 {
  font-size: var(--fs-4);
  font-weight: 600;
  color: var(--navy-blue);
}
/**********************************submit-btn************************************/
.modal-btn {
  background-color: var(--navy-blue);
  color: var(--white);
  border: transparent;
  border-radius: 4px;
  font-weight: 500;
  border: 2px solid transparent;
  font-size: var(--fs-3);
}
.modal-btn:hover {
  background-color: transparent;
  color: var(--navy-blue);
  border: 2px solid var(--navy-blue);
  border-radius: 4px;
}
/* *********************************************************** */

.setting-list {
  min-height: 40vh;
  background-color: var(--icon-bg);
}
.setting-list li {
  color: var(--navy-blue);
  background-color: none;
  padding: 3px 10px;
}

.profile-icon {
  width: 50px;
  height: 50px;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
}
.password-head h5 {
  font-size: var(--fs-5);
  font-weight: 600;
  color: var(--navy-blue);
  text-decoration-thickness: 2px;
  text-decoration-line: underline;
  text-decoration-style: double;
}
 

/***************************css***********************************/
.setting-bar{
  background-color:#3d4a72;
  border-radius: 4px;
}
.setting-pills{
  color:var(--navy-blue)
}
.setting-link{
  color:var(--navy-blue);
  font-weight:600;
}
.nav-focus:focus, .nav-link:hover {
    color: var(--navy-blue);
}
.setting-pills .setting-link.active {
    color: var(--navy-blue);
    text-decoration: 2px solid underline;
    background-color: transparent;
}

.setting-tabs {
  background-color: var(--icon-bg);
  min-height:370px;
}
.profile-name p{
  color: var(--white);
  font-weight: 600;
}
.username1 input {
    width: 40%;
}
.username input{
  border: 1px solid var(--hr-border);
}
/***************************media responsive**********************************/
@media all and (min-width: 1200px) and (max-width: 1400px) {
  .dashbpoard-content {
    height: calc(100% - 142px);
  }
}
@media all and (min-width: 1025px) and (max-width: 1199px) {
  .dashbpoard-content {
    height: calc(100% - 143px);
  }
     .username1 input {
    width: 90%;
}
}
@media all and (min-width: 992px) and (max-width: 1024px) {
  .dashbpoard-content {
    height: calc(100% - 143px);
  }
   .username1 input {
    width: 90%;
}
}
@media all and (min-width: 768px) and (max-width: 991px) {
  .dashbpoard-content {
    height: calc(100% - 142px);
  }
   .username1 input {
    width: 90%;
}
}
@media all and (min-width: 320px) and (max-width: 767px) {
  .dashbpoard-content {
    height: calc(100% - 110px);
  }
  .username1 input {
    width: 100%;
}
}
</style>