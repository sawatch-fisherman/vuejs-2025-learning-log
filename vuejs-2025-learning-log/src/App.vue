<script setup>
import { ref } from 'vue';
import ShowCount from './components/ShowCount.vue';
const count = ref(0);
</script>
<template>
  <div>
    <!-- 以下の書き方も同じ<ShowCount :foo="count" hello="こんにちわ"/> -->
    <ShowCount v-bind="{ foo: count, hello: 'こんにちわ' }" />
    <button @click="count++">加算</button>
  </div>
</template>
