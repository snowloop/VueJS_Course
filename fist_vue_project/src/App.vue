<template>
  <div>
<app-header></app-header>
<app-animals v-bind:animalArray="animalArray"></app-animals>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Animals from './components/Animals.vue';

export default {
  name: 'app',
  data: () => {
    return {
      title :"Vue animals",
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
  },
  methods: {},
  components: {
    "app-header" :Header,
    "app-animals" :Animals,
  }
}
</script>

<style>

</style>
