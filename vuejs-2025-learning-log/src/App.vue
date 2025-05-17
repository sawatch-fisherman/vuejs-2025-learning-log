<script setup>
import { ref } from 'vue'
const vueURL = ref('https://vuejs.org/images/logo.png')
const Id = ref('vue-link')
</script>
<template>
  <a :Id :href="vueURL">Vue.js</a>
</template>
