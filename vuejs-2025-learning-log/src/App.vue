<script setup>
import { ref } from 'vue';
import ShowCount from './components/ShowCount.vue';
</script>
<template>
  <div>
    <!-- 親コンポーネントのpropsの命名規則はケバブケース -->
    <ShowCount :total-price="count" />
  </div>
</template>
