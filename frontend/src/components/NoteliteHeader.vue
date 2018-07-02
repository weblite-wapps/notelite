<template>
  <div class="header" :style="{ backgroundColor: 'light'+noteColor, borderColor: noteColor}">
    <span class="header-title">
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
    noteColor: String,
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
  border: 2px solid;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
}

.header-title{
  font-size: 24px;
}

.refresh-icon{

}

.save-icon{

}

</style>
