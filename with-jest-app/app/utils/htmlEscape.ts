const htmlEscapes: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

const htmlUnescapes: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
};

const reUnescapedHtml = /[&<>"']/g; // &<>"'을 찾겠다는 정규식
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source); // 방금 만든거

const reEscapedHtml = /&(?:amp|lt|gt|quot|#(0+)?39);/g; // ?뒤에 amp,lt,gt,quot,#39를 찾는거거
const reHasEscapedHtml = RegExp(reEscapedHtml.source); // 방금 만든거

/**
 * 문자 "&", "<", ">", '"' 및 "'"를 해당 HTML 엔터티로 변환합니다.
 *
 * @param {string} [string=''] 변환할 문자열.
 * @returns {string} 변환된 문자열을 반환합니다.
 * @example
 *
 * escape('fred, barney, & pebbles')
 * // => 'fred, barney, &amp; pebbles'
 */
function escape(string: string) {
  return string && reHasUnescapedHtml.test(string) // 변환할 문자열이 있다면
    ? string.replace(reUnescapedHtml, (chr) => htmlEscapes[chr]) // 변환해주기
    : string || ""; // 문자열이 null이나 undefined면 "" 반환
}

/**
 * 이 메서드는 `escape`의 역으로 `string`의 HTML 엔터티 `&amp;`, `<`, `&gt;`, `&quot;` 및
 * `&#39;`를 해당 문자로 변환합니다.
 *
 * @param {string} [string=''] 변환할 문자열.
 * @returns {string} 변환된 문자열을 반환합니다.
 * @example
 *
 * unescape('fred, barney, &amp; pebbles')
 * // => 'fred, barney, & pebbles'
 */
function unescape(string: string) {
  return string && reHasEscapedHtml.test(string)
    ? string.replace(reEscapedHtml, (entity) => htmlUnescapes[entity] || "'")
    : string || "";
}

export { escape, unescape };
