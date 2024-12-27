import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/signup`, {
        email,
        password,
      });
      alert('회원가입이 완료되었습니다!');
      navigate('/login');
    } catch (error) {
      console.error('회원가입 오류:', error.response?.data || error.message);
      setErrorMessage(
        error.response?.data?.message || '회원가입에 실패했습니다. 다시 시도해주세요.'
      );
    }
  };

  const handleNaverSignup = () => {
    // 네이버 OAuth 로그인 URL로 이동
    window.location.href = `http://localhost:5000/api/auth/naver`;
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">회원가입</h2>
      {errorMessage && (
        <p className="text-red-500 mb-4">{errorMessage}</p>
      )}
      <form onSubmit={handleSignup} className="space-y-4">
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
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          회원가입
        </button>
      </form>
      <hr className="my-4" />
      <button
        onClick={handleNaverSignup}
        className="bg-green-500 text-white px-4 py-2 rounded w-full"
      >
        네이버 아이디로 회원가입 (임시로 만들어둠)
      </button>
    </div>
  );
};

export default Signup;
