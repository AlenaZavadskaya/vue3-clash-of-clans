<template v-slot:footer>
  <div class="card__stats">
    <div
      v-for="(stat, index) in item.info"
      :key="index"
      class="card__one-third"
    >
      <div class="card__stat-value">{{ stat.value }}</div>
      <div class="card__stat">{{ stat.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    };
  },
};
</script>
