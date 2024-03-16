/**
 * 將指定日期加上 X 天
 */
export function addDays(date, days) {
  const res = new Date(date);
  res.setDate(res.getDate() + days);
  return res;
}

/**
 * 回傳一個隨機的訂單編號
 */
export function generateOrderId() {
  return `${Math.floor(Math.random() * 36 ** 8).toString(36).toLowerCase()}-${Date.now().toString(36)}`;
}

/**
 * 取得當前日期
 * @returns {string} 日期格式化成 'YYYY/MM/DD'

 */
export function getFormattedDate() {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1; // getMonth() 從 0 開始，所以我們需要加 1
  let day = date.getDate();

  // 如果月份或日期的數字小於 10，前面加上 '0'
  if (month < 10) month = '0' + month;
  if (day < 10) day = '0' + day;

  return year + '/' + month + '/' + day;
}
