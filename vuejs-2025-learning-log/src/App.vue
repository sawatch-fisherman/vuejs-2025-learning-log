<script setup>
import { onMounted, useTemplateRef } from 'vue'

// 本物のDOM要素を参照するためのrefを作成する
const userInputRef = useTemplateRef('userInput')
console.log(userInputRef.value)
onMounted(() => {
  // リロードすると、input要素にフォーカスが当たる
  userInputRef.value.focus()
})
</script>
<template>
  <!-- 本物のDOM要素を参照するためのrefを作成する -->
  <input type="text" ref="userInput" />
</template>
