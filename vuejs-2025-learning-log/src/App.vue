<script setup>
import MenyCard from './components/MenyCard.vue'
</script>
<template>
  <main>
    <h1 class="title">今日は何を食べる？</h1>
    <MenyCard />
    <p>VS</p>
    <MenyCard />
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
