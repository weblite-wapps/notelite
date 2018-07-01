<template>
  <div class="author">
    A note by {{authorName}}
  </div>
</template>

<script>
export default {
  name: 'Author',
  props:{
    authorName: String,
    noteColor: String,
  },
  data () {
    return{
    }
  },
}
</script>

<style scoped>
.author{
    direction: rtl;
    padding: 6px;
    padding-right: 20px;
    word-wrap: break-all;
}
</style>
