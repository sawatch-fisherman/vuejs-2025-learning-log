<script setup>
import { ref } from 'vue'
const message = ref('<h1>Passowrd</h1><input>')      // ←のようなコードはXSSの対象のため記述しない
</script>
<template>
  <div v-html="message"></div>
</template>
