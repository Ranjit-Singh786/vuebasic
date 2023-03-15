<template>
  <div>
    <!-- **********************login-form************************* -->
    <section class="login-form">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="outer-box">
              <div class="login-page position-relative">
                <div class="row m-5 align-items-center">
                  <div class="col-12 col-md-6">
                    <div class="image-haed d-none d-md-block">
                      <h4 class="m-0 pt-3">Welcome Login Page</h4>
                    </div>
                    <div class="img-form d-none d-md-block">
                      <img
                        src="@/assets/images/login--page.png"
                        class="img-fluid"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-head">
                      <h4 class="m-0 mb-4">Login Account Now</h4>
                    </div>
                    <!-- **************form******************** -->
                    <form
                      class="position-relative"
                      @submit.prevent="login_admin"
                    >
                      <div class="form-input mb-4">
                        <input
                          type="text"
                          v-model="posts.email"
                          class="form-control border-0"
                          placeholder="Enter email"
                        />
                        <span class="text-danger" v-if="v$.email.$error">{{
                          v$.email.$errors[0].$message
                        }}</span>
                      </div>

                      <div class="form-input">
                        <div class="input-group">
                          <input
                            :type="type"
                            v-model="posts.password"
                            class="form-control border-0"
                            placeholder="Password"
                          />
                          <span
                            v-if="type == 'password'"
                            @click="type = 'text'"
                            class="input-group-text"
                            id="basic-addon1"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              style="
                                fill: rgba(48, 62, 103, 1);
                                transform: ;
                                msfilter: ;
                              "
                            >
                              <path
                                d="M8.073 12.194 4.212 8.333c-1.52 1.657-2.096 3.317-2.106 3.351L2 12l.105.316C2.127 12.383 4.421 19 12.054 19c.929 0 1.775-.102 2.552-.273l-2.746-2.746a3.987 3.987 0 0 1-3.787-3.787zM12.054 5c-1.855 0-3.375.404-4.642.998L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.298-3.298c2.638-1.953 3.579-4.637 3.593-4.679l.105-.316-.105-.316C21.98 11.617 19.687 5 12.054 5zm1.906 7.546c.187-.677.028-1.439-.492-1.96s-1.283-.679-1.96-.492L10 8.586A3.955 3.955 0 0 1 12.054 8c2.206 0 4 1.794 4 4a3.94 3.94 0 0 1-.587 2.053l-1.507-1.507z"
                              ></path></svg
                          ></span>
                          <span
                            v-else
                            @click="type = 'password'"
                            class="input-group-text"
                            id="basic-addon1"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              style="
                                fill: rgba(48, 62, 103, 1);
                                transform: ;
                                msfilter: ;
                              "
                            >
                              <path
                                d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 11c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"
                              ></path>
                              <path
                                d="M12 10c-1.084 0-2 .916-2 2s.916 2 2 2 2-.916 2-2-.916-2-2-2z"
                              ></path></svg
                          ></span>
                        </div>
                        <span class="text-danger" v-if="v$.password.$error">{{
                          v$.password.$errors[0].$message
                        }}</span>
                      </div>
                      <!-- <div class="form-input mb-2">
                                                     <input :type="type"  v-model="posts.password" class="form-control border-0" placeholder="Password">
                                                     <span  class="text-danger" v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</span>
                                                   </div> -->

                      <div class="mb-3 forgot-password text-end">
                        <span
                          ><router-link
                            to="/forgot"
                            class="
                              text-decoration-none
                              password-forget
                              fw-bolder
                            "
                            >Forgot Password ?</router-link
                          ></span
                        >
                      </div>
                      <div class="login-btn mb-3">
                        <div class="my-5 text-center">
                          <button
                            v-if="loading == false"
                            type="submit"
                            class="btn btn-primary w-100 py-2 shadow-none"
                          >
                            Login
                          </button>
                          <button
                            class="btn btn-primary w-100 py-2 shadow-none"
                            type="button"
                            v-else
                          >
                            <span
                              class="
                                spinner-border spinner-border-sm
                                text-light
                              "
                              role="status"
                              aria-hidden="true"
                            ></span>
                          </button>
                        </div>
                      </div>
                      <!-- <div class="already-account text-center">
                                                      <p class="m-0"> If you are not a member ? <span><router-link to="/signup" class="text-decoration-none signup-btn fw-bolder">Sign Up</router-link></span></p>
                                                   </div> -->
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="dashboard-footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="footer-content py-3">
              <p class="m-0 text-center">
                2022 &copy; TEQO SOLUTIONS - All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, helpers, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import ApiClass from "@/api/api";
