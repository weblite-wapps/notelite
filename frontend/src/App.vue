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
      :headerTitle="headerTitle"
      :noteCreator="noteCreator"
      :noteColorObj="noteColorObj"
    />

    <!-- <NoteTitle :noteTitle="noteTitle" :noteColorObj="noteColorObj" /> -->

    <NoteText
      @save="save"
      @refresh="refresh"
      @textChange="textChange"
      :noteText="noteText"
      :noteCreator="noteCreator"
      :noteColorObj="noteColorObj"
    />

    <Author :authorName="authorName" :noteColorObj="noteColorObj" />
  </div>
</template>

<script>
  import request from 'superagent'
  import NoteliteHeader from './components/NoteliteHeader.vue'
  import NoteText from './components/NoteText.vue'
  import NoteTitle from './components/NoteTitle.vue'
  import Author from './components/Author.vue'

  export default {
    name: 'App',

    components: {
      NoteliteHeader,
      NoteText,
      NoteTitle,
      Author,
    },

    data() {
      return {
        id: '11',
        noteCreator: true,
        authorName: 'amin',
        headerTitle: 'notelite',
        noteText: '',
        noteTitle: 'mytitle',
        noteColor: '',
        noteColorObj: {},
        showError: false,
        showSaved: false,
        showRefreshed: false,
        //yellow-green-lightgreen-darkgreen-blue-darkblue-black-red-darkred-orange-purple-deeppurple-pink-deeppink-grey
      }
    },

    methods: {
      textChange: function(newText){
        this.noteText = newText
      },
      refresh: function() {
        request
          .get('https://localhost:3090/loadNote/' + this.id)
          .end((err, res) => {
            if(err || res.body.text == null){
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
      this.noteColor = 'grey'

      this.refresh()
      //// TEMP:
    },

    watch:{
      noteColor: function() {
        //[name, light, normal, dark, backgroundColor]
        if(this.noteColor === 'yellow')
        {
          this.noteColorObj = { name: this.noteColor, text:'', color: '#ffeb3b' }
        }else if(this.noteColor === 'green') {
          this.noteColorObj = { name: this.noteColor, text:'', color: '#43a047' }
        }else if(this.noteColor === 'lightgreen') {
          this.noteColorObj = { name: this.noteColor, text:'', color: '#76d275' }
        }else if(this.noteColor === 'darkgreen') {
          this.noteColorObj = { name: this.noteColor, text:'', color: '#00701a' }
        }else if(this.noteColor === 'blue') {
          this.noteColorObj = { name: this.noteColor, text:'', color: '#00b0ff' }
        }else if(this.noteColor === 'darkblue') {
          this.noteColorObj = { name: this.noteColor, text:'', color: '#0081cb' }
        }else if(this.noteColor === 'black') {
          this.noteColorObj = { name: this.noteColor, text:'', color: '#424242' }
        }else if(this.noteColor === 'red') {
          this.noteColorObj = { name: this.noteColor, text:'', color: '#d50000' }
        }else if(this.noteColor === 'darkred') {
          this.noteColorObj = { name: this.noteColor, text:'', color: '#9b0000' }
        }else if(this.noteColor === 'orange') {
          this.noteColorObj = { name: this.noteColor, text:'', color: '#ff6d00' }
        }else if(this.noteColor === 'purple') {
          this.noteColorObj = { name: this.noteColor, text:'', color: '#aa00ff' }
        }else if(this.noteColor === 'deeppurple') {
          this.noteColorObj = { name: this.noteColor, text:'', color: '#5e35b1' }
        }else if(this.noteColor === 'pink') {
          this.noteColorObj = { name: this.noteColor, text:'', color: '#ff4081' }
        }else if(this.noteColor === 'deeppink') {
          this.noteColorObj = { name: this.noteColor, text:'', color: '#c60055' }
        }else if(this.noteColor === 'grey') {
          this.noteColorObj = { name: this.noteColor, text:'', color: '#707070' }
        }


        console.log(this.noteColorObj)
      },
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
