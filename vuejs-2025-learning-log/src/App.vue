<script setup>
import { ref } from 'vue'
const vueURL = ref('https://vuejs.org/images/logo.png')
const Id = ref('vue-link')
</script>
<template>
  <a :Id="undefined" :href="false">Vue.js</a>
  <button :disabled="''">button</button>
</template>
