<template>
<ul>
  <li v-for="elt in animalArray" :key="elt">{{ elt }}</li>
</ul>
</template>

<script>
export default {
  name: 'animals',
  data :()=>{
    return {
      animalArray : ['dog','cat','elephant']
    }
  },
  methods:{
  },
  components: {

  }
}
</script>

<style>
</style>