export default {
  name: "LoginView",
  data() {
    return {
      type: "password",
      showPassword: false,
      loading: false,
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
  },
  setup() {
    const posts = reactive({
      email: "admin@yopmail.com",
      password: "Admin@123",
    });
    const rules = computed(() => {
      return {
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
              /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(value)
          ),
        },
      };
    });
    const v$ = useVuelidate(rules, posts);
    return {
      posts,
      v$,
    };
  },
  mounted() {
    if (localStorage.getItem("token")) {
      this.$router.push("/");
    }
  },
  methods: {
    async login_admin() {
      const result = await this.v$.$validate();
      // console.log(result);
      if (!result) {
        return;
      } else {
        let formData = {
          email: this.posts.email,
          password: this.posts.password,
        };
        this.loading = true;
        //  console.log(data);
        let response = await ApiClass.postNodeRequest("login", false, formData);
        //   console.log(response.data.data.token);
        if (response?.data) {
          this.loading = false;
          if (response.data.status_code == 1) {
            console.log(response.data.token);
            if (response.data.data.token) {
              localStorage.setItem("token", response.data.data.token);
              localStorage.setItem(
                "user",
                JSON.stringify(response.data.data.user)
              );
              this.$store.commit("set_is_Login", true);
              this.get_status();
              this.$router.push("/");
              if (localStorage.getItem("token")) {
                this.$store.commit("set_is_Login", true);
              }
            }
            this.success(response.data.message);
          } else {
            this.failed(response.data.message);
            this.loading = false;
          }
        }
      }
    },
       //get user
      async get_status(){
      let response = await ApiClass.getNodeRequest("attendance-get-show", true);

      if (response?.data) {
        this.load = false;
        if (response?.data?.status_code == "1") {
        
          console.log(response.data);
            //  this.status_data = response.data.data ?? [];
             this.$store.commit("set_status", response.data.data ?? []);
             
            //  console.log(this.$store.getters.get_status);
            //  console.log(this.status_data,'status data'); 
        }
        else{
          this.show = false;
        }
      }
      
    },
  },
};
</script>

<style scoped>
/*******************header***************************/
.login-navbar {
  padding: 17px 10px;
  background-color: var(--navy-blue);
}
.logout-button button {
  border-radius: 4px;
  background-color: var(--white);
  font-weight: 300;
  font-size: var(--fs-3);
  color: var(--navy-blue);
  border: 2px solid transparent;
}
.logout-button button:hover {
  background-color: transparent;
  border: 2px solid var(--navy-blue);
  color: var(--white);
  cursor: pointer;
}
/*************************************/
.login-form {
  background-color: var(--hr-bg);
  height: 100vh;
  align-items: center;
  display: flex;
}
.outer-box {
  position: relative;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 650px;
  align-items: center;
}
.login-page {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: var(--white);
}
.image-haed h2 {
  color: var(--navy-blue);
}
.form-input input {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-size: 14px;
  padding: 9px 10px;
}
.form-head h2 {
  color: var(--navy-blue);
}
.already-account p {
  color: var(--text-color);
  font-weight: 500;
  font-size: 14px;
}
.signup-btn {
  font-weight: 600;
  font-size: 14px;
  color: var(--navy-blue);
}
.password-forget {
  font-size: 14px;
  font-weight: 500;
  color: var(--navy-blue);
}

.login-page:after {
  position: absolute;
  left: -52px;
  content: "";
  background-image: url(@/assets/images/Capture2.png);
  background-repeat: no-repeat;
  height: 258px;
  width: 650px;
  margin: auto;
  bottom: -138px;
}
.login-page:before {
  position: absolute;
  top: -75px;
  right: -105px;
  content: "";
  background-image: url(@/assets/images/Capture1.png);
  background-repeat: no-repeat;
  height: 212px;
  width: 650px;
  margin: auto;
}
.login-btn button {
  background-color: var(--navy-blue);
  border: transparent;
}
.login-btn button:focus {
  box-shadow: none;
  background-color: var(--navy-blue);
}
/*********footer***********/
.dashboard-footer {
  background: var(--navy-blue);
}
.dashboard-footer p {
  color: var(--white);
  font-size: var(--fs-3);
}
.input-group-text {
  background-color: var(--white);
  border: unset;
}
/****************************responsive-media**********************************/
@media all and (min-width: 1200px) and (max-width: 1400px) {
  .login-form {
    height: calc(100vh - -133px);
  }
}
@media all and (min-width: 1025px) and (max-width: 1199px) {
  .login-form {
    height: calc(100vh - -133px);
  }
}
@media all and (min-width: 992px) and (max-width: 1024px) {
  .login-form {
    height: calc(100vh - -133px);
  }
}
@media all and (min-width: 768px) and (max-width: 991px) {
  .login-form {
    height: calc(100vh - -93px);
  }
}
@media all and (min-width: 320px) and (max-width: 767px) {
  .form-head h4 {
    font-size: 19px;
  }
  .login-page:before {
    display: none;
  }
  .login-page:after {
    display: none;
  }
  .login-form {
    height: calc(100vh - 45px);
  }
}
</style>