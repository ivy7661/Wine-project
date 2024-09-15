import '@/assets/scss/all.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';

import Loading from 'vue-loading-overlay';
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import { date, currency, imgPath } from '@/utils/filters';

import App from './App.vue';
import router from './router';

// vee-validate 設定
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
});

setLocale('zh_TW');

const app = createApp(App);

app.config.globalProperties.$filters = {
  date,
  currency,
  imgPath
};

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);

app.component('VueLoading', Loading);
app.component('VeeForm', Form);
app.component('VeeField', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
