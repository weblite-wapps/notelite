<template>
  <div
    id="app"
    class="root"
    :style="{borderColor: noteColor}"
    @keyup.ctrl.115.prevent="save"
    @keyup.ctrl.114.prevent="refresh"
  >

    <NoteliteHeader
      class="header"
      :id="id"
      @textChange="textChange"
      @save="save"
      @refresh="refresh"
      :noteText="noteText"
      :headerTitle="headerTitle"
      :noteCreator="noteCreator"
      :noteColor="noteColor"
    />

    <NoteTitle :noteTitle="noteTitle" :noteColor="noteColor" />

    <NoteText
      @save="save"
      @refresh="refresh"
      @textChange="textChange"
      :noteText="noteText"
      :noteCreator="noteCreator"
      :noteColor="noteColor"
    />

    <Author :authorName="authorName" :noteColor="noteColor" />
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

    components:{
      NoteliteHeader,
      NoteText,
      NoteTitle,
      Author,
    },

    data () {
      return {
        id:'11',
        noteCreator: true,
        authorName:'amin',
        headerTitle:'notelite',
        noteText:'',
        noteTitle:'mytitle',
        noteColor: 'blue',
        //yellow-green-blue-black-(gray or grey both are the same)-seagreen-cyan
      }
    },

    methods: {
      textChange: function(newText){
        this.noteText = newText
      },
      refresh: function() {
        request
          .get('https://localhost:3090/loadNote/'+ this.id)
          .end((err, res) => {
            if(res){
              this.textChange(res.body.text)
            }
            // Calling the end function will send the request
          })
      },
      save: function() {
        console.log('save method is called in App')
        console.log('notetobesaved: '+ this.noteText + '   ' + this.id)
        request
          .post('https://localhost:3090/saveNote')
          .send({ id: this.id , text: this.noteText }) // sends a JSON post body
          .end((err, res) => {
            // Calling the end function will send the request
          })
          console.log('save method is Done in App')

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
    border: 1px solid;
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
  }
</style>
