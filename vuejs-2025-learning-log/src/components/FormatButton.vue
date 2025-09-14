<script setup>
// 以下は無くても動作する。よって、そんなに重要ではないが、どんなイベントを発火するかを明示的にするために書くことがある
// defineEmits(['format']);

// スクリプトからエミットする場合は、defineEmitsの返り値を受け取る
// 返り値の型を指定する場合は、以下のようにオブジェクト形式で書く
const emit = defineEmits(['formatCount']);
function emitFormat() {
  emit('formatCount', 100);
}
</script>
<template>
  <!-- 子コンポーネントからは、あくまでイベントを発火するだけ
  実処理は親コンポーネントで行う -->
  <button @click="emitFormat">初期化</button>
</template>
