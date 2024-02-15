/**
 * 將指定日期加上 X 天
 */
export function addDays(date, days) {
  const res = new Date(date);
  res.setDate(res.getDate() + days);
  return res;
}
