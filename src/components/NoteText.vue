<template>
  <div class="text">

  <textarea :readonly="!noteCreator"
      class="textarea"
      :value="text"
      >
  </textarea>

  </div>
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

}
</style>
