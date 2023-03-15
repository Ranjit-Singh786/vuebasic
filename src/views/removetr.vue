
  <template>
  <div class="app">
    <div class="col-12 sections" v-for="(section, sectionIndex) in sections" :key="sectionIndex">
      <div class="mb-1 row" v-for="(iban, ibanIndex) in section.ibans" :key="ibanIndex">
        <div class="col-sm-3">
          <label class="col-form-label" for="iban"><span><i data-feather='file-text'></i></span>IBAN NUMBER</label>
        </div>
        <div class="col-sm-6">
          <input type="text" class="form-control" placeholder="Item" v-model="iban.item">
          <span v-if="section.ibans.length>1"
          class="float-right" style="cursor:pointer" @click="removeItem(sectionIndex, ibanIndex)">X</span>
        </div>
      </div>
      <button class="btn btn-success mt-5 mb-5" @click="addNewItem(sectionIndex)">New Iban</button>
    </div>
    </div>
    
  </template>
<script>
export default {
  name:'StepView',
  data(){
      
    return {
      data: {
        iban: "",
      },
      sections: [{
        ibans: [{item: ""}]
      }],
    }
},
 methods: {
    addNewItem(id)
 {
      this.sections[id].ibans.push({item: ''});
    },
    removeItem(sectionIndex, ibanIndex) {
      this.sections[sectionIndex].ibans.splice(ibanIndex, 1);
    },
  },
}
</script>
