<template>
    <div id="wrapper">
        <the-title-bar></the-title-bar>
        <the-content-blog></the-content-blog>
        <!-- Back To Top Button -->
        <div id="backtotop"><a href="#"></a></div>
    </div>
</template>

<script>
import TheTitleBar from '@/components/TheTitleBar.vue';
import TheContentBlog from '@/components/TheContentBlog.vue';
import { useStore } from 'vuex';
export default {
    name: "BlogView",
    components: {
        TheTitleBar,
        TheContentBlog
    },
    setup() {
        const store = useStore();
        store.dispatch("auth/loadUserLoginFromLocalStorageAction");
    }
}
</script>

<style></style>