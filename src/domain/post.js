// DB 설계서 1.2 기준. QnA와 Notice에서 공유합니다.
export const POST_TYPE = /** @type {const} */ ({
  QUESTION: 'QUESTION',
  NOTICE: 'NOTICE',
})

/** @typedef {typeof POST_TYPE[keyof typeof POST_TYPE]} PostType */

/**
 * 게시글 첨부파일. download_url은 서버가 응답에 포함하는 조회용 URL입니다.
 * @typedef {object} PostAttachment
 * @property {string} attachment_id
 * @property {string} original_name
 * @property {string} mime_type
 * @property {string} download_url
 */

/**
 * 게시글. 서버는 익명 글의 author_display_name을 '익명'으로 내려줍니다.
 * FAQ는 QUESTION이면서 is_faq가 true인 게시글입니다.
 * created_at과 answered_at은 시간대 오프셋을 포함한 ISO 8601입니다.
 *
 * @typedef {object} Post
 * @property {string} post_id
 * @property {PostType} post_type
 * @property {string} title
 * @property {string} body
 * @property {string} author_display_name
 * @property {boolean} is_anonymous
 * @property {boolean} is_faq
 * @property {string | null} answer_body
 * @property {string | null} answered_at
 * @property {string} created_at
 * @property {PostAttachment[]} attachments
 */
