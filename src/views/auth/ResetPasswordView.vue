<template>
<div>
<!-- *******************reset-password*********************** -->

    <section class="login-form">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <div class="outer-box ">
                        <div class="login-page position-relative">
                            <div class="row  m-5 align-items-center">
                                <div class="col-12 col-md-6">
                                    <div class="image-haed d-none d-md-block">
                                        <h4 class="m-0 pt-3">Welcome To Reset </h4>
                                    </div>
                                    <div class="img-form d-none d-md-block">
                                        <img src="@/assets/images/login--page.png" class="img-fluid" alt="img">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-head">
                                        <h4 class="m-0 mb-4 ">Reset Password</h4>
                                    </div>
                            <!-- ***************form***************** -->
                                    <form  class="position-relative" @submit.prevent="otp_verifyyy">
                                        <div class="form-input mb-3">
                                            <input type="text" @keydown="onlyNumbers($event)" v-model="otp" class="form-control border-0" placeholder="Enter Otp here">
                                             <!-- otp resend -->
                    <div class="button d-grid text-center mb-3">
                        <p class="m-0 text-primary" v-if="resend">
                            Don't receive OTP yet?

                            <a href="#" class="link-primary resend_btn text-info" style="font-weight: bold" type="submit" @click.prevent="resendOtp(otp_verify)">Resend</a>
                        </p>
                        <span class="m-0 text-primary">{{ msg }}</span>
                    </div>
                                        </div>
                                        <div class="mb-3 text-danger">
                                                    <span class="error" v-if="v$.otp.$error">{{
                                            v$.otp.$errors[0].$message
                                        }}</span>
                                                </div>
                                          <div class="form-input mb-3 d-flex">
                                            <input :type=type v-model="newpassword" class="form-control border-0" placeholder="New Password">
                                                   <span
                            v-if="type == 'password'"
                            @click="type = 'text'"
                            class="input-group-text border-0"
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
                                              
                                        <div class="mb-3 text-danger">
                                                    <span class="error" v-if="v$.newpassword.$error">{{
                                            v$.newpassword.$errors[0].$message
                                        }}</span>
                                                </div>
                                   
                                        
                                        <div class="form-input mb-3 d-flex">
                                            <input :type=type1 v-model="confirm_pass" class="form-control border-0" placeholder="Confirm Password">
                                            <span
                            v-if="type1 == 'password'"
                            @click="type1 = 'text'"
                            class="input-group-text border-0"
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
                            @click="type1 = 'password'"
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
                                                
                                        <div class="mb-3 text-danger">
                                                    <span class="error" v-if="v$.confirm_pass.$error">{{
                                            v$.confirm_pass.$errors[0].$message
                                        }}</span>
                                                </div>

                                        <!-- <div class="login-btn mb-5">
                                            <button type="submit"  class="btn btn-primary w-100 mb-3">Change Password</button>
                                        </div> -->
                                              <div class="row bank-row justify-content-center">
                                    <div class="col-md-10 col-lg-4 col-xl-4">
                                        <div class="login-btn mb-3">
                            
                              <button v-if="loadingadd == false" type="submit" class="btn btn-primary w-100">
                                                Save
                                            </button>
                                            <button class="btn btn-primary w-100" type="button" v-else>
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
        </div>
    </section>
    <footer class="dashboard-footer">
                                <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class=" footer-content py-3">
                                            <p class="m-0 text-center">2022 &copy; TEQO SOLUTIONS - All Rights Reserved.</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </footer>
</div>
</template>

