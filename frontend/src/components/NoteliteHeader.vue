<template>
  <div
    class="header"
    :style="{ backgroundColor: color }"
  >
    <div class="left-title">
      <span class="header-title">{{ headerTitle }}</span>
    </div>

    <div class="right-buttons">
      <span
        class="notify-message"
        :style="{ color: notifyMessage === 'Error' ? '#C51162' : '#018786' }"
      >
        {{ notifyMessage }}
      </span>

      <i
        @click="toggleShowMarkedDown"
        v-if="showMarkedDownText"
      >
        {{ showMarkedDownText }}
      </i>

      <i
        class="action-icon"
        @click="noteCreator ? save() : refresh()"
      >
        {{ noteCreator ? 'launch' : 'input' }}
      </i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NoteliteHeader',

    props: {
      noteCreator: Boolean,
      headerTitle: String,
      color: String,
      notifyMessage: String,
      showMarkedDown: Boolean,
    },

    methods: {
      refresh: function() { this.$emit('refresh') },

      save: function() { this.$emit('save') },

      toggleShowMarkedDown: function() { this.$emit('toggleShowMarkedDown') },
    },

    computed: {
      showMarkedDownText: function() {
        if (!this.noteCreator) return ''
        else if (this.noteCreator && !this.showMarkedDown) return 'visibility'
        else if (this.noteCreator && this.showMarkedDown) return 'edit'
      }
    }
  }
</script>

<style scoped>
  .header{
    color: white;
    height: 50px;
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

  .notify-message{
    font-weight: bold;
    font-size: 18px;
    padding-right: 5px;
    font-family: Helvetica;
  }

  .right-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .action-icon {
    padding-left: 5px;
  }
</style>
