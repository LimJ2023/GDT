import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const EmailVerification = () => {
  const [code, setCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email; // 이메일 전달받기

  // 인증 코드 요청
  const handleSendCode = async () => {
    if (!email) {
      alert('이메일 정보가 없습니다. 다시 시도해주세요.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/send-verification-code', { email });
      setIsCodeSent(true);
      alert('인증 코드가 이메일로 전송되었습니다.');
    } catch (error) {
      console.error('인증 코드 전송 실패:', error.response?.data || error.message);
      alert('인증 코드 전송에 실패했습니다.');
    }
  };

  // 인증 코드 확인
  const handleVerifyCode = async () => {
    if (!code.trim()) {
      alert('인증 코드를 입력해주세요.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/verify-code', { email, code });
      alert('이메일 인증이 완료되었습니다.');
      navigate('/signup', { state: { email } });
    } catch (error) {
      console.error('인증 코드 확인 실패:', error.response?.data || error.message);
      alert('인증 코드가 올바르지 않습니다.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h3 className="text-2xl font-bold mb-4">이메일 인증</h3>
      {isCodeSent && (
        <input
          type="text"
          placeholder="인증 코드"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          className="w-full border p-2 rounded mb-2"
        />
      )}
      {!isCodeSent ? (
        <button onClick={handleSendCode} className="bg-blue-500 text-white px-4 py-2 rounded">
          인증 코드 보내기
        </button>
      ) : (
        <button onClick={handleVerifyCode} className="bg-green-500 text-white px-4 py-2 rounded">
          인증 코드 확인
        </button>
      )}
    </div>
  );
};

export default EmailVerification;
