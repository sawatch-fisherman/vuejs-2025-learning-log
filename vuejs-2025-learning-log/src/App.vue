<script setup>
import { ref } from 'vue'
const animals = ref({
  name: 'dog',
  age: 3,
  weight: 10,
})
</script>
<template>
  <p v-for="(value, key, index) in animals" :key="value">{{ key }}: {{ value }} ({{ index }})</p>
</template>
