import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import '@ant-design/icons-vue'
import 'ant-design-vue/dist/antd.css'

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

const app = createApp(App);
app.config.productionTip = false;
app.use(Antd);

app.use(router).mount('#app');
