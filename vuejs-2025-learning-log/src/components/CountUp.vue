<script setup>
console.log('script')

import { ref } from 'vue'
const count = ref(0)
</script>
<template>
  <h2>Count H2</h2>
  <p>Count: {{ count }}</p>
  <button @click="count++">加算</button>
</template>
