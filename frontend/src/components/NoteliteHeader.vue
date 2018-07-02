<template>
  <div class="header" :style="{ backgroundColor: 'light'+noteColor, borderColor: noteColor}">
    <span class="header-title">
      {{headerTitle}}
    </span>
    <i class="save-icon" @click="save" v-if="noteCreator">launch</i>
    <i class="refresh-icon" @click="refresh" v-if="!noteCreator">input</i>
  </div>
</template>

<script>
export default {
  name: 'NoteliteHeader',
  props:{
    noteCreator: Boolean,
    headerTitle: String,
    noteColor: String,
    noteText: String,
    id:String,
  },
  data () {
    return{
    }
  },

  methods:{
    refresh: function(){
      request
      .get('https://localhost:3090/getNote/'+ this.id)
      .end((err, res) => {
        // Calling the end function will send the request
      });
    },
    save: function(){
      request
      .post('https://localhost:3090/saveNote')
      .send({ id: this.id , text: this.noteText }) // sends a JSON post body
      .end((err, res) => {
        // Calling the end function will send the request
      });
    },
  },
}
</script>

<style scoped>
.header{
  height: 8%;
  border: 2px solid;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
}

.header-title{
  font-size: 24px;
}

.refresh-icon{

}

.save-icon{

}

</style>
