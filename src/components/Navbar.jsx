import { Link, useLocation } from 'react-router-dom';
import { ROLE } from '../domain/user';

export default function Navbar() {
  const { pathname } = useLocation();
  
  // TODO: 실제 백엔드 연동 시 상태 관리 라이브러리(Zustand 등)에서 가져올 로그인 사용자 정보
  const currentUser = {
    display_name: '홍길동',
    role: ROLE.STUDENT,
  };

  // 사진과 동일한 메뉴 구성
  const menus = [
    { path: '/', label: '출석체크 (HOME)' },
    { path: '/timetable', label: '출결조회/시간표' },
    { path: '/qna', label: 'Q&A' },
    { path: '/notice', label: '공지사항' },
    { path: '/more', label: '더보기' },
  ];

  return (
    <div className="w-64 min-h-screen bg-white border-r flex flex-col fixed left-0 top-0 z-50">
      {/* 헤더 영역 (파란색 배경) */}
      <div className="bg-[#0b338f] text-white p-6 pb-4 h-32 flex flex-col justify-end">
        <h1 className="text-xl font-bold tracking-tight">백석대학교</h1>
        <p className="text-[10px] text-blue-200 mt-1 uppercase">Baekseok University</p>
      </div>

      {/* 메뉴 리스트 영역 */}
      <nav className="flex-1 flex flex-col">
        {menus.map((m) => (
          <Link
            key={m.path}
            to={m.path}
            className={`px-6 py-4 text-sm font-bold border-b border-gray-100 ${
              pathname === m.path ? 'text-[#0b338f] bg-gray-50' : 'text-black'
            }`}
          >
            {m.label}
          </Link>
        ))}
      </nav>

      {/* 하단 환경설정(톱니바퀴) 영역 */}
      <div className="bg-[#56595e] text-white p-4 flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-300">문의하기 :</p>
          <p className="text-[10px] text-gray-400 mt-1">Version : 1.0.4 (5)</p>
        </div>
        <Link to="/settings" className="p-2">
          {/* 톱니바퀴 아이콘 */}
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}