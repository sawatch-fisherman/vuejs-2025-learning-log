<script setup>
import { ref } from 'vue';
import FormatButton from './components/FormatButton.vue';

const count = ref(0);
</script>
<template>
  <div>
    <p>カウント: {{ count }}</p>
    <button @click="count++">カウントアップ</button>
    <!-- 子コンポーネントからイベントを受け取る -->
    <FormatButton @format="count = 0" />
  </div>
</template>
