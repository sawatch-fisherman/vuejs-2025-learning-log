<script setup>
import { ref } from 'vue'
const isRed = ref(true)
const isBgBlue = ref(false)
const toggleClass = () => {
  isRed.value = !isRed.value
  isBgBlue.value = !isBgBlue.value
}
</script>
<template>
  <!-- 動的と静的なクラスの組み合わせ -->
  <div class="border" :class="{ red: isRed, 'bg-blue': isBgBlue }">Hello</div>
  <button @click="toggleClass">toggle</button>
</template>
<style>
.red {
  color: red;
}

.bg-blue {
  background-color: blue;
}

.border {
  border: 1px solid red;
}
</style>
