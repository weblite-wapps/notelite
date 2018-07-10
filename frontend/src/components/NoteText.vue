<template>
  <div class="text-root">
    <textarea
      autofocus
      v-if="noteCreator && !showMarkedDown"
      @change="changed"
      @keyup.ctrl.115.prevent="save"
      @keyup.ctrl.114.prevent="refresh"
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
  export default {
    name: 'NoteText',

    props: {
        noteText: String,
        noteCreator: Boolean,
        noteColorObj: Object,
        markedDownNoteText: String,
        showMarkedDown: Boolean,
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
