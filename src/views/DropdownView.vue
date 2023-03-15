<template>
  <div>
     <section class="dropdown-accordian">
      <div class="banner">
        <div class="nav" role="navigation"> 
          <ul class="nav__list">
          <!-- ********************dashboard********* -->
          <li>
                      <router-link to="/" class="text-decoration-none"><div class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg"
                          width="24" height="24">
                          <path
                            d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z">
                          </path>
                        </svg><label>Dashboard </label></div></router-link>
                    </li>
            <!-- ********************user -->
                    <li>
                      <router-link to="/user" class="text-decoration-none"><div class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg"
                          width="24" height="24">
                          <path
                            d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z">
                          </path>
                        </svg><label>User</label></div></router-link>
                    </li>

                <!-- ***********candidate -->
                    <li>
                      <router-link to="/department" class="text-decoration-none"><div class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg"
                          width="24" height="24">
                          <path
                            d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z">
                          </path>
                        </svg><label>Department</label></div></router-link>
                    </li>


                <!-- **********************team*********** -->
                    <li>
                      <router-link to="/team" class="text-decoration-none"><div class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg"
                          width="24" height="24">
                          <circle cx="20.288" cy="8.344" r="1.707"></circle>
                          <path
                            d="M18.581 11.513h3.413v3.656c0 .942-.765 1.706-1.707 1.706h-1.706v-5.362zM2.006 4.2v15.6l11.213 1.979V2.221L2.006 4.2zm8.288 5.411-1.95.049v5.752H6.881V9.757l-1.949.098V8.539l5.362-.292v1.364zm3.899.439v8.288h1.95c.808 0 1.463-.655 1.463-1.462V10.05h-3.413zm1.463-4.875c-.586 0-1.105.264-1.463.673v2.555c.357.409.877.673 1.463.673a1.95 1.95 0 0 0 0-3.901z">
                          </path>
                        </svg><label>Team</label></div></router-link>
                    </li>
            <!-- *********************expenses********** -->
            <li>
             <div class="ac">
    
    <input class="ac-input" id="ac-1" name="ac-1" type="checkbox"/>
    <label class="ac-label" for="ac-1">Expenses</label>
    
    <article class="ac-text">
      
      <div class="ac-sub">
        
       <router-link to="/expensive"> <label class="ac-label" for="ac-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M512 80C512 98.01 497.7 114.6 473.6 128C444.5 144.1 401.2 155.5 351.3 158.9C347.7 157.2 343.9 155.5 340.1 153.9C300.6 137.4 248.2 128 192 128C183.7 128 175.6 128.2 167.5 128.6L166.4 128C142.3 114.6 128 98.01 128 80C128 35.82 213.1 0 320 0C426 0 512 35.82 512 80V80zM160.7 161.1C170.9 160.4 181.3 160 192 160C254.2 160 309.4 172.3 344.5 191.4C369.3 204.9 384 221.7 384 240C384 243.1 383.3 247.9 381.9 251.7C377.3 264.9 364.1 277 346.9 287.3C346.9 287.3 346.9 287.3 346.9 287.3C346.8 287.3 346.6 287.4 346.5 287.5L346.5 287.5C346.2 287.7 345.9 287.8 345.6 288C310.6 307.4 254.8 320 192 320C132.4 320 79.06 308.7 43.84 290.9C41.97 289.9 40.15 288.1 38.39 288C14.28 274.6 0 258 0 240C0 205.2 53.43 175.5 128 164.6C138.5 163 149.4 161.8 160.7 161.1L160.7 161.1zM391.9 186.6C420.2 182.2 446.1 175.2 468.1 166.1C484.4 159.3 499.5 150.9 512 140.6V176C512 195.3 495.5 213.1 468.2 226.9C453.5 234.3 435.8 240.5 415.8 245.3C415.9 243.6 416 241.8 416 240C416 218.1 405.4 200.1 391.9 186.6V186.6zM384 336C384 354 369.7 370.6 345.6 384C343.8 384.1 342 385.9 340.2 386.9C304.9 404.7 251.6 416 192 416C129.2 416 73.42 403.4 38.39 384C14.28 370.6 .0003 354 .0003 336V300.6C12.45 310.9 27.62 319.3 43.93 326.1C83.44 342.6 135.8 352 192 352C248.2 352 300.6 342.6 340.1 326.1C347.9 322.9 355.4 319.2 362.5 315.2C368.6 311.8 374.3 308 379.7 304C381.2 302.9 382.6 301.7 384 300.6L384 336zM416 278.1C434.1 273.1 452.5 268.6 468.1 262.1C484.4 255.3 499.5 246.9 512 236.6V272C512 282.5 507 293 497.1 302.9C480.8 319.2 452.1 332.6 415.8 341.3C415.9 339.6 416 337.8 416 336V278.1zM192 448C248.2 448 300.6 438.6 340.1 422.1C356.4 415.3 371.5 406.9 384 396.6V432C384 476.2 298 512 192 512C85.96 512 .0003 476.2 .0003 432V396.6C12.45 406.9 27.62 415.3 43.93 422.1C83.44 438.6 135.8 448 192 448z"/></svg>Expenses</label></router-link>
        
      </div>
      
      <div class="ac-sub">
        <router-link to="/Assets"><label class="ac-label" for="ac-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M512 80C512 98.01 497.7 114.6 473.6 128C444.5 144.1 401.2 155.5 351.3 158.9C347.7 157.2 343.9 155.5 340.1 153.9C300.6 137.4 248.2 128 192 128C183.7 128 175.6 128.2 167.5 128.6L166.4 128C142.3 114.6 128 98.01 128 80C128 35.82 213.1 0 320 0C426 0 512 35.82 512 80V80zM160.7 161.1C170.9 160.4 181.3 160 192 160C254.2 160 309.4 172.3 344.5 191.4C369.3 204.9 384 221.7 384 240C384 243.1 383.3 247.9 381.9 251.7C377.3 264.9 364.1 277 346.9 287.3C346.9 287.3 346.9 287.3 346.9 287.3C346.8 287.3 346.6 287.4 346.5 287.5L346.5 287.5C346.2 287.7 345.9 287.8 345.6 288C310.6 307.4 254.8 320 192 320C132.4 320 79.06 308.7 43.84 290.9C41.97 289.9 40.15 288.1 38.39 288C14.28 274.6 0 258 0 240C0 205.2 53.43 175.5 128 164.6C138.5 163 149.4 161.8 160.7 161.1L160.7 161.1zM391.9 186.6C420.2 182.2 446.1 175.2 468.1 166.1C484.4 159.3 499.5 150.9 512 140.6V176C512 195.3 495.5 213.1 468.2 226.9C453.5 234.3 435.8 240.5 415.8 245.3C415.9 243.6 416 241.8 416 240C416 218.1 405.4 200.1 391.9 186.6V186.6zM384 336C384 354 369.7 370.6 345.6 384C343.8 384.1 342 385.9 340.2 386.9C304.9 404.7 251.6 416 192 416C129.2 416 73.42 403.4 38.39 384C14.28 370.6 .0003 354 .0003 336V300.6C12.45 310.9 27.62 319.3 43.93 326.1C83.44 342.6 135.8 352 192 352C248.2 352 300.6 342.6 340.1 326.1C347.9 322.9 355.4 319.2 362.5 315.2C368.6 311.8 374.3 308 379.7 304C381.2 302.9 382.6 301.7 384 300.6L384 336zM416 278.1C434.1 273.1 452.5 268.6 468.1 262.1C484.4 255.3 499.5 246.9 512 236.6V272C512 282.5 507 293 497.1 302.9C480.8 319.2 452.1 332.6 415.8 341.3C415.9 339.6 416 337.8 416 336V278.1zM192 448C248.2 448 300.6 438.6 340.1 422.1C356.4 415.3 371.5 406.9 384 396.6V432C384 476.2 298 512 192 512C85.96 512 .0003 476.2 .0003 432V396.6C12.45 406.9 27.62 415.3 43.93 422.1C83.44 438.6 135.8 448 192 448z"/></svg>Assets</label></router-link>
        
      </div>
      
    </article><!--/ac-text-->
    
  </div>
            </li>
            <!-- *********************attendance************** -->
                    <li>
                      <router-link to="/attendance" class="text-decoration-none"><div class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg"
                          width="24" height="24">
                          <path
                            d="M21 5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5zM5 19V5h14l.002 14H5z">
                          </path>
                          <path d="M7 7h1.998v2H7zm4 0h6v2h-6zm-4 4h1.998v2H7zm4 0h6v2h-6zm-4 4h1.998v2H7zm4 0h6v2h-6z">
                          </path>
                        </svg><label>Attendance</label></div></router-link>
                    </li>
              <!-- *************role************** -->
                    <li>
                      <router-link to="/role" class="text-decoration-none">
                        <div class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                          <path
                            d="M222.7 32.15C227.7 49.08 218.1 66.9 201.1 71.94C121.8 95.55 64 169.1 64 255.1C64 362 149.1 447.1 256 447.1C362 447.1 448 362 448 255.1C448 169.1 390.2 95.55 310.9 71.94C293.9 66.9 284.3 49.08 289.3 32.15C294.4 15.21 312.2 5.562 329.1 10.6C434.9 42.07 512 139.1 512 255.1C512 397.4 397.4 511.1 256 511.1C114.6 511.1 0 397.4 0 255.1C0 139.1 77.15 42.07 182.9 10.6C199.8 5.562 217.6 15.21 222.7 32.15V32.15z" />
                        </svg><label>Roles</label>
                        </div></router-link>
                    </li>
            <!-- *********************candidate********************* -->
            <li>
              <input id="group-2" type="checkbox" hidden />
              <label for="group-2"> <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 640 512"><path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"/></svg>Candidates</label>
              <ul class="group-list">
                <li>
                  <router-link to="/candidate">
                    <div class="d-flex align-items-center">
                    <span><svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 640 512"><path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"/></svg></span><label for="sub-group-1">Candidate</label>
                    </div>
                  </router-link>
                </li>
                 <li>
                  <router-link to="/candidatelist">
                    <div class="d-flex align-items-center">
                    <span><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"><circle cx="15.5" cy="13.5" r="2.5"></circle><path d="M12 13.5c0-.815.396-1.532 1-1.988A2.47 2.47 0 0 0 11.5 11a2.5 2.5 0 1 0 0 5 2.47 2.47 0 0 0 1.5-.512 2.486 2.486 0 0 1-1-1.988z"></path><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 18V6h16l.002 12H4z"></path></svg></span><label for="sub-group-1">Candidatelist</label>
                    </div>
                  </router-link>
                </li>
              </ul>
            </li>
            <!-- ************************interview************************** -->
            <li>
              <input id="group-3" type="checkbox"  class="input-icon"/>
              <label for="group-3"><span><svg xmlns="http://www.w3.org/2000/svg" width="24"  height="24" viewBox="0 0 384 512"> <path d="M282.5 64H320C355.3 64 384 92.65 384 128V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H101.5C114.6 26.71 150.2 0 192 0C233.8 0 269.4 26.71 282.5 64zM192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96C160 113.7 174.3 128 192 128zM105.4 230.5C100.9 243 107.5 256.7 119.1 261.2C132.5 265.6 146.2 259.1 150.6 246.6L151.1 245.3C152.2 242.1 155.2 240 158.6 240H216.9C225.2 240 232 246.8 232 255.1C232 260.6 229.1 265.6 224.4 268.3L180.1 293.7C172.6 298 168 305.9 168 314.5V328C168 341.3 178.7 352 192 352C205.1 352 215.8 341.5 215.1 328.4L248.3 309.9C267.9 298.7 280 277.8 280 255.1C280 220.3 251.7 192 216.9 192H158.6C134.9 192 113.8 206.9 105.8 229.3L105.4 230.5zM192 384C174.3 384 160 398.3 160 416C160 433.7 174.3 448 192 448C209.7 448 224 433.7 224 416C224 398.3 209.7 384 192 384z"/></svg></span></label>
              <ul class="group-list">
                <li><router-link to="/interview"><div class="d-flex align-items-center"><span><svg xmlns="http://www.w3.org/2000/svg" width="24"  height="24" viewBox="0 0 384 512"> <path d="M282.5 64H320C355.3 64 384 92.65 384 128V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H101.5C114.6 26.71 150.2 0 192 0C233.8 0 269.4 26.71 282.5 64zM192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96C160 113.7 174.3 128 192 128zM105.4 230.5C100.9 243 107.5 256.7 119.1 261.2C132.5 265.6 146.2 259.1 150.6 246.6L151.1 245.3C152.2 242.1 155.2 240 158.6 240H216.9C225.2 240 232 246.8 232 255.1C232 260.6 229.1 265.6 224.4 268.3L180.1 293.7C172.6 298 168 305.9 168 314.5V328C168 341.3 178.7 352 192 352C205.1 352 215.8 341.5 215.1 328.4L248.3 309.9C267.9 298.7 280 277.8 280 255.1C280 220.3 251.7 192 216.9 192H158.6C134.9 192 113.8 206.9 105.8 229.3L105.4 230.5zM192 384C174.3 384 160 398.3 160 416C160 433.7 174.3 448 192 448C209.7 448 224 433.7 224 416C224 398.3 209.7 384 192 384z"/></svg></span><label for="sub-group-1">Interview</label></div></router-link></li>
                <li>
                  <router-link to="/interviewlist"><div class="d-flex align-items-center"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512"><path d="M282.5 64H320C355.3 64 384 92.65 384 128V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H101.5C114.6 26.71 150.2 0 192 0C233.8 0 269.4 26.71 282.5 64zM192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96C160 113.7 174.3 128 192 128zM105.4 230.5C100.9 243 107.5 256.7 119.1 261.2C132.5 265.6 146.2 259.1 150.6 246.6L151.1 245.3C152.2 242.1 155.2 240 158.6 240H216.9C225.2 240 232 246.8 232 255.1C232 260.6 229.1 265.6 224.4 268.3L180.1 293.7C172.6 298 168 305.9 168 314.5V328C168 341.3 178.7 352 192 352C205.1 352 215.8 341.5 215.1 328.4L248.3 309.9C267.9 298.7 280 277.8 280 255.1C280 220.3 251.7 192 216.9 192H158.6C134.9 192 113.8 206.9 105.8 229.3L105.4 230.5zM192 384C174.3 384 160 398.3 160 416C160 433.7 174.3 448 192 448C209.7 448 224 433.7 224 416C224 398.3 209.7 384 192 384z"/></svg></span><label for="sub-group-1">Interviewlist</label></div></router-link> 
                </li>
              </ul>
            </li>
            <!-- ************************setting***************** -->
                    <li>
                      <router-link to="/setting"><div class="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 13a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm2.75-7.17A5 5 0 0 0 13 7.1v-3a7.94 7.94 0 0 1 3.9 1.62zM11 7.1a5 5 0 0 0-1.75.73L7.1 5.69A7.94 7.94 0 0 1 11 4.07zM7.83 9.25A5 5 0 0 0 7.1 11h-3a7.94 7.94 0 0 1 1.59-3.9zM7.1 13a5 5 0 0 0 .73 1.75L5.69 16.9A7.94 7.94 0 0 1 4.07 13zm2.15 3.17a5 5 0 0 0 1.75.73v3a7.94 7.94 0 0 1-3.9-1.62zm3.75.73a5 5 0 0 0 1.75-.73l2.15 2.14a7.94 7.94 0 0 1-3.9 1.62zm3.17-2.15A5 5 0 0 0 16.9 13h3a7.94 7.94 0 0 1-1.62 3.9zM16.9 11a5 5 0 0 0-.73-1.75l2.14-2.15a7.94 7.94 0 0 1 1.62 3.9z"></path></svg><label>Setting</label></div></router-link>
                </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'UserView',
  }
