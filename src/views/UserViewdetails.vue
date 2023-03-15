<template>
  <div>
    <router-view />
    <div class="user-detail my-4">
      <div class="container-fluid">
        <div class="user">
          <div class="row">
            <div class="col-md-12">
              <div class="d-flex justify-content-between align-items-center">
                    <div class="user-head mb-3">
                <h2 class="m-0 mt-5 px-3">Candidate Detail:</h2>
              </div>
                </div>
              <div class="outer-box my-3">
                <div class="inner-box ">
                  <div class="row">
                    <div class="col-md-4 profile">
                      <div class="profile-1 p-3">
                        <div class="user-head pt-3">
                          <h2 class="m-0 mb-3">Basic Information:</h2>
                        </div>

                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Name:</h5>
                          </div>
                          <div class="name-info">
                            <p class="m-0">{{ userobj.name }}</p>
                          </div>
                        </div>
                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Gender:</h5>
                          </div>
                          <div class="name-info">
                            <p class="m-0">{{ userobj.gender }}</p>
                          </div>
                        </div>
                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Marital status:</h5>
                          </div>
                          <div class="name-info">
                            <p class="m-0">{{ userobj.marital_status }}</p>
                          </div>
                        </div>
                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Date of birth:</h5>
                          </div>
                          <div class="name-info">
                            <p class="m-0">{{ userobj.date_of_birth }}</p>
                          </div>
                        </div>
                        <div
                          class="basic-content d-flex align-items-center mb-4 gap-3"
                        >
                          <div class="name">
                            <h5 class="m-0">Email:</h5>
                          </div>
                          <div class="name-info">
                            <p class="m-0">{{ userobj.email }}</p>
                          </div>
                        </div>
                        </div>
                        </div>
                    <div class="col-md-8">
                      <div class="profile-1 p-3">
                        <div class="user-head pt-3">
                          <h2 class="m-0 mb-3">Basic Quaries:</h2>
                        </div>
                        <div class="row">
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Do you smoke:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">{{ userobj.do_you_smoke }}</p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Do you consume alcohol:</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ userobj.do_you_consume_alcohol }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">
                                  Do you have a police record :
                                </h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ userobj.do_you_have_a_police_record }}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Differently Abled :</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ userobj.differently_abled }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">
                                  How did you learn about the opening ?
                                </h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{
                                    userobj.how_did_you_learn_about_the_opening
                                  }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div
                              class="basic-content d-flex align-items-center mb-3 gap-3"
                            >
                              <div class="name">
                                <h5 class="m-0">Current position :</h5>
                              </div>
                              <div class="name-info">
                                <p class="m-0">
                                  {{ userobj.current_position }}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  name: "UserdetailsComponent",
  data() {
    return {
      userobj: [],
      id:"",
    };
  },
    watch: {
    // Note: only simple paths. Expressions are not supported.
    '$route.fullPath': function(data) {
      console.log(data)
    //    if(data.includes('upload')==true){
    //      this.$store.commit('setshow_doc',true);
    //      }else{
           
    //        this.$store.commit('setshow_doc',false);
    //    }
  } 
   },
  mounted() {
    this.userobj = this.$store.getters.getuserdata;
    this.id = this.userobj.id;
    if(this.$route.fullPath.includes('profile')){
        this.$store.commit('set_usershow_state',true);
    }
  },
  methods: {
  },
};
</script>

<style scoped>
/*.user{
    min-height:100vh;
    display:flex;
    align-items: center;
    justify-content: center;
}*/
.user-head h2 {
  font-size: var(--fs-4);
  font-weight: 600;
  color: var(--navy-blue);
  text-decoration: 2px double underline;
  text-decoration-color: var(--navy-blue);
}

.outer-box {
  background-color: var(--white);
  border-radius: 5px;
  transition: all 1s ease;
 box-shadow:rgb(179 169 169 / 35%) 0px 5px 15px;
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.inner-box {
  background-color: var(--white);
}

.name h5 {
  color: var;
  color: var(--navy-blue);
  font-size: 14px;
  font-weight: 700;
}

.name-info p {
  color: var(--text-box);
  font-size: var(--fs-3);
  font-weight: 600;
}

.profile {
  border-right: 1px solid var(--text-box);
}
.upload-btn a{
    background-color: var(--navy-blue);
    color:var(--white);
    font-weight: 600;
    font-size: var(--fs-4);
    border-radius: 5px;
}
</style>
