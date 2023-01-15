<template>
  <div class="wapper">
    <Header />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/HeaderItem.vue';
import Footer from './components/FooterItem.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
