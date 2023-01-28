<template>
  <footer class="footer">
    <div class="container">
      <ul class="navbar__list">
        <li class="navbar__item" v-for="link in links" :key="link.alias">
          <router-link class="navbar__link" :to="link.url">{{
            link.title
          }}</router-link>
        </li>
      </ul>
      <!-- link to course -->
      <ul class="navbar__list">
        <li class="navbar__item">
          <a
            href="https://tocode.ru/courses/vuejs-3-s-nulya-do-rezultata/"
            class="navbar__link"
            >Сделано на курсе "Vue.js 3 c нуля до результата"</a
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { links } from '@/_config';

export default {
  data() {
    return {
      links,
    };
  },
};
</script>
