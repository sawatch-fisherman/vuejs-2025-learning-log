<script setup>
import { ref } from 'vue'

const pageCount = ref(1)
</script>

<template>
  <div>
    <button @click="pageCount = 1">1</button>
    <button @click="pageCount = 2">2</button>
    <button @click="pageCount = 3">3</button>
  </div>
  <div class="card">
    <header>
      <slot name="header" :page-count="pageCount" />
    </header>
    <main>
      <slot name="main" />
    </main>
    <!-- デフォルトのコンテンツ -->
    <!-- 以下の書き方でも同じ意味 -->
    <!-- </slot name="default" /> -->
    <slot />
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped>
div {
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 20px;
}
</style>
