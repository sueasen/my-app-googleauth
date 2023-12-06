import { UserCircleIcon } from '@heroicons/react/24/solid';
import { AuthContextConsumer } from '../contexts/AuthContext';

const LoginUser = () => {
  // AuthContextConsumer からログインユーザ、ログイン・ログアウト処理取得
  const { loginUser, login, logout } = AuthContextConsumer();
  return (
    <>
      <div className="user_info">
        <UserCircleIcon className="user_icon" />
        <p className="user_name">
          {loginUser ? loginUser.displayName : 'ゲスト'}
        </p>
        <button className="login_btn" onClick={loginUser ? logout : login}>
          {loginUser ? 'logout' : 'login'}
        </button>
      </div>
    </>
  );
};
export default LoginUser;
