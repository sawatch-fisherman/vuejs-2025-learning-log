<script setup>
import { ref } from 'vue'
const ok = ref(true)

</script>
<template>
  <button @click="ok = !ok">Toggle Ok</button>
  <!-- templateタグは非表示で処理される -->
  <template v-if="ok">
    <p>Ok</p>
    <p>Maybe Ok</p>
    <p>Not Ok</p>
  </template>
  <!-- divタグは表示で処理される -->
  <div v-if="ok">
    <p>Ok</p>
    <p>Maybe Ok</p>
    <p>Not Ok</p>
  </div>
</template>
