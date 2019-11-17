<template>
<div id="main">
  <input type="text" v-model="input" />
  <button v-on:click="changeTitle"> Update the title</button>
</div>
</template>
<script>
export default {
  props :{
    input :{
      type : String,
      required :false
    }
  },

  methods: {
    changeTitle: function() {
      this.$emit('changeTitle', this.input)

    }
  }

}
</script>
<style scoped>
#main{
  width : 100%;
  max-width: 1000px;
  padding-left : 100px;
}

input{
  min-width: 180px;
  min-height: 30px;
}


</style>
