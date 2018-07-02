<template>
  <div id="app" class="root" :style="{borderColor: noteColor}">
    <NoteliteHeader class="header" :headerTitle="headerTitle" :noteCreator="noteCreator" :noteColor="noteColor">
    </NoteliteHeader>
    <NoteTitle :noteTitle="noteTitle" :noteColor="noteColor">
    </NoteTitle>
    <NoteText :noteText="noteText" :noteCreator="noteCreator" :noteColor="noteColor">
    </NoteText>
    <Author :authorName="authorName" :noteColor="noteColor">
    </Author>
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
      id:'id',
      noteCreator: true,
      authorName:'Amin',
      headerTitle:'notelite',
      noteText:'some initial text',
      noteTitle:'title',
      noteColor: 'blue',
      //yellow-green-blue-black-(gray or grey both are the same)-seagreen-cyan
    }
  },
}
</script>

<style scoped>
.root{
  width: 350px;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  color:
}
</style>
