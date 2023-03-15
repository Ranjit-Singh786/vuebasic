<template>
  <div>
        <!-- Button trigger modal -->


<!-- Modal -->
                  <div class="modal fade" id="exampleModal99" tabindex="-1" aria-labelledby="exampleModal99Label"
                    aria-hidden="true">
                    <div class="modal-dialog modal-fullscreen">
                      <div class="modal-content">
                        <div class="modal-header model-heading">
                          <h5 class="modal-title modal-head" id="exampleModal99Label">
                            User Detail
                          </h5>
                          <button type="button" class="btn-close bg-light text-light" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        </div>
                        <!-- <div class="circle-1 d-none d-md-block">
                          <span><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 384 512"
                              style="fill: var(--navy-blue)">
                              <path
                                d="M336 0C362.5 0 384 21.49 384 48V464C384 490.5 362.5 512 336 512H240V432C240 405.5 218.5 384 192 384C165.5 384 144 405.5 144 432V512H48C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336zM64 272C64 280.8 71.16 288 80 288H112C120.8 288 128 280.8 128 272V240C128 231.2 120.8 224 112 224H80C71.16 224 64 231.2 64 240V272zM176 224C167.2 224 160 231.2 160 240V272C160 280.8 167.2 288 176 288H208C216.8 288 224 280.8 224 272V240C224 231.2 216.8 224 208 224H176zM256 272C256 280.8 263.2 288 272 288H304C312.8 288 320 280.8 320 272V240C320 231.2 312.8 224 304 224H272C263.2 224 256 231.2 256 240V272zM80 96C71.16 96 64 103.2 64 112V144C64 152.8 71.16 160 80 160H112C120.8 160 128 152.8 128 144V112C128 103.2 120.8 96 112 96H80zM160 144C160 152.8 167.2 160 176 160H208C216.8 160 224 152.8 224 144V112C224 103.2 216.8 96 208 96H176C167.2 96 160 103.2 160 112V144zM272 96C263.2 96 256 103.2 256 112V144C256 152.8 263.2 160 272 160H304C312.8 160 320 152.8 320 144V112C320 103.2 312.8 96 304 96H272z" />
                            </svg></span>
                        </div> -->
                        <div class="row">
                        <div class="modal-body modal-form">
                          <form>
                           <div class="info_box3 text-blue mb-4" >
                        <div class="role mb-2">
                             <h6 class="mb-1 fw-bold">Name</h6>
                            <div class=" text-start">
                                <p class="m-0">{{ userdata.name }}</p>
                                </div>
                        </div>
                    </div>
                            
                            
                             <div class="info_box3 text-blue mb-4" >
                        <div class="role mb-2">
                             <h6 class="mb-1 fw-bold">Gender</h6>
                            <div class=" text-start">
                                <p class="m-0">{{ userdata.gender }}</p>
                                </div>
                        </div>
                    </div>
                            <div class="info_box3 text-blue mb-4" >
                        <div class="role mb-2">
                             <h6 class="mb-1 fw-bold">Email</h6>
                            <div class=" text-start">
                                <p class="m-0">{{ userdata.email }}</p>
                                </div>
                        </div>
                    </div>
                            <div class="info_box3 text-blue mb-4" >
                        <div class="role mb-2">
                             <h6 class="mb-1 fw-bold">DOB</h6>
                            <div class=" text-start">
                                <p class="m-0">{{ userdata.date_of_birth }}</p>
                                </div>
                        </div>
                    </div>
                             <div class="info_box3 text-blue mb-4" v-for="(data, index) in userdata.role" :key="index">
                        <div class="role mb-2">
                             <h6 class="mb-1 fw-bold">Role name</h6>
                            <div class=" text-start">
                                <p class="m-0">{{ data }}</p>
                                </div>
                        </div>
                    </div>
                               <div class="info_box3 text-blue mb-4" v-for="(data, index) in userdata.department" :key="index">
                        <div class="role mb-2">
                             <h6 class="mb-1 fw-bold">Department name</h6>
                            <div class=" text-start">
                                <p class="m-0">{{ data }}</p>
                                </div>
                        </div>
                    </div>
                         <div class="info_box3 text-blue mb-4" v-for="(data, index) in userdata.team" :key="index">
                        <div class="role mb-2">
                             <h6 class="mb-1 fw-bold">Team name</h6>
                            <div class=" text-start">
                                <p class="m-0">{{ data }}</p>
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
</template>

<script>
export default {
    name: 'ModalComponent',
    props:JSON.parse(JSON.stringify(["userdata"])),
    mounted(){
        let data = this.userdata;
        console.log(data);
    }
}
</script>

<style scoped>
  /* ***************************modal-head****************************** */
  .modal-head {
    font-size: var(--fs-5);
    color: var(--white);
  }
  .modal-input input,
  .modal-input select {
    padding: 3px 20px;
    border: 1px solid var(--input-border);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    color: var(--text-box);
    font-size: var(--fs-3);
  }
  .modal-input input,
  .modal-input select:focus {
    box-shadow: none;
  }
  .modal-input label {
    font-size: var(--fs-3);
    color: var(--navy-blue);
    font-weight: 600;
  }
  .model-heading {
    background-color: var(--navy-blue);
    border-bottom: transparent;
  }
  .modal-form {
    background-color: var(--hr-bg);
  }
  .modal dialog {
    position: relative;
  }
.circle-1 span {
    padding: 30px;
    border-radius: 50px;
    left: 42%;
    position: absolute;
    top: -48px;
    background-color: var(--white);
  }
  .modal-input select{
  border:1px solid var(--input-border);
  font-size:var(--fs-3);
  color:var(--text-color);
}
  /**********************************modal-btn************************************/
  .modal-btn {
    background-color: var(--navy-blue);
    color: var(--white);
    border: transparent;
    border-radius: 4px;
    font-weight: 600;
    border: 2px solid transparent;
  }
  .modal-btn:hover {
    background-color: transparent;
    color: var(--navy-blue);
    border: 2px solid var(--navy-blue);
    border-radius: 4px;
  }

  .role p{
    color:var(--list-color);
    font-weight: 400;
  }
</style>