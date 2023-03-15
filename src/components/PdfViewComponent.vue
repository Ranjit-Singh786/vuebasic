<template>
    <div>
        <iframe width="100%" height="900px" :src="privacy" frameborder='0'></iframe>        
    </div>
</template>
<script>


export default {
    name:"PrivacyPolicy",
    props:['privacydata'],
    data() {
        return {           
            privacy : this.privacydata,         
        }
    },    
}
</script>
<style scoped>

</style>