<template>
  <!-- 子コンポーネントからは、あくまでイベントを発火するだけ
  実処理は親コンポーネントで行う -->
  <button @click="$emit('format')">初期化</button>
</template>
