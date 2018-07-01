<template>
  <div id="app" class="root">
    <NoteliteHeader class="header" >
    </NoteliteHeader>
    <NoteTitle :title="title">
    </NoteTitle>
    <NoteText :text="text">
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
      creator: true,
      text:'texttexttext',
      title:'titletitletitle',
      color: 'red',
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
  border-radius: 5px;
  overflow: hidden;
}
</style>
