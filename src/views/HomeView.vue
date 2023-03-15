<template>
    <div>
        <DashboardLayout>
<!-- ***************************************dashbpoard-content************************************************** -->
                          
<div class="container-fluid px-0">
    <div class="dashbpoard-content py-2">
<!-- *************************users**************************** -->
<div class="user-content  py-4 px-4">
        <!-- dashboard-heading -->
            <div class="user-head">
                <h2 class="m-0 mb-3 ">Users :</h2>
            </div>
            <!-- dashboard-content -->
            <div class="row">
                <div class="col-md-4">
                    <router-link to="/user" class="text-decoration-none">
                        <div class="list-content mt-3 mt-md-0">
                        <div class="total-user d-flex justify-content-between align-items-center">
                            <div  class="number-user">
                                <label class="pb-1 mb-2">Total User</label>
                                <p  v-if="!loadingloader"  class="m-0 ">{{api_data.total_user}}</p>
                                <p v-else><Skeletor height="10" width="200" pill :shimmer="true"/></p>
                            </div>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: var(--navy-blue);"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg></span>
                        </div>
                    </div>
                    </router-link>
                </div>
                <div class="col-md-4">
                    <router-link to="/designation" class="text-decoration-none">
                        <div class="list-content mt-3 mt-md-0">
                        <div class="total-user d-flex justify-content-between align-items-center">
                            <!-- <div v-if="!loadingloader">
                             <div  v-for="(index) in 1" :key="index" class="my-4">
                                             <Skeletor height="15" width="200" pill :shimmer="true"/>
                                            </div>
                                            </div> -->
                            <div   class="number-user">
                                <label class="pb-1 mb-2">Total Designation</label>
                                <p v-if="!loadingloader" class="m-0">{{api_data.total_designation}}</p>
                                <p v-else><Skeletor height="10" width="200" pill :shimmer="true"/></p>
                            </div>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 384 512" style="fill: var(--navy-blue)"><path d="M336 0C362.5 0 384 21.49 384 48V464C384 490.5 362.5 512 336 512H240V432C240 405.5 218.5 384 192 384C165.5 384 144 405.5 144 432V512H48C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336zM64 272C64 280.8 71.16 288 80 288H112C120.8 288 128 280.8 128 272V240C128 231.2 120.8 224 112 224H80C71.16 224 64 231.2 64 240V272zM176 224C167.2 224 160 231.2 160 240V272C160 280.8 167.2 288 176 288H208C216.8 288 224 280.8 224 272V240C224 231.2 216.8 224 208 224H176zM256 272C256 280.8 263.2 288 272 288H304C312.8 288 320 280.8 320 272V240C320 231.2 312.8 224 304 224H272C263.2 224 256 231.2 256 240V272zM80 96C71.16 96 64 103.2 64 112V144C64 152.8 71.16 160 80 160H112C120.8 160 128 152.8 128 144V112C128 103.2 120.8 96 112 96H80zM160 144C160 152.8 167.2 160 176 160H208C216.8 160 224 152.8 224 144V112C224 103.2 216.8 96 208 96H176C167.2 96 160 103.2 160 112V144zM272 96C263.2 96 256 103.2 256 112V144C256 152.8 263.2 160 272 160H304C312.8 160 320 152.8 320 144V112C320 103.2 312.8 96 304 96H272z"/></svg></span>
                        </div>
                    </div>
                    </router-link>
                </div>
                <div class="col-md-4">
                    <router-link to="/team" class="text-decoration-none">
                        <div class="list-content mt-3 mt-md-0">
                            <div class="total-user d-flex justify-content-between align-items-center">
                                <!-- <div v-if="!!loadingloader">
                             <div  v-for="(index) in 1" :key="index" class="my-4">
                                             <Skeletor height="15" width="200" pill :shimmer="true"/>
                                            </div>
                                            </div> -->
                                <div class="number-user">
                                    <label class="pb-1  mb-2">Total Team</label>
                                    <p v-if="!loadingloader"  class="m-0">{{api_data.total_team}}</p>
                                     <p v-else><Skeletor height="10" width="200" pill :shimmer="true"/></p>
                                </div>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 640 512" style="fill: var(--navy-blue)"><path d="M211.2 96C211.2 131.3 182.5 160 147.2 160C111.9 160 83.2 131.3 83.2 96C83.2 60.65 111.9 32 147.2 32C182.5 32 211.2 60.65 211.2 96zM32 256C32 220.7 60.65 192 96 192H192C204.2 192 215.7 195.4 225.4 201.4C188.2 216.5 159.8 248.6 149.6 288H64C46.33 288 32 273.7 32 256V256zM415.9 200.6C425.3 195.1 436.3 192 448 192H544C579.3 192 608 220.7 608 256C608 273.7 593.7 288 576 288H493.6C483.2 247.9 453.1 215.4 415.9 200.6zM391.2 226.4C423.3 233.8 449.3 257.3 460.1 288C463.7 298 465.6 308.8 465.6 320C465.6 337.7 451.3 352 433.6 352H209.6C191.9 352 177.6 337.7 177.6 320C177.6 308.8 179.5 298 183.1 288C193.6 258.3 218.3 235.2 249.1 227.1C256.1 225.1 265.1 224 273.6 224H369.6C377 224 384.3 224.8 391.2 226.4zM563.2 96C563.2 131.3 534.5 160 499.2 160C463.9 160 435.2 131.3 435.2 96C435.2 60.65 463.9 32 499.2 32C534.5 32 563.2 60.65 563.2 96zM241.6 112C241.6 67.82 277.4 32 321.6 32C365.8 32 401.6 67.82 401.6 112C401.6 156.2 365.8 192 321.6 192C277.4 192 241.6 156.2 241.6 112zM608 416C625.7 416 640 430.3 640 448C640 465.7 625.7 480 608 480H32C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416H608z"/></svg></span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
