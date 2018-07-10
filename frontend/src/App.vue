<template>
  <div
    id="app"
    class="root"
    @keyup.ctrl.115.prevent="save"
    @keyup.ctrl.114.prevent="refresh"
  >

    <NoteliteHeader
      class="header"
      :id="id"
      @textChange="textChange"
      @save="save"
      @refresh="refresh"
      :showError="showError"
      :showSaved="showSaved"
      :showRefreshed="showRefreshed"
      :noteText="noteText"
      :headerTitle="noteTitle"
      :noteCreator="noteCreator"
      :color="color"
    />

    <NoteText
      @save="save"
      @refresh="refresh"
      @textChange="textChange"
      :noteText="noteText"
      :noteCreator="noteCreator"
    />

    <Author :authorName="authorName" />
  </div>
</template>

<script>
  import request from 'superagent'
  import NoteliteHeader from './components/NoteliteHeader.vue'
  import NoteText from './components/NoteText.vue'
  import Author from './components/Author.vue'

  export default {
    name: 'App',

    components: {
      NoteliteHeader,
      NoteText,
      Author,
    },

    data() {
      return {
        id: '11',
        noteCreator: true,
        authorName: 'amin',
        noteText: '',
        noteTitle: 'mytitle',
        color: '#9b0000',
        showError: false,
        showSaved: false,
        showRefreshed: false,
        //available colors:
        // '#ffd600'
        // '#43a047'
        // '#76d275'
        // '#00701a'
        // '#00b0ff'
        // '#0081cb'
        // '#424242'
        // '#d50000'
        // '#9b0000'
        // '#ff6d00'
        // '#aa00ff'
        // '#5e35b1'
        // '#ff4081'
        // '#c60055'
        // '#707070'
      }
    },

    methods: {
      textChange: function(newText){
        this.noteText = newText
      },
      refresh: function() {
        request
          .get('https://localhost:3090/loadNote/' + this.id)
          .set('Access-Control-Allow-Origin', '*')
          .end((err, res) => {
            if(err || res.body == null){
              this.showRefreshed = false
              this.showError = true
              this.showSaved = false
              setTimeout(() => this.showError = false, 2000)
            }else {
              this.textChange(res.body.text)
              this.showRefreshed = true
              this.showError = false
              this.showSaved = false
              setTimeout(() => this.showRefreshed = false, 2000)
            }
            // Calling the end function will send the request
          })
      },
      save: function() {
        request
          .post('https://localhost:3090/saveNote')
          .set('Access-Control-Allow-Origin', '*')
          .send({ id: this.id, text: this.noteText }) // sends a JSON post body
          .end((err, res) => {
            if(err) {
              this.showRefreshed = false
              this.showError = true
              this.showSaved = false
              setTimeout(() => this.showError = false, 2000)
            }else {
              this.showRefreshed = false
              this.showError = false
              this.showSaved = true
              setTimeout(() => this.showSaved = false, 2000)
            }
            // Calling the end function will send the request
          })
      },
    },

    mounted: function() {
      this.refresh()
    },
  }
</script>

<style scoped>
  .root {
    width: 350px;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    overflow: hidden;
  }
</style>
