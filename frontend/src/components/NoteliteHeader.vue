<template>
  <div class="header" :style="{ backgroundColor: 'light'+noteColor, borderColor: noteColor}">
    <span class="header-title">{{ headerTitle }}</span>

    <span class="save-text" v-if="showSaved">Saved</span>

    <span class="refresh-text" v-if="showRefreshed">Refreshed</span>

    <i class="save-icon" @click="save" v-if="noteCreator">launch</i>

    <i class="refresh-icon" @click="refresh" v-if="!noteCreator">input</i>
  </div>
</template>

<script>
  import request from 'superagent'

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
      return {
        showSaved:false,
        showRefreshed:false,
      }
    },

    methods: {
      refresh: function() {
        request
          .get('https://localhost:3090/loadNote/'+ this.id)
          .end((err, res) => {
            // Calling the end function will send the request
          })
        this.showRefreshed = true
        setTimeout(() => this.showRefreshed = false, 2000)
      },
      save: function() {
        request
          .post('https://localhost:3090/saveNote')
          .send({ id: this.id , text: this.noteText }) // sends a JSON post body
          .end((err, res) => {
            // Calling the end function will send the request
          })
        this.showSaved = true
        setTimeout(() => this.showSaved = false, 2000)
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

  .refresh-text{
    font-weight: bold;
    font-size: 20px;
    margin-top: 2px;
    padding-left: 110px;
    color:green;
  }

  .save-text{
    font-weight: bold;
    font-size: 20px;
    margin-top: 2px;
    padding-left: 150px;
    color: green;
  }
</style>