<!-- *************************users**************************** -->
<!-- -------------------------expensive----------------------------- -->
        <div class="user-content  p-4">
        <!-- dashboard-heading -->
            <div class="user-head">
                <h2 class="m-0 mb-3">Expenses :</h2>
            </div>
            <!-- dashboard-content -->
            <div class="row">
                <div class="col-md-4">
                    <router-link to="/assets" class="text-decoration-none">
                        <div class="list-content mt-3 mt-md-0">
                            <div class="total-user d-flex justify-content-between align-items-center">
                                <!-- <div v-if="!!loadingloader">
                             <div  v-for="(index) in 1" :key="index" class="my-4">
                                             <Skeletor height="15" width="200" pill :shimmer="true"/>
                                            </div>
                                            </div> -->
                            <div class="number-user">
                                    <label class="pb-1  mb-2">Total Assets</label>
                                    <p v-if="!loadingloader" class="m-0 ">{{'₹'+api_data.assets_amount}}</p>
                                    <p v-else><Skeletor height="10" width="200" pill :shimmer="true"/></p>
                                </div>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: var(--navy-blue);"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6h16v2H4V6zm0 12v-6h16.001l.001 6H4z"></path><path d="M6 14h6v2H6z"></path></svg></span>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-4">
                    <router-link to="/expensive" class="text-decoration-none">
                        <div class="list-content mt-3 mt-md-0">
                            <div class="total-user d-flex justify-content-between align-items-center">
                                <!-- <div v-if="!!loadingloader">
                             <div  v-for="(index) in 1" :key="index" class="my-4">
                                             <Skeletor height="15" width="200" pill :shimmer="true"/>
                                            </div>
                                            </div> -->
                            <div class="number-user">
                                    <label class="pb-1  mb-2">Total Expenses</label>
                                    <p v-if="!loadingloader" class="m-0 ">{{'₹'+api_data.expenses_amount}}</p>
                                   <p v-else><Skeletor height="10" width="200" pill :shimmer="true"/></p>
                                </div>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: var(--navy-blue);"><path d="M20 7h-4V4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H4c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9c0-1.103-.897-2-2-2zM4 11h4v8H4v-8zm6-1V4h4v15h-4v-9zm10 9h-4V9h4v10z"></path></svg></span>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-4">
                    <router-link to="/expensive" class="text-decoration-none">
                        <div class="list-content mt-3 mt-md-0">
                            <div class="total-user d-flex justify-content-between align-items-center">
                                <!-- <div v-if="!!loadingloader">
                             <div  v-for="(index) in 1" :key="index" class="my-4">
                                             <Skeletor height="15" width="200" pill :shimmer="true"/>
                                            </div>
                                            </div> -->
                                <div class="number-user">
                                    <label class="pb-1  mb-2">Remain Balance</label>
                                    <p v-if="!loadingloader" class="m-0 " >{{'₹'+api_data.remain_balance}}</p>
                                       <p v-else><Skeletor height="10" width="200" pill :shimmer="true"/></p>
                                </div>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: var(--navy-blue);"><path d="M7 2H5v3H2v2h3v3h2V7h3V5H7V2zm7 3h8v2h-8zm0 10h8v2h-8zm0 4h8v2h-8zm-5.71-4.71L6 16.59l-2.29-2.3-1.42 1.42L4.59 18l-2.3 2.29 1.42 1.42L6 19.41l2.29 2.3 1.42-1.42L7.41 18l2.3-2.29-1.42-1.42z"></path></svg></span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
