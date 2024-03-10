import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'vuetify/styles'; // Assurez-vous que Vuetify est correctement importé
import { createVuetify } from 'vuetify'; // Importe la fonction pour créer une instance Vuetify

// Importe les composants et directives de Vuetify
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Crée une instance Vuetify en utilisant les composants et directives
const vuetify = createVuetify({
  components,
  directives,
});

// Crée l'application Vue et utilise Vuetify et le router Vue
const app = createApp(App);

app.use(router);
app.use(vuetify);

// Monte l'application Vue
app.mount('#app');
