<template>

  <textarea autofocus
      :readonly="!noteCreator"
      class="textarea"
      :value="noteText"
      placeholder="What's on your mind?"
      >
  </textarea>

</template>

<script>
export default {
  name: 'NoteText',

  props:{
      noteText: String,
      noteCreator: Boolean,
  },

  data () {
    return{

    }
  },
}
</script>

<style scoped>
.text{
  border: 2px black solid;
  box-sizing: border-box;
  height: 100%;
}

.textarea{
  height: 90%;
  box-sizing: border-box;
  width: 100%;
  border: 2px black solid;
  font-size: 20px;
  font-weight: lighter;
  padding: 20px;
  outline: none;
}
</style>