<!-- -------------------------expensive----------------------------- -->
<!-- **************************************Candidates************************************** -->
        <div class="user-content p-4">
        <!-- dashboard-heading -->
            <div class="user-head">
                <h2 class="m-0 mb-3">Candidates :</h2>
            </div>
            <!-- dashboard-content -->
            <div class="row">
                <div class="col-md-4">
                    <router-link to="/candidatelist" class="text-decoration-none">
                        <div class="list-content mt-3 mt-md-0">
                            <div class="total-user d-flex justify-content-between align-items-center">
                                <!-- <div v-if="!!loadingloader">
                             <div  v-for="(index) in 1" :key="index" class="my-4">
                                             <Skeletor height="15" width="200" pill :shimmer="true"/>
                                            </div>
                                            </div> -->
                                <div class="number-user">
                                    <label class="pb-1  mb-2">New Candidates</label>
                                    <p  v-if="!loadingloader" class="m-0 ">{{api_data.new_candidates}}</p>
                                       <p v-else><Skeletor height="10" width="200" pill :shimmer="true"/></p>
                                </div>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: var(--navy-blue);"><path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z"></path><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"></path></svg></span>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-4">
                    <router-link to="/interviewlist" class="text-decoration-none">
                        <div class="list-content mt-3 mt-md-0">
                            <div class="total-user d-flex justify-content-between align-items-center">
                                <!-- <div v-if="!!loadingloader">
                             <div  v-for="(index) in 1" :key="index" class="my-4">
                                             <Skeletor height="15" width="200" pill :shimmer="true"/>
                                            </div>
                                            </div> -->
                                <div class="number-user">
                                    <label class="pb-1  mb-2">Today Interview Scheduled </label>
                                    <p v-if="!loadingloader" class="m-0 ">{{api_data.today_interview_scheduled}}</p>
                                       <p v-else><Skeletor height="10" width="200" pill :shimmer="true"/></p>
                                </div>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 384 512" style="fill: var(--navy-blue)"><path d="M282.5 64H320C355.3 64 384 92.65 384 128V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H101.5C114.6 26.71 150.2 0 192 0C233.8 0 269.4 26.71 282.5 64zM192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96C160 113.7 174.3 128 192 128zM105.4 230.5C100.9 243 107.5 256.7 119.1 261.2C132.5 265.6 146.2 259.1 150.6 246.6L151.1 245.3C152.2 242.1 155.2 240 158.6 240H216.9C225.2 240 232 246.8 232 255.1C232 260.6 229.1 265.6 224.4 268.3L180.1 293.7C172.6 298 168 305.9 168 314.5V328C168 341.3 178.7 352 192 352C205.1 352 215.8 341.5 215.1 328.4L248.3 309.9C267.9 298.7 280 277.8 280 255.1C280 220.3 251.7 192 216.9 192H158.6C134.9 192 113.8 206.9 105.8 229.3L105.4 230.5zM192 384C174.3 384 160 398.3 160 416C160 433.7 174.3 448 192 448C209.7 448 224 433.7 224 416C224 398.3 209.7 384 192 384z"/></svg></span>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-4">
                    <router-link to="/interview" class="text-decoration-none">
                        <div class="list-content mt-3 mt-md-0">
                            <div class="total-user d-flex justify-content-between align-items-center">
                                <!-- <div v-if="!!loadingloader">
                             <div  v-for="(index) in 1" :key="index" class="my-4">
                                             <Skeletor height="15" width="200" pill :shimmer="true"/>
                                            </div>
                                            </div> -->
                                <div class="number-user">
                                    <label class="pb-1  mb-2">Selected / Rejected /Pending</label>
                                    <p v-if="!loadingloader" class="m-0 ">{{api_data.status.s}}/{{ api_data?.status.r }}/{{ api_data?.status.l }}</p>
                                       <p v-else><Skeletor height="10" width="200" pill :shimmer="true"/></p>
                                </div>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: var(--navy-blue);"><path d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z"></path><path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8zm8.933 3.519-1.726-1.726-1.414 1.414 3.274 3.274 5.702-6.84-1.538-1.282z"></path></svg></span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
