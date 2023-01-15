import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';

import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import NotFoundPage from './pages/notFound';

const routerHistory = createWebHashHistory();

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: NotFoundPage,
    },
  ],
});

export default routers;