<script>
import ApiClass from "@/api/api";
import useVuelidate from "@vuelidate/core";
import { required, helpers,minLength,maxLength,sameAs } from "@vuelidate/validators";
export default {
    name: 'ResetPasswordView',
    data(){
        return{
      email:null,
      otp:"",
      type:"password",
      type1:"password",
      resend:false,
      msg:"",
      newpassword:'',
      confirm_pass:'',
      loadingadd:false,
      OtpVerify:''
        }
    },
    
      setup() {
        return {
            v$: useVuelidate(),
        };
    },
     validations() {
        return {
              otp: {
                    required: helpers.withMessage("OTP is required", required),
                    maxLength: helpers.withMessage(
                        "Otp must be of 6 characters",
                        maxLength(6)
                    ),
                    minLength: helpers.withMessage(
                        "Otp must be of 6 characters",
                        minLength(6)
                    ),
                },
            newpassword: {
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
            confirm_pass: {
                required: helpers.withMessage(
                    "Confirm Password number is required",
                    required
                ),
                sameAs: helpers.withMessage(
            "Confirm Password must be same as Password",
            sameAs(this.newpassword)
          ),
            }
            }
     },
    mounted(){
         if (!this.$store.getters.get_is_email) {
            this.$router.replace("/login");
        } else {
            this.email = this.$store.getters.get_is_email;
           this.otp_verify =  this.$store.getters.get_data.data.expired_at;
        //    console.log(this.otp_verify);
             this.countDownTimer(this.otp_verify);
        }
    },
    methods:{
        async otp_verifyyy(){
            console.log('sdhfks')
             const result = await this.v$.$validate();
            if (!result) {
                return;
            }
            this.loadingadd = true;
             let form_data = {
                    email: this.email,
                    otp: this.otp,
                    new_password: this.newpassword,
                    confirm_password:this.confirm_pass
                };
            console.log(form_data);
            let res = await ApiClass.updateNodeRequest(
                    "forget-password",
                    false,
                    form_data
                );
               if(res?.data){
                 this.loadingadd = false;
                console.log(res?.data.status_code);
                if(res?.data.status_code ==1){
                   this.$store.commit('set_is_email', "");
                     this.$store.commit('set_data', []);
                      this.$router.push('login');
                    this.success(res?.data.message);
                    
                }else{
                    this.failed(res?.data.message)
                }
               }
         },
           // OtpOnlyNumbers
        onlyNumbers(event) {
            if (!/^[0-9]+$/.test(event.key)) {
                this.ignoredValue = event.key ? event.key : "";
                var charCode = event.which ? event.which : event.keyCode;
                if (
                    charCode > 31 &&
                    (charCode < 48 || charCode > 57) &&
                    charCode !== 46
                ) {
                    event.preventDefault();
                } else {
                    return true;
                }
            }
        },
          // Timer
        countDownTimer(exp) {
            console.log(exp)
            
            var countDownDate = new Date(exp).getTime();
            if (this.countDown) {
                clearInterval(this.countDown);
            }
            this.countDown = setInterval(() => {
                var now = new Date().getTime();
                // console.log(now);
                var distance = countDownDate - now;
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                this.msg = "Resend OTP in (" + minutes + "m" + ":" + seconds + "s)";
                if (distance < 0) {
                    clearInterval(this.countDown);
                    this.resend = true;
                    this.msg = "";
                }
            }, 1000);
        },
           //  ResendOtp
        async resendOtp() {
            let form_data = {
                email: this.email,
                
            };
            let result = await ApiClass.postRequest("sendMail", false, form_data);
            console.log(result)
            if (result.data.status_code == 1) {
                 this.countDownTimer(result.data.data.expired_at);
                // 
                this.success(result.data.message);
                this.resend = false;
            } else {
                this.failed(result.data.message);
            }
        },
    }
}

</script>

<style scoped>
/*******************header***************************/
.login-page{
}
.login-navbar{
    padding: 17px 10px;
    background-color: var(--navy-blue);
}
.logout-button button{
    border-radius: 4px;
    background-color: var(--white);
    font-weight: 300;
    font-size:var(--fs-3) ;
    color: var(--navy-blue);
    border: 2px solid transparent;
}
.logout-button button:hover{
    background-color: transparent;
    border:2px solid var(--navy-blue);
    color: var(--white);
    cursor: pointer;
}
/*************************************/
.login-form{
    background-color:var(--hr-bg);
   height: 100vh;
   align-items: center;
    display: flex;
}
.outer-box {
    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
    position: relative;
    border-radius: 4px;
    min-height: 650px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-haed h2 {
    color: var(--navy-blue);
}

.login-page {
    background-color: var(--white);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.image-head h2 {
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

.image-haed h2 {
    color: var(--navy-blue);
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
.login-page:after {
    position: absolute;
    left: -52px;
    content: '';
    background-image: url(@/assets/images/Capture2.png);
    background-repeat: no-repeat;
    height: 258px;
    width: 650px;
    margin: auto;
    bottom: -139px;
}
.login-page:before {
    position: absolute;
    top: -75px;
    right: -105px;
    content: '';
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
}
/*********footer***********/
.dashboard-footer{
    background: var(--navy-blue);
}
.dashboard-footer p{
    color: var(--white);
    font-size: var(--fs-3);
}
/****************************responsive-media**********************************/
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
@media all and (min-width:320px) and (max-width:767px) {
    .form-head h4 {
        font-size: 19px;
    }
    .login-page:before{
    display: none;
}
.login-page:after{
    display: none;
}
.login-form{
    height:calc(100vh- 45px);
}
}
</style>
