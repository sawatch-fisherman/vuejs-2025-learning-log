<script setup>
import { ref } from 'vue'
import CompA from './components/CountNumber.vue'
import CompB from './components/DefaultCard.vue'
import CompC from './components/MenyCard.vue'
const currentComp = ref(CompA)

</script>
<template>
  <h1>動的コンポーネント</h1>
  <button @click="currentComp = CompA">A</button>
  <button @click="currentComp = CompB">B</button>
  <button @click="currentComp = CompC">C</button>
  <!-- 動的にコンポーネントを入れ替えることができる -->
  <!-- この状態だとブラウザのコンソールにエラーが表示されている -->
  <component :is="currentComp" />

</template>
