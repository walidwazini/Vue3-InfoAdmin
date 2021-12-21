import { createApp } from 'vue'
import App from './App.vue'
// import TheHeader from './components/TheHeader.vue'
import BaseBadge from './components/BaseBadge.vue';


const app = createApp(App)

// app.component('the-header', TheHeader);
app.component('base-badge', BaseBadge);


app.mount('#app')
