import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router';

// import Vue from 'vue'
import Vuetify from 'vuetify'

import DashboardPage from './Views/Dashboard';
import TeamPage from './Views/Team';
import ProjectsPage from './Views/Projects';

Vue.use(Vuetify)
Vue.use(VueRouter)

Vue.config.productionTip = false

let router = new VueRouter({
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardPage,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsPage,
    },
    {
      path: '/team',
      name: 'Team',
      component: TeamPage,
    },
    { path: '*', redirect: '/dashboard'}
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
