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
    background-color: #eeeeee;
    text-align: center;
    padding: 10px;
    padding-right: 20px;
    word-wrap: break-all;
  }
</style>
