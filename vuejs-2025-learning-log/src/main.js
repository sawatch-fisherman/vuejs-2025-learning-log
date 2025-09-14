// 名前付きインポート文
import { createApp } from 'vue'
// デフォルトインポート文。viteがvueをjavascriptに変換してインポートしてくれている
import App from './App.vue'

const app = createApp(App)

// グローバル登録のコンポーネントをVueのインスタンスに登録する
// これにより、Vueのインスタンス内でBaseEmojiコンポーネントを使用できるようになる
// これにより、BaseEmojiコンポーネントは、どのコンポーネントからも使用できるようになる
// app.component('BaseEmoji', BaseEmoji)

// ID="app"の要素を取得して、要素にVueのインスタンスをマウント（挿入）する。
// このときに既存の要素の内容は削除されて、Vueのマントされた要素が挿入される。
app.mount('#app')
