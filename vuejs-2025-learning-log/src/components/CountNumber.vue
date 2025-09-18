<script setup>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, nextTick, ref } from 'vue'
const count = ref(0)
onBeforeMount(() => {
  console.log('CountNumberコンポーネントが(前)マウントされました')
  // ↓デバッグモードになる（ブレークポイントをブラウザのデバッグツールで設定できる）
  // ↓の段階では、コンポーネントがマウントされていないので、countは非表示になっている
  // debugger
})
onMounted(() => {
  console.log('CountNumberコンポーネントが(後)マウントされました')
  // ↓の段階では、コンポーネントがマウントされているので、countは表示されている
  // debugger
})
onBeforeUpdate(() => {
  console.log('CountNumberコンポーネントが(前)更新されました')
})
onUpdated(() => {
  console.log('CountNumberコンポーネントが(後)更新されました')
})
onBeforeUnmount(() => {
  console.log('CountNumberコンポーネントが(前)アンマウントされました')
})
onUnmounted(() => {
  console.log('CountNumberコンポーネントが(後)アンマウントされました')
})
// function countUp() {
//   count.value++
//   nextTick(() => {
//     console.log('nextTick')
//     debugger
//   })
// }
// 以下の書き方でも、上と同じ結果になる。どっちでもいい。
async function countUp() {
  count.value++
  await nextTick()
  console.log('nextTick')
  debugger
}
</script>
<template>
  <div>
    <p>押した回数：{{ count }}</p>
    <button @click="countUp">＋１</button>
  </div>
</template>
