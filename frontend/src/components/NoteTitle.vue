<template>
  <div
    class="title"
    :style="{ backgroundColor: noteColorObj.normal }"
  >
    {{ noteTitle }}
  </div>
</template>

<script>
  export default {
    name: 'NoteTitle',

    props: {
      noteTitle: String,
      noteColorObj: Object,
    },
  }
</script>

<style scoped>
  .title {
    padding: 5px;
    padding-top: 15px;
    padding-left: 20px;
    width: 100%;
    box-sizing: border-box;
    font-size: 22px;
    display: flex;
    /* justify-content:space-around; */
    word-break: break-all;
    font-weight: bold;
  }
</style>
