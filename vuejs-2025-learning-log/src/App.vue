<script setup>
import { ref } from 'vue'
const ok = ref(true)
const myabeOk = ref(false)

</script>
<template>
  <button @click="ok = !ok">Toggle Ok</button>
  <button @click="myabeOk = !myabeOk">Toggle Maybe Ok</button>
  <p v-show="ok">Ok</p>
</template>
