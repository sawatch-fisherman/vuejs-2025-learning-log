<script setup>
import { ref } from 'vue'
const ok = ref(true)
const myabeOk = ref(false)
const animals = ref(['cat', 'dog', 'fish'])

</script>
<template>
  <li v-for="animal in animals">{{ animal }}</li>
</template>
