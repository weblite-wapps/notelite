<template>
  <div class="title">
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'NoteTitle',
  props:{
      title: String,
  },
  data () {
    return {

    }
  },
}
</script>

<style scoped>
.title{
  padding: 5px;
  width: 100%;
  border: 2px black solid;
  box-sizing: border-box;
  font-size: 22px;
  display: flex;
  justify-content:space-around;
  word-break: break-all;
  font-weight: bold;
}
</style>
