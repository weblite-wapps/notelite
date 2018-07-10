<template>
  <div
    class="author"
    :style="{ backgroundColor: 'light' + noteColor }"
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
