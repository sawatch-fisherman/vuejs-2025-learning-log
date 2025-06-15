<script setup>
import { ref, watchEffect, watch } from 'vue'
const count1 = ref(0)
const count2 = ref(0)
const count3 = ref({
  a: 0,
})

// watchの注意点
watch([
  // count3.value.a は常に0として扱われるので、watchの第二引数のコールバックは呼ばれない
  () => count3.value.a      // Reactiveオブジェクトのプロパティを参照する場合は、必ず関数を使用する必要がある
],
  (newValue, oldValue) => {
    console.log('watch2 count3:', count3.value)
    console.log('watch2 newValue:', newValue)
    console.log('watch2 oldValue:', oldValue)
  })

// 初回ロードでもwatchの第二引数のコールバックが呼ぶ方法
// 以下のように、immediateオプションを指定することで、初回ロードでもwatchの第二引数のコールバックが呼ばれる
watch([
  // count3.value.a は常に0として扱われるので、watchの第二引数のコールバックは呼ばれない
  () => count3.value.a      // Reactiveオブジェクトのプロパティを参照する場合は、必ず関数を使用する必要がある
],
  (newValue, oldValue) => {
    console.log('watch2 count3:', count3.value)
    console.log('watch2 newValue:', newValue)
    console.log('watch2 oldValue:', oldValue)
  }, {
  immediate: true // 初回ロードでもwatchの第二引数のコールバックを呼ぶ
})

// 以下の場合だと第一引数は絶対に変化しないので、watchの第二引数のコールバックは呼ばれない
watch(
  () => {
    console.log('watch first argument')
    count1.value
    return 0
  },
  (newValue, oldValue) => {
    console.log('watch')
    console.log('newValue:', newValue)
    console.log('oldValue:', oldValue)
  })

// 複数の値を監視する場合、第一引数に配列を使用すれば良い。
watch([count1, count2], (newValue, oldValue) => {
  console.log('watch count1:', count1.value)
  console.log('watch newValue:', newValue)
  console.log('watch oldValue:', oldValue)
})

// 複数の値を監視する場合、第一引数に配列に関数も指定が可能。
watch([
  count1,
  () => {
    return count2.value
  }
],
  (newValue, oldValue) => {
    console.log('watch2 count1:', count1.value)
    console.log('watch2 newValue:', newValue)
    console.log('watch2 oldValue:', oldValue)
  })
// watch(count1, (newValue, oldValue) => {
//   console.log('watch count1:', count1.value)
//   console.log('watch newValue:', newValue)
//   console.log('watch oldValue:', oldValue)
// })
watchEffect(() => {
  console.log('watchEfect:')
  console.log(count1.value, count2.value, count3.value)
})
</script>
<template>
  <p>{{ count1 }}(count1)</p>
  <p>{{ count2 }}(count2)</p>
  <p>{{ count3 }}(count3)</p>
  <button @click="count1++">+1</button>
  <button @click="count2++">+1</button>
  <button @click="count3++">+1</button>
</template>
