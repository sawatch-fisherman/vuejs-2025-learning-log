<script setup>
import { ref } from 'vue'
const animals = ref([{ id: 1, name: 'Dog' }, { id: 2, name: 'Cat' }, { id: 3, name: 'Bird' }])
</script>
<template>
  <button @click="animals.shift()">button</button>
  <!-- 書き方その１ -->
  <li v-for="(animal, index) in animals" :key="animal.id"><input type="text" />{{ animal.name }}({{ index }})
  </li>
  <!-- 書き方その２(Javascriptの分割代入みたいな書き方 -->
  <li v-for="({ id, name }, index) in animals" :key="id"><input type="text" />{{ name }}({{ index }})
  </li>
</template>
