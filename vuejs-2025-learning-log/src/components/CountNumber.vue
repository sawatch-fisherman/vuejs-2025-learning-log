<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
<template>
  <div>
    <p>押した回数：{{ count }}</p>
    <button @click="count++">＋１</button>
  </div>
</template>
