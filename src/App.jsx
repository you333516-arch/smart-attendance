import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Timetable from './pages/Timetable';
import QnA from './pages/QnA';
import Notice from './pages/Notice';
import Settings from './pages/Settings';
import More from './pages/More';

export default function App() {
  return (
    <BrowserRouter>
      {/* PC에서 봐도 가운데에 스마트폰 앱 크기(최대 430px)로 예쁘게 고정 */}
      <div className="min-h-screen bg-gray-200 flex justify-center">
        <div className="w-full max-w-[430px] min-h-screen bg-white shadow-2xl flex flex-col relative overflow-x-hidden">
          <Navbar />
          <main className="flex-1 bg-gray-50">
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
      </div>
    </BrowserRouter>
  );
}
