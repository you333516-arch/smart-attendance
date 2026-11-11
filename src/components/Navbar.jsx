import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROLE } from '../domain/user';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const currentUser = {
    display_name: '홍길동',
    role: ROLE.STUDENT,
  };

  const menus = [
    { path: '/', label: '출석체크 (HOME)' },
    { path: '/timetable', label: '출결조회/시간표' },
    { path: '/qna', label: 'Q&A' },
    { path: '/notice', label: '공지사항' },
    { path: '/more', label: '더보기' },
  ];

  return (
    <>
      <header className="bg-[#0b338f] text-white h-14 px-4 flex items-center justify-between sticky top-0 z-30 shadow-md">
        <button onClick={() => setIsOpen(true)} className="p-1 focus:outline-none">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-base font-bold tracking-tight">백석대학교 스마트출결</h1>
        <div className="w-7" />
      </header>

      {isOpen && (
        <div
          className="absolute inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`absolute top-0 left-0 w-[80%] max-w-[300px] h-full bg-white z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="bg-[#0b338f] text-white p-6 pb-5 h-32 flex flex-col justify-end">
          <h2 className="text-2xl font-bold tracking-tight">백석대학교</h2>
          <p className="text-xs text-blue-200 mt-1 uppercase">BAEKSEOK UNIVERSITY</p>
        </div>

        <nav className="flex-1 flex flex-col bg-white">
          {menus.map((m) => (
            <Link
              key={m.path}
              to={m.path}
              onClick={() => setIsOpen(false)}
              className={`px-6 py-4 text-[15px] font-bold border-b border-gray-200 ${
                pathname === m.path ? 'text-[#0b338f] bg-blue-50/50' : 'text-gray-900'
              }`}
            >
              {m.label}
            </Link>
          ))}
        </nav>

        <div className="bg-[#56595e] text-white p-4 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-200">문의하기 :</p>
            <p className="text-[11px] text-gray-400 mt-1">Version : 1.0.4 (5)</p>
          </div>
          <Link to="/settings" onClick={() => setIsOpen(false)} className="p-2">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </Link>
        </div>
      </aside>
    </>
  );
}
