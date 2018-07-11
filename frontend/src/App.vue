<template>
  <div
    id="app"
    class="root"
    @keyup.ctrl.115.prevent="save"
    @keyup.ctrl.114.prevent="refresh"
  >
    <NoteliteHeader
      class="header"
      @save="save"
      @refresh="refresh"
      @toggleShowMarkedDown="toggleShowMarkedDown"
      :notifyMessage="notifyMessage"
      :headerTitle="noteTitle"
      :noteCreator="noteCreator"
      :showMarkedDown="showMarkedDown"
      :color="color"
    />

    <NoteText
      @save="save"
      @refresh="refresh"
      @textChange="textChange"
      :noteText="noteText"
      :noteCreator="noteCreator"
      :showMarkedDown="showMarkedDown"
    />

    <Author :authorName="authorName" />
  </div>
</template>

<script>
  import request from 'superagent'
  import NoteliteHeader from './components/NoteliteHeader.vue'
  import NoteText from './components/NoteText.vue'
  import Author from './components/Author.vue'
  // helper
  import webliteHandler from './helper/function/weblite.api'
  // W
  const { W } = window

  export default {
    name: 'App',

    components: {
      NoteliteHeader,
      NoteText,
      Author,
    },

    data() {
      return {
        id: (W && W.wisId) || '1',
        noteCreator: false,
        authorName: 'amin',
        noteText: '',
        noteTitle: 'notelite',
        color: '#ffd600',
        notifyMessage: '',
        showMarkedDown: false,
      }
    },

    methods: {
      textChange: function(newText){ this.noteText = newText },

      refresh: function() {
        request
          .get('https://localhost:3090/loadNote/' + this.id)
          .set('Access-Control-Allow-Origin', '*')
          .end((err, res) => {
            if(err || res.body == null) this.notifyMessage = 'Error'
            else {
              this.textChange(res.body.text)
              this.notifyMessage = 'Refreshed'
            }
            setTimeout(() => this.notifyMessage = '', 2000)
          })
      },

      save: function() {
        request
          .post('https://localhost:3090/saveNote')
          .set('Access-Control-Allow-Origin', '*')
          .send({ id: this.id, text: this.noteText })
          .end((err) => {
            if(err) this.notifyMessage = 'Error'
            else this.notifyMessage = 'Saved'
            setTimeout(() => this.notifyMessage = '', 2000)
          })
      },

      toggleShowMarkedDown: function() {
        this.showMarkedDown = !this.showMarkedDown
      },
    },

    created: function() { W && webliteHandler(this) },

    mounted: function() { this.refresh() },
  }
</script>

<style scoped>
  .root {
    width: 350px;
    height: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    overflow: hidden;
    background-color: #eeeeee;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
