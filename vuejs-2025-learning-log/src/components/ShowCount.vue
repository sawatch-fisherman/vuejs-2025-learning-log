<script setup>
const isRequired = false
// defineProps内では、外部（スコープ外）の値(isRequired)を参照できない
defineProps({
  foo: {
    // 以下のように[]で囲むと複数の型を指定できる
    type: [Number, String, Boolean, Array, Object, Function, Symbol],

    // 以下のように外部の変数を参照できない
    //required: isRequired,

    // javaScriptのルールで、オブジェクトや配列は、必ず関数で返り値を返すようにする
    default: function () {
      return {}
    },

    // 以下のように値のバリデーションも可能
    validate: function (value) {
      return value === 0 || value === 1
    }
  }
})

</script>
<template>
  <p>カウント: {{ foo }}</p>
</template>
