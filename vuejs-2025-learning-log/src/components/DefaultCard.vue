<script setup>
import { ref } from 'vue'

const x = ref('x')
</script>

<template>
  <div class="card">
    <slot>
      <!-- コンテンツがない場合のデフォルトのコンテンツをフォールバックコンテンツという -->
      <p>No content</p>
    </slot>
  </div>
</template>

<style scoped>
div {
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 20px;
}
</style>
