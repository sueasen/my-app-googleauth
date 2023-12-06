import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';

const AuthContext = createContext();

// firebase の定義情報（各値はFirebaseより取得した値を使用）
const firebaseConfig = {
  apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  authDomain: 'xxxxxxxxxx.firebaseapp.com',
  projectId: 'xxxxxxxxxx',
  storageBucket: 'xxxxxxxxxx.appspot.com',
  messagingSenderId: '888888888888',
  appId: '1:888888888888:web:xxxxxxxxxxxxxxxxxxxxxxxxx',
};

// firebase, GoogleAuth 初期設定
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Provider のコンポーネント
export const AuthContextProvider = ({ children }) => {
  // ログインユーザ
  const [loginUser, setLoginUser] = useState();

  // 起動時ログイン処理(既にログインしてる場合のユーザ設定)
  useEffect(() => {
    // auth 初期化時にログインユーザ設定
    auth.onAuthStateChanged((user) => setLoginUser(user));
  }, []);

  // ログイン処理
  const login = async () => {
    // Google ログインのポップアップ表示して認証結果取得
    const result = await signInWithPopup(auth, provider);
    // 認証結果より user 設定
    setLoginUser(result.user);
  };

  // ログアウト処理
  const logout = async () => {
    await signOut(auth);
    setLoginUser(null);
  };

  // ログイン情報設定したProvider
  return (
    <AuthContext.Provider
      value={{
        loginUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Consumer (useContext) # Provider で囲った範囲で使う必要あり
export const AuthContextConsumer = () => {
  return useContext(AuthContext);
};
