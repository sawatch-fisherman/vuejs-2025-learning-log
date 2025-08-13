<script setup>
import { watch, watchEffect } from 'vue';

const { foo, hello } = defineProps(['foo', 'hello']);

watchEffect(() => {
  console.log(foo);
})
// watchは必ず第一引数は関数で記述する必要がある
watch(
  // foo, この書き方はNG
  () => foo,  // この書き方はOK
  () => {
    console.log('watch');
  }
)

</script>
<template>
  <p>Count: {{ foo }}</p>
  <p>挨拶:{{ hello }}</p>
</template>