<!-- **************************************Candidates************************************** -->
<!-- **************************************attendance************************************** -->
     <div class="user-content p-4">
     <!-- dashboard-heading -->
        <div class="user-head">
            <h2 class="m-0 mb-3">Attendance :</h2>
        </div>
        <!-- dashboard-content -->
        <div class="row">
            <div class="col-md-4">
                <router-link to="/attendance" class="text-decoration-none">
                    <div class=" list-content  mt-3 mt-md-0">
                        <div class="total-user d-flex justify-content-between align-items-center">
                            <!-- <div v-if="!!loadingloader">
                             <div  v-for="(index) in 1" :key="index" class="my-4">
                                             <Skeletor height="15" width="200" pill :shimmer="true"/>
                                            </div>
                                            </div> -->
                        <div class="number-user">
                                <label class="pb-1  mb-2">Present Today</label>
                                <p v-if="!loadingloader" class="m-0 ">{{api_data.present_today}}</p>
                                 <p v-else><Skeletor height="10" width="200" pill :shimmer="true"/></p>
                            </div>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512" style="fill: var(--navy-blue);"><path d="M480 128v208c0 97.05-78.95 176-176 176h-37.72c-53.42 0-103.7-20.8-141.4-58.58l-113.1-113.1C3.906 332.5 0 322.2 0 312C0 290.7 17.15 272 40 272c10.23 0 20.47 3.906 28.28 11.72L128 343.4V64c0-17.67 14.33-32 32-32s32 14.33 32 32l.0729 176C192.1 248.8 199.2 256 208 256s16.07-7.164 16.07-16L224 32c0-17.67 14.33-32 32-32s32 14.33 32 32l.0484 208c0 8.836 7.111 16 15.95 16S320 248.8 320 240L320 64c0-17.67 14.33-32 32-32s32 14.33 32 32l.0729 176c0 8.836 7.091 16 15.93 16S416 248.8 416 240V128c0-17.67 14.33-32 32-32S480 110.3 480 128z"/></svg></span>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-md-4">
                <router-link to="/attendance" class="text-decoration-none">
                    <div class=" list-content mt-3 mt-md-0">
                        <div class="total-user d-flex justify-content-between align-items-center">
                            <!-- <div v-if="!!loadingloader">
                             <div  v-for="(index) in 1" :key="index" class="my-4">
                                             <Skeletor height="15" width="200" pill :shimmer="true"/>
                                            </div>
                                            </div> -->
                        <div class="number-user">
                                <label class="pb-1  mb-2">On Leave Today</label>
                                <p v-if="!loadingloader" class="m-0">{{api_data.on_leave_today}}</p>
                                   <p v-else><Skeletor height="10" width="200" pill :shimmer="true"/></p>
                            </div>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  viewBox="0 0 512 512" style="fill: var(--navy-blue);"><path d="M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"/></svg></span>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-md-4">
                <router-link to="/attendance" class="text-decoration-none">
                    <div class="list-content mt-3 mt-md-0">
                        <div class="total-user d-flex justify-content-between align-items-center">
                            <!-- <div v-if="!!loadingloader">
                             <div  v-for="(index) in 1" :key="index" class="my-4">
                                             <Skeletor height="15" width="200" pill :shimmer="true"/>
                                            </div>
                                            </div> -->
                            <div class="number-user">
                                <label class="pb-1  mb-2">Absent Today</label>
                                <p v-if="!loadingloader" class="m-0 text-center">{{api_data.absent_today}}</p>
                                  <p v-else><Skeletor height="10" width="200" pill :shimmer="true"/></p>
                            </div>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  viewBox="0 0 448 512" style="fill: var(--navy-blue);"><path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM143 208.1L190.1 255.1L143 303C133.7 312.4 133.7 327.6 143 336.1C152.4 346.3 167.6 346.3 176.1 336.1L223.1 289.9L271 336.1C280.4 346.3 295.6 346.3 304.1 336.1C314.3 327.6 314.3 312.4 304.1 303L257.9 255.1L304.1 208.1C314.3 199.6 314.3 184.4 304.1 175C295.6 165.7 280.4 165.7 271 175L223.1 222.1L176.1 175C167.6 165.7 152.4 165.7 143 175C133.7 184.4 133.7 199.6 143 208.1V208.1z"/></svg></span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
