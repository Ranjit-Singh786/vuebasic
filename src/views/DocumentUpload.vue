<template>
  <div>
    <div class="candidate-form my-4">
    <form @submit.prevent="save_document">
      
        <div class="form p-4 ">
            <div class="row">
                <div class="col-md-12">
                     <div v-if="length==0">
        
                                    <td colspan="10">
                                        <div v-if="loadingloader">
                                            <div v-for="(index) in 5" :key="index" class="my-4">
                                            <Skeletor height="15" pill :shimmer="true"/>
                                            </div>
                                        </div>
                                        <span v-else class="d-flex justify-content-center text-light p-2">
                                            <h5 class="mb-0 text-success"> No Data Available</h5>
                                        </span>
                                    </td>
        </div>
                    <div class="document" v-else>
                   
                        <div class="document-head">
                            <h2 class="">Documents:</h2>
                            <h2 class="text-danger" v-if="!imagedatas.image">{{errormess}}</h2>
                        </div>
                      <div class="row align-items-center">
                            <div class="aadhar-card d-flex justify-content-between
                             mb-4" v-for="(data,index) in imagedatas" :key="index">
                            <p class="m-0 ">{{data.document_title}}</p>
                            <router-link v-if="this.$store.getters.getimagedatas[index].document_path || data.document_path"
                  :to="{ name: 'DocView',params: {id: data.user_document_id}}"
                  target="_blank"> {{data.imageData.name ? data.imageData.name.substring(data.imageData.name.length-25) : data.imageData.substring(data.imageData.length-17)}}
              </router-link>
                              
                              <p v-else>{{data.imageData.name?data.imageData.name.substring(data.imageData.name.length-25):"select .pdf file(only)"}}</p>
                             <!-- <div v-if="showPdf[index]"><button @click="data_change(data.document_path)">Click to View Pdf</button></div> -->
                              <div class="upload-btn">
                                <ChooseImage  v-model="data.imageData" :img="this.$store.getters.getimagedatas[index].document_path"/>
                            </div>
                            </div>
                            
                            

                        </div>
                        
                         <div class="row bank-row justify-content-center">
                              <div class="col-md-10 col-lg-4 col-xl-4">
                                <div class="my-5 text-center">
                                  <button
                                    v-if="loading == false"
                                    type="submit"
                                    class="
                                      btn btn_save
                                      border
                                      btn
                                     px-5
                                      py-2
                                      shadow-none
                                    "
                                  >
                                    Save
                                  </button>
                                  <button
                                    class="btn btn_save
                                      border
                                      btn
                                     px-5
                                      py-2
                                      shadow-none"
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
                            </div>
                    </div>
                </div>
            </div>
        
        </div>
        
</form>
</div>
  </div>
</template>

<script>
import ChooseImage from "@/components/ChooseImage.vue";
import ApiClass from "@/api/api";
import _ from 'lodash';
// import pdf from 'pdfvuer';

export default {
  name: "DocumentUpload",
   components: {
    ChooseImage,
  },
  data() {
    return {
      candata: [],
      id:'',
      loading:false,
      errormess:"",
      pdfdc:"",
      showPdf:[false,false,false],
      length:'',
      loadingloader:false,
        
      imagedatas:[
      ],
        
      get_doc:[]
    };
  },
   computed:{
       
   },

  mounted() {
    this.candata = this.$store.getters.get_candidate;
    this.id = this.candata.id;
    // alert(this.id)
    if(this.$route.fullPath.includes('profile')){
        this.$store.commit('setshow_doc',this.showdata = true);
    }
    this.get_documents(this.id);
    
   
  },
  methods: {
         async save_document(){
         if(this.imagedatas[0].imageData.name ===undefined && this.imagedatas[1].imageData.name ===undefined && this.imagedatas[2].imageData.name ===undefined){
          return;
         }
              this.errormess = "";
                this.loading = true;
             var formData = new FormData();
       _.forEach(this.imagedatas, (item)=>{ 
         formData.append(item.document_slug, item.imageData);
       });
       
        // formData.append(this.imagedatas[1].document_slug, this.imagedatas[1].imageData);
        // formData.append(this.imagedatas[2].document_slug, this.imagedatas[2].imageData);
       var header = {
          "Content-Type": "multipart/form-data",
        };
            
        let response = await ApiClass.postNodeRequest(
          "upload-documents/"+this.id,
          true,
          formData,
          header
        );
        console.log(response,'api response here');
       if(response?.data){
        this.get_documents(this.id);
        this.loading = false;
             if(response?.data.status_code ==1){
                console.log(response?.data,'dddd');
                this.success(response.data.message);
             }else{
               this.failed(response.data.message)
             }
       
            }
         
    },
       //get_documents candidate
      async get_documents(id){
        // alert(id)
      let response = await ApiClass.getNodeRequest("documents-get/"+id, true);

      if (response?.data) {
         this.loadingloader = true;
        this.load = false;
        if (response?.data?.status_code == "1") {
          
        console.log(response.data.data,'data is here'); 
          console.log(response.data);
             console.log( this.get_doc);
            //  this.get_doc = response.data.data ?? [];
             this.imagedatas = response.data.data ?? [];
             this.$store.commit('setimagearr',this.imagedatas);
              this.imagedatas.forEach(el => { 
                el['imageData'] = el['document_path']
                
              });
            //  console.log(this.imagedatas,'image data here');
             this.length = response.data.data.length ?? [];
             console.log(this.get_doc,'candidatepath'); 
        }
        if (response.data.status_code == "0") {
          this.show = false;
        }
      }
      
    },
            //  api call here
         
         
  },
};
</script>

<style scoped>
.form{
    box-shadow: rgb(100 100 111 / 20%) 10px 17px 29px 10px;
    margin:10px 20px;
    border-radius: 4px;
   
}
.aadhar-card{
    border:2px solid var(--input-border);
    padding:13px 20px;
    border-radius: 10px;
}
.document-head h2 {
    font-size: var(--fs-4);
    font-weight: 600;
    color: var(--navy-blue);
}
.btn_save {
  background-color: var(--navy-blue);
  color: var(--white);
  border: transparent;
  border-radius: 4px;
  font-weight: 600;
  border: 2px solid transparent;
}
.aadhar-card p{
    font-size: var(--fs-4);
    color:var(--text-box);
    font-weight: 600;
}
.upload-btn button{
    color:var(--white);
    background-color: var(--navy-blue);
    border-radius: 4px;
    border:2px solid var(--navy-blue);
}
.upload-btn button:hover{
    background-color: var(--white);
    color:var(--navy-blue);
}
</style>
