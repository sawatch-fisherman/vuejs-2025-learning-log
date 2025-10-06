<script setup>
import { ref } from 'vue'
import DefaultCard from './components/DefaultCard.vue'

const y = ref('y')
</script>
<template>
  <h1>Slot</h1>
  <DefaultCard>
    <h2>Hello World2</h2>
    <p>I'm fain!</p>
    <!-- refで未定義の場合は、エラーになる。 -->
    <p>{{ x }}</p>
    <!-- refで定義した場合は、エラーにならない。 -->
    <p>{{ y }}</p>
  </DefaultCard>
  <!-- slotで定義しないとデフォルトのコンテンツが表示される。 -->
  <DefaultCard>
  </DefaultCard>
</template>
