<template>
    <div>
    <!-- ********************verification********************* -->
        <section class="login-form ">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-10 ">
                        <div class="outer-box">
                           <div class="login-page position-relative">
                               <div class="row m-5 align-items-center">
                                   <div class="col-12 col-md-12">
                                       <div class="form-head ">
                                        <h4 class="m-0 mb-4  text-center">Redirecting to page</h4>
                                       </div>
                                       <!-- ***************form************** -->
                                           <form class="position-relative">
                                               <div class="form-spinner d-flex justify-content-center ">
                                                <div class="spinner-border  mt-5" role="status">
                                                    <span class="visually-hidden">Loading...</span>
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
    export default {
        name: 'VerificationView',
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
/*************************************/
.outer-box {
    position: relative;
    border-radius: 4px;
    min-height: 650px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.login-form{
    background-color:var(--hr-bg) ;
    height: calc(100vh - 53px);
}
    
.image-haed{
    color: 100vh;
}
.login-page{
    background-color: var(--white);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.form-head h2{
    color: var(--navy-blue);
}

.form-spinner .spinner-border{
    color: var(--navy-blue);
}
.form-head {
    color: var(--navy-blue);
}
/* .login-page:after {
    position: absolute;
    left: -52px;
    content: '';
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
    content: '';
    background-image: url(@/assets/images/Capture1.png);
    background-repeat: no-repeat;
    height: 212px;
    width: 650px;
    margin: auto;
} */
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
