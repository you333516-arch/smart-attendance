// ============================================================================
// 백석대 스마트 출결 시스템 - 팀 공통 도메인 정의 (DB 설계서 1.0 기준)
// ※ 더미 데이터 없이 팀원 4명이 공통으로 맞출 코드값과 필드 구조만 정의함
// ============================================================================

// 1. 공통 상태/유형 코드 (DB CHECK 제약조건 기준)
export const DOMAIN_CODES = {
  // 사용자 권한 (users.role)
  ROLE: {
    STUDENT: 'STUDENT',
    ADMIN: 'ADMIN',
  },
  // 강의 유형 - 시간표 하단 사이버 강의 분리용 (course_offerings.delivery_type)
  DELIVERY_TYPE: {
    OFFLINE: 'OFFLINE', // 대면 강의
    CYBER: 'CYBER',     // 사이버 강의
  },
  // 출결 상태 (attendance_records.status)
  ATTENDANCE_STATUS: {
    PENDING: 'PENDING', // 출석전
    PRESENT: 'PRESENT', // 출석
    LATE: 'LATE',       // 지각
    ABSENT: 'ABSENT',   // 결석
  },
  // 통합 게시판 유형 - 단일 테이블 구분용 (posts.post_type)
  POST_TYPE: {
    QUESTION: 'QUESTION', // Q&A 질문 (is_faq: true일 때 FAQ 노출)
    NOTICE: 'NOTICE',     // 공지사항
  },
  // 요일 코드 (schedule_slots.weekday)
  WEEKDAY: {
    1: '월',
    2: '화',
    3: '수',
    4: '목',
    5: '금',
  },
};

// 2. 출결 상태별 공통 UI 라벨 및 색상 (Home.jsx, Timetable.jsx 공통 사용)
export const ATTENDANCE_STATUS_UI = {
  PENDING: { label: '출석전', badgeClass: 'bg-gray-100 text-gray-600' },
  PRESENT: { label: '출석', badgeClass: 'bg-green-100 text-green-700' },
  LATE: { label: '지각', badgeClass: 'bg-yellow-100 text-yellow-700' },
  ABSENT: { label: '결석', badgeClass: 'bg-red-100 text-red-700' },
};

// 3. 도메인별 표준 필드 구조 (팀원들이 화면 뼈대 짤 때 맞출 변수명 기준)
export const DOMAIN_MODELS = {
  // 사용자 도메인 (users)
  User: {
    user_id: null,
    login_id: '',
    student_no: '',
    display_name: '',
    role: DOMAIN_CODES.ROLE.STUDENT,
    push_enabled: false,
  },
  // 강의 및 시간표 도메인 (courses + course_offerings + schedule_slots)
  CourseSchedule: {
    offering_id: null,
    course_code: '',
    course_name: '',
    professor_name: '',
    delivery_type: DOMAIN_CODES.DELIVERY_TYPE.OFFLINE,
    weekday: 1,
    start_time: '09:00',
    end_time: '10:50',
    room: '',
    status: DOMAIN_CODES.ATTENDANCE_STATUS.PENDING,
  },
  // 통합 게시글 도메인 (posts + post_attachments)
  Post: {
    post_id: null,
    post_type: DOMAIN_CODES.POST_TYPE.QUESTION,
    title: '',
    body: '',
    author_id: null,
    is_anonymous: false,
    is_faq: false,
    answer_body: null,
    created_at: '',
  },
};
