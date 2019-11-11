<template>
<div>
  <h1>{{ title }}</h1>
  <animals></animals>
</div>
</template>

<script>
import Animals from './components/Animals.vue';

export default {
  name: 'app',
  data :()=>{
    return {
      title :"My very first vue App"
    }
  },
  methods:{
  },
  components: {
    'animals' : Animals
  }
}
</script>

<style>
h1 {
  color :red;
}
</style>
