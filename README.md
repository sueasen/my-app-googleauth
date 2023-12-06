# Getting Started

## Firebase 定義情報を更新

- src/contexts/AuthContext.js の firebaseConfig(14 行目～) を更新する
- Firebase から取得した firebaseConfig の値を使用する

```
const firebaseConfig = {
  apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  authDomain: 'xxxxxxxxxx.firebaseapp.com',
  projectId: 'xxxxxxxxxx',
  storageBucket: 'xxxxxxxxxx.appspot.com',
  messagingSenderId: '888888888888',
  appId: '1:888888888888:web:xxxxxxxxxxxxxxxxxxxxxxxxx',
};
```

## インストール

```
npm i react-scripts
```

## 実行

```
npm start
```
