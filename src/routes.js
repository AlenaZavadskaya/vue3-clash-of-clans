import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import Item from './pages/_itemAlias';
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
      path: '/:itemAlias',
      name: 'itemAlias',
      component: Item,
    },
    {
      path: '/404',
      name: '404',
      component: NotFoundPage,
    },
  ],
});

export default routers;
