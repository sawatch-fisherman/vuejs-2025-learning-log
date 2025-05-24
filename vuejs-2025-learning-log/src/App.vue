<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
<template>
  <p>{{ count }}</p>
  <div @click.stop="count++">
    <button @click="$event">button1a</button>
    <button @click="$event.stopPropagation()">button1b not count-up</button>
    <button @click.stop="">button1c not count-up</button>
    <a href="https://sawada-system.jp/" @click.prevent="">button1d</a> // イベント修飾子
  </div>

  <a href="https://sawada-system.jp/" @click="$event.preventDefault()">button2a</a> // ページ遷移しない
  <a href="https://sawada-system.jp/" @click.prevent="">button2b</a> // イベント修飾子



</template>
