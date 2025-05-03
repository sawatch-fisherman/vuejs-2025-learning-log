<script setup>
import { ref, reactive } from 'vue'
const title = ref('Vue.js Study')
let price = ref(9.99)
function increment() {
  price.value += 1
  instructor.age
  instructor.bio = 'hi'
  instructor.sns.twitter = '@hellow'


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
})
instructor.bio = 'hello'
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
