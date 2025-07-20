<script setup>
import { ref } from 'vue'
// ↓変な動作するパターン（全部のテキストボックスに値を入力して、buttonを押すと、1つ目のテキストボックスの値が残る）
// const animals = ref([{ id: 2, name: 'Dog' }, { id: 2, name: 'Dog' }, { id: 3, name: 'Bird' }])

// 正しく動作するパターン
const animals = ref([{ id: 2, name: 'Dog' }, { id: 2, name: 'Dog' }, { id: 3, name: 'Bird' }])
</script>
<template>
  <button @click="animals.shift()">button</button>
  <!-- v-forを使用する場合は、 :key が必須になる -->
  <!-- :keyが無いと、Elements in iteration expect to have 'v-bind:key' directives.といったエラーが表示される -->
  <!-- https://vuejs.org/guide/essentials/list.html#maintaining-state-with-key -->
  <li v-for="animal in animals" :key="animal.id"><input type="text" />{{ animal.name }}</li>
  <!-- ↓NGなパターン -->
  <!-- <li v-for="animal in animals"><input type="text" />{{ animal.name }}</li> -->
</template>
