<template>
  <div class="wrapper__person">
    <div v-if="item">
      <img :src="item.img" :alt="item.descr" />
      <h2 class="card__title">{{ item.title }}</h2>
      <p>{{ item.descr }}</p>
      <div class="card__stats card__stats-alias">
        <div v-for="(stat, index) in item.info" :key="index" class="card__one-third">
          <div class="card__stat-value">{{ stat.value }}</div>
          <div class="card__stat">{{ stat.title }}</div>
        </div>
      </div>
      <div>
        <router-link to="/" class="btn btnPrimary">back to home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import items from '@/seeders/items.js';

export default {
  data() {
    return {
      item: null,
    };
  },

  created() {
    const alias = this.$route.params.itemAlias;
    const item = items.find((el) => el.alias === alias);
    if (item === undefined) {
      return this.$router.push('/404');
    }
    this.item = item;
  },
};
</script>
