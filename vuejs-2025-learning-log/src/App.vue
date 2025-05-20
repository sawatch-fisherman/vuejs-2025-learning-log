<script setup>
import { ref } from 'vue'
const count = ref(0)
function countUp(event, times) {
  count.value = event.clientX * times
}
</script>
<template>
  <p>{{ count }}</p>
  <button v-on:click="count = $event.clientY">button1</button>
  <button @click="countUp($event, 5)">button2</button>
</template>
