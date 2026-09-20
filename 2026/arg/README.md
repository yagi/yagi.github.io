# ARG MVP: あなたが見つけるまで

## 目的
「日常のネット閲覧の延長から、いつの間にか参加している」短編ARGのローカル試作です。

## プレイ方法
ローカルHTTPサーバーで配信してください。

### Python
```bash
cd arg_mvp
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000/` を開きます。

## 想定導線
1. `index.html`
2. `old-302.html`
3. 疑似はてブ `bookmark-mock.html`
4. `u-2046-11.html`
5. `/1743/1106/`
6. `recover.html`
7. `photo.html`
8. `diary.html`
9. `choice.html`
10. エンディング
11. `old-302.html` に戻ると末尾が変化

## 謎の答え
- 隠しURL: `/1743/1106/`
- 名前: 水原ユウ
- 年齢: 20
- 所属: 東央大学

## 状態管理
MVPでは `localStorage` のみです。サーバー側に個人情報は送信しません。

状態を消すには開発者コンソールで以下を実行してください。
```js
localStorage.removeItem('arg_your_found_state_v1')
```

## 本番化するときの推奨変更
- `bookmark-mock.html` を実在するはてなブックマーク導線へ置換
- `photo.html` に実際の集合写真風アセットを追加
- 独自ドメイン + Cloudflare Pages/Workersへ配備
- 状態管理は基本localStorageのまま。全体人数など作品上必要な値だけKV/D1へ
- 実在人物・実在事故と誤認されないよう、奥付または終了後にフィクション表記へ到達できる導線を用意
- 実際の個人情報/IPアドレスを演出に利用しない
