<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  emoji: {
    type: String,
    required: true
  }
}
)
</script>

<template>
  <div class="card">
    <div>{{ name }}</div>
    <div>{{ emoji }}</div>
  </div>
</template>
<style scoped>
.card {
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  font-size: 2rem;
  padding: 20px;
  cursor: pointer;
}
</style>
