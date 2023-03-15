<template>
    <div>
      <section class="dashboard-page p-0">
        <div class="container-fluid">
          <div class="dashboard-page-content">
            <div class="row">
              <div class="col-12 col-md-12 col-lg-3 col-xl-2 px-0">
                <div class="vertical-list d-none d-md-none d-lg-block">
                    <div class="dashboard-logo">
                        <img src="@/assets/images/homeimages/logo.png" class="img-fluid" alt="img">
                    </div>
                    <ul class="dashboard-list p-0">
                    <!-- ****************dashboard***************** -->
                    <router-link to="/" class="text-decoration-none active">
                        <li class="px-3">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg></span>Dashboard
                      </li>
                    </router-link>
                        <!-- **********************user************************* -->
                        <router-link to="/user" class="text-decoration-none active">
                        <li class="px-3">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" ><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg></span>User
                      </li>
                    </router-link>
                    
                        <!-- **********************Expenses************************* -->
                        
                        <li  class="p-0">
                        <div class="accordion" id="accordionPanelsStayOpenExample" >
                        <div class="accordion-item expenses-item border-0">
                          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button :class="expenses.find(v=>v.link===$route.path) ? 'custom_active':''" class="accordion-button shadow-none collapsed expenses-btn  px-3"  type="button" data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" 
                              aria-controls="panelsStayOpen-collapseOne">
                             <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512"><path d="M512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM128 384C128 348.7 99.35 320 64 320V384H128zM64 192C99.35 192 128 163.3 128 128H64V192zM512 384V320C476.7 320 448 348.7 448 384H512zM512 128H448C448 163.3 476.7 192 512 192V128zM288 352C341 352 384 309 384 256C384 202.1 341 160 288 160C234.1 160 192 202.1 192 256C192 309 234.1 352 288 352z"/></svg></span>Expenses 
                            </button>
                            
                          </h2>
                          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse"  :class="expenses.find(v=>v.link===$route.path) ? 'accordion-collapse show' :'collapse'"
                            aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body expenses-body">
                              <ul class="p-0 expenses-list">
                                <router-link to="/expensive"  class="text-decoration-none active"> 
                                <li  class="px-3">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512"><path d="M512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM128 384C128 348.7 99.35 320 64 320V384H128zM64 192C99.35 192 128 163.3 128 128H64V192zM512 384V320C476.7 320 448 348.7 448 384H512zM512 128H448C448 163.3 476.7 192 512 192V128zM288 352C341 352 384 309 384 256C384 202.1 341 160 288 160C234.1 160 192 202.1 192 256C192 309 234.1 352 288 352z"/></svg></span>Expenses
                                </li>
                              </router-link>
                              <router-link to="/assets"   class="text-decoration-none active"> 
                                <li  class="px-3">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512"><path d="M512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM128 384C128 348.7 99.35 320 64 320V384H128zM64 192C99.35 192 128 163.3 128 128H64V192zM512 384V320C476.7 320 448 348.7 448 384H512zM512 128H448C448 163.3 476.7 192 512 192V128zM288 352C341 352 384 309 384 256C384 202.1 341 160 288 160C234.1 160 192 202.1 192 256C192 309 234.1 352 288 352z"/></svg></span>Assets
                                </li>
                              </router-link>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      </li>
                       
                        <!-- **********************Attendance************************* -->
                        <router-link to="/attendance" class="text-decoration-none active">
                        <li  class="px-3">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5zM5 19V5h14l.002 14H5z"></path><path d="M7 7h1.998v2H7zm4 0h6v2h-6zm-4 4h1.998v2H7zm4 0h6v2h-6zm-4 4h1.998v2H7zm4 0h6v2h-6z"></path></svg></span>Attendance
                      </li>
                    </router-link>
                        <!-- **********************role************************* -->
                        
                     <!-- <router-link to="/rounds" class="text-decoration-none active">
                                <li  class="px-3">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512"><path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM192 64c17.67 0 32 14.33 32 32s-14.33 32-32 32S160 113.7 160 96S174.3 64 192 64zM282.9 262.8l-88 112c-4.047 5.156-10.02 8.438-16.53 9.062C177.6 383.1 176.8 384 176 384c-5.703 0-11.25-2.031-15.62-5.781l-56-48c-10.06-8.625-11.22-23.78-2.594-33.84c8.609-10.06 23.77-11.22 33.84-2.594l36.98 31.69l72.52-92.28c8.188-10.44 23.3-12.22 33.7-4.062C289.3 237.3 291.1 252.4 282.9 262.8z"/></svg></span>Interview Rounds
                                </li>
                              </router-link> -->
                        
                        <!-- **********************Candidate************************* -->
                        
                        <li class="p-0">
                        <div class="accordion" id="accordionPanelsStayOpenExample1">
                        <div class="accordion-item expenses-item border-0">
                          <h2 class="accordion-header" id="panelsStayOpen-headingtwo">
                         
                            <button   :class="candidate.find(v=>v.link===$route.path)  ?'custom_active1 active':''" class="accordion-button shadow-none collapsed expenses-btn px-3" type="button" data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapsetwo" aria-expanded="true"
                              aria-controls="panelsStayOpen-collapsetwo">
                              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512"><path d="M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z"/></svg></span>Candidate
                            </button>
                           
                          </h2>
                          <div id="panelsStayOpen-collapsetwo"  class="accordion-collapse collapse"  :class="candidate.find(v=>v.link===$route.path) ? 'accordion-collapse show':'collapse'"
                            aria-labelledby="panelsStayOpen-headingtwo">
                            <div class="accordion-body expenses-body">
                              <ul  class="p-0 expenses-list">
                                <router-link to="/cadidatecheck"  class="text-decoration-none active">
                                <li  class="px-3">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512"><path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"/></svg></span>Candidate 
                                </li>
                              </router-link>
                               <router-link to="/candidateAdd"  class="text-decoration-none active">
                                <li  class="px-3">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512"><path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"/></svg></span>Candidate Add
                                </li>
                              </router-link>
                              <router-link to="/candidatelist" @click="show_data" class="text-decoration-none active">
                                <li  class="px-3">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M88 48C101.3 48 112 58.75 112 72V120C112 133.3 101.3 144 88 144H40C26.75 144 16 133.3 16 120V72C16 58.75 26.75 48 40 48H88zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 232C16 218.7 26.75 208 40 208H88C101.3 208 112 218.7 112 232V280C112 293.3 101.3 304 88 304H40C26.75 304 16 293.3 16 280V232zM88 368C101.3 368 112 378.7 112 392V440C112 453.3 101.3 464 88 464H40C26.75 464 16 453.3 16 440V392C16 378.7 26.75 368 40 368H88z"/></svg></span>Candidatelist
                                </li>
                              </router-link>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                        </li>
                        <!-- **********************interview************************* -->
                        <li class="p-0">
                            <div class="accordion" id="accordionPanelsStayOpenExample3">
                        <div class="accordion-item expenses-item border-0">
                          <h2 class="accordion-header" id="panelsStayOpen-headingthree">
                            <button   :class="interview.find(v=>v.link===$route.path)  ? 'custom_active2':''" class="accordion-button shadow-none collapsed expenses-btn px-3" type="button" data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapsethree" aria-expanded="true"
                              aria-controls="panelsStayOpen-collapsethree">
                              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512"><path d="M282.5 64H320C355.3 64 384 92.65 384 128V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H101.5C114.6 26.71 150.2 0 192 0C233.8 0 269.4 26.71 282.5 64zM192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96C160 113.7 174.3 128 192 128zM105.4 230.5C100.9 243 107.5 256.7 119.1 261.2C132.5 265.6 146.2 259.1 150.6 246.6L151.1 245.3C152.2 242.1 155.2 240 158.6 240H216.9C225.2 240 232 246.8 232 255.1C232 260.6 229.1 265.6 224.4 268.3L180.1 293.7C172.6 298 168 305.9 168 314.5V328C168 341.3 178.7 352 192 352C205.1 352 215.8 341.5 215.1 328.4L248.3 309.9C267.9 298.7 280 277.8 280 255.1C280 220.3 251.7 192 216.9 192H158.6C134.9 192 113.8 206.9 105.8 229.3L105.4 230.5zM192 384C174.3 384 160 398.3 160 416C160 433.7 174.3 448 192 448C209.7 448 224 433.7 224 416C224 398.3 209.7 384 192 384z"/></svg></span>Interview
                            </button>
                          </h2>
                          <div id="panelsStayOpen-collapsethree" class="accordion-collapse collapse"  :class="interview.find(v=>v.link===$route.path) ? 'accordion-collapse show':'collapse'"
                            aria-labelledby="panelsStayOpen-headingthree">
                            <div class="accordion-body expenses-body">
                              <ul  class="p-0 expenses-list">
                                
                                <router-link to="/interview" class="text-decoration-none active">
                                <li  class="px-3">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512"><path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM192 64c17.67 0 32 14.33 32 32s-14.33 32-32 32S160 113.7 160 96S174.3 64 192 64zM282.9 262.8l-88 112c-4.047 5.156-10.02 8.438-16.53 9.062C177.6 383.1 176.8 384 176 384c-5.703 0-11.25-2.031-15.62-5.781l-56-48c-10.06-8.625-11.22-23.78-2.594-33.84c8.609-10.06 23.77-11.22 33.84-2.594l36.98 31.69l72.52-92.28c8.188-10.44 23.3-12.22 33.7-4.062C289.3 237.3 291.1 252.4 282.9 262.8z"/></svg></span>Interview Reviews
                                </li>
                              </router-link>
                              <router-link to="/interviewlist" class="text-decoration-none active">
                                <li  class="px-3">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512"><path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM96 392c-13.25 0-24-10.75-24-24S82.75 344 96 344s24 10.75 24 24S109.3 392 96 392zM96 296c-13.25 0-24-10.75-24-24S82.75 248 96 248S120 258.8 120 272S109.3 296 96 296zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM304 384h-128C167.2 384 160 376.8 160 368C160 359.2 167.2 352 176 352h128c8.801 0 16 7.199 16 16C320 376.8 312.8 384 304 384zM304 288h-128C167.2 288 160 280.8 160 272C160 263.2 167.2 256 176 256h128C312.8 256 320 263.2 320 272C320 280.8 312.8 288 304 288z"/></svg></span>Interview Review list
                                </li>
                              </router-link>
                              <router-link to="/schdule" class="text-decoration-none active">
                                <li  class="px-3">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512"><path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM96 392c-13.25 0-24-10.75-24-24S82.75 344 96 344s24 10.75 24 24S109.3 392 96 392zM96 296c-13.25 0-24-10.75-24-24S82.75 248 96 248S120 258.8 120 272S109.3 296 96 296zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM304 384h-128C167.2 384 160 376.8 160 368C160 359.2 167.2 352 176 352h128c8.801 0 16 7.199 16 16C320 376.8 312.8 384 304 384zM304 288h-128C167.2 288 160 280.8 160 272C160 263.2 167.2 256 176 256h128C312.8 256 320 263.2 320 272C320 280.8 312.8 288 304 288z"/></svg></span>Interview Schdule
                                </li>
                              </router-link>
                              <router-link to="/forinterview" class="text-decoration-none active">
                                <li  class="px-3">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512"><path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM96 392c-13.25 0-24-10.75-24-24S82.75 344 96 344s24 10.75 24 24S109.3 392 96 392zM96 296c-13.25 0-24-10.75-24-24S82.75 248 96 248S120 258.8 120 272S109.3 296 96 296zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM304 384h-128C167.2 384 160 376.8 160 368C160 359.2 167.2 352 176 352h128c8.801 0 16 7.199 16 16C320 376.8 312.8 384 304 384zM304 288h-128C167.2 288 160 280.8 160 272C160 263.2 167.2 256 176 256h128C312.8 256 320 263.2 320 272C320 280.8 312.8 288 304 288z"/></svg></span>Interview Schduled Candidate
                                </li>
                              </router-link>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                        </li>
                        <!-------setting demo--------------->

                        <li class="p-0">
                        <div class="accordion" id="accordionPanelsStayOpenExample1">
                        <div class="accordion-item expenses-item border-0">
                          <h2 class="accordion-header" id="panelsStayOpen-headingtwo">
                         
                            <button   :class="setting.find(v=>v.link===$route.path)  ?'custom_active3 active':''" class="accordion-button shadow-none collapsed expenses-btn px-3" type="button" data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapsesetting" aria-expanded="true"
                              aria-controls="panelsStayOpen-collapsesetting">
                              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"/></svg></span>Settings
                            </button>
                           
                          </h2>
                          <div id="panelsStayOpen-collapsesetting"  class="accordion-collapse collapse"  :class="setting.find(v=>v.link===$route.path) ? 'accordion-collapse show':'collapse'"
                            aria-labelledby="panelsStayOpen-headingtwo">
                            <div class="accordion-body expenses-body">
                              <ul  class="p-0 expenses-list">
                                <router-link to="/role"  class="text-decoration-none active">
                                <li  class="px-3">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512"><path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"/></svg></span>Roles 
                                </li>
                              </router-link>
                              <router-link to="/rounds" @click="show_data" class="text-decoration-none active">
                                <li  class="px-3">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M88 48C101.3 48 112 58.75 112 72V120C112 133.3 101.3 144 88 144H40C26.75 144 16 133.3 16 120V72C16 58.75 26.75 48 40 48H88zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 232C16 218.7 26.75 208 40 208H88C101.3 208 112 218.7 112 232V280C112 293.3 101.3 304 88 304H40C26.75 304 16 293.3 16 280V232zM88 368C101.3 368 112 378.7 112 392V440C112 453.3 101.3 464 88 464H40C26.75 464 16 453.3 16 440V392C16 378.7 26.75 368 40 368H88z"/></svg></span>Rounds
                                </li>
                              </router-link>
                              <router-link to="/documents" @click="show_data" class="text-decoration-none active">
                                <li  class="px-3">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M88 48C101.3 48 112 58.75 112 72V120C112 133.3 101.3 144 88 144H40C26.75 144 16 133.3 16 120V72C16 58.75 26.75 48 40 48H88zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 232C16 218.7 26.75 208 40 208H88C101.3 208 112 218.7 112 232V280C112 293.3 101.3 304 88 304H40C26.75 304 16 293.3 16 280V232zM88 368C101.3 368 112 378.7 112 392V440C112 453.3 101.3 464 88 464H40C26.75 464 16 453.3 16 440V392C16 378.7 26.75 368 40 368H88z"/></svg></span>Documents
                                </li>
                              </router-link>
                              <router-link to="/expensestype" @click="show_data" class="text-decoration-none active">
                                <li  class="px-3">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M88 48C101.3 48 112 58.75 112 72V120C112 133.3 101.3 144 88 144H40C26.75 144 16 133.3 16 120V72C16 58.75 26.75 48 40 48H88zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 232C16 218.7 26.75 208 40 208H88C101.3 208 112 218.7 112 232V280C112 293.3 101.3 304 88 304H40C26.75 304 16 293.3 16 280V232zM88 368C101.3 368 112 378.7 112 392V440C112 453.3 101.3 464 88 464H40C26.75 464 16 453.3 16 440V392C16 378.7 26.75 368 40 368H88z"/></svg></span>Expenses Type
                                </li>
                              </router-link>
                              <router-link to="/designation" class="text-decoration-none active">
                        <li class="px-3">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512"><path d="M336 0C362.5 0 384 21.49 384 48V464C384 490.5 362.5 512 336 512H240V432C240 405.5 218.5 384 192 384C165.5 384 144 405.5 144 432V512H48C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336zM64 272C64 280.8 71.16 288 80 288H112C120.8 288 128 280.8 128 272V240C128 231.2 120.8 224 112 224H80C71.16 224 64 231.2 64 240V272zM176 224C167.2 224 160 231.2 160 240V272C160 280.8 167.2 288 176 288H208C216.8 288 224 280.8 224 272V240C224 231.2 216.8 224 208 224H176zM256 272C256 280.8 263.2 288 272 288H304C312.8 288 320 280.8 320 272V240C320 231.2 312.8 224 304 224H272C263.2 224 256 231.2 256 240V272zM80 96C71.16 96 64 103.2 64 112V144C64 152.8 71.16 160 80 160H112C120.8 160 128 152.8 128 144V112C128 103.2 120.8 96 112 96H80zM160 144C160 152.8 167.2 160 176 160H208C216.8 160 224 152.8 224 144V112C224 103.2 216.8 96 208 96H176C167.2 96 160 103.2 160 112V144zM272 96C263.2 96 256 103.2 256 112V144C256 152.8 263.2 160 272 160H304C312.8 160 320 152.8 320 144V112C320 103.2 312.8 96 304 96H272z"/></svg></span>Designation
                      </li>
                    </router-link>
                     <!-- **********************team************************* -->
                        <router-link to="/team" class="text-decoration-none active">
                        <li  class="px-3">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="20.288" cy="8.344" r="1.707"></circle><path d="M18.581 11.513h3.413v3.656c0 .942-.765 1.706-1.707 1.706h-1.706v-5.362zM2.006 4.2v15.6l11.213 1.979V2.221L2.006 4.2zm8.288 5.411-1.95.049v5.752H6.881V9.757l-1.949.098V8.539l5.362-.292v1.364zm3.899.439v8.288h1.95c.808 0 1.463-.655 1.463-1.462V10.05h-3.413zm1.463-4.875c-.586 0-1.105.264-1.463.673v2.555c.357.409.877.673 1.463.673a1.95 1.95 0 0 0 0-3.901z"></path></svg></span>Team
                      </li>
                        </router-link>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                        </li>
                        
                         <!-- **********************setting************************* -->
                        
                         <router-link to="/setting" class="text-decoration-none active">
                         <li  class="px-3">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" ><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg></span>Profile
                      </li>
                    </router-link>
                    </ul>                    
                </div>
                <button class="btn d-block d-md-block d-lg-none shadow-none toggle-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style=" fill:var(--white)" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
                </button>
              <!-- *****************offcanvas************ -->
                <div class="offcanvas offcanvas-start dashboard-offcanvas" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                  <div class="offcanvas-header offcanvas-logo-header">
                    <div class="offcanvas-logo">
                      <img src="@/assets/images/homeimages/logo.png" class="img-fluid" alt="img">
                  </div>
                    <button type="button" class="btn-close text-reset close-btn cross-icon shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body offcanvas-content p-0">
                    <div>
                      <div class="vertical-list">
                    
                    <ul class="dashboard-list p-0">
                    <!-- ****************dashboard***************** -->
                    <router-link to="/" class="text-decoration-none active">
                        <li class="px-3">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg></span>Dashboard
                      </li>
                    </router-link>
                        <!-- **********************user************************* -->
                        <router-link to="/user" class="text-decoration-none active">
                        <li class="px-3">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" ><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg></span>User
                      </li>
                    </router-link>
                    <!-- **********************Department************************* -->
                    
                        <!-- **********************Expenses************************* -->
                        
                        <li  class="p-0">
                        <div class="accordion" id="accordionPanelsStayOpenExample" >
                        <div class="accordion-item expenses-item border-0">
                          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button :class="expenses.find(v=>v.link===$route.path) || active ? 'custom_active':''" class="accordion-button shadow-none collapsed expenses-btn  px-3"  type="button" data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" 
                              aria-controls="panelsStayOpen-collapseOne">
                             <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512"><path d="M512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM128 384C128 348.7 99.35 320 64 320V384H128zM64 192C99.35 192 128 163.3 128 128H64V192zM512 384V320C476.7 320 448 348.7 448 384H512zM512 128H448C448 163.3 476.7 192 512 192V128zM288 352C341 352 384 309 384 256C384 202.1 341 160 288 160C234.1 160 192 202.1 192 256C192 309 234.1 352 288 352z"/></svg></span>Expenses 
                            </button>
                            
                          </h2>
                          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" @click="click()" :class="expenses.find(v=>v.link===$route.path) ? 'accordion-collapse show' :'collapse'"
                            aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body expenses-body">
                              <ul class="p-0 expenses-list">
                                <router-link to="/expensive"  class="text-decoration-none active"> 
                                <li  class="px-3">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512"><path d="M512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM128 384C128 348.7 99.35 320 64 320V384H128zM64 192C99.35 192 128 163.3 128 128H64V192zM512 384V320C476.7 320 448 348.7 448 384H512zM512 128H448C448 163.3 476.7 192 512 192V128zM288 352C341 352 384 309 384 256C384 202.1 341 160 288 160C234.1 160 192 202.1 192 256C192 309 234.1 352 288 352z"/></svg></span>Expenses
                                </li>
                              </router-link>
                              <router-link to="/assets"   class="text-decoration-none active"> 
                                <li  class="px-3">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512"><path d="M512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM128 384C128 348.7 99.35 320 64 320V384H128zM64 192C99.35 192 128 163.3 128 128H64V192zM512 384V320C476.7 320 448 348.7 448 384H512zM512 128H448C448 163.3 476.7 192 512 192V128zM288 352C341 352 384 309 384 256C384 202.1 341 160 288 160C234.1 160 192 202.1 192 256C192 309 234.1 352 288 352z"/></svg></span>Assets
                                </li>
                              </router-link>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      </li>
                        <!-- **********************team************************* -->
                        <router-link to="/team" class="text-decoration-none active">
                        <li  class="px-3">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="20.288" cy="8.344" r="1.707"></circle><path d="M18.581 11.513h3.413v3.656c0 .942-.765 1.706-1.707 1.706h-1.706v-5.362zM2.006 4.2v15.6l11.213 1.979V2.221L2.006 4.2zm8.288 5.411-1.95.049v5.752H6.881V9.757l-1.949.098V8.539l5.362-.292v1.364zm3.899.439v8.288h1.95c.808 0 1.463-.655 1.463-1.462V10.05h-3.413zm1.463-4.875c-.586 0-1.105.264-1.463.673v2.555c.357.409.877.673 1.463.673a1.95 1.95 0 0 0 0-3.901z"></path></svg></span>Teams
                      </li>
                        </router-link>
                        <!-- **********************Attendance************************* -->
                        <router-link to="/attendance" class="text-decoration-none active">
                        <li  class="px-3">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5zM5 19V5h14l.002 14H5z"></path><path d="M7 7h1.998v2H7zm4 0h6v2h-6zm-4 4h1.998v2H7zm4 0h6v2h-6zm-4 4h1.998v2H7zm4 0h6v2h-6z"></path></svg></span>Attendance
                      </li>
                    </router-link>
                        <!-- **********************role************************* -->
                        <router-link to="/role" class="text-decoration-none active">
                        <li  class="px-3">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M222.7 32.15C227.7 49.08 218.1 66.9 201.1 71.94C121.8 95.55 64 169.1 64 255.1C64 362 149.1 447.1 256 447.1C362 447.1 448 362 448 255.1C448 169.1 390.2 95.55 310.9 71.94C293.9 66.9 284.3 49.08 289.3 32.15C294.4 15.21 312.2 5.562 329.1 10.6C434.9 42.07 512 139.1 512 255.1C512 397.4 397.4 511.1 256 511.1C114.6 511.1 0 397.4 0 255.1C0 139.1 77.15 42.07 182.9 10.6C199.8 5.562 217.6 15.21 222.7 32.15V32.15z"/></svg></span>Role
                      </li>
                    </router-link>
                        
                        <!-- **********************Candidate************************* -->
                        
                        <li class="p-0">
                        <div class="accordion" id="accordionPanelsStayOpenExample1">
                        <div class="accordion-item expenses-item border-0">
                          <h2 class="accordion-header" id="panelsStayOpen-headingtwo">
                         
                            <button   :class="setting.find(v=>v.link===$route.path) || active1 ?'custom_active1 active':''" class="accordion-button shadow-none collapsed expenses-btn px-3" type="button" data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapsetwo" aria-expanded="true"
                              aria-controls="panelsStayOpen-collapsetwo">
                              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512"><path d="M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z"/></svg></span>Candidate
                            </button>
                           
                          </h2>
                          <div id="panelsStayOpen-collapsetwo"  class="accordion-collapse collapse"  :class="setting.find(v=>v.link===$route.path) ? 'accordion-collapse show':'collapse'"
                            aria-labelledby="panelsStayOpen-headingtwo">
                            <div class="accordion-body expenses-body">
                              <ul  class="p-0 expenses-list">
                                <router-link to="/setting"   class="text-decoration-none active">
                                <li  class="px-3">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512"><path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"/></svg></span>Candidate
                                </li>
                              </router-link>
                              <router-link to="/candidatelist"  class="text-decoration-none active">
                                <li  class="px-3">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M88 48C101.3 48 112 58.75 112 72V120C112 133.3 101.3 144 88 144H40C26.75 144 16 133.3 16 120V72C16 58.75 26.75 48 40 48H88zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 232C16 218.7 26.75 208 40 208H88C101.3 208 112 218.7 112 232V280C112 293.3 101.3 304 88 304H40C26.75 304 16 293.3 16 280V232zM88 368C101.3 368 112 378.7 112 392V440C112 453.3 101.3 464 88 464H40C26.75 464 16 453.3 16 440V392C16 378.7 26.75 368 40 368H88z"/></svg></span>Candidatelist
                                </li>
                              </router-link>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                        </li>
                        <!-- **********************interview************************* -->
                        <li class="p-0">
                            <div class="accordion" id="accordionPanelsStayOpenExample3">
                        <div class="accordion-item expenses-item border-0">
                          <h2 class="accordion-header" id="panelsStayOpen-headingthree">
                            <button   :class="interview.find(v=>v.link===$route.path) || active2 ? 'custom_active2':''" class="accordion-button shadow-none collapsed expenses-btn px-3" type="button" data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapsethree" aria-expanded="true"
                              aria-controls="panelsStayOpen-collapsethree">
                              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512"><path d="M282.5 64H320C355.3 64 384 92.65 384 128V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H101.5C114.6 26.71 150.2 0 192 0C233.8 0 269.4 26.71 282.5 64zM192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96C160 113.7 174.3 128 192 128zM105.4 230.5C100.9 243 107.5 256.7 119.1 261.2C132.5 265.6 146.2 259.1 150.6 246.6L151.1 245.3C152.2 242.1 155.2 240 158.6 240H216.9C225.2 240 232 246.8 232 255.1C232 260.6 229.1 265.6 224.4 268.3L180.1 293.7C172.6 298 168 305.9 168 314.5V328C168 341.3 178.7 352 192 352C205.1 352 215.8 341.5 215.1 328.4L248.3 309.9C267.9 298.7 280 277.8 280 255.1C280 220.3 251.7 192 216.9 192H158.6C134.9 192 113.8 206.9 105.8 229.3L105.4 230.5zM192 384C174.3 384 160 398.3 160 416C160 433.7 174.3 448 192 448C209.7 448 224 433.7 224 416C224 398.3 209.7 384 192 384z"/></svg></span>Interview
                            </button>
                          </h2>
                          <div id="panelsStayOpen-collapsethree" class="accordion-collapse collapse"  :class="interview.find(v=>v.link===$route.path) ? 'accordion-collapse show':'collapse'"
                            aria-labelledby="panelsStayOpen-headingthree">
                            <div class="accordion-body expenses-body">
                              <ul  class="p-0 expenses-list">
                                <router-link to="/interview" class="text-decoration-none active">
                                <li  class="px-3">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512"><path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM192 64c17.67 0 32 14.33 32 32s-14.33 32-32 32S160 113.7 160 96S174.3 64 192 64zM282.9 262.8l-88 112c-4.047 5.156-10.02 8.438-16.53 9.062C177.6 383.1 176.8 384 176 384c-5.703 0-11.25-2.031-15.62-5.781l-56-48c-10.06-8.625-11.22-23.78-2.594-33.84c8.609-10.06 23.77-11.22 33.84-2.594l36.98 31.69l72.52-92.28c8.188-10.44 23.3-12.22 33.7-4.062C289.3 237.3 291.1 252.4 282.9 262.8z"/></svg></span>Interview
                                </li>
                              </router-link>
                              <router-link to="/interviewlist" class="text-decoration-none active">
                                <li  class="px-3">
                                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512"><path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM96 392c-13.25 0-24-10.75-24-24S82.75 344 96 344s24 10.75 24 24S109.3 392 96 392zM96 296c-13.25 0-24-10.75-24-24S82.75 248 96 248S120 258.8 120 272S109.3 296 96 296zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM304 384h-128C167.2 384 160 376.8 160 368C160 359.2 167.2 352 176 352h128c8.801 0 16 7.199 16 16C320 376.8 312.8 384 304 384zM304 288h-128C167.2 288 160 280.8 160 272C160 263.2 167.2 256 176 256h128C312.8 256 320 263.2 320 272C320 280.8 312.8 288 304 288z"/></svg></span>Interviewlist
                                </li>
                              </router-link>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                        </li>
                         <!-- **********************setting************************* -->
                        
                         <router-link to="/setting" class="text-decoration-none active">
                         <li  class="px-3">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"/></svg></span>Settings
                      </li>
                    </router-link>
                    </ul>                    
                </div>
                    </div>
                   
                  </div>
                </div>
              </div>
              <!-- ***************************************dashbpoard-content************************************************** -->
  
              <div class="col-12 col-md-12 col-lg-9 col-xl-10 px-0">
                <div class="logout-button text-end p-4" v-if="$store.getters.get_is_Login">
                  <button type="button" @click="logout_user" class="px-4 py-2 mx-md-4 mx-xl-0">Logout</button>
                </div>
                <slot></slot>
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
              <!-- *****************************************dashbpoard-content************************************************ -->
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  <script>
    import ApiClass from "@/api/api";
    export default {
      name: "DashboardLayout",
      data() {
        return {

          statein:false,
          show:"",
          show1:"",
          show2:"",
          active:false,
          active1:false,
          active2:false,
          expenses: [
            {
              name: 'Expenses',
              link: '/expensive'
            },
            {
              name: 'Assets',
              link: '/assets'
            },
          ],
          candidate: [
            {
              name: 'Candidate',
              link: '/cadidatecheck'
            },
            {
              name: 'CandidateViews',
              link: '/candidateAdd'
            },
            {
              name: 'Candidatelist',
              link: '/candidatelist'
            },
          ],
           interview: [
           {
              name: 'Interview',
              link: '/interview'
            },
           {
              name: 'Interviewlist',
              link: '/interviewlist'
            },
            {
              name: ' Interview Schdule',
              link: '/schdule'
            },
            {
              name: ' for interview',
              link: '/forinterview'
            },
            
          ],
          setting:[
           {
              name: 'Roleview',
              link: '/role'
            },
           {
              name: 'Roundsview',
              link: '/rounds'
            },
            {
              name: 'Docview',
              link: '/documents'
            },
            {
              name: 'ExpensiveType',
              link: '/expensestype'
            },
             {
              name: 'DesignationView',
              link: '/designation'
            },
            {
              name: 'TeamView',
              link: '/team'
            },
            
             
            
          ],
        }
      },  
      mounted(){
        localStorage.getItem("token")?
            this.$store.commit("set_is_Login", true) :
            this.$store.commit("set_is_Login", false);
         // this.statein = this.$route.params.state;

      
      },

      unmounted(){
        
        this.unselect();
      },
      methods:{
        show_data(){
        
          this.$store.commit('setshowdata',this.showdata = false);
        },
        tr(){
         
          document.getElementById('accordionPanelsStayOpenExample').siblings().removeClass('active');
          document.toggleClass('active');

          
        },
     
        unselect(){
          this.active=false;
        },
       async logout_user(){
            // logout
           let result =  await this.$swal({
                title: "Please Confirm..",
                text: "Are you sure you want to Logout  ?",
                icon: "warning",
                iconColor: "#CF0404",
                showCancelButton: true,
                confirmButtonColor: "#CF0404",
                cancelButtonColor: "#CF0404",
                confirmButtonText: "Logout",
                cancelButtonText: "Cancel",
                showLoaderOnConfirm: true,
            })            
            if (result.isConfirmed) {
            let result1 = await ApiClass.deleteRequest('logout', true);
            if (result1?.data?.status_code == 1) {

               console.log(result1.data.message,'shdfsduyfusdyf')
                  this.$store.commit("set_is_Login", false);
                    localStorage.clear();
                   this.$router?.push( "/login");
                 this.success(result1?.data?.message);
               
               
                
            }else{
                this.failed(result1.data.message);
            
        }
                } else {
                    return;
                }
            
            

        },
        
        

      }
    }
  </script>
  
  <style scoped>
    /********************************router-link-content*************************************/
