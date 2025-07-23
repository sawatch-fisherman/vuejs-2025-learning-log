<script setup>
import { ref } from 'vue'
</script>
<template>
  <!-- 0からではなく1から始まる -->
  <p v-for="n of 10" :key="n">{{ n }}</p>
</template>
