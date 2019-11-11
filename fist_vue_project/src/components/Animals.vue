<template>
  <div>
    <h1>Title of my first component</h1>
    <ul>
      <li v-for="elt in animalArray" :key="elt">{{ elt }}</li>
    </ul>
  </div>

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

<style scoped="">
h1 {
color : blue;
}
</style>
