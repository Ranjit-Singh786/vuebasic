<template>
  <div>
      <section class="filter-content">
        <div class="container">
        <div class="row">
          <div class="col-md-10">
            <div class="filter-data">
              <div class="all-head">
                <label class="">All</label>
              </div>
              <div class="content-head">
                <ul class="m-0 p-0">
                  <li>Name</li>
                  <li>
                    <div class="dropdown filter-dropdown">
                      <button class="btn  dropdown-toggle ps-0 shadow-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Gender
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Male</a></li>
                        <li><a class="dropdown-item" href="#">Female</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>Profile</li>
                  <li>Designation</li>
                  <li>Role</li>
                  <li>Department Name</li>
                  <li>Email</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
  </div>
</template>
<script>
  export default{
    name:'FilterView'
  }
</script>
<style scoped>
  .all-head label{
    padding: 10px 20px;
    color: var(--white);
    font-size: var(--fs-3);
   
  }
    .all-head{
    border-bottom:2px solid var(--hr-border);
    background-color:var(--navy-blue);
  }
  .filter-data{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

.content-head ul li{
  list-style: none;
  padding: 5px 20px;
  font-size: var(--fs-3);
  font-weight:600;
  color: var(--navy-blue);
}
.filter-dropdown button{
  font-size: var(--fs-3);
  font-weight:600;
  color: var(--navy-blue);
}
</style>