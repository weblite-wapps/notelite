<template>
  <div class="text">
    {{text}}
  </div>
</template>

<script>
export default {
  name: 'NoteText',

  props:{
      text: String,
  },

  data () {
    return{

    }
  },
}
</script>

<style scoped>
.text{


}
</style>
