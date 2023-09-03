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
export default {
    components: {
        TheTitleBar,
        TheContentBlog
    },
    name: "BlogView",
}
</script>

<style></style>