// DB 설계서 1.2 기준. Navbar, Home, Settings, More에서 공유합니다.
export const ROLE = /** @type {const} */ ({
  STUDENT: 'STUDENT',
  ADMIN: 'ADMIN',
})

/** @typedef {typeof ROLE[keyof typeof ROLE]} Role */

/**
 * 로그인 사용자 응답.
 * @typedef {object} User
 * @property {string} user_id
 * @property {string | null} student_no
 * @property {string} display_name
 * @property {Role} role
 * @property {boolean} push_enabled
 */
