<script setup>
defineProps({
  foo: {
    type: Number,
    default: 100
  }
})

</script>
<template>
  <p>カウント: {{ foo }}</p>
</template>
