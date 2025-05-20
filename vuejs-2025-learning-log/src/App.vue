<script setup>
import { ref } from 'vue'
const vueURL = ref('https://vuejs.org/images/logo.png')
const vueId = ref('vue-link')
</script>
<template>
  <a v-bind="{ id: vueId, href: vueURL }">Vue.js</a>
  <button :disabled="''">button</button>
</template>
