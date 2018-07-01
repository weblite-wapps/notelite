<template>
  <div id="app" class="root">
    <NoteliteHeader class="header" :headerTitle="headerTitle" :noteCreator="noteCreator" :color="color">
    </NoteliteHeader>
    <NoteTitle :title="noteTitle" :color="color">
    </NoteTitle>
    <NoteText :noteText="noteText" :noteCreator="noteCreator" :color="color">
    </NoteText>
  </div>
</template>

<script>
import NoteliteHeader from './components/NoteliteHeader.vue'
import NoteText from './components/NoteText.vue'
import NoteTitle from './components/NoteTitle.vue'

export default {
  name: 'App',

  components:{
    NoteliteHeader,
    NoteText,
    NoteTitle,
  },

  data () {
    return {
      id:'ididid',
      noteCreator: true,
      headerTitle:'notelite',
      noteText:'texttexttext',
      noteTitle:'titletitletitle',
      noteColor: 'red',
    }
  },
}
</script>

<style scoped>
.root{
  width: 350px;
  height: 100%;
  box-sizing: border-box;
  border: 1px black solid;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
}
</style>
