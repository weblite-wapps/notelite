<template>
  <div class="author">
    A note by {{ authorName }}
  </div>
</template>

<script>
  export default {
      name: 'Author',

      props:{
        authorName: String,
      },
    }
</script>

<style scoped>
  .author {
    height: 20px;
    background-color: #eeeeee;
    text-align: center;
    padding: 10px;
    word-wrap: break-all;
  }
</style>
