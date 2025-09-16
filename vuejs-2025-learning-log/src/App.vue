<script setup>
import { ref } from 'vue'
import CountNumber from './components/CountNumber.vue'
const isDisplay = ref(true)
</script>
<template>
  <div>
    <button @click="isDisplay = !isDisplay">表示/非表示</button>
    <CountNumber v-if="isDisplay" />
  </div>
</template>
