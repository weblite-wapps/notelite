<template>
  <div class="header">
    <span>
      {{headerTitle}}
    </span>
    <i class="save-icon" v-if="noteCreator">launch</i>
    <i class="refresh-icon" v-if="!noteCreator">input</i>
  </div>
</template>

<script>
export default {
  name: 'NoteliteHeader',
  props:{
    noteCreator: Boolean,
    headerTitle: String,
  },
  data () {
    return{

    }
  },

  methods:{
    refresh: function(){

    },
    save: function(){

    },
  },
}
</script>

<style scoped>
.header{
  height: 8%;
  border: 2px black solid;
  box-sizing: border-box;
}

.refresh-icon{

}

.save-icon{

}

</style>
