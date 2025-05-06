<script setup>
import { ref, reactive } from 'vue'
const title = ref('Vue.js Study')
let price = ref(9.99)
function increment() {
  price.value += 1
  instructor.age
  instructor.bio = 'hi'
  instructor.sns.twitter = '@hellow'
  instructor.email = ref('info@sawa.com')
  console.log(price)
}
const info = ref({
  students: 100,
  teacher: 'sawatch',
})
const instructor = reactive({
  name: 'sawa',
  age: 25,
  sns: {
    twitter: '@sawatch',
    youtube: '@sawatch',
    a: {}
  },
  email: ref('sawaa@example.com')
})
instructor.bio = 'hello'
const items = reactive([ref(1), ref(2), ref(3)])
items.reverse()
console.log(items[0].value)
console.log(instructor.email)
console.log(info.value)
console.log(instructor.sns)
</script>
<template>
  <h1>Title: {{ title }}</h1>
  <h2>Price: {{ price - 1 }}</h2>
  <button @click="increment">button</button>
  <h2>Students: {{ info.students }}</h2>
  <h2>Instructor age: {{ instructor.age }}</h2>
  <h2>Instructor bio: {{ instructor.bio }}</h2>
  <h2>Instructor SNS Twitter: {{ instructor.bio }}</h2>
</template>
