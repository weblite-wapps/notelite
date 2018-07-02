<template>
  <textarea autofocus
      :readonly="!noteCreator"
      class="textarea"
      :value="noteText"
      placeholder="What's on your mind?"
      :style="{backgroundColor: 'light'+noteColor, borderColor: noteColor}"
      >
  </textarea>
</template>

<script>
export default {
  name: 'NoteText',

  props:{
      noteText: String,
      noteCreator: Boolean,
      noteColor: String,
  },

  data () {
    return{

    }
  },
}
</script>

<style scoped>
.text{
  border: 2px solid;
  box-sizing: border-box;
  height: 100%;
}

.textarea{
  height: 90%;
  box-sizing: border-box;
  width: 100%;
  border: 2px solid;
  font-size: 20px;
  padding: 20px;
  outline: none;
  resize: none;
  overflow: auto;
}
</style>
