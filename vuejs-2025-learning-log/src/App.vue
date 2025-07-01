<script setup>
import { ref } from 'vue'

</script>
<template>
  <!-- background-colorもbackgoroundColorも同じ意味 -->
  <div :style="{ color: 'red', backgroundColor: 'blue' }">Hello1</div>
  <div :style="{ color: 'red', 'background-color': 'blue' }">Hello2</div>
</template>
