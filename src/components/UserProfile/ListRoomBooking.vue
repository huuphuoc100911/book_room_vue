<template>
    <div class="row">
        <!-- Listing Item -->
        <div class="col-lg-12 col-md-12">
            <div v-for="(room, index) in listTicketByUser" :key="index" class="listing-item-container list-layout">
                <a href="listings-single-page.html" class="listing-item">
                    <!-- Image -->
                    <div class="listing-item-image">
                        <img :src="room.image" alt="">
                        <span class="tag">Eat & Drink</span>
                    </div>
                    <!-- Content -->
                    <div class="listing-item-content">
                        <div class="listing-badge now-open">Now Open</div>
                        <div class="listing-item-inner">
                            <h3>{{ room.name }}</h3>
                            <span>964 School Street, New York</span>
                            <div class="star-rating" data-rating="3.5">
                                <div class="rating-counter" v-if="room.checkIn">{{ room.checkIn.slice(0, 10) }} -> {{
                                    room.checkOut.slice(0, 10) }}</div>
                            </div>
                        </div>

                        <span class="like-icon"></span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'
export default {
    name: "ListRoomBooking",
    setup() {
        const store = useStore();
        const listTicketByUser = computed(() => store.state.ticket.listTicketByUser);

        return {
            listTicketByUser
        }
    }
}
</script>

<style></style>