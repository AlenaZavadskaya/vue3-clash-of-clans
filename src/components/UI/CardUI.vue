<template>
  <article class="card">
    <div v-if="imgUrl" class="card__img-wrapper">
      <img class="card__img" :src="imgUrl" :alt="title" />
    </div>
    <span class="card__name">{{ name }}</span>
    <span class="card__title">{{ title }}</span>
    <div class="card__body">
      <slot name="body"></slot>
      <router-link v-if="link" :to="link" class="link card__link"
        >See more</router-link
      >
    </div>
    <slot name="footer"></slot>
  </article>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
    },
    link: {
      String,
    },
  },
};
</script>
