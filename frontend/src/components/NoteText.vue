<template>
  <div class="text-root">
    <textarea
      autofocus
      v-if="noteCreator && !showMarkedDown"
      @change="changed"
      class="textarea"
      v-model:value="editableNoteText"
      :placeholder="placeHolder"
    />

    <div
      class="marked-down-text"
      v-if="!noteCreator || showMarkedDown"
      v-html="markedDownNoteText"
    />
  </div>
</template>

<script>
  import showdown from 'showdown'
  const converter = new showdown.Converter()


  export default {
    name: 'NoteText',

    props: {
        noteText: String,
        noteCreator: Boolean,
        noteColorObj: Object,
        showMarkedDown: Boolean,
    },

    data() { return { editableNoteText: this.noteText } },

    methods: {
      changed: function() {
        this.$emit('textChange', this.editableNoteText)
      },
    },

    computed: {
      placeHolder: function() {
        return this.noteCreator ? "What's on your mind?" : "This note is empty."
      },

      markedDownNoteText: function() {
        return converter.makeHtml(this.noteText)
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
    width: 100%;
    font-size: 20px;
    padding: 20px;
    box-sizing: border-box;
    outline: none;
    resize: none;
    overflow: auto;
    background-color: #eeeeee;
  }

  .marked-down-text {
    height: 90%;
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    padding-bottom: 0px;
    overflow: auto;
    background-color: #eeeeee;
    word-wrap: break-word;
  }

  .text-root {
    height: 90%;
  }
</style>
