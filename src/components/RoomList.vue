<template>
    <section class="listings-container margin-top-30">
        <!-- Sorting / Layout Switcher -->
        <div class="row fs-switcher">
            <div class="col-md-6">
                <!-- Showing Results -->
                <p class="showing-results">{{ roomList.length }} Results Found </p>
            </div>
        </div>
        <!-- Listings -->
        <div class="row fs-listings" v-if="roomList.length > 0">
            <room-item v-for="(room, index) in roomList" :key="index" :room="room"></room-item>
        </div>
        <!-- Listings Container / End -->
        <!-- Pagination Container -->
        <div class="row fs-listings">
            <div class="col-md-12">
                <div class="copyrights margin-top-0">© 2021 Listeo. All Rights Reserved.</div>
            </div>
        </div>
        <!-- Pagination Container / End -->
    </section>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'
import RoomItem from './RoomItem.vue'
export default {
    components: {
        RoomItem
    },
    setup() {
        const store = useStore();
        const roomList = computed(() => store.state.rooms.roomList);

        return {
            roomList
        }
    }

}
</script>

<style></style>