</script>

<style scoped>
  body {
    margin-top: 2rem;
    font: 100% "Open sans", "Trebuchet MS", sans-serif;
  }

  a {
    text-decoration: none;
  }

  /**
 * Hidden fallback
 */
  [hidden] {
    display: none;
    visibility: hidden;
  }

  /**
 * Styling navigation
 */
  header {
    margin-right: auto;
    margin-left: auto;
    max-width: remy(360px);
  }

  /**
 * Styling top level items
 */
  .nav a,
  .nav label {
    display: block;
    padding: .85rem;
    color: #fff;
    background-color: var(--navy-blue);
    box-shadow: inset 0 -1px lighten(#151515, 3%);
    transition: all .25s ease-in;

    &:focus,
    &:hover {
      color: rgba(255, 255, 255, .5);
      background: darken(#151515, 7%);
    }
  }

  .nav label {
    cursor: pointer;
  }

  /**
 * Styling first level lists items
 */
 .group-list li{
     list-style: none;
 }
  .group-list a,
  .group-list label {
    padding-left: 2rem;
    background: #303e67e0;
    box-shadow: inset 0 -1px lighten(#252525, 7%);
    

    &:focus,
    &:hover {
      background: darken(#252525, 7%);
    }
  }

  /**
 * Styling second level list items
 */
  .sub-group-list a,
  .sub-group-list label {
    padding-left: 4rem;
    background: #353535;
    box-shadow: inset 0 -1px lighten(#353535, 7%);

    &:focus,
    &:hover {
      background: darken(#353535, 7%);
    }
  }

  /**
 * Styling third level list items
 */
  .sub-sub-group-list a,
  .sub-sub-group-list label {
    padding-left: 6rem;
    background: #454545;
    box-shadow: inset 0 -1px lighten(#454545, 7%);

    &:focus,
    &:hover {
      background: darken(#454545, 7%);
    }
  }

  /**
 * Hide nested lists
 */
  .group-list,
  .sub-group-list,
  .sub-sub-group-list {
    height: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height .5s ease-in-out;
  }
.nav__list{
    list-style:none;
}
  .nav__list input[type=checkbox]:checked+label+ul {
    /* reset the height when checkbox is checked */
    max-height: 1000px;
  }

  /**
 * Rotating chevron icon
 */
  label>span {
    float: right;
    transition: transform .65s ease;
  }

  .nav__list input[type=checkbox]:checked+label>span {
    transform: rotate(90deg);
  }
    ul.group-list {
    background: var(--navy-blue);
}
  /**
 * Styling footer
 */
  footer {
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #050505;
  }

  .soc-media {
    display: flex;
    justify-content: center;
  }

  .soc-media li:nth-child(n+2) {
    margin-left: 1rem;
  }

  .soc-media a {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, .65);
    transition: color .25s ease-in;

    &:focus,
    &:hover {
      color: rgba(255, 255, 255, .2);
    }
  }














  .ac-label {
  font-weight: 700;
  position: relative;
  padding: .5em 1em;
  margin-bottom: .5em;
  display: block;
  cursor: pointer;
  background-color: whiteSmoke;
  transition: background-color .15s ease-in-out;
}

.ac-input:checked + label, .ac-label:hover {
  background-color: #999;
}

.ac-label:after, .ac-input:checked + .ac-label:after {
  content: "+";
  position: absolute;
  display: block;
  right: 0;
  top: 0;
  width: 2em;
  height: 100%;
  line-height: 2.25em;
  text-align: center;
  background-color: #e5e5e5;
  transition: background-color .15s ease-in-out;
}

.ac-label:hover:after, .ac-input:checked + .ac-label:after {
  background-color: #b5b5b5;
}

.ac-input:checked + .ac-label:after {
  content: "-";
}

.ac-input {
  display: none;
}



.ac-text, .ac-sub-text {
  opacity: 0;
  height: 0;
  margin-bottom: .5em;
  transition: opacity .5s ease-in-out;
  overflow: hidden;
}

.ac-input:checked ~ .ac-text, .ac-sub .ac-input:checked ~ .ac-sub-text { 
  opacity: 1;
  height: auto;
}
.ac-sub .ac-label {
  background: none;
  font-weight: 600;
  padding: .5em 2em;
  margin-bottom: 0;
}
.ac-sub .ac-label:checked {
  background: none;
  border-bottom: 1px solid whitesmoke;
}
.ac-sub .ac-label:after, .ac-sub .ac-input:checked + .ac-label:after {
  left: 0;
  background: none;
}

.ac-sub .ac-input:checked + label, .ac-sub .ac-label:hover {
  background: none;
}

.ac-sub-text {
  padding: 0 1em 0 2em;
}
.input-icon svg{
  padding-left: 20px;
}
.ac-label{
  margin-bottom:0px;
}
</style>