<script setup>
import CountUp from './components/CountUp.vue'
// ファイルのパスは以下のように@を使っても良い
// @の定義は、vite.config.jsで設定されている
// import CountUp from '@/components/CountUp.vue'
</script>
<template>
  <h1>App H1</h1>
  <CountUp />
  <CountUp />
  <br />
  <br />
  <!-- グローバル登録のコンポーネントを使用 -->
  <BaseEmoji />
</template>
