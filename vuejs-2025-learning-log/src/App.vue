<script setup>
const title = 'Vue.js Study'
let price = 9.99
function increment() {
  price += 1
  console.log(price)
}
</script>
<template>
  <h1>Title: {{ title }}</h1>
  <h2>Price: {{ price - 1 }}</h2>
  <button @click="increment">button</button>
</template>
