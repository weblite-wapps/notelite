<template>
  <div id="app" class="root" :style="{borderColor: noteColor}">
    <NoteliteHeader
      class="header"
      :id="id"
      @textChange="textChange"
      :noteText="noteText"
      :headerTitle="headerTitle"
      :noteCreator="noteCreator"
      :noteColor="noteColor"
    />

    <NoteTitle :noteTitle="noteTitle" :noteColor="noteColor" />

    <NoteText
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
        id:'',
        noteCreator: true,
        authorName:'',
        headerTitle:'notelite',
        noteText:'',
        noteTitle:'',
        noteColor: '',
        //yellow-green-blue-black-(gray or grey both are the same)-seagreen-cyan
      }
    },

    methods: {
      textChange: function(newText){
        console.log('on text change')
        this.noteText = newText
        console.log(this.noteText)
      },
    },
    mounted: function() {
      console.log('mounted')
      request
        .get('https://localhost:3090/loadNote/'+ this.id)
        .end((err, res) => {
          this.noteText = res.body.text
          // Calling the end function will send the request
        })
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
