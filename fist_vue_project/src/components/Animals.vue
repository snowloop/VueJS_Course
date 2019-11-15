<template>
<div id="animals">
  <ol>
    <li v-for="(animal,index) in animalArray" :key="animal" v-on:mouseover="animal.show = true" v-on:mouseout="animal.show = false">
      <h2>{{ animal.name }}</h2>
      <h3 v-show="animal.show">{{ animal.speciality }} </h3>
      <h3 v-on:click="deleteAnimal(index)">Delete the animal</h3>
    </li>
  </ol>
</div>
</template>
<script>
export default {
  props : {
    animalArray :{
      type : Array,
      required : true
    }
  },
  methods :{
    deleteAnimal :function(index){
      this.animalArray = this.animalArray.slice(0,index)
      .concat(this.animalArray.slice(index +1))
    }
  }
}
</script>

<style  scoped>
#animals{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ol{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    max-width: 200px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
