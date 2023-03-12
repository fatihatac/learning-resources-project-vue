import { createApp } from 'vue';


import AppVue from './App.vue';
import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseDialog from './components/UI/BaseDialog.vue'

const app = createApp(AppVue)

app.component('base-card',BaseCard);
app.component('base-button',BaseButton);
app.component('base-dialog',BaseDialog);


app.mount('#app');


