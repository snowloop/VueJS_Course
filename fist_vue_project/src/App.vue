<template>
<div>
  <app-header v-bind:title="title" v-on:changeTitle="updateTitle"> </app-header>
  <app-animals v-bind:animalArray="animalArray" v-on:changeTitle="updateTitle"></app-animals>
  <title-input v-on:changeTitle="updateTitle" ></title-input>
</div>
</template>

<script>
import Header from './components/Header.vue';
import Animals from './components/Animals.vue';
import TitleInput from './components/TitleInput.vue';

export default {
  name: 'app',
  data: () => {
    return {
      title: "Vue animals",
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
  methods: {
    updateTitle: function(newTitle) {
      this.title = newTitle
    }
  },
  components: {
    "app-header": Header,
    "app-animals": Animals,
    "title-input": TitleInput
  }
}
</script>

<style>

</style>
