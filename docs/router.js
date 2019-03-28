import Vue from 'vue';
import Router from 'vue-router';
import ProjectFeatures from './pages/test';
Vue.use(Router);

const routes = [{
  path: '/',
  name: 'features',
  component: ProjectFeatures,
}];

const router = new Router({ routes });

export default router;
