// DB 설계서 1.2 기준. Timetable의 반복 시간표에서 사용합니다.
export const DELIVERY_TYPE = /** @type {const} */ ({
  OFFLINE: 'OFFLINE',
  CYBER: 'CYBER',
})

export const TERM_CODE = /** @type {const} */ ({
  FIRST: '1',
  SECOND: '2',
  SUMMER: 'SUMMER',
  WINTER: 'WINTER',
})

export const WEEKDAY = /** @type {const} */ ({
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
  SUNDAY: 7,
})

export const WEEKDAY_LABELS = {
  [WEEKDAY.MONDAY]: '월',
  [WEEKDAY.TUESDAY]: '화',
  [WEEKDAY.WEDNESDAY]: '수',
  [WEEKDAY.THURSDAY]: '목',
  [WEEKDAY.FRIDAY]: '금',
  [WEEKDAY.SATURDAY]: '토',
  [WEEKDAY.SUNDAY]: '일',
}

/** @typedef {typeof DELIVERY_TYPE[keyof typeof DELIVERY_TYPE]} DeliveryType */
/** @typedef {typeof TERM_CODE[keyof typeof TERM_CODE]} TermCode */
/** @typedef {typeof WEEKDAY[keyof typeof WEEKDAY]} Weekday */

/**
 * 반복 시간표 슬롯. 시각 형식은 HH:mm:ss입니다.
 * @typedef {object} ScheduleSlot
 * @property {string} slot_id
 * @property {Weekday} weekday
 * @property {string} start_time
 * @property {string} end_time
 * @property {string | null} room
 */

/**
 * 개설 강의. 과목코드와 분반은 엑셀의 앞자리 0을 보존합니다.
 * 반복 시간표가 없는 강의의 slots는 []입니다.
 * @typedef {object} CourseSchedule
 * @property {string} offering_id
 * @property {string} course_code
 * @property {string} course_name
 * @property {number} academic_year
 * @property {TermCode} term_code
 * @property {string} section_code
 * @property {string | null} instructor_name
 * @property {DeliveryType} delivery_type
 * @property {ScheduleSlot[]} slots
 */
