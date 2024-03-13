<h1>2024 Vin Chateau</h1>

專案說明<br>
Demo Website<br>
<a href="https://ivy7661.github.io/Wine-project/">前台首頁</a>
<a href="https://ivy7661.github.io/Wine-project/#/adminlogin">後台登入</a>

## 使用套件

以下是已經安裝在專案中的套件。

- axios (^1.6.7)
- bootstrap (^5.3.3)
- bootstrap-icons (^1.11.3)
- pinia (^2.1.7)
- vue (^3.4.19)
- vue-router (^4.2.5)
- @vitejs/plugin-vue (^4.5.2)
- eslint (^8.49.0)
- eslint-config-standard (^^17.1.0)
- eslint-import-resolver-alias (^1.1.2)
- eslint-plugin-import (^2.29.1)
- eslint-plugin-n (^16.6.2)
- eslint-plugin-promise (^6.1.1)
- eslint-plugin-vue (^9.20.1)
- gh-pages (^6.1.1)
- sass (^1.70.0)
- vite (^5.1.2)
- vite-plugin-eslint (^1.8.1)
- Sweet Alert 2 (^11.10.5)
- Swiper (^11.0.6)
- vee-validate (^4.12.5)
- vue-loading-overlay (^6.0.4)
- echarts (^5.5.0)
- json-server (0.17.4)

## 資料夾結構

- `public`：公開的靜態檔案
- `src`：專案的程式碼
  - `assets`：靜態檔案
  - `components`：元件
  - `router`：路由
  - `store`：狀態管理
  - `utils`：共用程式
  - `views`：頁面
  - `App.vue`：根元件
  - `main.js`：進入點
- `.env.example`：環境變數範本
- `.eslintrc.js`：ESLint 設定檔
- `.gitignore`：Git 忽略檔案
- `.nvmrc`：Node.js 版本
- `index.html`：進入點 HTML
- `package-lock.json`：套件版本鎖定
- `package.json`：專案資訊
- `README.md`：專案說明
- `vite.config.js`：Vite 設定檔
- `server.js`：JSON Server

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

## gh-pages 部署說明

使用 gh-pages 進行部署，部署前需先測試 Build 是否正常。

### Build

```bash
npm run build
```

### 進行部署

```bash
npm run deploy
```