.vertically-navbar {
    background-color: var(--navy-blue);
    min-height: 100%;
} 
.dashboard-logo {
    padding: 17px 10px;
}
.logout-button {
    background: var(--navy-blue);
}  
.logout-button button {
    border-radius: 4px;
    background-color: var(--white);
    font-weight: 300;
    font-size: var(--fs-3);
    color: var(--navy-blue);
    border: 2px solid transparent;
    position:relative;
}
  
.logout-button button:hover {
    background-color: transparent;
    border: 2px solid var(--white);
    color: var(--white);
    cursor: pointer;
}
  .vertical-list{
    background-color: var(--navy-blue);
    height:100%;
}
.dashboard-list li{
    list-style: none;
    font-size: var(--fs-3);
    color:var(--list-color);
   padding:10px 10px 12px 0px;  
}
.dashboard-list li a {
    color: var(--list-color);
        transition:all 1s ease;
}
.dashboard-list a li:hover{
    color: var(--white);
    transition:all 1s ease;
} 
.expenses-btn:hover {
    color: var(--white);
} 
.dashboard-list li svg{
    fill:var(--icon-color);
    margin-right:20px;
}
.expenses-body{
    padding: 0px;
    background-color: var(--navy-blue);
}
.expenses-btn{
    background-color: var(--navy-blue);
    font-size:var(--fs-3);
    color: var(--list-color);
    padding:10px 10px 12px 0px;  
}
.expenses-item{
    border:1px solid var(--navy-blue);
}
.expenses-btn::after {
    filter: invert(1);
}
.accordion-button:not(.collapsed)::after {
    background-image: url(../assets/images/dashboard/download.svg);
}
a.router-link-active.router-link-exact-active.text-decoration-none.active li {
    color: var(--white);
    background-color:#3d4a72;
}
.expenses-list a.router-link-active.router-link-exact-active.text-decoration-none.active li {
    background-color:#3d4a72;
}
 .bhavna :active{
    color: var(--white);
}
.dashboard-offcanvas{
  width:250px;
}
.offcanvas-logo-header{
  background-color: var(--navy-blue);
}
.offcanvas-content{
  background-color: var(--navy-blue);
}
.toggle-btn{
    position: absolute;
    top: 27px;
    z-index: 1;
    left: 10px;
}

.expenses-list{
  padding:10px 0px 0px 0px;
}
.custom_active{
    color: white;
}
.custom_active1{
    color: white;
}
.custom_active3{
    color: white;
}
.custom_active2{
    color: white;
}
.expenses-btn:active{
  color:var(--white);

}

button.cross-icon {
    filter: invert(1);
}
    /*********footer***********/
.dashboard-footer {
    background: var(--navy-blue);
    
}
.dashboard-footer p {
    color: var(--white);
    font-size: var(--fs-3);
}
.accordion-item:last-of-type .accordion-button.collapsed {
    border-bottom-right-radius: calc(0.25rem - 4px);
    border-bottom-left-radius: calc(0.25rem - 4px);
}
.accordion-item:first-of-type .accordion-button {
    border-top-left-radius: calc(0.25rem - 4px);
    border-top-right-radius: calc(0.25rem - 4px);
}
a.router-link-active.router-link-exact-active.text-decoration-none.active li svg{
    fill:var(--white);
  }
@media all and (min-width:320px) and (max-width:767px){
    .dashboard-footer p {
    font-size: var(--fs-2);
}
}
  </style>