<template>
  <div
    class="author"
    :style="{ backgroundColor: 'light' + noteColor, borderColor: noteColor }"
  >
    A note by {{ authorName }}
  </div>
</template>

<script>
  export default {
    name: 'Author',

    props:{
      authorName: String,
      noteColor: String,
    },

    data() {
      return {

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
    border: 2px solid;
  }
</style>
