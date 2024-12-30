import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/login`, { email, password });

      const token = response.data.token;
      localStorage.setItem('token', token);
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setUser(decodedToken); // 이메일만 아닌 전체 사용자 정보 저장
      alert('로그인 성공!');
      navigate('/board'); // 게시판으로 이동
    } catch (error) {
      console.error('로그인 중 오류:', error.response?.data || error.message);
      setErrorMessage(error.response?.data?.message || '로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
<div className="max-w-md mx-auto p-4">
  <h2 className="text-2xl font-bold mb-4">로그인</h2>
  {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
  <form onSubmit={handleLogin} className="space-y-4">
    <input
      type="email"
      placeholder="이메일"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="w-full border p-2 rounded"
    />
    <input
      type="password"
      placeholder="비밀번호"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      className="w-full border p-2 rounded"
    />
    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
      로그인
    </button>
  </form>
  <p className="text-center mt-4">아이디가 없으신가요?</p>
  <button
    onClick={() => navigate('/signup')}
    className="text-blue-500 underline mt-2"
  >
    회원가입 하기
  </button>
</div>
  );
};

export default Login;