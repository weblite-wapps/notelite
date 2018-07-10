<template>
  <div
    class="header"
    :style="{ backgroundColor: color }"
  >
    <div class="left-title">
      <span class="header-title">{{ headerTitle }}</span>
    </div>

    <div class="right-buttons">
      <span class="save-text" v-if="showSaved">Saved</span>

      <span class="refresh-text" v-if="showRefreshed">Refreshed</span>

      <span class="error-text" v-if="showError">Error</span>

      <i class="save-icon" @click="save" v-if="noteCreator">
        launch
      </i>

      <i class="refresh-icon" @click="refresh" v-if="!noteCreator">
        input
      </i>

      <i class="preview-icon" @click="toggleShowMarkedDown" v-if="noteCreator && !showMarkedDown">
        visibility
      </i>

      <i class="edit-icon" @click="toggleShowMarkedDown" v-if="noteCreator && showMarkedDown">
        edit
      </i>
    </div>
  </div>
</template>

<script>
  import request from 'superagent'

  export default {
      name: 'NoteliteHeader',

      props: {
        noteCreator: Boolean,
        headerTitle: String,
        color: String,
        noteText: String,
        id: String,
        showError: Boolean,
        showSaved: Boolean,
        showRefreshed: Boolean,
        showMarkedDown: Boolean,
      },

    methods: {
      refresh: function() {
        this.$emit('refresh')
      },
      save: function() {
        this.$emit('save')
      },
      toggleShowMarkedDown: function() {
        console.log('clicked')
        this.$emit('toggleShowMarkedDown')
      },
    },
  }
</script>

<style scoped>
  .header{
    color: white;
    height: 8%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
  }

  .header-title{
    font-size: 24px;
  }

  .refresh-text{
    font-weight: bold;
    font-size: 18px;
    padding-right: 5px;
    color:green;
  }

  .save-text {
    font-weight: bold;
    font-size: 18px;
    color: green;
    padding-right: 5px;
  }

  .error-text {
    font-weight: bold;
    font-size: 20px;
    color: red;
    padding-right: 5px;
  }

  .right-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .save-icon {
    padding-right: 5px;
  }

  .refresh-icon {
    padding-right: 5px;
  }
</style>
