<template>
    <div id="wrapper">
        <!-- Titlebar -->
        <div id="titlebar" class="gradient">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="user-profile-titlebar">
                            <div class="user-profile-avatar"><img src="images/user-profile-avatar.jpg" alt=""></div>
                            <div class="user-profile-name">
                                <h2>{{ userLogin.user.name }}</h2>
                                <div class="star-rating" data-rating="5">
                                    <div class="rating-counter"><a>(60 reviews)</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Content -->
        <div class="container">
            <div class="row sticky-wrapper">
                <profile></profile>
                <div class="col-lg-8 col-md-8 padding-left-30">
                    <h3 class="margin-top-0 margin-bottom-40">{{ userLogin.user.name }}'s Listings</h3>
                    <list-room-booking></list-room-booking>
                </div>
            </div>
        </div>
        <!-- Back To Top Button -->
        <div id="backtotop"><a href="#"></a></div>
    </div>
</template>

<script>
import Profile from '@/components/UserProfile/Profile.vue'
import ListRoomBooking from '@/components/UserProfile/ListRoomBooking.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
export default {
    name: "UserProfile",
    components: {
        Profile,
        ListRoomBooking,
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        store.dispatch("ticket/getListTicketByUserAction", route.params.userId);
        const userLogin = computed(() => store.state.auth.userLogin);

        return {
            userLogin
        }
    }
}
</script>

<style></style>