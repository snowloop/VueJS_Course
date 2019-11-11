<template>
<div id="animals">
  <ol>
    <li v-for="animal in animalArray" :key="animal" v-on:click="animal.show = !animal.show">
      <h2>{{ animal.name}}</h2>
      <h3 v-show="animal.show">{{ animal.speciality }} </h3>
    </li>
  </ol>
</div>
</template>
<script>
export default {
  data: () => {
    return {
      animalArray: [{
          name: 'Dog',
          speciality: 'bark',
          show: false
        },
        {
          name: 'Cat',
          speciality: 'sleep',
          show: false
        },
        {
          name: 'Fish',
          speciality: 'Absolutely nothin',
          show: false
        },
        {
          name: 'Bird',
          speciality: 'Fly',
          show: false
        }
      ]
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
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
