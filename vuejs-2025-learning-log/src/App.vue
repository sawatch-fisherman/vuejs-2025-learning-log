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
  <!-- Slotを使えば値を動的に変えられる。 -->
  <DefaultCard>
    <h2>Hello World3</h2>
    <p>I'm fain!2</p>
  </DefaultCard>
</template>
