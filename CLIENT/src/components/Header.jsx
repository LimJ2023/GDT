import { Link } from 'react-router-dom';


const Header = ({ user, handleLogout }) => {
  return (
    <header>
      <div className='flex justify-between p-3 items-center'>
        <h1 className='text-2xl justify-center'>
          <Link to="/">세이버</Link>
        </h1>
        <nav className='flex justify-end space-x-4'>
          {!user ? (
            <>
              <Link to="/signup" className='text-sm'>회원가입</Link> {/* 회원가입 버튼 추가 */}
              <Link to="/login" className='text-sm'>로그인</Link>
            </>
          ) : (
            <>
              <Link to="/my-profile" className='text-sm'>내 정보</Link>
              <button onClick={handleLogout} className='text-sm'>로그아웃</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};



export default Header