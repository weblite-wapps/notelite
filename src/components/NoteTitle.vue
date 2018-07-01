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
  height: 8%;
  border: 2px black solid;
  box-sizing: border-box;

}
</style>
