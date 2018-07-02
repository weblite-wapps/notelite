<template>
  <textarea
    autofocus
    :readonly="!noteCreator"
    @change="changed"
    class="textarea"
    v-model:value="editableNoteText"
    :placeholder="placeHolder"
    :style="{ backgroundColor: 'light' + noteColor, borderColor: noteColor }"
  />
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
        editableNoteText:this.noteText
      }
    },

    methods:{
      changed:function(){
        this.$emit('textChange', this.editableNoteText)
      },
    },

    computed:{
      placeHolder:function(){
        if(this.noteCreator)
        {
          return "What's on your mind?"
        }else{
          return "This note is empty."
        }
      },
    },
    watch:{
      noteText:function(){
        this.editableNoteText=this.noteText
      },
    },
  }
</script>

<style scoped>
  .text {
    border: 2px solid;
    box-sizing: border-box;
    height: 100%;
  }

  .textarea {
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
