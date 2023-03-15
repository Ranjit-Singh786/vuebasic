<template>
<div>
<div class="d-flex gap-3 align-items-center text-danger">
        <div v-if="error">
          Please select pdf file only

     </div>
<div class="base-image-input" :style="{ 'background-image': `url(${imageData})` }" @click="chooseImage">
     <img id="img_url" v-if="!imageData && !img"  :src="thumbnail" class="img-fluid image_file filter_img img-thumbnail border-0" style="cursor:pointer;" alt="img"/>
     
     <svg v-else xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="50" class="border bg-white" height="50" style="fill: var(--navy-blue);"><path d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023.479 0 .774-.242.774-.651 0-.366-.254-.586-.704-.586zm3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018.817.006 1.349-.444 1.349-1.396.006-.83-.479-1.268-1.255-1.268z"></path><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.498 16.19c-.309.29-.765.42-1.296.42a2.23 2.23 0 0 1-.308-.018v1.426H7v-3.936A7.558 7.558 0 0 1 8.219 14c.557 0 .953.106 1.22.319.254.202.426.533.426.923-.001.392-.131.723-.367.948zm3.807 1.355c-.42.349-1.059.515-1.84.515-.468 0-.799-.03-1.024-.06v-3.917A7.947 7.947 0 0 1 11.66 14c.757 0 1.249.136 1.633.426.415.308.675.799.675 1.504 0 .763-.279 1.29-.663 1.615zM17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17v.74zM14 9h-1V4l5 5h-4z" >
                                    
                                    </path>
                                    </svg>
    <!-- <span v-if="!imageData"  class="placeholder">
        Choose an Image
    </span> -->
    <input class="file-input" ref="fileInput" type="file" @input="onSelectFile">
     
      
</div>
</div>
</div>
</template>

<script>
export default {
    name: 'BaseInput',
    data() {
        return {
            imageData: null,
            error:false,
            thumbnail: require("@/assets/images/download.png"),
           
        }
    },
   
    props: ['modelvalue','img'],
    
    methods: {
        chooseImage() {
            this.$refs.fileInput.click()
        },

        onSelectFile() {
            
            const inputt = this.$refs.fileInput
            const files = inputt.files
             
              console.log('dhusf8udhsfnds',files[0])
            //   if(files[0] ===undefined){
                 
            //      this.imageData = null;
            //       this.$store.commit('setimagedata',false);
                
            //       return;
            //   }
            // console.log('');
             if(files[0].type ==='application/pdf'){
                
                    // console.log(this.slugdata);
                    // console.log(this.docs);
                this.$store.commit('setimagedata',true);
                
                // console.log('pdf');
                this.error = false;
                
            if(files.length == 0) {
                this.imageData=null;
                this.$emit("update:modelValue", this.imageData)
            }
            if (files && files[0]) {
                const reader = new FileReader
                reader.onload = e => {
                    this.imageData = e.target.result;
                    // console.log(this.imageData);
                }
                reader.readAsDataURL(files[0])
                this.$emit("update:modelValue", files[0]);
                
            }
                
             }
                else{
                this.error = true;
                 this.imageData = null;
                this.$emit("update:modelValue", this.imageData);
                

                this.$store.commit('setimagedata',false);
                return;
             }
        }
    }
}
</script>

<style scoped>
.base-image-input {
    display: block;
    width: 80px;
    height: 80px;
    cursor: pointer;
    background-size: cover;
    background-position: center center;
}

.placeholder {
    background: var(--light-grey);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--just-bit-black);
    font-size: 12px;
    cursor: pointer;
    text-align: center;
}
.img-thumbnail {
margin-top: 3px;
    width: 50px;
    height: 50px;
}


.file-input {
    display: none;
}
</style>
