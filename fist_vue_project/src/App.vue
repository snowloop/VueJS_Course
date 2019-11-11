<template>
<div>
  <h1>{{ title }}</h1>
  <p>{{ greeting() }}</p>
</div>
</template>

<script>
export default {
  name: 'app',
  data :()=>{
    return {
      title :"My very first vue App"
    }
  },
  methods:{
    greeting :()=>{
      return "Hey man"
    }
  },
  components: {

  }
}
</script>

<style>
</style>
