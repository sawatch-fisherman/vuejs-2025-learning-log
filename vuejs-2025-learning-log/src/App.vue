<script setup>
import DefaultCard from './components/DefaultCard.vue'

</script>
<template>
  <h1>Slot</h1>
  <DefaultCard>
    <!-- </slot name="default" />を子コンポーネントで定義していると、↓<p>タグのコンテンツが表示される。 -->
    <!-- ちなみに<p>タグは、どこに複数書いても、ひとまとめにされて</slot name="default" />の定義位置になる -->
    <p>Default Content1</p>
    <!-- <template v-slot:header></template> -->
    <!-- v-slot:headerと#headerは同じ意味。eslintは#の方を推奨。 -->
    <!-- スロットプロップスは、子コンポーネントで定義していると、親コンポーネントで使用できる。 -->
    <template #header="{ pageCount }">
      <h2 v-if="pageCount === 1">いぬ</h2>
      <h2 v-if="pageCount === 2">ねこ</h2>
      <h2 v-if="pageCount === 3">とら</h2>
    </template>
    <template #main>
      <p>Main Content</p>
    </template>
    <template #footer>
      <p>Footer Content</p>
    </template>
    <!-- <p>タグは、どこに複数書いても、ひとまとめにされて</slot name="default" />の定義位置になる -->
    <p>Default Content2</p>

  </DefaultCard>
  <!-- slotで定義しないとデフォルトのコンテンツが表示される。 -->

</template>
