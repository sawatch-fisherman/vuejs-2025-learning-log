<script setup>
import { ref } from 'vue'
const count = ref(0)
function countUp() {
  count.value++
}
</script>
<template>
  <p>{{ count }}</p>
  <button v-on:click="count++">button1</button>
  <button @click="countUp">button2</button>
</template>
