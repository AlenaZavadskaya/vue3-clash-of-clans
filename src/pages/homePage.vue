<template>
  <carousel :settings="settings" :breakpoints="breakpoints">
    <slide class="card__wrapper" v-for="item in items" :key="item.id">
      <Card
        :title="`${item.lvl} lvl`"
        :name="item.title"
        :imgUrl="item.img"
        :link="`/${item.alias}`"
      >
        <template v-slot:body>{{ item.descr }}</template>
        <template v-slot:footer><CardStats :item="item" /></template>
      </Card>
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import items from '@/seeders/items.js';
import Card from '@/components/UI/CardUI.vue';
import CardStats from '@/components/CardStats.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
  components: {
    Card,
    CardStats,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      items,
      settings: {
        itemsToShow: 2,
        wrapAround: true,
        snapAlign: 'center',
      },
      breakpoints: {
        0: {
          itemsToShow: 1,
        },
        791: {
          itemsToShow: 2,
        },

      },
    };
  },
};
</script>
