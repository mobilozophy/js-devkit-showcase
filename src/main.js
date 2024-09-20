import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

// Mobilozophy configuration
window.mzcapiConfig = {
  domain: 'a346d659-1f05-4bf6-b070-cb9334a852e5',
  api_url: 'https://mzcapi.test/api',
  verboseLogging: true,
};

// Load Mobilozophy script
if (window.location.hostname === 'js-site.test') {
  const script = document.createElement('script');
  script.src = 'https://js-site.test/dev-js-embed/dist/embed.js';
  document.head.appendChild(script);
}

const app = createApp(App)

app.use(router)
app.use(store)

// Initialize store before mounting the app
store.dispatch('initializeStore').then(() => {
  app.mount('#app')
})