<!-- **************************************attendance************************************** -->
</div>
</div>
</DashboardLayout>                
    </div>
</template>

<script>
    import DashboardLayout from '@/Layout/DashboardLayout';
    import ApiClass from "@/api/api";
        export default {
        name:'HomeView',
        components:{
            DashboardLayout,
        },
        data(){
            return{
        loadingloader:true,
        api_data:[],
     



            }
        },
        mounted(){
           this.get_all_length();
        },
        methods:{
              async get_all_length(){
     
                  let response = await ApiClass.getNodeRequest("dashboard",true);
                   console.log(response,'resoponse here');
                    if (response?.data) {
                     this.loadingloader = false;
                       console.log(response?.data);
                    this.load = false;
                       console.log(response.data.data,'data is here');
                              this.show = true;
                      this.api_data = response.data.data?? [];
            
          }
     },
        }
        }
    </script>

<style scoped>
/**********************************************dashbpoard-content************************************************/

.dashbpoard-content{
    background-color: var(--hr-bg);
    height:calc(100% - 142px);
}
.logout-button {
    background-color: var(--navy-blue);
}

.list-content{ 
    background-color: var(--white);
    border-radius: 5px;
    border-bottom: 5px solid var(--navy-blue);
    transition: all 1s ease;
    padding: 23px 20px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px;
    transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55),-webkit-transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.list-content:hover{
    cursor: pointer;
    -webkit-transform: translateY(-6px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}
.total-user span{
    padding: 18px 18px;
    border-radius: 50px;
    background-color: var(--icon-bg);
}

.user-head h2{
    font-size: var(--fs-4);
    font-weight:600;
    color: var(--navy-blue);
}
.number-user label{
    font-size: var(--fs-3);
    font-weight: 500;
    color: var(--text-box);

}
.number-user p{
    font-size: var(--fs-5);
    color: var(--hr-black);
    font-weight: 600;
}
/**************************media responsive**************************/
@media all and (min-width:1200px) and (max-width:1400px){
    .dashbpoard-content{
    height:calc(100% - 48px);
}
}
@media all and (min-width:1025px) and (max-width:1199px){
    .list-content{
    min-height: 125px;
}
.dashbpoard-content{
    height:calc(100% - 0px);
}
}
@media all and (min-width:992px) and (max-width:1024px){
    .list-content{
    min-height: 125px;
}
.dashbpoard-content{
    height:calc(100% - 0px);
}
}
@media all and (min-width:768px) and (max-width:991px){
    .list-content{
    min-height: 123px;
}
.dashbpoard-content{
    height:calc(100% - 0px);
}
}
@media all and (min-width:320px) and (max-width:767px){
.dashbpoard-content{
    height:calc(100% - 0px);
}
}
</style>