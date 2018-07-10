<template>
  <div
    class="header"
    :style="{ backgroundColor: noteColorObj.color }"
  >

    <span class="header-title">{{ headerTitle }}</span>

    <span class="save-text" v-if="showSaved">Saved</span>

    <span class="refresh-text" v-if="showRefreshed">Refreshed</span>

    <span class="error-text" v-if="showError">Error</span>

    <i class="save-icon" @click="save" v-if="noteCreator">launch</i>

    <i class="refresh-icon" @click="refresh" v-if="!noteCreator">input</i>
  </div>
</template>

<script>
  import request from 'superagent'

  export default {
      name: 'NoteliteHeader',

      props: {
        noteCreator: Boolean,
        headerTitle: String,
        noteColorObj: Object,
        noteText: String,
        id: String,
        showError: Boolean,
        showSaved: Boolean,
        showRefreshed: Boolean,
      },

    methods: {
      refresh: function() {
        this.$emit('refresh')
      },
      save: function() {
        this.$emit('save')
      },
    },
  }
</script>

<style scoped>
  .header{
    color: white;
    height: 8%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
  }

  .header-title{
    padding-left: 10px;
    font-size: 24px;
  }

  .refresh-text{
    font-weight: bold;
    font-size: 20px;
    margin-top: 2px;
    padding-left: 110px;
    color:green;
  }

  .save-text{
    font-weight: bold;
    font-size: 20px;
    margin-top: 2px;
    padding-left: 150px;
    color: green;
  }

  .error-text{
    font-weight: bold;
    font-size: 20px;
    margin-top: 2px;
    padding-left: 150px;
    color: red;
  }
</style>
