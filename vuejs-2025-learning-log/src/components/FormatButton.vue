<template>
  <!-- 子コンポーネントからは、あくまでイベントを発火するだけ
  実処理は親コンポーネントで行う -->
  <!-- 値を渡すこともできる -->
  <button @click="$emit('format', 100)">初期化</button>
</template>
