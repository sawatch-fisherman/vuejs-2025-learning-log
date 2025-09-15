<script setup>
import { ref } from 'vue'
import MenyCard from './components/MenyCard.vue'
const menyus = ref([
  { name: 'カレー', emoji: '🍛' },
  { name: 'カニ', emoji: '🦀' },
  { name: 'ラーメン', emoji: '🍜' },
  { name: '寿司', emoji: '🍣' },
  { name: 'ピザ', emoji: '🍕' },
  { name: 'ハンバーガー', emoji: '🍔' },
  { name: 'サラダ', emoji: '🥗' },
  { name: 'ステーキ', emoji: '🥩' },
  { name: 'アイスクリーム', emoji: '🍨' },
  { name: 'ドーナツ', emoji: '🍩' },
])
</script>
<template>
  <main>
    <h1 class="title">今日は何を食べる？</h1>
    <MenyCard :name="menyus[4].name" :emoji="menyus[4].emoji" />
    <p>VS</p>
    <MenyCard :name="menyus[7].name" :emoji="menyus[7].emoji" />
  </main>
</template>

<style scoped>
main {
  width: 350px;
  margin: 100px auto;
  text-align: center;
}

.title {
  margin-bottom: 50px;
}
</style>
