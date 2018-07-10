<template>
  <textarea
    autofocus
    :readonly="!noteCreator"
    @change="changed"
    @keyup.ctrl.115.prevent="save"
    @keyup.ctrl.114.prevent="refresh"
    class="textarea"
    v-model:value="editableNoteText"
    :placeholder="placeHolder"
  />
</template>

<script>
  export default {
    name: 'NoteText',

    props: {
        noteText: String,
        noteCreator: Boolean,
        noteColorObj: Object,
    },

    data() {
      return {
        editableNoteText: this.noteText
      }
    },

    methods: {
      changed: function() {
        this.$emit('textChange', this.editableNoteText)
      },
      refresh: function() {
        if(!this.noteCreator) {
          this.$emit('refresh')
          this.showRefreshed = true
          setTimeout(() => this.showRefreshed = false, 2000)
        }
      },
      save: function() {
        if(this.noteCreator)
        {
          this.$emit('save')
          this.showSaved = true
          setTimeout(() => this.showSaved = false, 2000)
        }
      },
    },

    computed: {
      placeHolder: function() {
        if(this.noteCreator)
        {
          return "What's on your mind?"
        }else {
          return "This note is empty."
        }
      },
    },
    watch: {
      noteText:function(){
        this.editableNoteText = this.noteText
      },
    },
  }
</script>

<style scoped>
  .textarea {
    height: 90%;
    border: 0px;
    box-sizing: border-box;
    width: 100%;
    font-size: 20px;
    padding: 20px;
    outline: none;
    resize: none;
    overflow: auto;
    background-color: #eeeeee;
  }
</style>
