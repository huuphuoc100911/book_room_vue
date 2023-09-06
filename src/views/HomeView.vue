<template>
  <div id="wrapper">
    <the-banner></the-banner>
    <the-category></the-category>
    <the-places></the-places>
    <the-reviews></the-reviews>
    <the-plans></the-plans>
    <the-blogs></the-blogs>
    <!-- Back To Top Button -->
    <div id="backtotop"><a href="#"></a></div>
  </div>
</template>

<script>
import TheBanner from '@/components/TheBanner.vue';
import TheCategory from '@/components/TheCategory.vue';
import ThePlaces from '@/components/ThePlaces.vue';
import TheReviews from '@/components/TheReviews.vue';
import ThePlans from '@/components/ThePlans.vue';
import TheBlogs from '@/components/TheBlogs.vue';
import { useStore } from 'vuex';

export default {
  name: "HomeView",
  components: {
    TheBanner,
    TheCategory,
    ThePlaces,
    TheReviews,
    ThePlans,
    TheBlogs
  },
  setup() {
    const store = useStore();
    store.dispatch("auth/loadUserLoginFromLocalStorageAction");
  }
};
</script>
