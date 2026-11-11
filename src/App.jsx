import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Timetable from './pages/Timetable';
import QnA from './pages/QnA';
import Notice from './pages/Notice';
import Settings from './pages/Settings';
import More from './pages/More';

function Layout() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* 고정된 왼쪽 메뉴바 */}
      <Navbar />
      
      {/* 우측 메인 콘텐츠 화면 (왼쪽 메뉴바 너비 64(256px)만큼 왼쪽으로 밀어줌) */}
      <main className="flex-1 ml-64 bg-white min-h-screen shadow-xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/qna" element={<QnA />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}