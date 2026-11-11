// DB 설계서 1.2 기준. Home과 Timetable의 출결 화면에서 공유합니다.
export const ATTENDANCE_STATUS = /** @type {const} */ ({
  PENDING: 'PENDING',
  PRESENT: 'PRESENT',
  LATE: 'LATE',
  ABSENT: 'ABSENT',
})

export const ATTENDANCE_STATUS_UI = {
  [ATTENDANCE_STATUS.PENDING]: {
    label: '출석전',
    badgeClass: 'bg-gray-100 text-gray-600',
  },
  [ATTENDANCE_STATUS.PRESENT]: {
    label: '출석',
    badgeClass: 'bg-green-100 text-green-700',
  },
  [ATTENDANCE_STATUS.LATE]: {
    label: '지각',
    badgeClass: 'bg-yellow-100 text-yellow-700',
  },
  [ATTENDANCE_STATUS.ABSENT]: {
    label: '결석',
    badgeClass: 'bg-red-100 text-red-700',
  },
}

/** @typedef {typeof ATTENDANCE_STATUS[keyof typeof ATTENDANCE_STATUS]} AttendanceStatus */

/**
 * 로그인한 학생의 수업 회차 1건.
 * 날짜는 YYYY-MM-DD, 일시는 시간대 오프셋을 포함한 ISO 8601입니다.
 * 출결 행이 없는 경우의 API 응답은 status: null입니다.
 * PENDING은 출결 행에 저장된 '출석전' 상태입니다.
 *
 * @typedef {object} SessionAttendance
 * @property {string} session_id
 * @property {string} offering_id
 * @property {string} course_name
 * @property {string} session_date
 * @property {number} week_no
 * @property {string} starts_at
 * @property {string} ends_at
 * @property {string} checkin_open_at
 * @property {string} checkin_close_at
 * @property {AttendanceStatus | null} status
 */
