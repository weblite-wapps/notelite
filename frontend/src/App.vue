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
        id:'2',
        noteCreator: false,
        authorName:'Amin',
        headerTitle:'notelite',
        noteText:'default',
        noteTitle:'title',
        noteColor: 'blue',
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
