<script setup>
import BaseButton from './components/BaseButton.vue';
import BaseEmoji from './components/BaseEmoji.vue';
import CountUp from './components/CountUp.vue'
// ファイルのパスは以下のように@を使っても良い
// @の定義は、vite.config.jsで設定されている
// import CountUp from '@/components/CountUp.vue'
</script>
<template>
  <h1>App H1</h1>
  <!-- 以下はconsoleに警告がでる。タグが複数あるコンポーネントにはv-showは正しくない -->
  <!-- <CountUp v-show="true" /> -->
  <br />
  <BaseEmoji v-if="false" id="base-emoji" />
  <br />
  <!-- 以下はconsoleに警告がでない。タグが１つのコンポーネントにはv-showは正しく動く -->
  <BaseButton v-show="false" id="base-button2" />
  <BaseButton id="base-button" />
  <br />
  <!-- グローバル登録のコンポーネントを使用 -->
  <BaseEmoji />
</template>
