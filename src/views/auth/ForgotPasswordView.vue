<template>
    <div>
    <!-- *****************forget-password************* -->

        <section class="login-form p-0">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-10">
                        <div class="outer-box">
                           <div class="login-page position-relative">
                               <div class="row  m-5 align-items-center">
                                   <div class="col-12 col-md-6">
                                   <div class="image-haed d-none d-md-block">
                                        <h4 class="m-0 pt-3">Welcome to Forgot Page</h4>
                                    </div>
                                       <div class="img-form d-none d-md-block">
                                          <img src="@/assets/images/login--page.png" class="img-fluid" alt="img">         
                                       </div>
                                   </div>
                                   <div class="col-12 col-md-6">
                                       <div class="form-head">
                                        <h4 class="m-0 mb-4  ">Recover Your Password</h4>
                                       </div>
                                       <!-- *******************form************ -->
                                           <form  @submit.prevent="forgetPass">
                                               <div class="form-input mb-4">
                                                 <input type="text" v-model="posts.email" class="form-control border-0" placeholder="email address">
                                                 <span class="text-danger" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
                                               </div>
                                               <!-- <div class="login-btn mb-3">
                                                   <button type="submit"  class="btn btn-primary w-100 ">Send Me Email</button>
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
import useVuelidated from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';
import { reactive, computed } from '@vue/reactivity';
    export default {
        name: 'ForgotPasswordView',
        data(){
          return {
            loadingadd :false,
          }
        },
        mounted(){
          if(localStorage.getItem('token')){
            this.$router.push('/')
          }
        },
            setup() {
        const posts = reactive({
            email: "",
        });
        const rules = computed(() => {
            return {
                email: {
                    required: helpers.withMessage('Email is required', required),
                    email: helpers.withMessage('Email must be a valid email address', email)
                },
            };
        });
        const v$ = useVuelidated(rules, posts);
        return {
            posts,
            v$
        };
    },
        methods:{
                 // Forget Password
        async forgetPass() {
            const result = await this.v$.$validate();
            if (!result) {
                return;
            } 
            this.loadingadd = true;
                // this.refs.reset;
                // this.loading = true;
                let res = await ApiClass.postNodeRequest('sendMail',false,this.posts);
                console.log(res.data.status_code);
                if(res?.data){
                    this.loadingadd = false;
                if (res.data.status_code ==1) {
                    this.success(res.data.message);
                     this.$store.commit('set_is_email', this.posts.email);
                     this.$store.commit('set_data', res.data);
                    this.$router.push('reset');
                    this.loading = false;
                    // this.$refs.reset.reset();   
                  this.posts.email="";

                } else {
                    this.loading = false; 
                    // this.$refs.reset.reset();
                    this.failed(res?.data?.message);
                }
                }
            
        }
        }
    }
</script>

<style scoped>
/*******************header***************************/
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
/****************************/
.login-form{
    background-color:var(--hr-bg);
   height: 95vh;
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
.login-page{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: var(--white);
}
.image-head h2{
    color: var(--navy-blue);
}
.form-input input{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    font-size: 14px;
    padding: 9px 10px;
}
.already-account p{
    color: var(--text-color);
    font-weight: 500;
    font-size: 14px;
}
.form-head h2{
    color: var(--navy-blue);
}
.already-account p span{
    font-weight: 500;
    font-size: 14px;
}
.password-forget{
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
    bottom: -126px;
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
.login-btn button{
    background-color: var(--navy-blue);
    border:transparent
}
.login-btn button:focus{
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
@media all and (min-width:320px) and (max-width:767px){
.form-head h4{
    font-size: 19px;
}
.login-page:before{
    display: none;
}
.login-page:after{
    display: none;
}
.login-form{
    height: calc(100vh - 45px);
}
}
</style>