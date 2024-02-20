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
