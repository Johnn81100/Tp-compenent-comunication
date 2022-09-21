import { createApp } from 'vue'
import App from './App.vue'
import userData from './components/userData.vue'
import activeUser from './components/activeUser.vue'

const app = createApp(App);
app.component('user-data',userData);
app.component('active-user',activeUser);
app.mount('#app');
