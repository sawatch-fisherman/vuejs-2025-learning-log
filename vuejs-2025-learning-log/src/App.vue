<script setup>
import { ref } from 'vue'
const count = ref(0)
function countUp(event) {
  count.value = event.clientX
}
</script>
<template>
  <p>{{ count }}</p>
  <button v-on:click="count = $event.clientY">button1</button>
  <button @click="countUp">button2</button>
</template>
