<script setup>
import { ref } from 'vue';
import FormatButton from './components/FormatButton.vue';

const count = ref(0);
// valueは子コンポーネントから$emitの第二引数で渡される
function onFormat(value) {
  return count.value = value;
}
</script>
<template>
  <div>
    <p>カウント: {{ count }}</p>
    <button @click="count++">カウントアップ</button>
    <!-- 子コンポーネントからイベントを受け取る -->
    <!-- $event で値を受け取れる -->
    <!-- <FormatButton @format="count = $event" /> -->
    <!-- 以下のように関数を定義しても良い -->
    <!-- 子がキャメルケースでイベントを発火しても、親はケバブケースで受け取れる -->
    <FormatButton @formatCount="onFormat" />
  </div>
</template>
