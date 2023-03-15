<template>
    <div>
        <iframe  width="100%" height="900px" :src="datas" frameborder='0'></iframe>        
    </div>
</template>
<script>
import ApiClass from "@/api/api";

export default {
    name:"DocView",
    data(){
        return{
            id:'',
            datas:null,
        }
    },
   async mounted(){
       this.id = this.$route.params.id;
       let response = await ApiClass.getNodeRequest("documents-view/"+this.id, true);
         this.datas = response.data.document_path;
    //    if(this.datas===undefined){
    //     console.log(this.$router.options.history.state.back)
    //    this.$router.push('/candidatelist');
    //    }
    }
       
}
</script>
<style scoped>

</style>