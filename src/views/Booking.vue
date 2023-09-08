<template>
    <div id="wrapper">
        <!-- Titlebar -->
        <div id="titlebar">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2>Booking</h2>
                        <!-- Breadcrumbs -->
                        <nav id="breadcrumbs">
                            <ul>
                                <li>Home</li>
                                <li>Booking</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <!-- Content -->
        <!-- Container -->
        <div class="container">
            <div class="row">
                <!-- Content -->
                <div class="col-lg-8 col-md-8 padding-right-30">
                    <h3 class="margin-top-0 margin-bottom-30">Time</h3>
                    <div class="row">
                        <div class="col-md-6">
                            <label>Check in</label>
                            <input type="date" id="date-picker" v-model="timeCheck.checkIn">
                        </div>

                        <div class="col-md-6">
                            <label>Check out</label>
                            <input type="date" id="date-picker" v-model="timeCheck.checkOut">
                        </div>
                    </div>

                    <button @click="handleBooking" class="button booking-confirmation-btn margin-top-40 margin-bottom-65">
                        Book Room</button>
                </div>
                <!-- Sidebar -->
                <div class="col-lg-4 col-md-4 margin-top-0 margin-bottom-60">
                    <!-- Booking Summary -->
                    <div class="listing-item-container compact order-summary-widget">
                        <div class="listing-item">
                            <img :src="roomDetail.image" alt="">

                            <div class="listing-item-content">
                                <div class="numerical-rating" data-rating="5.0"></div>
                                <h3>{{ roomDetail.name }}</h3>
                                <span v-if="roomDetail.locationId">{{ roomDetail.locationId.province + ", " +
                                    roomDetail.locationId.country }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="boxed-widget opening-hours summary margin-top-0">
                        <h3><i class="fa fa-calendar-check-o"></i> Booking Summary</h3>
                        <ul>
                            <li>BathRoom <span>{{ roomDetail.bath }}</span></li>
                            <li>BedRoom <span>{{ roomDetail.bedRoom }}</span></li>
                            <li>Guests <span>{{ roomDetail.guests }} Adults</span></li>
                            <li class="total-costs">Total Cost <span>{{ roomDetail.price.toLocaleString('it-IT', {
                                style: 'currency',
                                currency: 'VND'
                            }) }}</span></li>
                        </ul>
                    </div>
                    <!-- Booking Summary / End -->
                </div>
            </div>
        </div>
        <!-- Container / End -->
        <!-- Back To Top Button -->
        <div id="backtotop"><a href="#"></a></div>
    </div>
</template>

<script>
import { computed, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
    name: "BookingView",
    setup() {
        const store = useStore();
        const route = useRoute();
        const router = useRouter();
        const timeCheck = reactive({
            checkIn: "",
            checkOut: ""
        })
        store.dispatch("rooms/getRoomDetailAction", route.params.roomId);
        store.dispatch("auth/loadUserLoginFromLocalStorageAction");
        const roomDetail = computed(() => store.state.rooms.roomDetail);
        const userLogin = computed(() => store.state.auth.userLogin).value.user;

        function handleBooking() {
            const data = {
                roomId: route.params.roomId,
                checkIn: timeCheck.checkIn,
                checkOut: timeCheck.checkOut,
            }
            store.dispatch("rooms/bookingRoomAction", { data, router, userLogin });
        }

        return {
            roomDetail,
            handleBooking,
            timeCheck,
            userLogin
        }
    }
}
</script>

<style></style>