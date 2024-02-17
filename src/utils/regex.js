/**
 * 驗證手機號碼
 */
export const phoneNumber = /^(09)[0-9]{8}$/;

/**
 * 驗證使用者密碼，6-12位數字和字母組合
 */
export const userPassword = /(?=.*[0-9])(?=.*[a-zA-Z]).{6,12}/;
