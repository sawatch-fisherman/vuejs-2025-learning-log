<script setup>
import { ref } from 'vue'
const animals = ref([{ id: 1, name: 'Dog' }, { id: 2, name: 'Cat' }, { id: 3, name: 'Bird' }])
</script>
<template>
  <button @click="animals.shift()">button</button>
  <!-- v-forとv-ifは混合して書かない！v-forを先に1行使用して定義する -->
  <template v-for="({ id, name }, index) in animals" :key="id">
    <template v-if="id === 1">
      <p>id: {{ id }}</p>
      <input type="text" />{{ name }}({{ index }})
    </template>
  </template>
</template>
