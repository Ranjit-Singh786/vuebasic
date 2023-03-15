<template>
  <div>
    <!-- ***************sign-up****************** -->
    <section class="login-form">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="outer-box">
              <div class="login-page">
                <div class="row align-items-center">
                  <div class="col-12 col-md-6">
                    <div class="px-3 py-3 py-md-5">
                      <div class="image-haed d-none d-md-block">
                        <h4 class="m-0 pt-3">Welcome To Sign Up</h4>
                      </div>
                      <div class="img-form d-none d-md-block">
                        <img
                          src="@/assets/images/login--page.png"
                          class="img-fluid"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="px-3 py-3 py-md-5">
                      <div class="form-head">
                        <h4 class="m-0 mb-4">Sign Up Here</h4>
                      </div>
                      <!-- ****************form****************** -->
                      <form class="position-relative" @submit.prevent="register_user">
                        <div class="form-input mb-4">
                          <input
                            type="text"
                            v-model.trim="posts.firstname"
                            class="form-control border-0"
                            placeholder="Enter full name"
                          />
                          <span  class="text-danger" v-if="v$.firstname.$error">{{ v$.firstname.$errors[0].$message }}</span>
                        </div>
                      
                        <div class="form-input mb-4">
                          <input
                            type="text"
                            class="form-control border-0"
                            v-model="posts.mobile"
                            placeholder="Mobile Number"
                          />
                          <span  class="text-danger" v-if="v$.mobile.$error">{{ v$.mobile.$errors[0].$message }}</span>
                        </div>
                        <div class="form-input mb-4">
                          <input
                            type="email"
                            v-model="posts.email"
                            class="form-control border-0"
                            placeholder="Email Address"
                          />
                           <span  class="text-danger" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
                        </div>
                        <div class="form-input mb-4">
                          <input
                            type="password"
                            v-model="posts.password"
                            class="form-control border-0"
                            placeholder="Password"
                          />
                          <span  class="text-danger" v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</span>
                        </div>
                        <div class="form-input mb-4">
                          <input
                            type="password"
                            v-model="posts.confirm_password"
                            class="form-control border-0"
                            placeholder="Confirm Password"
                          />
                          <span  class="text-danger" v-if="v$.confirm_password.$error">{{ v$.confirm_password.$errors[0].$message }}</span>
                        </div>
                        <div class="login-btn mb-3">
                          <button type="submit" class="btn btn-primary w-100">
                            Sign Up
                          </button>
                        </div>
                        <div class="already-account text-center">
                          <p class="">
                            Already have an account then
                            <span
                              ><router-link
                                to="/login"
                                class="
                                  text-decoration-none
                                  signup-btn
                                  fw-bolder
                                "
                                >Sign In</router-link
                              ></span
                            >
                          </p>
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
import { required, email, helpers, sameAs, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  name: "SignupView",
  data() {
    return {
      type: "password",
      type1: "password",
    };
  },
  setup() {
     const posts = reactive({
            firstname: "",
            mobile: "",
            email: "",
            password: "",
            confirm_password: "",
            // referral:"",
            // terms_condition:""
        });
        const rules = computed(() => {
            return {
                firstname: {
                    required: helpers.withMessage( "Full name is required", required ),
                    minLength: helpers.withMessage( "Full name must have atleast 5 letters",minLength(4) ),
                },
                 mobile: {
                    required: helpers.withMessage( "Mobile no is required", required ),
                    minLength: helpers.withMessage( "Mobile no must have atleast 5 letters",minLength(4) ),
                },                
                email: {
                    required: helpers.withMessage( "Email is required", required ),
                    email: helpers.withMessage( "Email must be a valid email address",email ),
                },
                password: {
                    required: helpers.withMessage( "Password is required", required ),
                    minLength: helpers.withMessage( "Password must have atleast 8 letters",minLength(8) ),
                    regex: helpers.withMessage(() => "The password  an uppercase, lowercase, number and special character",
                                               (value) => /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(value)),
                },
                confirm_password: {
                    required: helpers.withMessage( "Confirm Password is required", required ),
                    sameAs: helpers.withMessage( "Confirm Password must be same as Password",sameAs(posts.password) ),
                },
                // referral: {
                //      minLength: helpers.withMessage( "Referral Code must be 10 character",minLength(10) ),
                //     //  maxLength: helpers.withMessage( "Referral Code cant be more than 10 character",maxLength(10) ),

                // },
                // terms_condition:{
                //     sameAs: helpers.withMessage( "Terms and conditions are required.", sameAs(true) ),
                // }
            };
        });
        const v$ = useVuelidate(rules, posts);
        return {
            posts,
            v$,
        };
  },
  methods: {
    register_user() {
        const result =  this.v$.$validate();
            if (!result) {
                return;
            }
        let data ={
             firstname:this.posts.firstname,
             phone:this.posts.mobile,
             email:this.posts.email,
             password:this.posts.password,
        }
        console.log(data,'data is here');
      
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
  min-height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-page {
  background-color: var(--white);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: relative;
}
.login-page:after {
  position: absolute;
  left: -52px;
  content: "";
  background-image: url(@/assets/images/Capture.png);
  background-repeat: no-repeat;
  height: 258px;
  width: 650px;
  margin: auto;
  bottom: -126px;
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
.image-haed h2 {
  color: var(--navy-blue);
}
.form-input input {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-size: 14px;
  padding: 9px 10px;
}
.already-account p {
  color: var(--text-color);
  font-weight: 500;
  font-size: 14px;
}
.already-account p span {
  font-weight: 500;
  font-size: 14px;
}
.password-forget {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color);
}
.form-head h2 {
  color: var(--navy-blue);
}

.login-btn button {
  border: transparent;
  background-color: var(--navy-blue);
}
.login-btn button:focus {
  box-shadow: none;
}
.signup-btn {
  color: var(--navy-blue);
}
/*********footer***********/
.dashboard-footer {
  background: var(--navy-blue);
}
.dashboard-footer p {
  color: var(--white);
  font-size: var(--fs-3);
}
/******************responsive media***********************/
@media all and (min-width:1200px) and (max-width:1400px){
       .login-form{
    height: calc(100vh - -133px);
}
}
@media all and (min-width:1025px) and (max-width:1199px){
   .login-form{
    height: calc(100vh - -133px);
}
}
@media all and (min-width:992px) and (max-width:1024px){
    .login-form{
    height: calc(100vh - -133px);
}
}
@media all and (min-width:768px) and (max-width:991px){
.login-form{
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
  .login-form{
    height:calc(100vh - 45px)
  }
}
</style>